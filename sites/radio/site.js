(function () {
  const site = {
  "name": "澜川夜航网络电台",
  "tagline": "晚八点以后，给还没回家的人",
  "theme": "radio",
  "nav": [
    "电台首页",
    "节目单",
    "听众点歌",
    "收音设备"
  ],
  "footer": "RealAudio / MP3 节目存档｜热线内容由听众提供，仅供路况参考",
  "navRoutes": [
    "x-radio-home",
    "x-radio-schedule",
    "x-radio-songs",
    "x-radio-receiver"
  ],
  "homeRoute": "x-radio-home",
  "catalogAddress": "http://archive.lanchuan.local/radio/articles.html",
  "interaction": {
    "title": "听众留言",
    "names": [
      "夜路人",
      "FM91.6",
      "长途司机",
      "值夜家属",
      "导播阿岑"
    ],
    "messages": [
      "昨晚的重播少了电话接进来前那一小段。",
      "南埠说有白车的那位后来还打过吗？",
      "大雨里地名听不清，最好让听众重复门牌。",
      "谢谢播了点歌，病房那台旧收音机能收到。",
      "热线只作路况参考，紧急事项仍请直接联系公共电话。"
    ]
  }
};
  const pages = {
  "19": {
    "site": "radio",
    "title": "2004-07-17 交通热线文字回放",
    "date": "节目时段：20:00—23:00",
    "author": "值班主持：叶舟",
    "address": "http://radio.lc163.com/archive/20040717-traffic.html",
    "lead": "原音频磁带受潮，本页为当晚值班员同步记录的通话文字。",
    "html": "\n        <table>\n          <tr><th>时间</th><th>来电记录</th></tr>\n          <tr><td>21:58</td><td>盐仓路积水，建议货车绕行。</td></tr>\n          <tr><td>22:18</td><td>“白色面包车还在水里，双跳亮着。工地挖机在旁边，<strong>正在吊一个大泵</strong>。好像有人在里面敲门。”</td></tr>\n          <tr><td>22:20</td><td>主持人口播：盐仓路已有施工人员处置，请车辆绕行。</td></tr>\n        </table>\n        <p class=\"system-note\">导播备注：现场已有施工人员，按普通路况信息处理，未转接公共电话。</p>\n        <p>合作单位查询：<a href=\"#p-20\" data-route=\"p-20\">宏汛设备状态</a></p>",
    "side": [
      {
        "label": "宏汛设备状态查询",
        "route": "p-20"
      },
      {
        "label": "听众：岚客17",
        "route": "p-18"
      },
      {
        "label": "王伯的收音机",
        "route": "p-07"
      }
    ],
    "next": {
      "route": "p-20",
      "label": "查询宏汛水泵当晚状态",
      "note": "项目代号在门户广告，设备编号在宏汛安全投入公示。"
    },
    "details": [
      "网络电台与调频节目同步播出，热线先经过导播桌，再决定是否接进直播。没有播出的电话只在纸质通话簿留下号码和一句摘要，录音带会循环使用。",
      "节目文件按播出日命名，但跨过午夜的内容仍归入前一天。听众下载页显示的是整理上传时间，因此同一段话可能对应三个不同的时间。"
    ],
    "mediaRoute": "p-20"
  }
};
  const extras = {
  "x-radio-home": {
    "route": "x-radio-home",
    "site": "radio",
    "title": "澜川夜航网络电台首页",
    "date": "2004-07-18 19:40",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/radio/home.html",
    "lead": "晚八点以后，给还没回家的人。",
    "html": "<p>网络收听提供低码率MP3与RealAudio两种格式。电话热线忙时可在留言板留下路况信息。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "19-A",
    "details": [
      "网络电台与调频节目同步播出，热线先经过导播桌，再决定是否接进直播。没有播出的电话只在纸质通话簿留下号码和一句摘要，录音带会循环使用。",
      "夜班听众不常说完整地址，他们用桥、饭馆或工地灯光描述位置。主持人如果不熟悉那一带，只能把消息当作普通路况转述。"
    ],
    "mediaRoute": "x-radio-schedule"
  },
  "x-radio-schedule": {
    "route": "x-radio-schedule",
    "site": "radio",
    "title": "本周节目单（7月12日至18日）",
    "date": "2004-07-12",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/radio/schedule.html",
    "lead": "点歌、夜班故事、雨夜路况与旧唱片。",
    "html": "<p>周六临时增加暴雨路况连线。节目可能因电话线路繁忙顺延，重播文件通常次日下午整理。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "19-B",
    "details": [
      "节目文件按播出日命名，但跨过午夜的内容仍归入前一天。听众下载页显示的是整理上传时间，因此同一段话可能对应三个不同的时间。",
      "网络电台与调频节目同步播出，热线先经过导播桌，再决定是否接进直播。没有播出的电话只在纸质通话簿留下号码和一句摘要，录音带会循环使用。"
    ],
    "mediaRoute": "x-radio-schedule"
  },
  "x-radio-songs": {
    "route": "x-radio-songs",
    "site": "radio",
    "title": "听众点歌：给夜班的人",
    "date": "2004-07-16 20:30",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/radio/songs.html",
    "lead": "十二条短信节选，不公开完整手机号。",
    "html": "<p>有人给值夜班的妻子点歌，有司机说要等卸完货再回家。主持人在每条留言后写了简短回复。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "19-C",
    "details": [
      "夜班听众不常说完整地址，他们用桥、饭馆或工地灯光描述位置。主持人如果不熟悉那一带，只能把消息当作普通路况转述。",
      "节目文件按播出日命名，但跨过午夜的内容仍归入前一天。听众下载页显示的是整理上传时间，因此同一段话可能对应三个不同的时间。"
    ],
    "mediaRoute": "x-radio-schedule"
  },
  "x-radio-receiver": {
    "route": "x-radio-receiver",
    "site": "radio",
    "title": "旧收音机也能听网络节目吗",
    "date": "2004-07-08",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/radio/receiver.html",
    "lead": "网络节目与调频同步时段说明。",
    "html": "<p>没有电脑的听众可在晚八点至十点收听FM91.6。网吧用户建议选择低码率版本，避免下载中断。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "19-D",
    "details": [
      "网络电台与调频节目同步播出，热线先经过导播桌，再决定是否接进直播。没有播出的电话只在纸质通话簿留下号码和一句摘要，录音带会循环使用。",
      "夜班听众不常说完整地址，他们用桥、饭馆或工地灯光描述位置。主持人如果不熟悉那一带，只能把消息当作普通路况转述。"
    ],
    "mediaRoute": "x-radio-schedule"
  },
  "x-radio-message": {
    "route": "x-radio-message",
    "site": "radio",
    "title": "七月下半月夜间节目回访",
    "date": "2004-07-19",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/radio/message.html",
    "lead": "导播从点歌、路况与失物招领中选出几条作节目回访。",
    "html": "<p>管理员会把有效路况转给主持人，但不保证每条都播出。涉及急救或报警的事项请直接拨打相应公共电话。</p>",
    "commentsTitle": "文章下方的听众补充",
    "comments": [
      {
        "name": "夜班出租",
        "role": "听众",
        "date": "2004-07-19 21:08",
        "message": "棉纺路口的临时站牌已经挪到树下，雨天容易看漏。"
      },
      {
        "name": "导播阿岚",
        "role": "节目编辑",
        "date": "2004-07-19 21:26",
        "message": "收到，今晚路况段会顺带提醒，紧急情况仍请直接打公共电话。"
      }
    ],
    "label": "19-E",
    "details": [
      "节目文件按播出日命名，但跨过午夜的内容仍归入前一天。听众下载页显示的是整理上传时间，因此同一段话可能对应三个不同的时间。",
      "网络电台与调频节目同步播出，热线先经过导播桌，再决定是否接进直播。没有播出的电话只在纸质通话簿留下号码和一句摘要，录音带会循环使用。"
    ],
    "mediaRoute": "x-radio-schedule"
  }
};
  window.ARG_REGISTRY.registerSite("radio", site, pages, extras);
})();
