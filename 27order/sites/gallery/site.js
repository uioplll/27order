(function () {
  const site = {
  "name": "老罗在路上",
  "tagline": "货运途中随手拍｜Fuji FinePix A210",
  "theme": "gallery",
  "nav": [
    "相册首页",
    "西线沿途",
    "雨夜相册",
    "司机合影"
  ],
  "footer": "相册主人：罗大川｜图片请勿用于商业用途",
  "navRoutes": [
    "x-gallery-home",
    "x-gallery-west",
    "x-gallery-rain",
    "x-gallery-drivers"
  ],
  "homeRoute": "x-gallery-home",
  "catalogAddress": "http://archive.lanchuan.local/gallery/articles.html",
  "interaction": {
    "title": "相册留言",
    "names": [
      "川A老罗",
      "小满",
      "修胎老周",
      "过路客",
      "相册管理员"
    ],
    "messages": [
      "原图还有吗，缩略图看不清围挡后面的车。",
      "请保留雨夜那一张，我想确认门边的白色反光。",
      "那家饭馆后来搬了，招牌还留在旧墙上。",
      "第六张和第七张像是隔了很久，雨势不一样。",
      "原尺寸图片已登记，免费空间暂时无法批量下载。"
    ]
  }
};
  const pages = {
  "11": {
    "site": "gallery",
    "title": "南埠雨夜｜7月18日清晨",
    "date": "上传：2004-07-19",
    "author": "罗大川",
    "address": "http://photo.163lc.com/laoluo/album/nb-rain-04",
    "lead": "在南埠旅社躲了一夜。天亮后拍了几张，不知道为什么走廊里一股柴油味。",
    "image": "核心相册图片预留。空走廊尽头是205房门，门旁四只平康氧气瓶，后洗衣间门口可见朝向楼内的发电机排气管。墙钟约06:20，画面无人物。",
    "html": "\n        <p>照片标题：<strong>205门口的四只瓶</strong></p>\n        <p>相册说明写着：“老板娘让我别拍后屋，说昨晚只是停电闷着了。可诊所的人半夜来过，走时还骂发电机不能放屋里。”</p>\n        <p>放大图中，四只瓶的蓝色漆面较新，瓶肩边缘有一圈更深的底色。相册主人没有注明底色来源。</p>\n        <p>相册留言有人贴出卫生简报链接：<a href=\"#p-12\" data-route=\"p-12\">沿河社区诊所七月值班摘要</a></p>",
    "side": [
      {
        "label": "前一张：雨中的盐仓路",
        "route": "p-18"
      },
      {
        "label": "下一张：旅社空走廊"
      },
      {
        "label": "诊所值班摘要",
        "route": "p-12"
      }
    ],
    "next": {
      "route": "p-12",
      "label": "核对沿河社区诊所记录",
      "note": "照片证明瓶子留下了，医疗记录则证明送氧者在21时28分前已经到场。"
    },
    "details": [
      "相机每张照片只有三百万像素，上传前又被软件压缩到六百像素宽。雨丝和反光经常糊成一片，真正有用的细节反而藏在路牌、车灯和缩略图边缘。",
      "相册主人按运输路线建文件夹，拍摄日期只写在照片说明里。遇到跨夜行车，同一组图片会同时出现前一天的文件名和第二天的页面日期。"
    ],
    "mediaRoute": "p-12"
  }
};
  const extras = {
  "x-gallery-home": {
    "route": "x-gallery-home",
    "site": "gallery",
    "title": "老罗在路上：相册首页",
    "date": "2004-08-02",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/gallery/home.html",
    "lead": "货运途中随手拍，照片按路线而不是日期分类。",
    "html": "<p>相机是富士A210，雨天经常把镜头放在仪表台纸巾盒里。缩略图加载较慢，请不要连续刷新。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "11-A",
    "details": [
      "相机每张照片只有三百万像素，上传前又被软件压缩到六百像素宽。雨丝和反光经常糊成一片，真正有用的细节反而藏在路牌、车灯和缩略图边缘。",
      "司机们很少拍自己，多数照片是空路、饭碗和停在远处的车。几年后再看，缺席的人和被保留下来的停车位置比合影更容易让人记住。"
    ],
    "mediaRoute": "x-gallery-home"
  },
  "x-gallery-west": {
    "route": "x-gallery-west",
    "site": "gallery",
    "title": "川西线：加水、修胎和路边饭馆",
    "date": "2004-06-22",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/gallery/west.html",
    "lead": "十八张照片记录一趟普通的两日运输。",
    "html": "<p>照片里多是停车点、里程牌和司机吃饭的搪瓷碗。留言者讨论哪家修胎铺夜里还开门。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "11-B",
    "details": [
      "相册主人按运输路线建文件夹，拍摄日期只写在照片说明里。遇到跨夜行车，同一组图片会同时出现前一天的文件名和第二天的页面日期。",
      "相机每张照片只有三百万像素，上传前又被软件压缩到六百像素宽。雨丝和反光经常糊成一片，真正有用的细节反而藏在路牌、车灯和缩略图边缘。"
    ],
    "mediaRoute": "x-gallery-home"
  },
  "x-gallery-rain": {
    "route": "x-gallery-rain",
    "site": "gallery",
    "title": "雨夜相册：挡风玻璃后面的城",
    "date": "2004-07-20",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/gallery/rain.html",
    "lead": "低清照片里只有反光路牌与积水。",
    "html": "<p>第六张拍到南埠货场外的临时围挡，上传者说当晚只想记录水有多深，并不知道里面发生了什么。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "11-C",
    "details": [
      "司机们很少拍自己，多数照片是空路、饭碗和停在远处的车。几年后再看，缺席的人和被保留下来的停车位置比合影更容易让人记住。",
      "相册主人按运输路线建文件夹，拍摄日期只写在照片说明里。遇到跨夜行车，同一组图片会同时出现前一天的文件名和第二天的页面日期。"
    ],
    "mediaRoute": "x-gallery-home"
  },
  "x-gallery-drivers": {
    "route": "x-gallery-drivers",
    "site": "gallery",
    "title": "司机朋友合影（缺两张底片）",
    "date": "2004-05-08",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/gallery/drivers.html",
    "lead": "装货前在老饭馆门口拍的合影。",
    "html": "<p>相册主人给每个人写了外号，没有写真名。有人多年后留言问其中一辆蓝色小货车卖到了哪里。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "11-D",
    "details": [
      "相机每张照片只有三百万像素，上传前又被软件压缩到六百像素宽。雨丝和反光经常糊成一片，真正有用的细节反而藏在路牌、车灯和缩略图边缘。",
      "司机们很少拍自己，多数照片是空路、饭碗和停在远处的车。几年后再看，缺席的人和被保留下来的停车位置比合影更容易让人记住。"
    ],
    "mediaRoute": "x-gallery-home"
  },
  "x-gallery-guestbook": {
    "route": "x-gallery-guestbook",
    "site": "gallery",
    "title": "相册原图保存与使用说明",
    "date": "2004-08-03",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/gallery/guestbook.html",
    "lead": "相册空间有限，原图只按拍摄日期刻盘保存。",
    "html": "<p>网页只上传六百像素缩略图。需要原图的熟人可在对应文章下方留下拍摄日期与照片序号。</p>",
    "commentsTitle": "文章下方的相册留言",
    "comments": [
      {
        "name": "小满",
        "role": "相册访客",
        "date": "2004-08-03 17:42",
        "message": "7月18日清晨那组能保留原尺寸吗？雨里车灯的反光在缩略图上看不清。"
      }
    ],
    "label": "11-E",
    "details": [
      "相册主人按运输路线建文件夹，拍摄日期只写在照片说明里。遇到跨夜行车，同一组图片会同时出现前一天的文件名和第二天的页面日期。",
      "相机每张照片只有三百万像素，上传前又被软件压缩到六百像素宽。雨丝和反光经常糊成一片，真正有用的细节反而藏在路牌、车灯和缩略图边缘。"
    ],
    "mediaRoute": "x-gallery-home"
  }
};
  window.ARG_REGISTRY.registerSite("gallery", site, pages, extras);
})();
