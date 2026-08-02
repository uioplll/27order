(function () {
  const site = {
  "name": "呼吸相助网",
  "tagline": "慢阻肺・哮喘・家庭氧疗・照护经验互助",
  "theme": "health",
  "nav": [
    "互助首页",
    "家庭氧疗",
    "陪护交流",
    "本地服务"
  ],
  "footer": "病友互助内容不替代医生诊断｜站务联系 QQ：41XXXX27",
  "navRoutes": [
    "x-health-home",
    "x-health-tube",
    "x-health-meal",
    "x-health-directory"
  ],
  "homeRoute": "x-health-home",
  "catalogAddress": "http://archive.lanchuan.local/health/articles.html",
  "interaction": {
    "title": "病友回复",
    "names": [
      "冬青叶",
      "守夜人",
      "河西家属",
      "慢慢呼吸",
      "版主青栀"
    ],
    "messages": [
      "我家也遇过停电，柴油机一定要放在通风处。",
      "顾师傅以前说开阀要慢，先听有没有漏气声。",
      "照护的人也要轮班睡，不要一个人硬撑整夜。",
      "旧号码如果打不通，可以问医院器械科有没有备案。",
      "经验帖仅供参考，持续头痛请尽快到医院检查。"
    ]
  }
};
  const pages = {
  "10": {
    "site": "health",
    "requires": "lock-14",
    "title": "停电后一直头疼，是否要查一氧化碳？",
    "date": "2005-01-12 16:48",
    "author": "冬青叶",
    "address": "http://hxhelp.cn/thread-4172-1-1.html",
    "lead": "母亲去年夏天在临时住处遇到停电，此后几个月总说闻到柴油味就喘不上气。",
    "html": "\n        <div class=\"forum-post\"><div class=\"forum-user\">冬青叶<br>注册：2004-06</div><div class=\"forum-message\"><span class=\"forum-floor\">楼主</span>当时的详细回复只留给知道那位送氧师傅的人。管理员让我设置一个问题，免得旅社的人搜到。</div></div>",
    "catalogRequires": "lock-14",
    "lock": {
      "id": "lock-10",
      "requires": "lock-14",
      "title": "病友回复已加密",
      "hint": "顾师傅教人怎么开阀？五个字，不加标点。",
      "fields": [
        {
          "name": "answer",
          "label": "访问答案",
          "placeholder": "输入五个汉字"
        }
      ],
      "values": {
        "answer": "数到五再开"
      },
      "success": "\n          <h2>加密回复已展开</h2>\n          <p>停电那晚，后洗衣间的柴油机把烟送上二楼。205一共挤了九个人，我母亲最先喘不上气。</p>\n          <p>顾师傅来后关掉机器，让所有人到走廊。他一边让人<strong>数到五再开</strong>，一边轮流换瓶。后来八瓶空了，他把四瓶没开的留在205，说后半夜也得有人用。</p>\n          <p>他没收钱。搬最后一个空瓶时扶了一下墙，好像自己也头晕。</p>\n          <p><a href=\"#p-11\" data-route=\"p-11\">回复里提到：货车司机“老罗”第二天拍过205走廊</a></p>\n          <p><a href=\"#p-14\" data-popup-route=\"p-14\" target=\"_blank\" rel=\"noopener\">返回平康管理系统核对后续记录</a></p>"
    },
    "side": [
      {
        "label": "家庭氧疗注意事项"
      },
      {
        "label": "沿河社区诊所值班摘要",
        "route": "p-12"
      },
      {
        "label": "老罗在路上・雨夜相册",
        "route": "p-11"
      }
    ],
    "next": {
      "route": "p-11",
      "label": "查看老罗的南埠雨夜相册",
      "note": "加密回复中的瓶数与发电机位置，都能在一张无人合影的照片中得到验证。"
    },
    "details": [
      "病友网由几名家属轮流维护，帖子里的办法多来自照护经验，并非统一医嘱。管理员会把危险操作标成红字，却很少删除原帖，方便后来者看清讨论经过。",
      "许多用户在医院附近的网吧上线，昵称和登录状态可能留在同一台电脑上。回复时间只能证明那台电脑何时提交，不能直接证明发言者当时身在何处。"
    ],
    "mediaRoute": "p-11"
  }
};
  const extras = {
  "x-health-dongqing": {
    "route": "x-health-dongqing",
    "site": "health",
    "requires": "lock-14",
    "title": "用户资料｜冬青叶",
    "date": "最后登录：2005-01-12 16:51",
    "author": "呼吸相助网",
    "address": "http://hxhelp.cn/member.php?uid=4172",
    "lead": "普通会员，主要浏览家庭氧疗与陪护交流版块。",
    "html": "<table><tr><th>用户名</th><td>冬青叶</td></tr><tr><th>注册时间</th><td>2004-06-03</td></tr><tr><th>所在地</th><td>澜川南埠</td></tr><tr><th>发表主题</th><td>1</td></tr></table><h3>发表主题</h3><ul class=\"evidence-list\"><li><a href=\"#p-10\" data-route=\"p-10\">停电后一直头疼，是否要查一氧化碳？</a> <span class=\"muted-copy\">2005-01-12</span></li></ul><p class=\"system-note\">个人签名：替母亲问病，回复慢请见谅。</p>",
    "label": "用户",
    "catalogHidden": true,
    "mediaRoute": null
  },
  "x-health-home": {
    "route": "x-health-home",
    "site": "health",
    "title": "呼吸相助网互助首页",
    "date": "2004-07-18 07:50",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/health/home.html",
    "lead": "病友经验只供参考，紧急情况请及时就医。",
    "html": "<p>本周热门话题包括潮湿天气的氧气管保管、夜间陪护轮班和旧钢瓶退押金办法。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "10-A",
    "details": [
      "病友网由几名家属轮流维护，帖子里的办法多来自照护经验，并非统一医嘱。管理员会把危险操作标成红字，却很少删除原帖，方便后来者看清讨论经过。",
      "家庭照护者往往先问价格、搬运和夜间是否有人接电话，再谈病情。那些看似琐碎的问题，实际决定了一只钢瓶能否在最需要的时候送到。"
    ],
    "mediaRoute": "x-health-home"
  },
  "x-health-tube": {
    "route": "x-health-tube",
    "site": "health",
    "title": "雨季氧气管怎样防潮",
    "date": "2004-07-12 19:08",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/health/tube.html",
    "lead": "家里的软管内壁总有水汽，是否需要暴晒？",
    "html": "<p>版友建议自然晾干并咨询设备供应方，不要自行涂抹油脂。两位家属分享了不同型号的清洁方法。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "10-B",
    "details": [
      "许多用户在医院附近的网吧上线，昵称和登录状态可能留在同一台电脑上。回复时间只能证明那台电脑何时提交，不能直接证明发言者当时身在何处。",
      "病友网由几名家属轮流维护，帖子里的办法多来自照护经验，并非统一医嘱。管理员会把危险操作标成红字，却很少删除原帖，方便后来者看清讨论经过。"
    ],
    "mediaRoute": "x-health-home"
  },
  "x-health-meal": {
    "route": "x-health-meal",
    "site": "health",
    "title": "陪护家属的一锅粥",
    "date": "2004-07-15 22:14",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/health/meal.html",
    "lead": "夜里守床，怎样让老人吃得下。",
    "html": "<p>有人建议把米煮得更软，少量多次。回帖渐渐聊到照护者也要轮流睡觉，不要把疲惫当成孝顺的证明。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "10-C",
    "details": [
      "家庭照护者往往先问价格、搬运和夜间是否有人接电话，再谈病情。那些看似琐碎的问题，实际决定了一只钢瓶能否在最需要的时候送到。",
      "许多用户在医院附近的网吧上线，昵称和登录状态可能留在同一台电脑上。回复时间只能证明那台电脑何时提交，不能直接证明发言者当时身在何处。"
    ],
    "mediaRoute": "x-health-home"
  },
  "x-health-radio": {
    "route": "x-health-radio",
    "site": "health",
    "title": "病房里能收到哪些调频台",
    "date": "2004-07-09 13:26",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/health/radio.html",
    "lead": "旧收音机在窗边比床头清楚。",
    "html": "<p>澜川夜航的信号在二楼以上较好，周三晚有家属点歌。网友提醒耳机线不要缠在氧气阀附近。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "10-D",
    "details": [
      "病友网由几名家属轮流维护，帖子里的办法多来自照护经验，并非统一医嘱。管理员会把危险操作标成红字，却很少删除原帖，方便后来者看清讨论经过。",
      "家庭照护者往往先问价格、搬运和夜间是否有人接电话，再谈病情。那些看似琐碎的问题，实际决定了一只钢瓶能否在最需要的时候送到。"
    ],
    "mediaRoute": "x-health-home"
  },
  "x-health-directory": {
    "route": "x-health-directory",
    "site": "health",
    "title": "本地家用氧服务索引",
    "date": "2004-07-01 09:00",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/health/directory.html",
    "lead": "号码由病友提供，停业与变更请留言。",
    "html": "<p>平康服务部热线尾号3186，南埠片区夜间可配送。索引管理员每月核对一次，不能保证临时停业信息及时更新。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "10-E",
    "details": [
      "许多用户在医院附近的网吧上线，昵称和登录状态可能留在同一台电脑上。回复时间只能证明那台电脑何时提交，不能直接证明发言者当时身在何处。",
      "病友网由几名家属轮流维护，帖子里的办法多来自照护经验，并非统一医嘱。管理员会把危险操作标成红字，却很少删除原帖，方便后来者看清讨论经过。"
    ],
    "mediaRoute": "x-health-home"
  }
};
  window.ARG_REGISTRY.registerSite("health", site, pages, extras);
})();
