(function () {
  const site = {
  "name": "小满缝补铺",
  "tagline": "改裤脚・换拉链・旧衣修补｜QQ联系",
  "theme": "personal",
  "nav": [
    "小店首页",
    "缝补价目",
    "旧机评价",
    "煤球记录"
  ],
  "footer": "小满缝补铺｜页面由 51LA 免费统计提供访问计数",
  "navRoutes": [
    "x-personal-home",
    "x-personal-price",
    "x-personal-machine",
    "x-personal-cat"
  ],
  "homeRoute": "x-personal-home",
  "catalogAddress": "http://archive.lanchuan.local/personal/articles.html",
  "interaction": {
    "title": "留言板",
    "names": [
      "如意旧机行",
      "河西顾客",
      "小满",
      "煤球见证人",
      "匿名访客"
    ],
    "messages": [
      "旧缝纫机收到了，抽屉里的收据我没有扔。",
      "裤脚改得很好，下雨天店里是不是会早关门？",
      "雨太大时不接急活，取衣可以顺延一天。",
      "煤球右耳的小口还在，它以前总跟着送氧车跑到门口。",
      "旧页别关，有些名字只有这里还找得到。"
    ]
  }
};
  const pages = {
  "26": {
    "site": "personal",
    "requires": "lock-25",
    "title": "私人相册｜煤球和旧店",
    "date": "最后更新：2009-07-17",
    "author": "顾小满",
    "address": "http://xiaoman.51lc.com/album/private.html",
    "lead": "公开价目表下面有一条来自“如意旧机行”的买家评价，收件人姓名与打捞收据一致。",
    "html": "<p></p>",
    "catalogRequires": "lock-25",
    "lock": {
      "id": "lock-26",
      "requires": "lock-25",
      "title": "私人相册密码",
      "hint": "来到平康的日子(ฅ^•ﻌ•^ฅ)",
      "fields": [
        {
          "name": "answer",
          "label": "相册密码",
          "placeholder": "YYYYMMDD"
        }
      ],
      "values": {
        "answer": "20030819"
      },
      "success": "\n          <h2>煤球和旧店｜相册已打开</h2>\n          <div class=\"image-placeholder\" data-image-key=\"p-26-album\"><img class=\"optional-page-image\" alt=\"父亲短信、最后未接来电与历年域名续费单\" hidden><div class=\"image-fallback\"><strong>【私人照片预留】</strong>小满整理在同一张相册拼图中的三份记录：父亲18时42分的短信、22时23分持续17秒的未接来电，以及备注“旧页别动”的历年域名续费单。</div></div>\n          <p>照片一：父亲18时42分的短信——“雨大，别来接。锅里有粥，煤球别喂咸的。送完27号就回。”</p>\n          <p>照片二：旧手机未接来电。2004年7月17日22时23分，来电“爸”，持续响铃17秒。</p>\n          <p>照片三：历年域名续费汇款单。每一张备注都写着“旧页别动”。</p>\n          <blockquote>相册说明：车找到了，钱也在。我不知道他最后去了哪里送氧。</blockquote>\n          <p>站点续费备注：平康后台的订单归档中仍有一条客服没有读到的留言。</p>\n          <p><a href=\"#p-14\" data-popup-route=\"p-14\" target=\"_blank\" rel=\"noopener\">返回平康管理系统</a></p>"
    },
    "side": [
      {
        "label": "平康客户故事・煤球",
        "route": "p-07"
      },
      {
        "label": "打捞物品登记",
        "route": "p-24"
      },
      {
        "label": "平康管理员后台",
        "route": "p-14"
      }
    ],
    "next": {
      "route": "p-14",
      "label": "返回平康后台查看订单归档",
      "note": "旅社广告、原始预约单和早期评论都留下了同一个号码。"
    },
    "details": [
      "小满用模板搭了这个主页，价目表、相册和留言板共用同一个免费空间。她不懂服务器，只知道每年按邮件提醒续费，避免父亲留下的旧链接变成别人的广告页。",
      "店里的生活仍按针脚和取衣日期继续。顾客谈拉链、裤脚和搬家，她也照常回复；只有涉及平康和那辆车的留言，她会隔很久才决定是否保留。"
    ],
    "mediaRoute": "p-14"
  }
};
  const extras = {
  "x-personal-home": {
    "route": "x-personal-home",
    "site": "personal",
    "title": "小满缝补铺首页",
    "date": "2009-07-17",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/personal/home.html",
    "lead": "改裤脚、换拉链、旧衣修补。",
    "html": "<p>小店搬到河西桥下后不再接受邮寄。旧网页只保留价目和相册，留言可能无法及时回复。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "26-A",
    "details": [
      "小满用模板搭了这个主页，价目表、相册和留言板共用同一个免费空间。她不懂服务器，只知道每年按邮件提醒续费，避免父亲留下的旧链接变成别人的广告页。",
      "煤球老了以后不再趴收音机，仍会在雨大时钻进装旧布的木箱。相册里没有父女合影，倒是每张空店照片都能看见顾成礼做过的小修补。"
    ],
    "mediaRoute": "x-personal-home"
  },
  "x-personal-price": {
    "route": "x-personal-price",
    "site": "personal",
    "title": "缝补价目表",
    "date": "2009-05-04",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/personal/price.html",
    "lead": "普通裤脚三元，牛仔裤保留原边五元。",
    "html": "<p>换拉链按长度计价，缺布料的破口需到店确认。老人衣物与工作服可优先取件。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "26-B",
    "details": [
      "店里的生活仍按针脚和取衣日期继续。顾客谈拉链、裤脚和搬家，她也照常回复；只有涉及平康和那辆车的留言，她会隔很久才决定是否保留。",
      "小满用模板搭了这个主页，价目表、相册和留言板共用同一个免费空间。她不懂服务器，只知道每年按邮件提醒续费，避免父亲留下的旧链接变成别人的广告页。"
    ],
    "mediaRoute": "x-personal-home"
  },
  "x-personal-machine": {
    "route": "x-personal-machine",
    "site": "personal",
    "title": "旧机行买家评价",
    "date": "2006-09-22",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/personal/machine.html",
    "lead": "如意旧机行回收了一台蝴蝶牌脚踏机。",
    "html": "<p>买家留言说机器送到时，抽屉里还有一张平康服务部的旧收据和几粒煤球吃剩的狗粮。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "26-C",
    "details": [
      "煤球老了以后不再趴收音机，仍会在雨大时钻进装旧布的木箱。相册里没有父女合影，倒是每张空店照片都能看见顾成礼做过的小修补。",
      "店里的生活仍按针脚和取衣日期继续。顾客谈拉链、裤脚和搬家，她也照常回复；只有涉及平康和那辆车的留言，她会隔很久才决定是否保留。"
    ],
    "mediaRoute": "x-personal-home"
  },
  "x-personal-cat": {
    "route": "x-personal-cat",
    "site": "personal",
    "title": "煤球的领养记录",
    "date": "2003-08-19",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/personal/cat.html",
    "lead": "一条右耳缺小口的黑狗来到店里。",
    "html": "<p>父亲说它只是暂住，第二天却用木箱做了窝。照片背面写着日期，后来成了私人相册的口令。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "26-D",
    "details": [
      "小满用模板搭了这个主页，价目表、相册和留言板共用同一个免费空间。她不懂服务器，只知道每年按邮件提醒续费，避免父亲留下的旧链接变成别人的广告页。",
      "煤球老了以后不再趴收音机，仍会在雨大时钻进装旧布的木箱。相册里没有父女合影，倒是每张空店照片都能看见顾成礼做过的小修补。"
    ],
    "mediaRoute": "x-personal-home"
  },
  "x-personal-guestbook": {
    "route": "x-personal-guestbook",
    "site": "personal",
    "title": "搬店后的取件与联系方式",
    "date": "2009-07-16",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/personal/guestbook.html",
    "lead": "河西桥下的新店不接邮寄，旧取件单仍可到店核对。",
    "html": "<p>雨天可能提前关门，超过一个月未取的衣物请先电话确认。旧网页保留原地址只是为了让老顾客还能找到店主。</p>",
    "commentsTitle": "文章下方的顾客留言",
    "comments": [
      {
        "name": "河西陈姨",
        "role": "老顾客",
        "date": "2009-07-16 18:03",
        "message": "蓝布裤已经取走，旧取件单放在柜台了，谢谢帮我多缝了一道。"
      }
    ],
    "label": "26-E",
    "details": [
      "店里的生活仍按针脚和取衣日期继续。顾客谈拉链、裤脚和搬家，她也照常回复；只有涉及平康和那辆车的留言，她会隔很久才决定是否保留。",
      "小满用模板搭了这个主页，价目表、相册和留言板共用同一个免费空间。她不懂服务器，只知道每年按邮件提醒续费，避免父亲留下的旧链接变成别人的广告页。"
    ],
    "mediaRoute": "x-personal-home"
  }
};
  window.ARG_REGISTRY.registerSite("personal", site, pages, extras);
})();
