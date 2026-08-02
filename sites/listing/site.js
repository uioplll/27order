(function () {
  const site = {
  "name": "澜川分类信息网",
  "tagline": "租房・家政・二手・招聘・便民号码",
  "theme": "listing",
  "nav": [
    "分类首页",
    "房屋租售",
    "二手信息",
    "家政陪护"
  ],
  "footer": "免费发布生活信息｜本网站不参与线下交易，请自行核实",
  "navRoutes": [
    "x-listing-home",
    "x-listing-rent",
    "x-listing-sewing",
    "x-listing-care"
  ],
  "homeRoute": "x-listing-home",
  "catalogAddress": "http://archive.lanchuan.local/listing/articles.html",
  "interaction": {
    "title": "联系记录",
    "names": [
      "短租客",
      "旧物买家",
      "陪护阿姨",
      "房东本人",
      "信息管理员"
    ],
    "messages": [
      "请问公用电话晚上十点以后还能接吗？",
      "照片里的柜子还在不在，我周日可以自提。",
      "三院夜班临时缺人，看到后请回尾号6042。",
      "房间已经租出，原帖不会删，月底自动下沉。",
      "请勿在留言里写完整身份证和住址。"
    ]
  }
};
  const pages = {
  "9": {
    "site": "listing",
    "requires": "lock-14",
    "title": "南埠旅社｜拆迁住户可按月长租",
    "date": "发布：2004-05-28",
    "author": "商户用户：南埠桂姐",
    "address": "http://fenlei.lc163.com/room/200405/8821.html",
    "lead": "靠近南埠货场，提供热水、代叫三轮车，可照看行动不便老人。",
    "image": "分类广告配图预留。两层旧旅社外立面，二楼窗牌写205，门边电话号码后四位6042，天空阴沉但尚未下雨。",
    "html": "\n        <table>\n          <tr><th>长租房间</th><td>203、205、207</td></tr>\n          <tr><th>联系电话</th><td>083X-73X6042</td></tr>\n          <tr><th>适合人群</th><td>南埠拆迁过渡住户、陪护家属</td></tr>\n        </table>\n        <h3>住客留言</h3>\n        <div class=\"forum-post\"><div class=\"forum-user\"><a href=\"#x-health-dongqing\" data-route=\"x-health-dongqing\" data-direct-route>冬青叶</a><br>普通用户</div><div class=\"forum-message\">205住过两个月。楼梯窄，但老板娘人很好，肯让老人月租。</div></div>",
    "side": [
      {
        "label": "冬青叶的病友主页",
        "route": "x-health-dongqing"
      },
      {
        "label": "南埠旅社商户回应",
        "route": "p-13"
      },
      {
        "label": "附近沿河社区诊所",
        "route": "p-12"
      }
    ],
    "next": {
      "route": "x-health-dongqing",
      "label": "查看“冬青叶”的个人资料",
      "note": "她把关键回复锁在一个只有见过顾成礼的人才能回答的问题后面。"
    },
    "details": [
      "分类信息按七天自动下沉，发布者可以用原电话号码重新顶帖。旅社、家政和二手物品常共用前台电话，号码相同并不代表信息由同一人发布。",
      "本站没有在线付款，双方通常在电话里约时间，再用短信确认门牌。为了节省字数，发布者会省略街道名或只写公交站，外地人很容易把新旧门牌当成两个地方。"
    ],
    "mediaRoute": "x-health-dongqing"
  }
};
  const extras = {
  "x-listing-home": {
    "route": "x-listing-home",
    "site": "listing",
    "title": "澜川分类信息首页",
    "date": "2004-07-17 16:20",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/listing/home.html",
    "lead": "房屋、二手、家政与短工信息滚动更新。",
    "html": "<p>本站只提供信息发布，不参与线下交易。请勿预付押金，见面交易时核对电话号码与物品状况。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "09-A",
    "details": [
      "分类信息按七天自动下沉，发布者可以用原电话号码重新顶帖。旅社、家政和二手物品常共用前台电话，号码相同并不代表信息由同一人发布。",
      "管理员只处理明显诈骗和重复刷屏，很少核实线下交易结果。一条信息已经失效却仍有人回复，在当时是很平常的事情。"
    ],
    "mediaRoute": "x-listing-rent"
  },
  "x-listing-rent": {
    "route": "x-listing-rent",
    "site": "listing",
    "title": "河西单间出租，可短住",
    "date": "2004-07-16 12:06",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/listing/rent.html",
    "lead": "一楼带独立水表，公共厨房，月租二百六。",
    "html": "<p>房东住同院，谢绝饲养大型宠物。看房时间为晚饭后，来前请用短信说明人数。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "09-B",
    "details": [
      "本站没有在线付款，双方通常在电话里约时间，再用短信确认门牌。为了节省字数，发布者会省略街道名或只写公交站，外地人很容易把新旧门牌当成两个地方。",
      "分类信息按七天自动下沉，发布者可以用原电话号码重新顶帖。旅社、家政和二手物品常共用前台电话，号码相同并不代表信息由同一人发布。"
    ],
    "mediaRoute": "x-listing-rent"
  },
  "x-listing-sewing": {
    "route": "x-listing-sewing",
    "site": "listing",
    "title": "如意旧机行：回收脚踏缝纫机",
    "date": "2004-07-10 09:18",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/listing/sewing.html",
    "lead": "上门看机，皮带和梭芯缺失也可估价。",
    "html": "<p>店主同时出售旧收音机零件。买家评价里有人提到小满缝补铺，称改好的裤脚当天就能取。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "09-C",
    "details": [
      "管理员只处理明显诈骗和重复刷屏，很少核实线下交易结果。一条信息已经失效却仍有人回复，在当时是很平常的事情。",
      "本站没有在线付款，双方通常在电话里约时间，再用短信确认门牌。为了节省字数，发布者会省略街道名或只写公交站，外地人很容易把新旧门牌当成两个地方。"
    ],
    "mediaRoute": "x-listing-rent"
  },
  "x-listing-care": {
    "route": "x-listing-care",
    "site": "listing",
    "title": "夜间陪护，限三院附近",
    "date": "2004-07-14 21:33",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/listing/care.html",
    "lead": "有两年照护经验，可做饭，不接危重病人。",
    "html": "<p>发布者只使用公用电话回电。若病人需要吸氧，应由家属联系医院或正规供氧点。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "09-D",
    "details": [
      "分类信息按七天自动下沉，发布者可以用原电话号码重新顶帖。旅社、家政和二手物品常共用前台电话，号码相同并不代表信息由同一人发布。",
      "管理员只处理明显诈骗和重复刷屏，很少核实线下交易结果。一条信息已经失效却仍有人回复，在当时是很平常的事情。"
    ],
    "mediaRoute": "x-listing-rent"
  },
  "x-listing-lost": {
    "route": "x-listing-lost",
    "site": "listing",
    "title": "招领：南埠路口捡到一串钥匙",
    "date": "2004-07-18 08:46",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/listing/lost.html",
    "lead": "两把门钥匙和一枚蓝色塑料牌。",
    "html": "<p>塑料牌背面手写数字17。失主可到长途客运站对面修鞋摊说明钥匙圈颜色后领取。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "09-E",
    "details": [
      "本站没有在线付款，双方通常在电话里约时间，再用短信确认门牌。为了节省字数，发布者会省略街道名或只写公交站，外地人很容易把新旧门牌当成两个地方。",
      "分类信息按七天自动下沉，发布者可以用原电话号码重新顶帖。旅社、家政和二手物品常共用前台电话，号码相同并不代表信息由同一人发布。"
    ],
    "mediaRoute": "x-listing-rent"
  }
};
  window.ARG_REGISTRY.registerSite("listing", site, pages, extras);
})();
