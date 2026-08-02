(function () {
  const site = {
  "name": "澜川车友与职工论坛",
  "tagline": "Discuz! 4.1.0｜在路上，互相留个信",
  "theme": "forum",
  "requires": "lock-20",
  "nav": [
    "论坛首页",
    "车友互助",
    "机修交流",
    "欠薪讨论",
    "站务"
  ],
  "footer": "Powered by Discuz! 4.1.0 © 2001-2006 Comsenz Inc.",
  "navRoutes": [
    "x-forum-home",
    "x-forum-fuel",
    "x-forum-repair",
    "x-forum-wages",
    "x-forum-rules"
  ],
  "homeRoute": "x-forum-home",
  "catalogAddress": "http://archive.lanchuan.local/forum/articles.html",
  "interaction": {
    "title": "主题回复",
    "names": [
      "河滩石",
      "夜班扳手",
      "蓝货车",
      "欠薪工友",
      "版主老蒋"
    ],
    "messages": [
      "我当时就在东门，绳子不是没有，是谁都不肯先签字。",
      "设备编号别写全，公司会顺着账号找人。",
      "那辆白车让我们倒退以后又开回围挡边了。",
      "工资没结清，真出了事谁来管家里？",
      "本主题只讨论路况，涉及个人姓名的楼层已处理。"
    ]
  }
};
  const pages = {
  "18": {
    "site": "forum",
    "title": "[路况] 盐仓路水太快，白色氧气车让我们倒车",
    "date": "2004-07-17 22:34",
    "author": "大川跑西线",
    "address": "http://bbs.lcdriver.cn/thread-8471-1-1.html",
    "lead": "今晚走盐仓路的都别下坡。涵洞边已经看不见路沿。",
    "image": "车友论坛附件预览图。时间戳21:56，雨幕中可见尾号E4186的白色平康面包车驶向盐仓路；画质低、车牌仅后四位清晰。",
    "html": "\n        <div class=\"forum-post\"><div class=\"forum-user\">大川跑西线<br>货运司机</div><div class=\"forum-message\"><span class=\"forum-floor\">楼主</span>21:56拍的。那辆白车是平康送氧的，尾号E4186。</div></div>\n        <div class=\"forum-post\"><div class=\"forum-user\">岚客17<br>客车司机</div><div class=\"forum-message\"><span class=\"forum-floor\">2楼</span>22:01左右，他突然斜过来闪灯按喇叭。我停车才看见前面路面在塌，车上十七个人都退出来了。后来他自己陷下去，工地的人和挖机都到了。</div></div>\n        <div class=\"forum-post\"><div class=\"forum-user\">夜航值班<br>电台编辑</div><div class=\"forum-message\"><span class=\"forum-floor\">5楼</span>已收录交通热线文字回放：<a href=\"#p-19\" data-route=\"p-19\">点击查看22:18路况通话</a></div></div>",
    "side": [
      {
        "label": "夜航电台文字回放",
        "route": "p-19"
      },
      {
        "label": "盐仓路抢险公告",
        "route": "p-17"
      },
      {
        "label": "罗大川雨夜相册",
        "route": "p-11"
      }
    ],
    "next": {
      "route": "p-19",
      "label": "读取澜川夜航交通热线",
      "note": "客车司机认为现场已经在救人，但他无意中说出了挖掘机当时正在吊什么。"
    },
    "details": [
      "论坛允许夜班人员共用单位账号，发帖者常在正文末尾补上姓名缩写。版主删除主题后，完整引用仍会留在回复里，搜索只能找到引用所在的第二页。",
      "工友讨论设备时习惯用外号，不写完整编号；只有把公示、维修帖和工资记录放在一起，才能确定他们说的是哪一台机器。"
    ],
    "mediaRoute": "p-19"
  },
  "21": {
    "site": "forum",
    "requires": "lock-20",
    "title": "[已删帖引用] 那晚不是没有绳",
    "date": "原帖：2005-03-06 01:14",
    "author": "回复保留者：河滩石",
    "address": "http://bbs.lcworker.cn/thread-2207-2-1.html",
    "lead": "原帖发布十分钟后删除。因回复使用了完整引用，正文仍保留在第二页。",
    "html": "<div class=\"forum-post\"><div class=\"forum-user\">河滩石<br>泥工</div><div class=\"forum-message\">楼主删了也没用，我已经引用。回答那晚按顺序先吊上来的两样东西。</div></div>",
    "catalogRequires": "lock-20",
    "lock": {
      "id": "lock-21",
      "requires": "lock-20",
      "title": "同行讨论访问问题",
      "hint": "楼主已将帖子加密，输入密码可见。",
      "fields": [
        {
          "name": "answer",
          "label": "访问答案",
          "placeholder": "五个汉字"
        }
      ],
      "values": {
        "answer": "水泵发电机"
      },
      "success": "\n          <h2>完整引用</h2>\n          <blockquote>那晚不是没有绳。机器就在旁边。我们先吊了泵，又吊了发电机。里面的人先是三下三下敲，后来一直敲，还喊“先拉人，瓶不要了，车也不要了”。贺工不让下坡，说黑肩瓶出了事谁负责。后来敲门停了，工资第二天就说能发。</blockquote>\n          <p class=\"system-note\">缓存索引词：黑肩瓶 / 三下敲门 / 水泵 / 发电机</p>\n          <div class=\"record-links\"><a href=\"#p-22\" data-route=\"p-22\">查看事故后夜班工资结算</a><a href=\"#p-23\" data-route=\"p-23\">2008年复查：通讯与设备时刻</a></div>"
    },
    "side": [
      {
        "label": "设备状态查询",
        "route": "p-20"
      },
      {
        "label": "夜班工资结算",
        "route": "p-22"
      },
      {
        "label": "宏汛安全投入",
        "route": "p-16"
      }
    ],
    "next": {
      "route": "p-22",
      "label": "核对夜班工资结算",
      "note": "工人为什么统一沉默，可以在事故后一周的付款备注里找到答案。"
    },
    "details": [
      "工友讨论设备时习惯用外号，不写完整编号；只有把公示、维修帖和工资记录放在一起，才能确定他们说的是哪一台机器。",
      "许多回复写得生硬，是因为发帖人正在网吧计时。有人只留下半句话就下线，第二天换账号补充，楼层看起来像几个人，实际上可能出自同一双手。"
    ],
    "mediaRoute": "p-22"
  }
};
  const extras = {
  "x-forum-home": {
    "route": "x-forum-home",
    "site": "forum",
    "title": "澜川车友与职工论坛首页",
    "date": "2004-07-19 20:05",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/forum/home.html",
    "lead": "今日在线38人，最高记录112人。",
    "html": "<p>路况版在讨论南埠积水，行业互助版有人求购旧水泵配件。注册后才能查看附件和发表回复。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "18-A",
    "details": [
      "论坛允许夜班人员共用单位账号，发帖者常在正文末尾补上姓名缩写。版主删除主题后，完整引用仍会留在回复里，搜索只能找到引用所在的第二页。",
      "许多回复写得生硬，是因为发帖人正在网吧计时。有人只留下半句话就下线，第二天换账号补充，楼层看起来像几个人，实际上可能出自同一双手。"
    ],
    "mediaRoute": "x-forum-home"
  },
  "x-forum-fuel": {
    "route": "x-forum-fuel",
    "site": "forum",
    "title": "城北哪家加油站夜里开票",
    "date": "2004-07-15 23:02",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/forum/fuel.html",
    "lead": "凌晨经过澜川，单位报销需要机打票。",
    "html": "<p>回帖给出两处地址，也有人提醒城北桥施工，重车最好从西环绕行。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "18-B",
    "details": [
      "工友讨论设备时习惯用外号，不写完整编号；只有把公示、维修帖和工资记录放在一起，才能确定他们说的是哪一台机器。",
      "论坛允许夜班人员共用单位账号，发帖者常在正文末尾补上姓名缩写。版主删除主题后，完整引用仍会留在回复里，搜索只能找到引用所在的第二页。"
    ],
    "mediaRoute": "x-forum-home"
  },
  "x-forum-repair": {
    "route": "x-forum-repair",
    "site": "forum",
    "title": "求一个老式发电机皮带轮",
    "date": "2004-07-11 18:44",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/forum/repair.html",
    "lead": "铭牌磨花，只看清一个3字。",
    "html": "<p>三楼回复可以带旧件到机电市场比尺寸。楼主后来留言称已经借到，不再收购。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "18-C",
    "details": [
      "许多回复写得生硬，是因为发帖人正在网吧计时。有人只留下半句话就下线，第二天换账号补充，楼层看起来像几个人，实际上可能出自同一双手。",
      "工友讨论设备时习惯用外号，不写完整编号；只有把公示、维修帖和工资记录放在一起，才能确定他们说的是哪一台机器。"
    ],
    "mediaRoute": "x-forum-home"
  },
  "x-forum-wages": {
    "route": "x-forum-wages",
    "site": "forum",
    "title": "七月工资什么时候发",
    "date": "2004-07-18 21:17",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/forum/wages.html",
    "lead": "工地说雨停后一起结，有人收到消息吗？",
    "html": "<p>版主提醒不要公开身份证号码。几名工友约定周一去项目部问，帖子里夹着一条卖二手雨靴的广告。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "18-D",
    "details": [
      "论坛允许夜班人员共用单位账号，发帖者常在正文末尾补上姓名缩写。版主删除主题后，完整引用仍会留在回复里，搜索只能找到引用所在的第二页。",
      "许多回复写得生硬，是因为发帖人正在网吧计时。有人只留下半句话就下线，第二天换账号补充，楼层看起来像几个人，实际上可能出自同一双手。"
    ],
    "mediaRoute": "x-forum-home"
  },
  "x-forum-rules": {
    "route": "x-forum-rules",
    "site": "forum",
    "title": "论坛发帖与删帖说明",
    "date": "2004-01-05",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/forum/rules.html",
    "lead": "同一单位多人可以共用值班账号，但须在正文署名。",
    "html": "<p>涉及电话号码的投诉帖会隐藏中间四位。版主删帖后，引用内容可能仍保留在其他楼层。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "18-E",
    "details": [
      "工友讨论设备时习惯用外号，不写完整编号；只有把公示、维修帖和工资记录放在一起，才能确定他们说的是哪一台机器。",
      "论坛允许夜班人员共用单位账号，发帖者常在正文末尾补上姓名缩写。版主删除主题后，完整引用仍会留在回复里，搜索只能找到引用所在的第二页。"
    ],
    "mediaRoute": "x-forum-home"
  }
};
  window.ARG_REGISTRY.registerSite("forum", site, pages, extras);
})();
