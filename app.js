(function () {
  const app = document.getElementById("app");
  const registry = window.ARG_REGISTRY;
  const pages = registry.pages;
  const sites = registry.sites;
  const extras = registry.extras;
  const navigationRoutes = new Set(Object.values(sites).flatMap((site) => [
    ...(site.navRoutes || []),
    ...(site.utilityNav?.route ? [site.utilityNav.route] : [])
  ]));
  const VISITED_KEY = "pingkang-arg-visited-v7";
  const LEGACY_VISITED_KEYS = ["pingkang-arg-visited-v1", "pingkang-arg-visited-v2", "pingkang-arg-visited-v3", "pingkang-arg-visited-v4", "pingkang-arg-visited-v5", "pingkang-arg-visited-v6"];
  const SOLVED_KEY = "pingkang-arg-solved-v6";
  const LEGACY_SOLVED_KEYS = ["pingkang-arg-solved-v1", "pingkang-arg-solved-v2", "pingkang-arg-solved-v3", "pingkang-arg-solved-v4", "pingkang-arg-solved-v5"];
  const RESET_KEY = "pingkang-arg-reset-v1";
  const INVESTIGATION_NOTES = {
    "p-03": "报道把22:14的网页状态当作实际送达，并采用了平康与施工方提供的时间。",
    "x-company-home": "平康已经停业，公开站仍保留订单查询和只读管理系统。",
    "p-01": "第27号订单没有“人工确认”印章，22:14只是系统预计时间。",
    "p-02": "公司称顾成礼带着十二只氧气瓶和11600元货款失联。",
    "p-04": "订单状态会随系统时间自动变化，不能证明客户实际签收。",
    "p-05": "旧订单只保存月日，所以每年重复变化；迁移后的后台只能读取。",
    "p-06": "负责人邵育梅，办公室电话尾号3186，开业月份为03。",
    "p-07": "顾师傅教王伯开阀时说“数到五再开”；煤球于2003-08-19来到平康。",
    "p-08": "第27号订单的临时地址是南埠旅社205，联系电话尾号6042。",
    "p-09": "住过205的“冬青叶”在病友网站留下了一篇受保护的帖子。",
    "x-health-dongqing": "冬青叶的个人资料只公开了一篇与南埠旅社停电有关的主题。",
    "p-10": {
      "open": "加密回复的验证问题引用了顾师傅教人开阀的固定说法。",
      "solved": "任冬青确认顾成礼到过205：八瓶用完，四瓶留在旅社。"
    },
    "p-11": "次日清晨的照片拍到205门旁四只氧气瓶和朝向楼内的发电机排气管。",
    "p-12": "诊所记录显示21:28已有送氧人员在南埠旅社处置九名不适者。",
    "p-13": "旅社公开否认事故，但21:40的旧评论称顾成礼已到205并留下四瓶。",
    "p-14": {
      "open": "后台账号与密码可以从平康公开的工商备案资料中推导。",
      "solved": "后台记录显示邵育梅21:37知道顾成礼已到南埠，21:41要求他返店。"
    },
    "p-15": "维护记录说明失踪后的共用账号发帖和姓名替换都由邵育梅操作。",
    "p-16": "宏汛公示把平康票据、黑肩瓶和编号0916的排水泵列在同一项目。",
    "p-17": "公开垮塌时间20:50与现场白板记录22:03互相矛盾。",
    "p-18": "目击帖显示顾成礼21:56仍在盐仓路，22:01还警告客车后退。",
    "p-19": "22:18的热线称车内有人敲门，现场挖掘机却正在吊泵。",
    "p-20": {
      "open": "设备查询需要项目代号与水泵编号。",
      "solved": "设备记录显示22:12至22:19先后吊走水泵和发电机。"
    },
    "p-21": {
      "open": "删帖引用要求按顺序填写设备记录中的两样东西。",
      "solved": "在场工人称车里的人要求先救人，但现场先吊泵和发电机。"
    },
    "p-22": "事故后一周，八名夜班工人的欠薪被结清，并出现“项目保密补助”。",
    "p-23": "各方在22:03至22:28之间多次通话，现场并非无法求援。",
    "p-24": "车内11600元货款完整，八只空瓶与旅社留下的四瓶正好组成十二瓶。",
    "p-25": {
      "open": "记者的私人补稿使用南埠新港广告投放编号作为口令。",
      "solved": "编辑因宏汛广告合同压下补稿，媒体早已知道原报道存在矛盾。"
    },
    "p-26": {
      "open": "私人相册使用煤球来到平康的日期作为密码。",
      "solved": "顾小满保存着父亲22:23打来的17秒未接电话和历年域名续费单。"
    },
    "p-27": {
      "open": "最终留言使用第27号订单联系电话后四位验证身份。",
      "solved": "23:31的未读留言确认顾成礼完成送氧；全部证据可以还原他被留在水中的经过。"
    }
  };

  const loadArray = (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  };

  const restoredVisits = loadArray(VISITED_KEY).filter((item) => typeof item === "string");

  const state = {
    visited: new Set(restoredVisits),
    solved: new Set(loadArray(SOLVED_KEY)),
    resetArmed: false
  };

  const saveState = () => {
    localStorage.setItem(VISITED_KEY, JSON.stringify([...state.visited]));
    localStorage.setItem(SOLVED_KEY, JSON.stringify([...state.solved]));
  };

  const pad = (value) => String(value).padStart(2, "0");

  function routeRecord(route) {
    const clueMatch = String(route || "").match(/^p-(\d{2})$/);
    if (clueMatch) {
      const id = Number(clueMatch[1]);
      return pages[id] ? { ...pages[id], id, route, type: "clue", label: pad(id) } : null;
    }

    if (extras[route]) return { ...extras[route], type: "extra" };

    const catalogMatch = String(route || "").match(/^c-([a-z]+)$/);
    if (catalogMatch && sites[catalogMatch[1]]) {
      const site = sites[catalogMatch[1]];
      return {
        type: "catalog",
        route,
        site: catalogMatch[1],
        label: "目录",
        title: `${site.name} · 栏目文章`,
        date: "站内文章索引",
        author: "栏目编辑",
        address: site.catalogAddress,
        lead: "本页汇集本站仍可读取的文章、公告、帖子与历史存档，标题按页面编号和栏目顺序保留。"
      };
    }
    return null;
  }

  function requirementsMet(requirements) {
    if (!requirements) return true;
    const requiredLocks = Array.isArray(requirements) ? requirements : [requirements];
    return requiredLocks.every((lockId) => state.solved.has(lockId));
  }

  function recordAvailable(record) {
    if (!record) return false;
    return requirementsMet(sites[record.site]?.requires) && requirementsMet(record.requires);
  }

  function routeAvailable(route) {
    return route === "intro" || recordAvailable(routeRecord(route));
  }

  function parseRoute() {
    const hash = location.hash.replace(/^#/, "");
    if (!hash || hash === "intro") return { type: "intro" };
    const record = routeRecord(hash);
    if (recordAvailable(record)) return { type: "content", route: hash, record };
    history.replaceState(null, "", `${location.pathname}${location.search}#intro`);
    return { type: "intro" };
  }

  function routeTitle(route) {
    const target = routeRecord(route);
    return target ? target.title : "页面已迁移";
  }

  function escapeAttribute(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[character]));
  }

  function counts() {
    let clue = 0;
    let extra = 0;
    state.visited.forEach((route) => {
      if (/^p-\d{2}$/.test(route)) clue += 1;
      else if (extras[route]) extra += 1;
    });
    return { clue, extra };
  }

  function linkMarkup(label, route, className) {
    if (!routeAvailable(route)) return "";
    return `<a${className ? ` class="${className}"` : ""} href="#${route}" data-route="${route}">${label}</a>`;
  }

  function investigationNote(record) {
    const note = INVESTIGATION_NOTES[record.route];
    if (!note) return "";
    if (typeof note === "string") return note;
    if (record.lock && state.solved.has(record.lock.id)) return note.solved || note.open || "";
    return note.open || "";
  }

  function visitedDrawerMarkup(currentRoute) {
    const grouped = {};
    state.visited.forEach((route) => {
      const record = routeRecord(route);
      if (!record) return;
      if (!grouped[record.site]) grouped[record.site] = [];
      grouped[record.site].push(record);
    });

    const groups = Object.keys(sites).map((siteKey) => {
      const records = grouped[siteKey] || [];
      if (!records.length) return "";
      const rank = { clue: 0, extra: 1, catalog: 2 };
      records.sort((a, b) => (rank[a.type] - rank[b.type]) || String(a.label).localeCompare(String(b.label), "zh-CN"));
      return `
        <section class="visited-group">
          <h3>${sites[siteKey].name}</h3>
          <ul>${records.map((record) => {
            const note = investigationNote(record);
            return `<li>
              ${linkMarkup(`${record.label} · ${record.title}`, record.route, record.route === currentRoute ? "is-current" : "")}
              ${note ? `<p class="visited-note">${note}</p>` : ""}
            </li>`;
          }).join("")}</ul>
        </section>`;
    }).join("");

    return `
      <div class="drawer-backdrop" data-action="close-visits" hidden></div>
      <aside class="visited-drawer" id="visited-drawer" aria-label="调查笔记" aria-hidden="true" hidden>
        <header>
          <div><strong>调查笔记</strong><span>只整理已经访问或验证的内容</span></div>
          <button type="button" class="drawer-close" data-action="close-visits" aria-label="关闭">×</button>
        </header>
        <div class="visited-scroll">
          ${groups || "<p class=\"empty-visits\">打开旧闻后，确认过的内容会记录在这里。</p>"}
        </div>
      </aside>`;
  }

  function archiveBarMarkup(address, currentRoute) {
    const total = counts();
    return `
      <header class="archive-bar">
        <div class="archive-address">${address}</div>
        <div class="archive-progress">主线页 ${total.clue} / 27 · 附页 ${total.extra}</div>
        <button class="archive-tool" type="button" data-action="open-visits">调查笔记</button>
        <button class="archive-home" type="button" data-action="reset">清空存档并回到首页</button>
      </header>
      ${visitedDrawerMarkup(currentRoute)}`;
  }

  function renderIntro() {
    const total = counts();
    const latest = [...state.visited].reverse().find((route) => {
      const record = routeRecord(route);
      return record && record.layout !== "admin";
    });
    document.title = "顾成礼携款失联｜澜川旧闻存档";
    app.innerHTML = `
      <main class="intro-screen">
        <section class="intro-shell">
          <p class="intro-subtitle">LANCHUAN OLD NEWS ARCHIVE / JULY 2004</p>
          <h1 class="intro-heading">第27号订单失踪案</h1>
          <p class="intro-subtitle">订单从未签收，送货的人也没有回来。</p>
          <div class="intro-grid">
            <div class="intro-copy">
              <p>2004年7月17日，澜川暴雨。</p> <p>平康家用氧服务部的一名配送员，在送完当天第27号订单后失踪。与他一同消失的，还有一辆白色面包车、十二只氧气瓶，以及公司当天收取的一万余元货款。</p> <p>警方认为他携款离开。地方新闻说，他早已有了逃走的打算。</p> <p>一年后，平康停业。</p> <p>但那张订单没有结束。</p> <p>每年7月17日，早已无人维护的网站都会自动更新：</p> <p><strong>订单编号：P040717-27<br> 状态：配送中<br> 预计送达：22:25</strong></p> <p>它没有签收记录。</p> <p>没有人工确认。</p> <p>只有一个本该被删除的配送员姓名，在不同版本的网页里反复出现。</p> <p>今年，第27号订单又开始配送了。</p> <p>在它显示“预计已送达”之前，找到那个失踪的人。</p>
              <button class="intro-enter" type="button" data-route="${latest || "p-03"}">${latest ? "继续上次调查" : "查看旧闻"}</button>
              ${latest ? `<button class="intro-secondary" type="button" data-route="p-03">从旧闻重新调查</button>` : ""}
            </div>
            <aside class="intro-notice">
              <h2>调查状态</h2>
              <p>已访问主线页：${total.clue} / 27</p>
              <p>已访问普通附页：${total.extra}</p>
              <p>可读取年代：2003—2009</p>
              <p>介质：地方门户、商户官网、论坛、相册、广播站与公共信息页</p>
            </aside>
          </div>
        </section>
      </main>`;
  }

  function renderLock(page) {
    if (!page.lock) return "";
    const lock = page.lock;
    if (state.solved.has(lock.id)) {
      return `<section class="unlocked"><p><span class="stamp">验证通过</span></p>${lock.success}</section>`;
    }

    const fields = lock.fields.map((field) => `
      <label>${field.label}
        <input
          name="${field.name}"
          type="${field.type || "text"}"
          placeholder="${field.placeholder || ""}"
          autocomplete="${field.autocomplete || "off"}"
          required
        >
      </label>`).join("");

    return `
      <section class="lock-panel">
        <h2>${lock.title}</h2>
        <p class="lock-hint">${lock.hint}</p>
        <form class="lock-form" data-lock="${lock.id}" data-page="${page.id}">
          <div class="lock-fields">
            ${fields}
            <div><button class="command-button" type="submit">确认</button></div>
          </div>
          <p class="lock-error" role="alert"></p>
        </form>
      </section>`;
  }

  function renderNavigation(siteKey) {
    const site = sites[siteKey];
    const primary = site.nav.map((label, index) => linkMarkup(label, site.navRoutes[index] || site.homeRoute));
    primary.push(linkMarkup("栏目文章", `c-${siteKey}`));
    return primary.join("");
  }

  function renderUtilityNavigation(site) {
    if (!site.utilityNav?.route || !routeAvailable(site.utilityNav.route)) return "";
    return `<a class="site-utility-link" href="#${site.utilityNav.route}" data-popup-route="${site.utilityNav.route}" target="_blank" rel="noopener">${site.utilityNav.label}</a>`;
  }

  function mediaDestination(page) {
    if (Object.prototype.hasOwnProperty.call(page, "mediaRoute")) {
      return page.mediaRoute && routeAvailable(page.mediaRoute) ? page.mediaRoute : null;
    }
    if (page.next?.route && routeAvailable(page.next.route)) return page.next.route;
    const linkedSide = (page.side || []).find((item) => item.route && routeAvailable(item.route));
    return linkedSide?.route || (routeAvailable(sites[page.site].homeRoute) ? sites[page.site].homeRoute : null);
  }

  function mediaMarkup(page) {
    if (!page.image) return "";
    const imageKey = page.imageKey || page.route;
    const frame = `
      <div class="image-placeholder" data-image-key="${escapeAttribute(imageKey)}">
        <img class="optional-page-image" alt="${escapeAttribute(page.imageAlt || page.title)}" hidden>
        <div class="image-fallback"><strong>【图片预留】</strong>${page.image}</div>
      </div>`;
    return `<div class="media-static">${frame}</div>`;
  }

  function hydrateOptionalImages() {
    const extensions = ["jpg", "jpeg", "png", "webp", "avif"];
    document.querySelectorAll("[data-image-key]").forEach((frame) => {
      const image = frame.querySelector(".optional-page-image");
      const fallback = frame.querySelector(".image-fallback");
      if (!image || !fallback) return;

      let extensionIndex = 0;
      image.onload = () => {
        image.hidden = false;
        fallback.hidden = true;
        frame.classList.add("has-image");
      };
      image.onerror = () => {
        if (extensionIndex >= extensions.length) {
          image.removeAttribute("src");
          return;
        }
        const extension = extensions[extensionIndex++];
        image.src = `assets/images/${encodeURIComponent(frame.dataset.imageKey)}.${extension}`;
      };
      image.onerror();
    });
  }

  function renderInteractions(page) {
    if (page.type === "catalog" || navigationRoutes.has(page.route) || !page.comments?.length) return "";
    const items = page.comments.map((comment, index) => {
      const quoted = comment.quote ? `<blockquote class="comment-quote">${comment.quote}</blockquote>` : "";
      const status = comment.status ? `<span class="comment-status">${comment.status}</span>` : "";
      return `
        <li class="comment-item">
          <div class="comment-author">
            <span class="comment-avatar" aria-hidden="true">${comment.name.slice(0, 1)}</span>
            <strong>${comment.name}</strong>
            <span>${comment.role || "注册用户"}</span>
          </div>
          <div class="comment-body">
            <div class="comment-meta"><span>${comment.date}</span><span>#${index + 1}</span></div>
            ${quoted}
            <p>${comment.message}</p>
            <div class="comment-actions"><span>回复</span><span>引用</span>${status}</div>
          </div>
        </li>`;
    }).join("");

    return `
      <section class="legacy-interactions">
        <h2>${page.commentsTitle || "文章留言"}<span>（${page.comments.length} 条存档）</span></h2>
        <ol>${items}</ol>
      </section>`;
  }

  function catalogRequirementMet(record) {
    return recordAvailable(record) && requirementsMet(record.catalogRequires);
  }

  function renderCatalog(siteKey) {
    const records = [];
    Object.entries(pages).forEach(([id, page]) => {
      const route = `p-${pad(id)}`;
      if (page.site === siteKey && !page.catalogHidden && !navigationRoutes.has(route) && catalogRequirementMet(page)) {
        records.push({ ...page, id: Number(id), route, label: pad(id), type: "clue" });
      }
    });
    Object.entries(extras).forEach(([route, page]) => {
      if (page.site === siteKey && !page.catalogHidden && !navigationRoutes.has(route) && catalogRequirementMet(page)) {
        records.push({ ...page, route, type: "extra" });
      }
    });
    records.sort((a, b) => {
      if ((a.catalogPriority || 0) !== (b.catalogPriority || 0)) return (b.catalogPriority || 0) - (a.catalogPriority || 0);
      if (a.type !== b.type) return a.type === "extra" ? -1 : 1;
      return String(a.label).localeCompare(String(b.label), "zh-CN");
    });

    return `
      <div class="catalog-summary">
        <strong>共保留 ${records.length} 篇页面</strong>
        <span>导航直达页与功能页面不列入本目录</span>
      </div>
      <div class="catalog-list">${records.map((record) => `
        <article class="catalog-card">
          ${linkMarkup(`<span class="catalog-number">${record.label}</span><strong>${record.title}</strong>`, record.route)}
          <p>${record.lead}</p>
          <div><span>${record.date}</span><span>${record.author}</span></div>
        </article>`).join("")}</div>`;
  }

  function renderAdminModules(page) {
    if (page.id !== 14 || !state.solved.has("lock-14")) return "";
    const maintenance = state.solved.has("lock-10")
      ? `<a href="#p-15" data-route="p-15"><strong>网站维护记录</strong><span>查看页面修改与迁移工单</span></a>`
      : "";
    const oldMessage = state.solved.has("lock-26")
      ? `<a href="#p-27" data-route="p-27"><strong>第27号订单旧留言</strong><span>联系人验证后读取迁移留言</span></a>`
      : "";
    return `
      <section class="admin-modules">
        <h2>只读模块</h2>
        <div>
          <a href="#p-08" data-route="p-08"><strong>第27号订单原始预约单</strong><span>核对提交时保留的地址与商户资料</span></a>
          ${maintenance}
          ${oldMessage}
        </div>
      </section>`;
  }

  function renderAdminPage(route, page) {
    const isOrderArchive = page.id === 27;
    app.innerHTML = `
      <main class="admin-screen">
        <section class="admin-window">
          <header class="admin-titlebar">
            <div>
              <span class="admin-mark">PK</span>
              <div><strong>平康业务管理系统</strong><small>Pingkang Service Manager 2.1</small></div>
            </div>
            <span class="admin-readonly">只读存档</span>
          </header>
          <nav class="admin-tabs" aria-label="后台栏目">
            <span class="${isOrderArchive ? "" : "is-active"}">管理员登录</span>
            <span class="${isOrderArchive ? "is-active" : ""}">订单记录</span>
            <span>客户资料</span>
            <span>系统日志</span>
          </nav>
          <div class="admin-content">
            <div class="admin-location">系统位置：业务管理 / ${isOrderArchive ? "订单留言归档" : "身份验证"}</div>
            <h1>${page.title.replace("｜只读存档", "")}</h1>
            <p class="admin-lead">${page.lead}</p>
            <div class="admin-login-copy">${page.html}</div>
            ${renderLock(page)}
            ${renderAdminModules(page)}
          </div>
          <footer class="admin-footer">
            <span>数据库连接：历史副本 / 修改权限：关闭</span>
            ${linkMarkup("返回平康公开网站", sites.company.homeRoute)}
          </footer>
        </section>
      </main>
      ${renderInvestigationConclusion(page)}`;
    concealUnavailableLinks();
  }

  function renderDiaryPage(page) {
    app.innerHTML = `
      <main class="diary-screen">
        <header class="diary-header">
          <a href="#p-27" data-route="p-27">返回调查卷宗</a>
          <h1>${page.title}</h1>
          ${page.lead ? `<p>${page.lead}</p>` : ""}
        </header>
        <article class="diary-page-content" aria-label="老顾的日记正文">${page.html || ""}</article>
      </main>`;
    concealUnavailableLinks();
  }

  function renderInvestigationConclusion(page) {
    if (page.id !== 27 || !state.solved.has("lock-27")) return "";
    return `
      <section class="investigation-conclusion" aria-label="调查结论">
        <header><span>调查卷宗 / 已完成</span><h2>盐仓路事件</h2></header>
        <div>
          <p>顾成礼完成了第27号订单，救下南埠旅社九名住客，又警告一辆载有十七人的客车倒退。车内货款完整，他没有携款逃走。</p>
          <p>22时03分至22时25分，他一直有获救机会。邵育梅为了平康与黑肩瓶选择内部处理；贺建明为了设备、工程款和双方账目，先吊水泵与发电机；工人受欠薪与责任风险约束；路人因现场已有施工人员而以为救援已被接管；门户又因宏汛广告压下补稿。</p>
          <p>顾小满只知道父亲没有偷钱。22时23分顾成礼拨给女儿时，水泵和发电机已经先后被吊走。</p>
          <p class="conclusion-line">他不是被一个人杀死的。他是被所有人的权衡留在了水里。</p>
          <p></p>
          <p>1999年，澜川制氧厂改制。四十三岁的顾成礼和旧同事邵育梅先后下岗。</p>
  <p>顾成礼的妻子曾因肺病长期住院，后来病逝。照护妻子的经历让他熟悉家用氧气瓶，也使他形成一句习惯性的提醒：</p>
  <p>“阀门别猛拧，数到五再开。”</p>
  <p>面对紧张的患者，他会陪着一起数。</p>
  <p>2002年3月，邵育梅借钱开办“平康家用氧服务部”。她负责接单、进货和收款，顾成礼驾驶一辆尾号E4186的二手面包车，为行动不便的慢性病患者送氧。</p>
  <p>顾成礼的女儿顾小满二十岁，在服装厂做锁边工。父女之间并不擅长表达感情。顾小满嫌父亲讲话慢、总替她作决定；顾成礼不会解释自己的关心，只会替她补自行车胎、在锅里留饭，或者发短信提醒“手疼就停五分钟”。</p>
  <p>服务部门口养着一条黑狗，名叫煤球。它原本属于一位独居患者，患者去世后，顾成礼把它带回平康。煤球出现在公司宣传照、宠物领养页、顾小满的私人相册和停业后的空店照片中，成为多个网站之间一条不起眼的联系。</p>
  <p>平康官网还有一篇普通的客户故事：顾成礼送完氧后，顺手替一位老人修好收音机，没有收钱。文章末尾挂着老人常听的“澜川夜航网络电台”广告。这个看似无用的广告，后来会将玩家带到事故当晚的目击记录。</p>
  <p>2003年，电脑维修店老板程隽为平康制作网站。患者可以预约送氧、查询订单、查看处理记录和留言催单。</p>
  <p>订单状态并非实时人工更新。网页根据“预计出发时间”和“预计完成时间”自动显示“已受理”“配送中”“预计已送达”。真正签收后，工作人员才会添加红色的“人工确认”印章。</p>
  <p>公开订单记录没有年份。旧订单本应在完成后定期清除，但公司停业时无人继续维护，因此每年相同日期，遗留订单都会重新经历一次状态变化。</p>
  <p>平康在行业论坛使用的账号“平康顾师傅”也不是顾成礼的私人账号。密码写在办公室电话旁，邵育梅、顾成礼和临时店员都可以使用。</p>
  <p>这些机制后来制造出三个看似诡异的现象：</p>
  <ul>
    <li>停业公司仍然每年配送同一张订单；</li>
    <li>顾成礼失踪后，“平康顾师傅”仍然发帖；</li>
    <li>被删除的顾成礼姓名在不同版本页面中反复出现。</li>
  </ul>
  <p>这些现象都有现实解释，却也帮助邵育梅把自己的行为藏进了网站机制之中。</p>
  <p>平康长期经营困难。为了压低成本，邵育梅接受了宏汛路桥项目负责人贺建明的帮助。</p>
  <p>宏汛从工业气体供应商处取得氧气瓶，再以“工地急救备用”的名义将部分瓶子交给平康周转。平康则替宏汛开具“职工急救供氧”票据，让宏汛能够把一些手续不完整的气体费用计入安全支出。</p>
  <p>其中四只氧气瓶没有完整的医用检验手续。瓶肩原本漆成黑色，外层又被覆盖成平康使用的蓝色。氧气本身没有造成患者伤害，问题在于检验、运输和票据均不合规。</p>
  <p>两家公司没有签署正式合作协议。邵育梅依靠这些便宜的周转瓶维持价格，贺建明依靠平康的票据平衡工程账目。双方不是传统意义上的共谋组织，却因长期互相帮忙而形成了不能公开的利益捆绑。</p>
  <p>2004年，宏汛承接南埠货场扩建工程。</p>
  <p>施工方为了防止雨水进入基坑，用混凝土板和砂袋封窄盐仓路旧排洪涵洞。司机曾在车友论坛反映这一带积水速度异常，但贺建明认为工程可以撑过雨季，没有停工。</p>
  <p>同年夏天，东柳巷开始拆迁。慢性肺病患者任素娥和女儿任冬青暂住南埠旅社205室。</p>
  <p>7月17日8时06分，任冬青在平康网站提交订单P040717-27。网页仍保留旧住址“东柳巷17号”，她便在备注中写：</p>
  <p>“临时住南埠旅社205，桥南封路，请从盐仓路进。”</p>
  <p>网站保存了完整备注，但打印小票只能显示前半句。顾成礼看见了“临时住南埠旅社205”，没有看见后面的封路提醒。</p>
  <p>当天早晨，顾成礼和顾小满刚吵过一架。</p>
  <p>顾小满因长期操作缝纫机导致手腕发炎，想辞职。顾成礼只说：“再熬几天，我把预支的钱拿回来。”</p>
  <p>顾小满以为父亲又在替她作决定，摔门去了工厂。实际上，顾成礼预支的八百元准备用来替她买护腕和一台二手家用缝纫机。后来，地方新闻把这八百元写成“因家中急需现金，早有离开迹象”。</p>
  <p>当天下午，顾成礼的车上装有十二瓶氧气，其中包括宏汛提供的四只黑肩周转瓶。车里还有公司前一天收取的11600元货款。他准备配送后去信用社存款，但信用社因暴雨提前关门，钱便一直锁在驾驶座下的铁盒里。</p>
  <p>18时42分，他给顾小满发了一条短信：</p>
  <p>“雨大，别来接。锅里有粥，煤球别喂咸的。送完27号就回。”</p>
  <p>傍晚停电后，南埠旅社老板范桂珍担心柴油发电机淋雨，把机器搬进后洗衣间。排风口紧邻二楼回风道。20时以后，包括任素娥在内的九名住客陆续出现头痛、呕吐和呼吸困难。</p>
  <p>20时26分，任冬青使用旅社尾号6042的座机打到平康。邵育梅将第27号订单改为优先配送，并记录“改送南埠205”。</p>
  <p>21时12分，顾成礼抵达旅社。</p>
  <p>他关掉发电机、打开窗户，将住客转移到前廊。他把八瓶氧气轮流给九个人使用，并陪一个不停哭的孩子数到五，再慢慢打开阀门。</p>
  <p>21时28分，沿河社区诊所接到求助。值班摘要将事件记录为：</p>
  <p>“疑似一氧化碳吸入，现场已有送氧人员处置。”</p>
  <p>顾成礼留下四瓶未开启的氧气，把八个空瓶搬回车上，没有收取订单费用。八个空瓶中正好包括宏汛提供的四只黑肩瓶。</p>
  <p>搬最后一瓶时，顾成礼自己也因吸入废气而头晕，扶了一下墙，却只说车里透气，回去就好了。</p>
  <p>21时37分，他使用旅社电话联系邵育梅。</p>
  <p>邵育梅担心车上的11600元货款，也担心四只违规周转瓶滞留在外。她依据施工公告中“22时30分封路”的时间，要求顾成礼立即从盐仓路返回。</p>
  <p>顾成礼知道那些瓶子的手续有问题，却没有反对。平康是他和邵育梅下岗后勉强维持的生活来源，他不愿因为几只空瓶让公司被查。</p>
  <p>邵育梅在订单记录中写下：</p>
  <p>“返店，带回空瓶8。”</p>
  <p>21时49分，顾成礼离开旅社。他没有穿走自己的旧雨衣，而是把雨衣披在那名仍在发冷的孩子身上。</p>
  <p>21时56分，货车司机罗大川拍到尾号E4186的平康面包车驶向盐仓路。</p>
  <p>22时01分，一辆载有十七名乘客的县际客车接近低洼路段。客车司机后来回忆，氧气车突然斜停到路边，连续切换远近光并鸣笛。他停车后才看见前方路面正在下沉，立即倒车。</p>
  <p>顾成礼也开始倒车，但面包车右后轮陷入被水掏空的路肩。</p>
  <p>22时03分，临时挡水结构局部垮塌。车辆滑进旧涵洞旁的沉淀槽，车头被混凝土板卡住，车尾仍露在水面上。</p>
  <p>顾成礼没有严重外伤，车厢后部也尚未进水。后来进行的车辆复盘认为，如果此时用挖掘机稳定车尾，再放下一根安全绳，他有很大机会自行爬出。</p>
  <p>22时06分，顾成礼成功拨通平康办公室。通话持续五十八秒。</p>
  <p>他说：</p>
  <p>“车卡在旧涵洞下面，人没伤着，水还没进后面。找贺工把挖机叫来。先别报消防，车上那几个借瓶说不清。”</p>
  <p>这是车内唯一一次成功联系外界。</p>
  <p>顾成礼没有选择直接报警。一方面，他认为施工人员就在附近，挖掘机比消防更快；另一方面，他仍在保护平康和邵育梅。他把眼前的处境判断成一次能够内部处理的陷车事故。</p>
  <p>22时08分，邵育梅联系施工现场。她除了说明顾成礼被困，还提醒贺建明：</p>
  <p>“车里有你那四只黑肩瓶，别让消防先看见。”</p>
  <p>这句话被负责接听夜班电话的工人吴川听见。</p>
  <p>22时10分，贺建明和吴川赶到涵洞边。他们看见露在水面上的车尾、闪烁的双跳灯，也听见顾成礼在车内敲击后门。</p>
  <p>吴川提出先放安全绳，把顾成礼拉上来。坡面虽然湿滑，但此时尚未继续移动。后来事故复盘认为，这是风险最低、成功率最高的救援时机。</p>
  <p>贺建明没有同意。</p>
  <p>夜班工人已经撤到高处。仍在低处的是一台进口水泵、一台柴油发电机和两箱电缆。宏汛拖欠工人三个月工资，贺建明对他们说：</p>
  <p>“泵一泡，这个月谁也拿不到钱。”</p>
  <p>水泵和发电机价值近九万元，关系到工程能否按期复工，也关系到贺建明能否拿到下一阶段工程款。面包车里的顾成礼看起来没有受伤，还能敲门。</p>
  <p>贺建明决定先吊设备，再救人。</p>
  <p>工人服从了。有人怕拿不到工资；有人觉得顾成礼还能再等；有人不愿在没有夜班登记和工伤保障的情况下下到泥坡，承担成为第二名伤者的风险。</p>
  <p>他们没有把自己理解成见死不救。他们只是把顾成礼排在了设备后面。</p>
  <p>22时12分，挖掘机开始吊水泵。</p>
  <p>顾成礼最初规律地敲三下后门，停一会，再敲三下。他能够听见挖掘机发动和吊链拖过地面的声音，以为机器正在靠近自己。</p>
  <p>22时15分，水泵被吊到高处。</p>
  <p>22时16分，挖掘机转去吊发电机。吴川再次提出放绳。贺建明回答：</p>
  <p>“发电机进水，我们都得滚。车里的人还能敲，再等几分钟。”</p>
  <p>22时18分，已经退到高处的客车司机打进“澜川夜航网络电台”交通热线。他报告盐仓路有一辆白色面包车陷住，又补充说工地人员和挖掘机已经在现场。</p>
  <p>主持人将它作为道路封闭消息播出，没有报警。其他路过司机也看见施工人员与挖掘机，默认救援已经开始。</p>
  <p>22时19分，发电机被吊起。</p>
  <p>吴川听见顾成礼在车内喊：</p>
  <p>“先拉人，瓶不要了，车也不要了。”</p>
  <p>这句话表明顾成礼已经意识到，外面的机器不是来救他的。</p>
  <p>吴川第三次要求放绳。两名工友却拉住他，提醒他夜班没有登记，如果滑下去受伤，宏汛不会认工伤。</p>
  <p>贺建明此时也开始考虑另一层风险：如果立即救出顾成礼，消防、医院和警方很可能询问车辆为何进入施工道路，也可能检查四只黑肩瓶，暴露宏汛与平康之间的票据关系。</p>
  <p>他决定不用人下坡，改用挖掘机和长吊带救车。</p>
  <p>操作员看见车身上的氧气标识，不敢直接用铲斗推拉，要求寻找长吊带，以免挤压气瓶。贺建明没有告诉他车上的八个瓶子都已经用空。</p>
  <p>22时21分，邵育梅再次打到施工现场。贺建明没有告诉她顾成礼刚才喊过什么，只说：</p>
  <p>“泵已经上来了，三分钟拖车。你别再打电话，线占着。”</p>
  <p>邵育梅仍没有报警。</p>
  <p>此时报警便等于承认，自己此前选择了内部处理，也可能使平康因违规氧气瓶立即停业。她只能继续相信“再等三分钟”。</p>
  <p>22时23分，顾成礼拨打顾小满的手机。电话在服装厂更衣柜里响了十七秒，无人接听。这是他被困后唯一一次拨给女儿的电话。</p>
  <p>22时24分，长吊带被找到。挖掘机开始转向面包车。顾成礼的敲击已经从规律的三下变成连续撞击。</p>
  <p>22时25分，第二股水流冲垮剩余挡板。混凝土板旋转下沉，将车尾推入涵洞侧槽。</p>
  <p>双跳灯熄灭，敲击停止。</p>
  <p>22时28分，贺建明才拨打119。他只说“一辆氧气配送车滑进涵洞，驾驶员情况不清楚”，没有承认施工人员曾与车内的顾成礼交流。</p>
  <p>消防于22时43分到达。车辆已被泥水覆盖。贺建明告诉救援人员，司机可能在车辆下沉前自行爬出，面包车也可能被冲向下游。搜索因此集中在河道。</p>
  <p>实际上，车辆被一块倾斜的混凝土板压在沉淀槽侧面，并未进入下游。</p>
  <p>次日，宏汛以“防止二次垮塌”为由回填涵洞入口，进一步掩埋了车辆与真相。</p>
  <p>事故后，贺建明把初次垮塌时间从22时03分改成20时50分，将设备吊装记录中的“水泵、发电机”改成“协助人员撤离”。</p>
  <p>八名夜班工人在一周内领到了拖欠三个月的工资。付款备注中出现了“项目保密补助”。所有人都在统一情况说明上签字，声称没有看见驾驶员，也没有听见车内呼救。</p>
  <p>吴川也签了字。他的父亲正在住院，拖欠工资决定了家里能否继续治疗。</p>
  <p>邵育梅把第27号订单地址恢复成东柳巷17号，把配送员改成“客户自取”，删除“返店，带回空瓶8”。</p>
  <p>随后，她使用共享账号“平康顾师傅”在行业论坛发布：</p>
  <p>“本人因私离岗，订单与公司无关。”</p>
  <p>她知道顾成礼最后出现在哪里，却向警方提供了“可能携款离开”的说法。这既能保护平康，也能掩盖她没有立即报警的决定。</p>
  <p>南埠旅社老板范桂珍也隐瞒了室内发电机和未登记住客。她把当晚住宿人数从九人改成三人，对记者否认送氧车辆曾经到达。</p>
  <p>地方门户“澜川生活线”最终刊出《氧气配送员携款失联》，把顾成礼写成因女儿治病缺钱而逃跑的人。</p>
  <p>记者何频后来找到任冬青，开始怀疑原报道。他写了一篇补稿，指出顾成礼确实到过南埠旅社，也在21时37分接受了邵育梅的返程要求。</p>
  <p>但宏汛参与建设的南埠新港商贸城，是“澜川生活线”当时最大的广告客户。编辑严铎没有要求何频伪造内容，只对他说：</p>
  <p>“旧案没有新结果，不值得换掉半年广告。”</p>
  <p>补稿没有刊出，原新闻继续存在。</p>
  <p>2005年，平康关闭。停业公告继续沿用“配送员携款失联”的说法。邵育梅要求程隽把网站中的“顾成礼”统一替换成“离职配送员”。</p>
  <p>同年，吴川在建筑工人讨薪论坛匿名发帖：</p>
  <p>“那晚不是没有绳。机器就在旁边。我们先吊了泵，又吊了发电机。里面的人喊先拉人。后来敲门声停了，工资第二天就说能发。”</p>
  <p>帖子十分钟后被删除，但另一名工人在回复中完整引用了原文。帖子没有写出城市和工程名称，只留下“黑肩瓶”“三下敲门”和“九万元的泵”等细节。</p>
  <p>2006年，平康域名即将到期。邵育梅把网站和域名交给顾小满，抵作拖欠顾成礼的一部分工资。</p>
  <p>顾小满每年给程隽汇六十元续费，备注始终写：</p>
  <p>“旧页别动。”</p>
  <p>2007年网站迁移后，第27号订单开始每年重复变化。管理员登录被改成只读状态，旧账号仍能登录，却不能修改资料；原本无人阅读的订单留言只保留在后台订单归档中。</p>
  <p>2008年，盐仓路重新开挖。施工人员在旧沉淀槽中发现顾成礼与面包车。</p>
  <p>车内11600元货款完整，八个空瓶与南埠旅社留下的四瓶正好对应十二瓶。四个空瓶的蓝漆下还能看见黑色瓶肩。</p>
  <p>驾驶座下的铁盒被重新扣好，里面有货款、信用社存款单和一张写着“顾小满”的二手缝纫机订金收据。后门留下轮胎扳手连续敲击和撬动的痕迹。</p>
  <p>警方由此排除侵占，却没有重新调查救援经过。宏汛提交的是统一后的工人证词；邵育梅没有承认22时06分的电话；地方门户没有修改旧新闻；吴川的帖子也没有写明地点。</p>
  <p>案件最终被归类为“暴雨中误入封闭道路导致的意外死亡”。</p>
  <p>顾小满只知道父亲没有偷钱。任冬青只知道顾成礼救过九个人。吴川只知道现场先吊了设备。邵育梅只知道自己没有报警。何频只知道补稿因广告被压下。</p>
  <p>顾成礼完成了第27号订单，救下南埠旅社九名住客，又用车灯阻止一辆客车驶入塌陷路段。他陷入涵洞后仍有明确的获救机会。邵育梅为了保护平康和违规氧气瓶，选择联系利益相关的施工方而非消防；贺建明为了水泵、发电机、工程款和双方账目关系，决定先吊设备；工人为了欠薪与自身风险服从；路人因为现场已有施工人员而没有报警；地方门户又为了广告收入压下更正。</p>
  <p>没有任何人单独决定杀死顾成礼。</p>
  <p>他们只是共同接受了一个前提：那个仍在敲门的人可以再等几分钟。</p>
  <p>顾成礼最初也接受了这个前提。他在电话里说“人没伤着”，主动替平康考虑。后来，他听着挖掘机先后吊走水泵和发电机，终于喊出：</p>
  <p>“先拉人，瓶不要了，车也不要了。”</p>
  <p>他在那一刻才明白，外面的人不是不知道他在车里。</p>
  <p>他们只是在计算。</p>
  <p>顾小满保存的最后一通未接来电发生在22时23分。那时水泵和发电机都已被吊到高处，长吊带还没有套上面包车。</p>
  <p>她永远不会知道父亲想说什么，也不会知道他拨出电话时，已经听懂了外面的选择。</p>
  <p>她只知道父亲没有偷钱。</p>
  <p>只有你知道，他是怎样被留下的。</p>
          <div class="conclusion-actions">${linkMarkup("老顾的日记", "x-laogu-diary", "conclusion-diary-button")}</div>
        </div>
      </section>`;
  }

  function renderContent(route, sourceRecord) {
    const page = { ...sourceRecord };
    const site = sites[page.site];
    const isCatalog = page.type === "catalog";
    state.visited.add(route);
    saveState();
    document.title = `${page.label}｜${page.title}`;

    if (page.layout === "admin") {
      renderAdminPage(route, page);
      return;
    }

    if (page.layout === "diary") {
      renderDiaryPage(page);
      return;
    }

    const pageKind = page.type === "clue" ? `页面编号 ${page.label}` : page.type === "extra" ? `普通附页 ${page.label}` : "站内目录";
    const content = isCatalog
      ? renderCatalog(page.site)
      : `${mediaMarkup(page)}<div class="story-copy">${page.html}${page.footerHtml || ""}</div>${renderLock(page)}${renderInteractions(page)}`;

    app.innerHTML = `
      ${archiveBarMarkup(page.address, route)}
      <main class="site-shell theme-${site.theme}">
        <header class="site-masthead">
          <div>
            <h1 class="site-brand">${site.name}</h1>
            <p class="site-tagline">${site.tagline}</p>
          </div>
          <div class="site-masthead-tools">
            ${renderUtilityNavigation(site)}
            <div class="site-date">页面存档<br>${page.date}</div>
          </div>
        </header>
        <nav class="site-nav" aria-label="旧站导航">${renderNavigation(page.site)}</nav>
        <div class="site-body">
          <article class="content-column ${isCatalog ? "catalog-column" : ""}">
            <div class="breadcrumb">当前位置：${linkMarkup("首页", site.homeRoute)} &gt; ${page.title}</div>
            <h1 class="page-title">${page.title}</h1>
            <div class="page-meta"><span>${page.date}</span><span>发布/整理：${page.author}</span><span>${pageKind}</span></div>
            <p class="lead">${page.lead}</p>
            ${content}
          </article>
        </div>
        <footer class="site-footer">${site.footer}<br>本页为澜川旧网页存档镜像，链接与时间按原页面关系保留。</footer>
      </main>
      ${renderInvestigationConclusion(page)}
      <div class="page-index ${page.type !== "clue" ? "page-index-extra" : ""}" aria-label="页面编号">${page.label}</div>`;

    concealUnavailableLinks();
    if (!isCatalog) upgradeLooseAds(page);
    hydrateOptionalImages();
  }

  function concealUnavailableLinks() {
    document.querySelectorAll("[data-route], [data-popup-route]").forEach((element) => {
      const route = element.dataset.route || element.dataset.popupRoute;
      if (!route || routeAvailable(route)) return;

      const parent = element.parentElement;
      element.remove();
      if (!parent || !["LI", "P"].includes(parent.tagName) || parent.querySelector("a, button, input")) return;
      const remainingText = parent.textContent.replace(/[\s：:，,。；;｜|]/g, "");
      if (remainingText.length < 10) parent.remove();
    });
  }

  function upgradeLooseAds(page) {
    const route = mediaDestination(page);
    if (!route) return;
    document.querySelectorAll(".story-copy .ad-block, .unlocked .ad-block").forEach((element) => {
      if (element.querySelector("a") || element.closest("a")) return;
      element.classList.add("clickable-media");
      element.setAttribute("role", "link");
      element.setAttribute("tabindex", "0");
      element.dataset.route = route;
      element.title = `相关页面：${routeTitle(route)}`;
    });
  }

  function normalizedValue(value, mode) {
    const trimmed = String(value || "").trim().replace(/\s+/g, "");
    return mode === "upper" ? trimmed.toUpperCase() : trimmed;
  }

  function validateLock(form) {
    const pageId = Number(form.dataset.page);
    const page = pages[pageId];
    const lock = page.lock;
    const requirements = lock.requires ? (Array.isArray(lock.requires) ? lock.requires : [lock.requires]) : [];
    if (!requirements.every((lockId) => state.solved.has(lockId))) {
      const error = form.querySelector(".lock-error");
      error.textContent = "身份资料尚不完整：请先恢复前一处加密存档，再使用其中留下的核对信息。";
      return;
    }
    const formData = new FormData(form);
    const matches = lock.fields.every((field) => {
      const actual = normalizedValue(formData.get(field.name), lock.normalize);
      const expected = normalizedValue(lock.values[field.name], lock.normalize);
      return actual === expected;
    });

    if (!matches) {
      const error = form.querySelector(".lock-error");
      error.textContent = "验证未通过，请核对页面中要求的日期、编号或称呼。";
      const firstInput = form.querySelector("input");
      if (firstInput) firstInput.focus();
      return;
    }

    state.solved.add(lock.id);
    saveState();
    renderContent(`p-${pad(pageId)}`, routeRecord(`p-${pad(pageId)}`));
    const unlocked = document.querySelector(".unlocked");
    if (unlocked) unlocked.scrollIntoView({ block: "start" });
  }

  function closeVisits() {
    document.body.classList.remove("drawer-open");
    const drawer = document.getElementById("visited-drawer");
    const backdrop = document.querySelector(".drawer-backdrop");
    if (drawer) {
      drawer.hidden = true;
      drawer.setAttribute("aria-hidden", "true");
    }
    if (backdrop) backdrop.hidden = true;
  }

  function crossSiteLanding(route) {
    const currentHash = location.hash.replace(/^#/, "");
    const current = routeRecord(currentHash);
    const target = routeRecord(route);
    if (!current?.site || !target?.site || current.site === target.site) return route;
    return sites[target.site].homeRoute;
  }

  function navigate(route, useSiteLanding = false) {
    closeVisits();
    const destination = route === "intro" || !useSiteLanding ? route : crossSiteLanding(route);
    if (!routeAvailable(destination)) return;
    const nextHash = destination === "intro" ? "#intro" : `#${destination}`;
    if (location.hash === nextHash) render();
    else location.hash = nextHash;
  }

  function openVisits() {
    const drawer = document.getElementById("visited-drawer");
    const backdrop = document.querySelector(".drawer-backdrop");
    if (!drawer || !backdrop) return;
    drawer.hidden = false;
    backdrop.hidden = false;
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    const close = drawer.querySelector(".drawer-close");
    if (close) close.focus();
  }

  function resetArchive(button) {
    if (!state.resetArmed) {
      state.resetArmed = true;
      button.textContent = "再次点击确认清空";
      button.classList.add("is-confirming");
      return;
    }

    localStorage.removeItem(VISITED_KEY);
    LEGACY_VISITED_KEYS.forEach((key) => localStorage.removeItem(key));
    localStorage.removeItem(SOLVED_KEY);
    LEGACY_SOLVED_KEYS.forEach((key) => localStorage.removeItem(key));
    state.visited.clear();
    state.solved.clear();
    state.resetArmed = false;
    localStorage.setItem(RESET_KEY, String(Date.now()));
    navigate("intro");
  }

  function render() {
    state.resetArmed = false;
    closeVisits();
    const route = parseRoute();
    if (route.type === "intro") renderIntro();
    else renderContent(route.route, route.record);
    window.scrollTo(0, 0);
  }

  document.addEventListener("click", (event) => {
    const popupTarget = event.target.closest("[data-popup-route]");
    if (popupTarget) {
      // Let the anchor's target="_blank" perform a normal user-initiated open.
      // This is less likely to be blocked than a scripted window.open call.
      return;
    }

    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) {
      event.preventDefault();
      const useSiteLanding = !routeTarget.hasAttribute("data-direct-route")
        && Boolean(routeTarget.closest(".story-copy"));
      navigate(routeTarget.dataset.route, useSiteLanding);
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;
    const action = actionTarget.dataset.action;
    if (action === "open-visits") openVisits();
    if (action === "close-visits") closeVisits();
    if (action === "reset") resetArchive(actionTarget);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeVisits();
    if ((event.key === "Enter" || event.key === " ") && event.target.matches('[role="link"][data-route]')) {
      event.preventDefault();
      const useSiteLanding = !event.target.hasAttribute("data-direct-route")
        && Boolean(event.target.closest(".story-copy"));
      navigate(event.target.dataset.route, useSiteLanding);
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest(".lock-form");
    if (!form) return;
    event.preventDefault();
    validateLock(form);
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("storage", (event) => {
    if (event.key === RESET_KEY) {
      localStorage.removeItem(VISITED_KEY);
      localStorage.removeItem(SOLVED_KEY);
      state.visited.clear();
      state.solved.clear();
      navigate("intro");
      return;
    }
    if (event.key === VISITED_KEY) {
      state.visited = new Set(loadArray(VISITED_KEY));
      if (event.newValue === null) {
        state.solved.clear();
        navigate("intro");
        return;
      }
    }
    if (event.key === SOLVED_KEY) {
      state.solved = new Set(loadArray(SOLVED_KEY));
      render();
    }
  });
  render();
})();
