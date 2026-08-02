(function () {
  const site = {
  "name": "宏汛路桥工程信息站",
  "tagline": "南埠货场扩建项目・安全生产・设备维护",
  "theme": "industry",
  "requires": "lock-10",
  "nav": [
    "企业首页",
    "人才招聘",
    "施工进度",
    "安全生产",
    "合作单位"
  ],
  "footer": "宏汛路桥工程有限公司｜南埠项目代号 NB-03",
  "navRoutes": [
    "x-industry-home",
    "x-industry-jobs",
    "x-industry-concrete",
    "x-industry-safety",
    "x-industry-partners"
  ],
  "homeRoute": "x-industry-home",
  "catalogAddress": "http://archive.lanchuan.local/industry/articles.html",
  "interaction": {
    "title": "职工留言",
    "names": [
      "机务小贺",
      "夜班门卫",
      "泥工三组",
      "材料车司机",
      "项目办公室"
    ],
    "messages": [
      "0916那台泵不是坏了，是吊上来后才换的皮带。",
      "东门钥匙一直在值班室，谁拿走要有登记。",
      "那晚说先保设备的人没有到水边看过。",
      "我只听见无线电里催了三次，没听见谁提车里有人。",
      "匿名留言无法作为结算依据，请携工牌到办公室核对。"
    ]
  }
};
  const pages = {
  "16": {
    "site": "industry",
    "title": "南埠项目职工安全投入公示",
    "date": "2004年第2季度",
    "author": "宏汛路桥财务与设备科",
    "address": "http://hongxun-road.cn/nb03/safety/q2.html",
    "lead": "项目代号 NB-03。公示内容包括劳动防护、急救用品与设备维护支出。",
    "html": "\n        <table>\n          <tr><th>项目</th><th>供应方</th><th>编号</th><th>金额</th></tr>\n          <tr><td>职工急救氧</td><td>平康家用氧服务部</td><td>PK-HX-0411</td><td>3,600元</td></tr>\n          <tr><td>工业周转瓶</td><td>澜川工业气体站</td><td>HX-BK-17～20</td><td>内部调拨</td></tr>\n          <tr><td>进口排水泵</td><td>宏汛设备科</td><td><strong>0916</strong></td><td>56,000元</td></tr>\n        </table>\n        <p class=\"system-note\">编号说明：BK为工业气瓶黑肩标识；设备查询使用“项目代号－设备编号”。</p>\n        <p><a href=\"#p-20\" data-route=\"p-20\">进入项目设备状态查询</a></p>",
    "side": [
      {
        "label": "盐仓路抢险公告",
        "route": "p-17"
      },
      {
        "label": "设备状态查询",
        "route": "p-20"
      },
      {
        "label": "平康合作单位页",
        "route": "p-15"
      }
    ],
    "next": {
      "route": "p-17",
      "label": "查看盐仓路当日抢险公告",
      "note": "公开时间与现场白板并不一致，挖掘机用途也被写成了人员撤离。"
    },
    "details": [
      "项目部的设备台账由机务员填写，办公室每周集中录入。抢险时先口头调度、事后补单很常见，网页上的用途说明往往来自最终结算，而不是最初申请。",
      "租赁设备按小时计费，停机也可能产生费用。水泵和发电机一旦被水淹，项目要承担维修与延期损失，这些数字直接影响负责人当月能否结清工资。"
    ],
    "mediaRoute": "p-17"
  },
  "20": {
    "site": "industry",
    "requires": ["lock-14", "lock-10"],
    "title": "南埠项目设备状态查询",
    "date": "历史设备记录",
    "author": "宏汛设备科",
    "address": "http://hongxun-road.cn/device/query.asp",
    "lead": "请输入“项目代号－设备编号”，格式示例：AB01-0000。",
    "html": "<p>项目代号可在本站施工进度、页脚或安全投入公示中找到；水泵编号可在安全投入公示中找到。</p>",
    "catalogRequires": ["lock-14", "lock-10"],
    "lock": {
      "id": "lock-20",
      "requires": ["lock-14", "lock-10"],
      "title": "设备记录验证",
      "hint": "格式：项目代号去掉横线，再加“-”与四位设备编号。",
      "fields": [
        {
          "name": "answer",
          "label": "查询编号",
          "placeholder": "例如 AB01-0000"
        }
      ],
      "values": {
        "answer": "NB03-0916"
      },
      "normalize": "upper",
      "success": "\n          <h2>设备 0916｜暴雨夜调度记录</h2>\n          <table>\n            <tr><th>时间</th><th>设备动作</th></tr>\n            <tr><td>22:12</td><td>挖掘机吊装排水泵0916</td></tr>\n            <tr><td>22:15</td><td>水泵转移至高处，外观完好</td></tr>\n            <tr><td>22:16</td><td>转吊柴油发电机</td></tr>\n            <tr><td>22:19</td><td>发电机转移完成</td></tr>\n            <tr><td>22:24</td><td>领取长吊带，准备处理车辆</td></tr>\n          </table>\n          <p class=\"system-note\">记录备注：22:24领取长吊带；车辆处理完成时间未填写。</p>\n          <p>如对历史调度记录有异议，可到<a href=\"#x-forum-home\" data-route=\"x-forum-home\">澜川车友与职工论坛</a>发帖提出勘误。</p>"
    },
    "side": [
      {
        "label": "项目代号 NB-03",
        "route": "x-industry-concrete"
      },
      {
        "label": "水泵编号 0916",
        "route": "p-16"
      },
      {
        "label": "职工论坛勘误",
        "route": "x-forum-home"
      }
    ],
    "next": {
      "route": "x-forum-home",
      "label": "进入职工论坛查找相关讨论",
      "note": "论坛问题要求按顺序写出先被吊上来的两样东西。"
    },
    "details": [
      "租赁设备按小时计费，停机也可能产生费用。水泵和发电机一旦被水淹，项目要承担维修与延期损失，这些数字直接影响负责人当月能否结清工资。",
      "工地上的决定没有写成正式命令，只在几通电话和几句重复确认中逐渐形成。每个人都只同意了自己负责的一小步，合在一起却改变了现场先救什么。"
    ],
    "mediaRoute": "x-forum-home"
  },
  "22": {
    "site": "industry",
    "requires": "lock-21",
    "catalogHidden": true,
    "title": "南埠项目夜班工资结算公示",
    "date": "2004-07-24",
    "author": "宏汛项目财务",
    "address": "http://hongxun-road.cn/nb03/wage/200407.html",
    "lead": "本月补发夜班组此前三个月欠薪，签字后由班组长统一领取。",
    "html": "\n        <table>\n          <tr><th>人员</th><th>欠薪月数</th><th>补发</th><th>附加备注</th></tr>\n          <tr><td>吴川等8人</td><td>3个月</td><td>全部结清</td><td><strong>项目保密补助</strong></td></tr>\n        </table>\n        <p class=\"system-note\">领取要求：夜班组八人签署统一情况说明后，由班组长代领。</p>",
    "side": [
      {
        "label": "夜班工人讨论",
        "route": "p-21"
      },
      {
        "label": "项目安全投入",
        "route": "p-16"
      }
    ],
    "details": [
      "工地上的决定没有写成正式命令，只在几通电话和几句重复确认中逐渐形成。每个人都只同意了自己负责的一小步，合在一起却改变了现场先救什么。",
      "项目部的设备台账由机务员填写，办公室每周集中录入。抢险时先口头调度、事后补单很常见，网页上的用途说明往往来自最终结算，而不是最初申请。"
    ],
    "mediaRoute": null
  }
};
  const extras = {
  "x-industry-home": {
    "route": "x-industry-home",
    "site": "industry",
    "title": "宏汛路桥工程信息站首页",
    "date": "2004-07-19",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/industry/home.html",
    "lead": "南埠货场扩建项目周报与设备简讯。",
    "html": "<p>本站供项目合作方查阅，公开栏目只显示企业概况、工程进度和招聘信息。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "16-A",
    "details": [
      "项目部的设备台账由机务员填写，办公室每周集中录入。抢险时先口头调度、事后补单很常见，网页上的用途说明往往来自最终结算，而不是最初申请。",
      "工地上的决定没有写成正式命令，只在几通电话和几句重复确认中逐渐形成。每个人都只同意了自己负责的一小步，合在一起却改变了现场先救什么。"
    ],
    "mediaRoute": "x-industry-home"
  },
  "x-industry-jobs": {
    "route": "x-industry-jobs",
    "site": "industry",
    "title": "招聘：机修工与夜间门卫",
    "date": "2004-07-05",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/industry/jobs.html",
    "lead": "机修工要求会看柴油机铭牌，提供临时宿舍。",
    "html": "<p>夜间门卫两班倒，试用期一个月。应聘者携身份证复印件到项目部登记，不收报名费。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "16-B",
    "details": [
      "租赁设备按小时计费，停机也可能产生费用。水泵和发电机一旦被水淹，项目要承担维修与延期损失，这些数字直接影响负责人当月能否结清工资。",
      "项目部的设备台账由机务员填写，办公室每周集中录入。抢险时先口头调度、事后补单很常见，网页上的用途说明往往来自最终结算，而不是最初申请。"
    ],
    "mediaRoute": "x-industry-home"
  },
  "x-industry-concrete": {
    "route": "x-industry-concrete",
    "site": "industry",
    "title": "本周混凝土进场计划",
    "date": "2004-07-14",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/industry/concrete.html",
    "lead": "三批次浇筑安排因天气顺延。",
    "html": "<p>材料车从东门进入，雨天由值班员确认路面承载情况。未使用的泵车不得占用消防通道。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "16-C",
    "details": [
      "工地上的决定没有写成正式命令，只在几通电话和几句重复确认中逐渐形成。每个人都只同意了自己负责的一小步，合在一起却改变了现场先救什么。",
      "租赁设备按小时计费，停机也可能产生费用。水泵和发电机一旦被水淹，项目要承担维修与延期损失，这些数字直接影响负责人当月能否结清工资。"
    ],
    "mediaRoute": "x-industry-home"
  },
  "x-industry-safety": {
    "route": "x-industry-safety",
    "site": "industry",
    "title": "雨季施工安全摘录",
    "date": "2004-07-10",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/industry/safety.html",
    "lead": "临电箱应垫高，排水设备每班试运转。",
    "html": "<p>现场停电后先确认人员位置，再移动水泵、发电机等抢险设备。检查结果填写在纸质值班表。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "16-D",
    "details": [
      "项目部的设备台账由机务员填写，办公室每周集中录入。抢险时先口头调度、事后补单很常见，网页上的用途说明往往来自最终结算，而不是最初申请。",
      "工地上的决定没有写成正式命令，只在几通电话和几句重复确认中逐渐形成。每个人都只同意了自己负责的一小步，合在一起却改变了现场先救什么。"
    ],
    "mediaRoute": "x-industry-home"
  },
  "x-industry-partners": {
    "route": "x-industry-partners",
    "site": "industry",
    "title": "合作单位与友情链接",
    "date": "2004-06-25",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/industry/partners.html",
    "lead": "设备租赁、建材供应与本地媒体广告合作名录。",
    "html": "<p>澜川生活线为项目提供网页横幅，南埠旅社提供临时住宿。链接是否可用由各单位自行维护。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "16-E",
    "details": [
      "租赁设备按小时计费，停机也可能产生费用。水泵和发电机一旦被水淹，项目要承担维修与延期损失，这些数字直接影响负责人当月能否结清工资。",
      "项目部的设备台账由机务员填写，办公室每周集中录入。抢险时先口头调度、事后补单很常见，网页上的用途说明往往来自最终结算，而不是最初申请。"
    ],
    "mediaRoute": "x-industry-home"
  }
};
  window.ARG_REGISTRY.registerSite("industry", site, pages, extras);
})();
