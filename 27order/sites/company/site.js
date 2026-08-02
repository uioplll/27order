(function () {
  const site = {
  "name": "平康家用氧服务部",
  "tagline": "送氧到家・钢瓶周转・病患家庭咨询",
  "theme": "company",
  "nav": [
    "首页",
    "网上预约",
    "订单查询"
  ],
  "footer": "平康家用氧服务部｜服务热线 083X-71X3186｜网站维护：程隽电脑维修站",
  "navRoutes": [
    "x-company-home",
    "x-company-booking",
    "p-01"
  ],
  "utilityNav": {
    "label": "管理员登录",
    "route": "p-14"
  },
  "homeRoute": "x-company-home",
  "catalogAddress": "http://archive.lanchuan.local/company/articles.html",
  "interaction": {
    "title": "客户留言",
    "names": [
      "王伯家属",
      "南埠住客",
      "河西陈姨",
      "老客户",
      "客服小邵"
    ],
    "messages": [
      "顾师傅搬瓶时会先垫一块旧毛巾，楼道墙一直没磕坏。",
      "夜间电话有时占线，挂断后过十分钟再拨通常能通。",
      "空瓶标签被雨泡花了，还能不能按瓶肩号码退？",
      "停业后才看到这页，希望旧订单不要全部删掉。",
      "押金和退瓶请带原收据到灌装站核对，网页不再受理。"
    ]
  }
};
  const pages = {
  "1": {
    "site": "company",
    "title": "最近处理订单",
    "date": "系统日期：2009-07-17",
    "author": "自动查询页",
    "address": "http://www.pingkang3186.cn/order/latest.asp",
    "lead": "服务部已停止营业。本页为旧系统自动保留，请勿提交真实患者资料。",
    "html": "\n        <table>\n          <thead><tr><th>订单号</th><th>收件人</th><th>当前状态</th><th>预计时间</th></tr></thead>\n          <tbody>\n            <tr><td><strong>P040717-27</strong></td><td>任*娥</td><td><span class=\"stamp\">预计已送达</span></td><td>22:14</td></tr>\n            <tr><td>P040716-19</td><td>陈*山</td><td>历史订单</td><td>17:40</td></tr>\n          </tbody>\n        </table>\n        <p>第27号订单没有红色“人工确认”印章。页面下方仍保留两个入口：</p>\n        <ul class=\"evidence-list\">\n          <li><a href=\"#p-04\" data-route=\"p-04\">为什么旧订单仍在更新？</a></li>\n          <li><a href=\"#p-08\" data-route=\"p-08\">查看 P040717-27 原始预约单</a></li>\n        </ul>",
    "side": [
      {
        "label": "关于停业与遗留订单",
        "route": "p-02"
      },
      {
        "label": "客户故事：顾师傅修收音机",
        "route": "p-07"
      },
      {
        "label": "工商与备案信息",
        "route": "p-06"
      }
    ],
    "next": {
      "route": "p-02",
      "label": "查看停业通知",
      "note": "页面没有解释第27号订单，只把责任推给一名失踪的配送员。"
    },
    "details": [
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。",
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。"
    ],
    "mediaRoute": "p-02"
  },
  "2": {
    "site": "company",
    "title": "关于本服务部停止营业的通知",
    "date": "2005-02-18",
    "author": "平康家用氧服务部",
    "address": "http://www.pingkang3186.cn/notice/close.htm",
    "lead": "因车辆、货款与周转氧气瓶同时失联，本部已无法继续提供配送服务。",
    "html": "\n        <p>本部配送员顾某于2004年7月17日晚驾驶尾号 <strong>E4186</strong> 的车辆离开，车上载有十二只氧气瓶及当日待存货款 <strong>11600元</strong>，此后人员、车辆与财物均未归还。</p>\n        <p>事件导致本部无法履行后续订单并承担大额赔付。经慎重考虑，自2005年2月18日起停止营业。</p>\n        <p>相关报道：<a href=\"#p-03\" data-route=\"p-03\">《氧气配送员携款失联，急用订单蹊跷显示送达》</a></p>",
    "side": [
      {
        "label": "订单 P040717-27",
        "route": "p-01"
      },
      {
        "label": "员工姓名已调整说明",
        "route": "p-15"
      },
      {
        "label": "旧客户退款名单（链接失效）"
      }
    ],
    "next": {
      "route": "p-03",
      "label": "阅读当年的地方新闻",
      "note": "新闻补上了一个看似完整的逃跑动机。"
    },
    "details": [
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。",
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。"
    ],
    "mediaRoute": "p-03"
  },
  "4": {
    "site": "company",
    "title": "订单查询帮助",
    "date": "最后修订：2003-09-04",
    "author": "网站维护员",
    "address": "http://www.pingkang3186.cn/help/query.htm",
    "lead": "网页状态用于估算配送进度，不代替工作人员与客户确认。",
    "html": "\n        <table>\n          <tr><th>页面状态</th><th>含义</th></tr>\n          <tr><td>已受理</td><td>订单已经保存，尚未确认车辆。</td></tr>\n          <tr><td>配送中</td><td>系统时间超过预计出发时间。</td></tr>\n          <tr><td>预计已送达</td><td>系统时间超过预计完成时间，不代表客户签收。</td></tr>\n          <tr><td><span class=\"stamp\">人工确认</span></td><td>工作人员与客户核实后手工添加。</td></tr>\n        </table>\n        <p class=\"system-note\">查询结果仅供估算，是否送达请以人工确认记录为准。</p>\n        <p>网站维护：<a href=\"#p-05\" data-route=\"p-05\">程隽电脑维修站・旧站搬家说明</a></p>",
    "side": [
      {
        "label": "返回订单查询",
        "route": "p-01"
      },
      {
        "label": "预约须知"
      },
      {
        "label": "钢瓶周转说明"
      }
    ],
    "next": {
      "route": "p-05",
      "label": "查看旧站搬家说明",
      "note": "维护员曾公开解释订单为什么会在多年后重新变化。"
    },
    "details": [
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。",
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。"
    ],
    "mediaRoute": "p-05"
  },
  "6": {
    "site": "company",
    "title": "工商与备案信息",
    "date": "资料更新：2003-03-12",
    "author": "平康家用氧服务部",
    "address": "http://www.pingkang3186.cn/about/license.htm",
    "lead": "本页所列资料用于患者核实服务主体与固定联系方式。",
    "html": "\n        <table>\n          <tr><th>登记名称</th><td>澜川市平康家用氧服务部</td></tr>\n          <tr><th>负责人</th><td>邵育梅 / SHAO YUMEI</td></tr>\n          <tr><th>开业时间</th><td>2002年03月</td></tr>\n          <tr><th>办公室电话</th><td>083X-71X3186</td></tr>\n          <tr><th>网站备案</th><td>LC-2003-03186</td></tr>\n        </table>\n        <p class=\"system-note\"></p>\n        <p><a href=\"#p-07\" data-route=\"p-07\">客户来信：顾师傅帮王伯修好了旧收音机</a></p>",
    "side": [
      {
        "label": "管理员登录",
        "route": "p-14"
      },
      {
        "label": "客户故事：修收音机",
        "route": "p-07"
      },
      {
        "label": "合作单位",
        "route": "p-16"
      }
    ],
    "next": {
      "route": "p-07",
      "label": "阅读顾师傅帮王伯修收音机",
      "note": "这篇宣传文同时留下了一句话、一条广告和一只黑狗。"
    },
    "details": [
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。",
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。"
    ],
    "mediaRoute": "p-07"
  },
  "7": {
    "site": "company",
    "title": "顾师傅帮王伯修好了旧收音机",
    "date": "2003-08-22",
    "author": "客户来信整理",
    "address": "http://www.pingkang3186.cn/story/radio.htm",
    "lead": "送氧不只是把瓶子搬到门口。王伯说，顾师傅总会等他把第一口气喘匀。",
    "image": "客户故事配图预留。旧木桌上放着红灯牌收音机、扳手与氧气瓶阀门；门边露出黑狗煤球半个身体，不出现顾成礼正脸。",
    "html": "\n        <p>王伯不会调减压阀，每次都把手拧得发抖。顾师傅就让他先停下来：“阀门别猛拧，<strong>数到五再开</strong>。”</p>\n        <p>那天王伯的收音机没有声音。顾师傅拆开后盖，重新接了一根松动的线。王伯要付维修费，他只拿走了桌上的半个冷馒头。</p>\n        <p></p>\n        <div class=\"ad-block\"><a href=\"#p-19\" data-route=\"p-19\"><strong>澜川夜航网络电台</strong><br>晚八点以后，给还没回家的人</a></div>",
    "side": [
      {
        "label": "宠物领养站：煤球记录"
      },
      {
        "label": "更多客户故事"
      },
      {
        "label": "顾师傅家庭氧疗答疑",
        "route": "p-10"
      }
    ],
    "next": {
      "route": "p-08",
      "label": "返回第27号订单，查看原始预约单",
      "note": "客户故事证明了顾成礼独有的说话习惯；订单则会把调查带到南埠旅社。"
    },
    "details": [
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。",
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。"
    ],
    "mediaRoute": "x-personal-cat"
  },
  "8": {
    "site": "company",
    "requires": "lock-14",
    "title": "订单 P040717-27｜原始预约单",
    "date": "提交：2004-07-17 08:06",
    "author": "网上预约",
    "address": "http://www.pingkang3186.cn/order/print.asp?id=P040717-27",
    "lead": "本页为订单提交时生成的打印预览，不随配送地址修改而覆盖。",
    "html": "\n        <table>\n          <tr><th>订单号</th><td>P040717-27</td></tr>\n          <tr><th>患者</th><td>任素娥</td></tr>\n          <tr><th>登记地址</th><td>东柳巷17号</td></tr>\n          <tr><th>联系电话</th><td>083X-73X6042</td></tr>\n          <tr><th>完整备注</th><td><strong>临时住南埠旅社205，桥南封路，请从盐仓路进。</strong></td></tr>\n          <tr><th>需要数量</th><td>4瓶，急用</td></tr>\n        </table>\n        <p>订单附带商户资料：<a href=\"#p-09\" data-route=\"p-09\" data-direct-route>南埠旅社长期住宿广告</a></p>",
    "side": [
      {
        "label": "订单当前状态",
        "route": "p-01"
      },
      {
        "label": "南埠旅社",
        "route": "p-09"
      },
      {
        "label": "订单处理记录",
        "route": "p-14"
      }
    ],
    "next": {
      "route": "p-09",
      "label": "进入南埠旅社分类信息页",
      "note": "一条普通长租广告留下了房号、电话和一个病友站头像。"
    },
    "details": [
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。",
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。"
    ],
    "mediaRoute": "p-09"
  },
  "14": {
    "site": "company",
    "layout": "admin",
    "title": "平康管理员登录｜只读存档",
    "date": "迁移后状态：只读",
    "author": "旧业务系统",
    "address": "http://www.pingkang3186.cn/staff/login.asp",
    "lead": "管理员可凭旧账号查看历史订单。任何修改功能均已停用。",
    "html": "<p><span style=\"color:#FFFFF\">备忘：</span><span style=\"color:#eef2f4\">账号使用负责人姓名全拼，初始密码由电话后四位与开业月份组成。</span></p>", 
    "lock": {
      "id": "lock-14",
      "title": "管理员身份验证",
      "hint": "平康送氧到家，守住每一口呼吸。",
      "fields": [
        {
          "name": "username",
          "label": "管理员账号",
          "placeholder": "name",
          "autocomplete": "username"
        },
        {
          "name": "password",
          "label": "登录密码",
          "placeholder": "******",
          "type": "password",
          "autocomplete": "current-password"
        }
      ],
      "values": {
        "username": "shaoyumei",
        "password": "318603"
      },
      "success": "\n          <h2>订单操作记录｜P040717-27</h2>\n          <table>\n            <tr><th>时间</th><th>操作员</th><th>内容</th></tr>\n            <tr><td>20:26</td><td>邵</td><td>6042来电，急用</td></tr>\n            <tr><td>20:34</td><td>邵</td><td>改送南埠205</td></tr>\n            <tr><td>21:37</td><td>邵</td><td>6042来电：顾已到南埠</td></tr>\n            <tr><td>21:41</td><td>邵</td><td>返店，带回空瓶8</td></tr>\n            <tr><td>次日 07:42</td><td>邵</td><td>地址恢复东柳巷；配送员改为“客户自取”</td></tr>\n          </table>\n          <p class=\"system-note\">历史副本仅供查询，操作记录不可修改。</p>"
    },
    "side": [
      {
        "label": "工商与备案信息",
        "route": "p-06"
      },
      {
        "label": "订单原始预约单",
        "route": "p-08"
      },
      {
        "label": "程隽维护说明",
        "route": "p-15"
      }
    ],
    "next": {
      "route": "p-15",
      "label": "查看程隽的维护记录",
      "note": "员工账号之后的帖子和全站姓名替换，都有明确操作者。"
    },
    "details": [
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。",
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。"
    ],
    "mediaRoute": "p-15"
  },
  "27": {
    "site": "company",
    "requires": "lock-26",
    "layout": "admin",
    "title": "订单 P040717-27｜旧留言",
    "date": "留言表迁移存档",
    "author": "平康订单系统",
    "address": "http://www.pingkang3186.cn/order/message.asp?id=P040717-27",
    "lead": "为保护患者隐私，请输入下单联系电话后四位。",
    "html": "<p>联系电话可在预约单中确认。</p>",
    "catalogHidden": true,
    "lock": {
      "id": "lock-27",
      "requires": "lock-26",
      "title": "订单联系人验证",
      "hint": "输入下单联系电话后四位。",
      "fields": [
        {
          "name": "answer",
          "label": "电话后四位",
          "placeholder": "****"
        }
      ],
      "values": {
        "answer": "6042"
      },
      "success": "\n          <div class=\"final-verdict\">\n            <h2>客服未读留言</h2>\n            <p>提交时间：2004-07-17 23:31</p>\n            <p>状态：通知邮件退回／客服未读</p>\n            <blockquote>不用催了，顾师傅来过。四瓶留在205，他说后半夜也得有人用。</blockquote>\n          </div>"
    },
    "side": [
      {
        "label": "南埠旅社电话 6042",
        "route": "p-09"
      },
      {
        "label": "顾小满私人相册",
        "route": "p-26"
      },
      {
        "label": "返回最初的旧闻报道",
        "route": "p-03"
      }
    ],
    "details": [
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。",
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。"
    ],
    "mediaRoute": "p-09"
  }
};
  const extras = {
  "x-company-home": {
    "route": "x-company-home",
    "site": "company",
    "title": "平康家用氧服务部首页",
    "date": "2004-07-16",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/company/home.html",
    "lead": "本服务部已停止营业，旧网页仅保留历史查询。",
    "html": "<div class=\"urgent-notice\"><strong>停业紧急通知（置顶）</strong><p>平康家用氧服务部自2005年2月18日起停止营业，不再接受预约、配送或退瓶申请。旧订单仅供历史查询。</p><p><a href=\"#p-02\" data-route=\"p-02\">查看完整停业通知</a></p></div><p>原营业时间为早七点至晚十点。急症请直接联系正规医疗急救机构。</p>",
    "label": "01-A",
    "details": [
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。",
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。"
    ],
    "mediaRoute": "x-company-home"
  },
  "x-company-booking": {
    "route": "x-company-booking",
    "site": "company",
    "title": "网上预约",
    "date": "功能停用：2005-02-18",
    "author": "旧预约系统",
    "address": "http://archive.lanchuan.local/company/booking.html",
    "lead": "服务部已停业，预约功能不可使用。",
    "html": "<div class=\"urgent-notice\"><strong>本功能已停用</strong><p>请勿提交患者姓名、电话或住址。页面仅用于还原旧站功能。</p></div><fieldset class=\"disabled-booking\" disabled><label>联系人<input type=\"text\"></label><label>联系电话<input type=\"text\"></label><label>配送地址<input type=\"text\"></label><button type=\"button\">提交预约</button></fieldset>",
    "label": "功能",
    "details": [
      "预约表单停用后不再写入数据库，旧订单查询使用的是停业前留下的只读副本。"
    ],
    "mediaRoute": null
  },
  "x-company-price": {
    "route": "x-company-price",
    "site": "company",
    "title": "家用氧配送价目表",
    "date": "2004-06-28",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/company/price.html",
    "lead": "钢瓶押金、灌装和上门搬运费用说明。",
    "html": "<p>六升瓶与十升瓶分别计价，五楼以上无电梯加收搬运费。空瓶换满瓶时请核对瓶肩编号并索取手写收据。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "01-B",
    "details": [
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。",
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。"
    ],
    "mediaRoute": "x-company-home"
  },
  "x-company-area": {
    "route": "x-company-area",
    "site": "company",
    "title": "配送范围与街道对照",
    "date": "2004-07-01",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/company/area.html",
    "lead": "南埠、河西与老城片区采用不同派车时段。",
    "html": "<p>南埠旅社集中区通常安排在晚间末班。遇道路施工，配送员可从货场便道绕行，超出范围的订单由客服电话确认。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "01-C",
    "details": [
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。",
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。"
    ],
    "mediaRoute": "x-company-home"
  },
  "x-company-care": {
    "route": "x-company-care",
    "site": "company",
    "title": "家庭氧疗常见问题",
    "date": "2004-05-19",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/company/care.html",
    "lead": "钢瓶应远离炉火，阀门不得沾油。",
    "html": "<p>本页只说明设备的一般保管方法，不能替代医生诊断。发现漏气或阀门损坏时，应开窗并联系服务部更换。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "01-D",
    "details": [
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。",
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。"
    ],
    "mediaRoute": "x-company-home"
  },
  "x-company-story": {
    "route": "x-company-story",
    "site": "company",
    "title": "客户故事：一台修好的旧收音机",
    "date": "2004-04-06",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/company/story.html",
    "lead": "配送员顾师傅顺手修好了候诊室里的收音机。",
    "html": "<p>收音机后来能收到夜航电台。店里那条叫煤球的黑狗常趴在纸箱旁，照片下方还留着最初的领养日期。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "01-E",
    "details": [
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。",
      "服务部的订单先由电话员抄在复写纸上，晚上再录入网页。配送员回店后需在纸单右上角签字，遇到夜间急单则常由第二天早班补录，因此网页状态与实际送达时间并不总是同步。"
    ],
    "mediaRoute": "x-company-home"
  },
  "x-company-closed": {
    "route": "x-company-closed",
    "site": "company",
    "title": "停业后的钢瓶退还办法",
    "date": "2005-03-02",
    "author": "旧站页面",
    "address": "http://archive.lanchuan.local/company/closed.html",
    "lead": "服务部停止营业后，押金单可交原灌装站核验。",
    "html": "<p>没有收据的旧瓶需抄下瓶肩编号。网页查询只作历史记录使用，系统生成的预计时间不代表仍在配送。</p><p>页面下方原有的打印、推荐和联系管理员功能已经失效；站内文字链接仍按存档关系保留。</p>",
    "label": "01-F",
    "details": [
      "店面不大，电话桌、称重秤和维修工具挤在同一间屋里。顾成礼送完最后一趟通常会替同事检查车灯，再把女儿第二天要带的早饭钱压在收音机下面。",
      "钢瓶按瓶肩编号周转，客户手中的押金条只写后四位。附近几家诊所和旅社长期使用同一批瓶，值班员仅凭号码就能认出它们大概来自哪条线路。"
    ],
    "mediaRoute": "x-company-home"
  },
  "x-company-cooperation": {
    "route": "x-company-cooperation",
    "site": "company",
    "requires": "lock-10",
    "title": "合作通知：工地急救氧周转安排",
    "date": "2004-04-11",
    "author": "业务联络",
    "address": "http://archive.lanchuan.local/company/notice/cooperation.html",
    "lead": "南埠货场扩建期间，部分急救氧瓶由合作单位统一登记。",
    "html": "<p>工地急救用品按月核对瓶肩编号，平康只负责家庭氧与现场备用瓶之间的周转登记。</p><p>合作单位公示与项目资料：<a href=\"#x-industry-home\" data-route=\"x-industry-home\">宏汛路桥工程信息站</a></p>",
    "label": "01-G",
    "details": [
      "合作通知夹在价目表与配送范围之间，正文没有列出设备编号。具体票据由合作单位另行公示。"
    ],
    "mediaRoute": null
  }
};
  window.ARG_REGISTRY.registerSite("company", site, pages, extras);
})();
