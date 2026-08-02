(function () {
  const registry = window.ARG_REGISTRY;

  const navigationPages = {
    "x-news-bus": `
      <p>南埠货场施工期间，12路、17路和货场专线临时改走棉纺路。站牌来不及重做，公交公司先用红纸贴在原站牌背面，雨水浸湿后仍能看见旧线路名。</p>
      <table><tr><th>线路</th><th>临时候车点</th><th>末班时间</th></tr><tr><td>12路</td><td>棉纺路口粮店前</td><td>21:10</td></tr><tr><td>17路</td><td>三院后门报刊亭</td><td>20:45</td></tr><tr><td>货场专线</td><td>东门外值班棚</td><td>19:30</td></tr></table>
      <p>售票员提醒，暴雨时车辆只到河西桥，不下盐仓路坡。老人、学生和携带大件行李的乘客可以从前门上车，请提前准备零钱。</p>
      <h3>同栏便民消息</h3><ul class="evidence-list"><li><a href="#x-news-nightmarket" data-route="x-news-nightmarket">雨后夜市恢复摆摊</a></li><li><a href="#x-news-library" data-route="x-news-library">市图书馆延长暑期阅览时间</a></li></ul>`,
    "x-news-letters": `
      <p>读者来信由早班编辑每天十点统一拆阅。涉及水电、公交和市场管理的问题会抄送主管单位；邻里纠纷、寻人和商业投诉只保留联系方式，不公开完整住址。</p>
      <table><tr><th>本周来信</th><th>处理状态</th></tr><tr><td>三院电话亭雨棚漏水</td><td>维护单位已答复</td></tr><tr><td>河西桥下路灯连续三晚不亮</td><td>转市政值班室</td></tr><tr><td>中心市场公平秤缺砝码</td><td>记者周五回访</td></tr><tr><td>东柳巷拆迁信件退回</td><td>转门牌查询栏目</td></tr></table>
      <p class="system-note">请勿在来信正文中填写病历、身份证号或银行卡号。纸质来信采用与报纸相同的删节规则。</p>
      <p>编辑部每月会选几封与日常生活有关的来信刊登，例如<a href="#x-news-schoolgate" data-route="x-news-schoolgate">小学门口早餐摊占道问题</a>。</p>`,
    "x-news-archive": `
      <p>旧闻库收录2003年至2005年的社会版、民生版和读者来信。早期稿件来自两套数据库，标题可能沿用报纸版，正文则显示网页最后一次修改后的内容。</p>
      <table><tr><th>检索项</th><th>可用方式</th></tr><tr><td>日期</td><td>按年、月或完整日期</td></tr><tr><td>关键词</td><td>支持标题与正文，不支持多个词同时搜索</td></tr><tr><td>记者</td><td>使用署名，不含实习编辑</td></tr><tr><td>版面</td><td>社会、民生、热线、商户回应</td></tr></table>
      <h3>常见问题</h3><ul class="evidence-list"><li>检索结果中的“更新”只表示页面被迁移，不代表新闻事实发生变化。</li><li>撤稿页可能仍被读者评论、打印版或外站引用。</li><li>同一天的简讯与长稿可能使用不同标题，应结合发布时间判断先后。</li></ul>`,

    "x-listing-rent": `
      <p>房屋租售栏按“整租、合租、短住、门面”分类。信息保留三十天，发布者可凭原电话号码顶帖；已经租出的房间如果无人主动删除，仍会留在旧页中。</p>
      <table><tr><th>区域</th><th>房型</th><th>月租</th><th>备注</th></tr><tr><td>河西桥</td><td>一楼单间</td><td>260元</td><td>公共厨房</td></tr><tr><td>三院后街</td><td>床位</td><td>90元</td><td>限陪护家属</td></tr><tr><td>东柳巷</td><td>两室</td><td>待议</td><td>拆迁前短租</td></tr></table>
      <p>看房前请核对门牌和电话号码，不要向陌生账户预付押金。短住旅社和私人出租房的登记方式不同，陪护老人时应先确认楼梯宽度和夜间热水。</p>
      <p><a href="#x-listing-studentroom" data-route="x-listing-studentroom">同栏：师专新生合租征室友</a></p>`,
    "x-listing-sewing": `
      <p>二手信息栏每天上午清理重复广告。旧家电、缝纫机和自行车通常当面试用，买卖双方在帖子里留下的价格只是参考，搬运费另算。</p>
      <table><tr><th>物品</th><th>状态</th><th>参考价</th></tr><tr><td>蝴蝶牌脚踏机</td><td>机头顺，木台有划痕</td><td>120元</td></tr><tr><td>永久牌女车</td><td>后胎慢漏气</td><td>65元</td></tr><tr><td>红灯牌收音机</td><td>短波无声</td><td>20元</td></tr></table>
      <p>如意旧机行的师傅说，抽屉里的旧票据和线轴最好交还原主，不要当废纸扔掉。需要上门估价时，要提前说明楼层和机器是否还能踩动。</p>
      <p><a href="#x-listing-bicycle" data-route="x-listing-bicycle">同栏：给孩子收一辆二六女车</a></p>`,
    "x-listing-care": `
      <p>家政陪护栏只发布做饭、守夜、陪诊和简单清洁信息，不提供医疗操作。发布者多使用公用电话回电，留言时应写清可联系时段，不要留下完整病房号。</p>
      <table><tr><th>服务</th><th>通常时段</th><th>说明</th></tr><tr><td>夜间陪护</td><td>19:00—次日07:00</td><td>家属需交代用药时间</td></tr><tr><td>陪同复诊</td><td>半天</td><td>车费另计</td></tr><tr><td>病号饭</td><td>午、晚两餐</td><td>自备饭盒</td></tr></table>
      <p>需要吸氧、注射或处理突发呼吸困难时，应联系医院和正规服务点。照护者可以帮忙拨电话，但不应替代专业人员判断。</p>
      <p><a href="#x-listing-tutor" data-route="x-listing-tutor">同栏：暑期替小学生看作业</a></p>`,

    "x-health-tube": `
      <p>雨季里软管表面容易返潮，版主整理了病友们最常见的处理办法。这里讨论的是日常保管，不适用于正在漏气或已经老化开裂的管路。</p>
      <ol><li>先关闭瓶阀并按供应方说明卸下软管。</li><li>用干净纱布擦去外侧水珠，放在阴凉通风处自然晾干。</li><li>不要涂油、用火烘烤或把接口浸在水里试漏。</li><li>重新连接后先听接口是否有持续漏气声。</li></ol>
      <blockquote>版主青栀：不同设备接口不完全一样，看不懂就给供氧点打电话。慢一点没有关系，别凭经验硬拧。</blockquote>
      <p><a href="#x-health-bottlecart" data-route="x-health-bottlecart">相关经验：自制小推车搬氧气瓶安全吗</a></p>`,
    "x-health-meal": `
      <p>这个版块原本只讨论病号饭，后来变成了陪护家属互相提醒休息的地方。很多人写下自己在病房走廊吃过的最简单一顿饭。</p>
      <table><tr><th>时间</th><th>能提前准备的东西</th><th>给照护者的提醒</th></tr><tr><td>清晨</td><td>软粥、煮蛋</td><td>先喝水再交班</td></tr><tr><td>下午</td><td>切小块的水果</td><td>轮流到楼下走十分钟</td></tr><tr><td>夜里</td><td>保温杯、饼干</td><td>不要一个人连续守两夜</td></tr></table>
      <p>“守夜人”写道，照护者累到听不清电话时，最容易漏掉送药和换瓶的时间。他建议把重要号码和交班事项写在同一本小册子上。</p>
      <p><a href="#x-health-sleep" data-route="x-health-sleep">相关讨论：陪床时怎样轮班睡两个小时</a></p>`,
    "x-health-directory": `
      <p>本地服务索引由病友家属自发维护，按月核对一次。号码可能停机、转接或已经更换经营者，紧急情况下不要只依赖网页。</p>
      <table><tr><th>服务类型</th><th>区域</th><th>备注</th></tr><tr><td>家用氧配送</td><td>河西、南埠</td><td>夜间是否接单需电话确认</td></tr><tr><td>轮椅短租</td><td>三院后街</td><td>押金需收据</td></tr><tr><td>陪诊</td><td>市一院、三院</td><td>不代领处方药</td></tr><tr><td>社区诊所</td><td>沿河片区</td><td>夜间值班人数有限</td></tr></table>
      <p class="system-note">索引只收录公开服务信息。若商户停止营业，请在对应栏目文章下留言，管理员核实后标灰。</p>
      <p><a href="#x-health-weather" data-route="x-health-weather">本周提醒：闷热天气的通风与休息</a></p>`,

    "x-gallery-west": `
      <p>这一册从澜川出发，经石岭、双河到川西货站。老罗不爱拍景点，只拍能停车、加水和吃热饭的地方，照片说明里常夹着给其他司机的路线提醒。</p>
      <table><tr><th>照片</th><th>地点</th><th>说明</th></tr><tr><td>03</td><td>石岭加水点</td><td>水管在院墙后，先问老板</td></tr><tr><td>08</td><td>双河修胎铺</td><td>夜里敲蓝铁门</td></tr><tr><td>12</td><td>老饭馆</td><td>面里放酸菜，不够可添</td></tr><tr><td>17</td><td>川西货站</td><td>排队时不要堵住地磅</td></tr></table>
      <p>相册最后一张只拍了空搪瓷碗和压在桌角的运单。留言里有人认出桌布，问老板娘是不是还在原来的路口。</p>
      <p><a href="#x-gallery-breakfast" data-route="x-gallery-breakfast">小相册：凌晨五点的司机早餐</a></p>`,
    "x-gallery-rain": `
      <p>老罗把所有隔着挡风玻璃拍的雨夜照片放在同一册。大多数画面只有雨刷、尾灯和被水照亮的路牌，文件名也只是相机自动生成的数字。</p>
      <table><tr><th>序号</th><th>拍摄位置</th><th>可见内容</th></tr><tr><td>02</td><td>河西桥</td><td>公交车停在桥头等水退</td></tr><tr><td>06</td><td>南埠货场外</td><td>临时围挡与一盏黄色警示灯</td></tr><tr><td>09</td><td>长途站</td><td>候车棚下挤着三辆货车</td></tr></table>
      <p>上传者承认几张照片的时间写错了一天，因为他是在第二天回家后一起导入电脑的。判断先后只能看照片说明和路边仍开着的店。</p>
      <p><a href="#x-gallery-milepost" data-route="x-gallery-milepost">小相册：被货车司机写满的里程碑</a></p>`,
    "x-gallery-drivers": `
      <p>合影拍在城西老饭馆门口。司机们习惯互叫外号，老罗只在说明里写了“老周、岚客、长脚、阿平”，没有留下真名。</p>
      <table><tr><th>外号</th><th>常跑线路</th><th>大家记得的事</th></tr><tr><td>老周</td><td>澜川—石岭</td><td>车上总备两根风扇皮带</td></tr><tr><td>岚客</td><td>县际客运</td><td>下坡前一定点两次刹车</td></tr><tr><td>长脚</td><td>建材短驳</td><td>吃面从不加辣</td></tr><tr><td>阿平</td><td>冷库送货</td><td>帮人带过三个月的信</td></tr></table>
      <p>缺失的两张底片据说拍糊了，一张是老板娘端菜，另一张是一条在货车底下睡觉的黄狗。</p>
      <p><a href="#x-gallery-roadside" data-route="x-gallery-roadside">小相册：路边等货的三个下午</a></p>`,

    "x-public-sanitation": `
      <p>连续降雨后，低洼院落和临时安置点要优先检查饮水、食物和通风。出现持续腹泻、发热、头痛或呼吸困难时，应尽快到附近医疗点，不要只在家观察。</p>
      <table><tr><th>发放点</th><th>物资</th><th>时间</th></tr><tr><td>沿河社区</td><td>消毒片、宣传单</td><td>08:30—17:30</td></tr><tr><td>南埠小学</td><td>桶装水</td><td>每日两车</td></tr><tr><td>河西卫生站</td><td>常用肠胃药咨询</td><td>上午</td></tr></table>
      <ul class="evidence-list"><li>被洪水浸过的熟食和开封药品不要继续使用。</li><li>临时使用柴油机时必须放在室外通风位置。</li><li>老人和慢性病患者转移时带上常用药与服务电话。</li></ul>
      <p><a href="#x-public-water" data-route="x-public-water">便民公告：河西片区停水送水安排</a></p>`,
    "x-public-road": `
      <p>南埠货场便道施工分三段进行，工程车辆原则上由东门进出。围挡调整、雨天封路和夜间材料进场均由现场值班室临时通知。</p>
      <table><tr><th>日期</th><th>施工内容</th><th>通行安排</th></tr><tr><td>7月12—16日</td><td>东门路基整平</td><td>社会车辆绕棉纺路</td></tr><tr><td>7月17—22日</td><td>排水沟与涵洞检查</td><td>暴雨时可临时封闭</td></tr><tr><td>7月23—31日</td><td>货场内场硬化</td><td>夜间材料车优先</td></tr></table>
      <p>值班室提醒司机不要把车辆停在围挡转角，以免挡住视线。纸质公告贴在货场东门、棉纺路口和长途站调度室。</p>
      <p><a href="#x-public-bridge" data-route="x-public-bridge">同栏公告：河西桥栏杆油漆施工</a></p>`,
    "x-public-query": `
      <p>南埠片区在货场扩建和东柳巷拆迁期间调整过一批门牌。旧门牌仍可用于邮政投递，但办理工商、户籍和水电业务时应填写新号码。</p>
      <table><tr><th>旧地址</th><th>新地址</th><th>过渡说明</th></tr><tr><td>南埠路105号</td><td>货场东巷7号</td><td>旅社沿用旧牌至年底</td></tr><tr><td>东柳巷17号</td><td>河堤新村2栋</td><td>拆迁住户邮件转投</td></tr><tr><td>棉纺路口临建</td><td>无固定门牌</td><td>按单位名称投递</td></tr></table>
      <p>网页查询只适合核对公开地址。找不到结果时，可携旧信封或缴费单到街道窗口人工确认。</p>
      <p><a href="#x-public-library" data-route="x-public-library">便民公告：暑期阅览室开放时间</a></p>`,

    "x-forum-fuel": `
      <div class="forum-post"><div class="forum-user">蓝货车<br>注册司机</div><div class="forum-message"><span class="forum-floor">楼主</span>凌晨一点到澜川，单位报销只认机打票。城北还有哪家开门？最好能加柴油。</div></div>
      <div class="forum-post"><div class="forum-user">跑冷库的周二</div><div class="forum-message"><span class="forum-floor">2楼</span>西环口那家二十四小时，但打印机坏了会手写。进站前先看地上有没有排队的油桶。</div></div>
      <div class="forum-post"><div class="forum-user">岚客17</div><div class="forum-message"><span class="forum-floor">4楼</span>城北桥在修，重车别走桥洞。绕西环多八公里，夜里反而快。</div></div>
      <p class="system-note">主题状态：问题已解决。楼主于次日补充“票已开到”。</p>
      <p><a href="#x-forum-raincoat" data-route="x-forum-raincoat">同版主题：驾驶室漏雨，哪种雨布耐用</a></p>`,
    "x-forum-repair": `
      <div class="forum-post"><div class="forum-user">机务阿良</div><div class="forum-message"><span class="forum-floor">楼主</span>求老式柴油发电机皮带轮，铭牌磨花，只看清末尾一个3。轴径量出来是28毫米。</div></div>
      <div class="forum-post"><div class="forum-user">夜班扳手</div><div class="forum-message"><span class="forum-floor">3楼</span>别只看铭牌，带旧件去机电市场比键槽。皮带如果吃边，先查底座是不是淋雨后歪了。</div></div>
      <div class="forum-post"><div class="forum-user">机务阿良</div><div class="forum-message"><span class="forum-floor">6楼</span>已经借到，尺寸合适。谢谢，不再收购。</div></div>
      <p>版主把本帖移入“已解决”，并提醒大型设备维修记录仍应填回单位台账。</p>
      <p><a href="#x-forum-radiofix" data-route="x-forum-radiofix">同版主题：车载收音机一过坑就断声</a></p>`,
    "x-forum-wages": `
      <div class="forum-post"><div class="forum-user">泥工三组</div><div class="forum-message"><span class="forum-floor">楼主</span>四月到六月只发了生活费，项目部说雨停后一起结。孩子下周交学费，有人收到准信吗？</div></div>
      <div class="forum-post"><div class="forum-user">河滩石</div><div class="forum-message"><span class="forum-floor">2楼</span>班组长让周一带工牌去签字。身份证号码别发在论坛，网吧机器会留记录。</div></div>
      <div class="forum-post"><div class="forum-user">卖雨靴</div><div class="forum-message"><span class="forum-floor">5楼</span>借楼，四双四十三码雨靴，工地门口自取。版主觉得不合适可以删。</div></div>
      <p>讨论里更多人问的是饭钱、房租和家里病人的药费。帖子没有结论，只留下“周一再去”的约定。</p>
      <p><a href="#x-forum-lunchbox" data-route="x-forum-lunchbox">同版闲聊：夜班饭盒总被拿错</a></p>`,
    "x-forum-rules": `
      <h3>发帖规则</h3><ol><li>路况信息请写清方向、时间和车型，不要只写“前面堵了”。</li><li>欠薪与工伤讨论不得公开身份证、家庭住址和完整电话号码。</li><li>单位值班账号可以多人使用，但应在正文末尾署姓名缩写。</li><li>重复广告、辱骂和未经证实的点名内容会被删除。</li></ol>
      <h3>删帖与引用</h3><p>删除主题只会隐藏原楼层，已经被其他用户完整引用的文字不会自动消失。版主可再次编辑引用，但通常只处理电话号码和姓名。</p>
      <table><tr><th>账号状态</th><th>可用功能</th></tr><tr><td>游客</td><td>阅读公开主题</td></tr><tr><td>注册用户</td><td>回复、下载小附件</td></tr><tr><td>单位账号</td><td>发布招聘和公告，需署名</td></tr></table>`,

    "x-industry-jobs": `
      <p>南埠项目因夜间施工增聘机修工、门卫和食堂帮工。招聘由项目办公室现场登记，不收报名费，也不通过中介代办。</p>
      <table><tr><th>岗位</th><th>人数</th><th>要求</th><th>安排</th></tr><tr><td>机修工</td><td>2</td><td>会看柴油机铭牌</td><td>提供临时宿舍</td></tr><tr><td>夜间门卫</td><td>2</td><td>能写交接记录</td><td>两班倒</td></tr><tr><td>食堂帮工</td><td>1</td><td>负责早晚餐</td><td>包两餐</td></tr></table>
      <p>试用期一个月。应聘者携身份证复印件和近期照片到东门项目部登记，工作服押金从首月工资中分两次扣除。</p>
      <p><a href="#x-industry-dorm" data-route="x-industry-dorm">职工生活：临时宿舍用电说明</a></p>`,
    "x-industry-concrete": `
      <p><strong>南埠货场扩建项目（项目代号 NB-03）</strong>本周原计划完成货场东区三批混凝土浇筑，因连续降雨顺延。材料车到场前须由门卫电话确认，避免在棉纺路口长时间排队。</p>
      <table><tr><th>批次</th><th>原日期</th><th>调整后</th><th>使用位置</th></tr><tr><td>C20-0714</td><td>7月14日</td><td>已完成</td><td>东门垫层</td></tr><tr><td>C25-0717</td><td>7月17日</td><td>待雨停</td><td>排水沟侧墙</td></tr><tr><td>C30-0719</td><td>7月19日</td><td>顺延两日</td><td>货台基础</td></tr></table>
      <p>未使用的泵车不得占用消防通道。夜间卸料应关闭倒车蜂鸣器以外的扩音设备，减少对旅社和居民区的影响。</p>
      <p><a href="#x-industry-canteen" data-route="x-industry-canteen">项目简讯：食堂本周菜单与饭票补办</a></p>`,
    "x-industry-safety": `
      <p>雨季检查由安全员、机务员和值班电工共同签字。检查表留在门卫室，网页只摘录必须每班确认的项目。</p>
      <table><tr><th>检查项</th><th>合格要求</th><th>责任岗位</th></tr><tr><td>临时配电箱</td><td>垫高、箱门关闭</td><td>值班电工</td></tr><tr><td>水泵试运转</td><td>无异响、出水正常</td><td>机务员</td></tr><tr><td>发电机</td><td>油料够一班、排气朝外</td><td>夜班机修</td></tr><tr><td>救生绳</td><td>干燥、放在取用架</td><td>安全员</td></tr></table>
      <p class="system-note">遇人员险情应先清点和转移人员，再处置可移动设备。口头调度结束后仍须补填纸质记录。</p>
      <p><a href="#x-industry-toolcheck" data-route="x-industry-toolcheck">班组通知：公用工具每周清点</a></p>`,
    "x-industry-partners": `
      <p>本页汇总材料供应、设备租赁、住宿餐饮和媒体宣传单位。合作关系以当期合同和送货单为准，友情链接仅供联系，不代表长期协议。</p>
      <table><tr><th>类别</th><th>单位</th><th>主要事项</th></tr><tr><td>建材</td><td>河西砂石场</td><td>碎石与回填料</td></tr><tr><td>设备</td><td>澜川机电租赁</td><td>泵车、发电机附件</td></tr><tr><td>住宿</td><td>南埠旅社</td><td>短期技术人员住宿</td></tr><tr><td>宣传</td><td>澜川生活线</td><td>项目横幅与招聘信息</td></tr></table>
      <p>网页链接由各单位自行维护，失效后只标灰，不代表合作终止。结算问题请直接联系项目财务，不在留言区处理。</p>
      <p><a href="#x-industry-summer" data-route="x-industry-summer">企业动态：项目部发放防暑用品</a></p>`,

    "x-blog-market": `
      <p>凌晨四点的市场没有“开门”这个瞬间。最早到的菜车先把筐放在路边，卖豆腐的人点灯，扫地的管理员赶在第一批顾客前把积水推到排水沟里。</p>
      <blockquote>卖菜的唐姐：记者总问菜价为什么涨，我只想让你写一句，送货车昨晚绕了二十里，司机连口热水都没喝。</blockquote>
      <p>录音里至少有六次询价声盖过受访者。整理时我删掉了土豆、辣椒和鸡蛋的价格，却留下一个摊主说“每天第一辆车的声音都不一样”。地方新闻常从这种无关紧要的话里开始。</p>
      <h3>采访页边记</h3><ul class="evidence-list"><li>04:18 第一辆叶菜车到场</li><li>04:42 公平秤开机</li><li>05:10 早餐摊开始卖粥</li><li>06:00 市场广播提醒保管钱包</li></ul>
      <p><a href="#x-blog-cinema" data-route="x-blog-cinema">另一篇手记：最后一场露天电影</a></p>`,
    "x-blog-phone": `
      <p>手机普及以前，公共电话旁边总有人等。有人替邻居接传呼，有人把号码写在烟盒背面，也有人只是站在雨棚下等一句“已经到了”。</p>
      <table><tr><th>地点</th><th>最忙时段</th><th>常见用途</th></tr><tr><td>三院门口</td><td>晚饭后</td><td>通知家属、联系陪护</td></tr><tr><td>长途站</td><td>末班车前</td><td>报平安、改接货时间</td></tr><tr><td>南埠货场</td><td>夜班交接</td><td>找司机、问门卫</td></tr></table>
      <p>电话亭老板说，最难受的不是无人接听，而是后面排着人，只能在响到第六声时挂断。很多没有说完的话因此不会出现在任何采访记录里。</p>
      <p><a href="#x-blog-tailor" data-route="x-blog-tailor">另一篇手记：裁缝铺里等取衣的人</a></p>`,
    "x-blog-drafts": `
      <p>这些短稿没有采用，不等于内容虚假。常见原因包括版面不足、事实尚待核实、当事人撤回采访，以及与当期广告或专题安排冲突。</p>
      <table><tr><th>标题</th><th>年份</th><th>退稿备注</th></tr><tr><td>夜班公交终点多走了两站</td><td>2005</td><td>已由公交公司自行更正</td></tr><tr><td>河西市场摊位费争议</td><td>2006</td><td>双方说法差异过大</td></tr><tr><td>旧涵洞发现车辆后的补稿</td><td>2008</td><td>广告客户冲突，暂缓</td></tr><tr><td>三院电话亭拆除</td><td>2009</td><td>版面不足</td></tr></table>
      <p>有正文的稿件仍按原文件夹保存。需要口令的文章不是独家新闻，只是我不愿让搜索引擎直接收录。</p>
      <p><a href="#x-blog-corrections" data-route="x-blog-corrections">整理说明：我怎样标记后补内容</a></p>`,
    "x-blog-links": `
      <p>我曾经每天点一遍这些链接。后来有的域名被卖给广告商，有的免费空间关闭，还有一些页面多年不更新，却一直有人付续费费。</p>
      <table><tr><th>站点</th><th>最后确认</th><th>状态</th></tr><tr><td>澜川生活线旧闻</td><td>2009-07</td><td>部分页面可读</td></tr><tr><td>老罗在路上</td><td>2008-12</td><td>缩略图仍在</td></tr><tr><td>呼吸相助网</td><td>2009-03</td><td>只读镜像</td></tr><tr><td>小满缝补铺</td><td>2009-07</td><td>仍在续费</td></tr></table>
      <p>链接变灰不代表一个人的生活已经结束。很多旧站留下来的，只是价目表、无效号码和一张没有删掉的照片。</p>
      <p><a href="#x-blog-postcards" data-route="x-blog-postcards">旧物记录：采访对象寄来的三张明信片</a></p>`,

    "x-personal-price": `
      <p>价目只适用于普通修补，复杂破口和缺布的衣物要到店里看过才能报价。工作服、老人衣物和学生校服可以说明急用时间。</p>
      <table><tr><th>项目</th><th>价格</th><th>取件</th></tr><tr><td>普通裤脚</td><td>3元</td><td>当日</td></tr><tr><td>牛仔裤保留原边</td><td>5元</td><td>次日</td></tr><tr><td>短拉链</td><td>6元起</td><td>次日</td></tr><tr><td>工作服补丁</td><td>看破损大小</td><td>两日内</td></tr><tr><td>钉纽扣</td><td>自带纽扣1元</td><td>可等</td></tr></table>
      <p>小满在页脚写：“赶时间请当面说，别把急活两个字写在塑料袋上就走。雨大时会提前关门，取衣顺延一天。”</p>
      <p><a href="#x-personal-uniform" data-route="x-personal-uniform">小店记录：开学前的一排校服</a></p>`,
    "x-personal-machine": `
      <p>2006年搬店时，小满把一台蝴蝶牌脚踏机卖给如意旧机行。机器太重，店主和隔壁修鞋师傅抬了三趟楼梯才装上三轮车。</p>
      <table><tr><th>部位</th><th>旧机行评价</th></tr><tr><td>机头</td><td>走线稳定，需清陈年机油</td></tr><tr><td>木台</td><td>右角有补钉，不影响使用</td></tr><tr><td>抽屉</td><td>留有线轴、旧收据和半包狗粮</td></tr><tr><td>皮带</td><td>已老化，更换后可用</td></tr></table>
      <p>小满回复说收据可以扔，过了两天又改口，请店主替她留着。旧机行没有问原因，只把纸夹在评价单背面。</p>
      <p><a href="#x-personal-buttons" data-route="x-personal-buttons">小店记录：装纽扣的铁皮饼干盒</a></p>`,
    "x-personal-cat": `
      <p><strong>2003年8月19日</strong>，父亲从一位去世病患家里带回一条黑狗。它右耳缺一个小口，脖子上没有项圈，进门后先把水碗碰翻了。</p>
      <p>父亲说只让它住一晚，第二天却拿氧气瓶的木垫板做了窝，又把店里那块旧毛巾铺进去。小满给它取名煤球，因为它趴在卷帘门旁时像一团沾灰的黑布。</p>
      <table><tr><th>习惯</th><th>记录</th></tr><tr><td>听到面包车</td><td>会跑到门口等顾成礼下车</td></tr><tr><td>下雨</td><td>钻进装旧布的木箱</td></tr><tr><td>收音机响</td><td>趴在桌脚，不肯挪窝</td></tr><tr><td>不吃</td><td>咸菜和带葱的肉汤</td></tr></table>
      <p><a href="#x-personal-rain" data-route="x-personal-rain">小店记录：雨天提前关门的一天</a></p>`
  };

  Object.entries(navigationPages).forEach(([route, html]) => {
    if (registry.extras[route]) registry.extras[route].html = html;
  });

  const article = (route, site, label, title, date, author, lead, html, comments) => ({
    route, site, label, title, date, author, lead, html,
    address: `http://archive.lanchuan.local/${site}/${route.replace(/^x-/, "")}.html`,
    mediaRoute: null,
    ...(comments ? { commentsTitle: comments.title, comments: comments.items } : {})
  });

  Object.assign(registry.extras, {
    "x-news-nightmarket": article("x-news-nightmarket", "news", "03-F", "雨后夜市恢复摆摊", "2004-07-19 18:20", "民生记者", "中心市场外的夜市今晚恢复，受淹摊位免收两天卫生费。", "<p>卖凉粉的摊主把泡水的木桌换成了折叠桌，修鞋摊借来一盏蓄电池灯。市场管理处要求熟食离积水至少半米，收摊后把垃圾带走。</p><p>公交末班车仍停在棉纺路口，带孩子来的居民最好在九点前离开。几位摊主说，雨停以后最先恢复的不是生意，而是互相借零钱和塑料布。</p>"),
    "x-news-library": article("x-news-library", "news", "03-G", "市图书馆延长暑期阅览时间", "2004-07-10 09:30", "文化简讯", "少儿阅览室工作日延长至晚八点。", "<p>暑假期间，二楼阅览室每天增加两小时开放时间。借书证丢失可凭户口簿复印件补办，逾期费仍按每天一角计算。</p><p>馆内只有大厅一部公用电话，原则上不替读者长时间占线。下雨时可把雨伞放在门口编号桶内，离馆时凭木牌领取。</p>"),
    "x-news-schoolgate": article("x-news-schoolgate", "news", "03-H", "小学门口早餐摊该不该留下", "2004-07-08 11:12", "读者来信整理", "家长担心占道，也有人说早班家庭离不开一碗热粥。", "<p>两封来信要求清理校门口摊位，理由是自行车和学生混在一起不安全；另有五名家长希望保留卖粥和鸡蛋的摊点，但划出排队区域。</p><p>街道回复将先调整摊位位置，不作一刀切取缔。开学前会重新画线，并检查煤炉和食品保温桶。</p>"),

    "x-listing-studentroom": article("x-listing-studentroom", "listing", "09-F", "师专新生合租征室友", "2004-07-21 14:05", "用户：白衬衫", "河西桥附近两室一厅，已住一名女生，再找一人分摊房租。", "<p>房间步行到师专十五分钟，楼下有早点铺。公共厨房只有一个煤气灶，水电按账单平分，谢绝养猫狗。</p><p>发布者说明九月开学前才能入住，不收看房费。联系时请说“合租”，避免和房东另一套短租房弄混。</p>"),
    "x-listing-bicycle": article("x-listing-bicycle", "listing", "09-G", "给孩子收一辆二六女车", "2004-07-20 08:22", "用户：三院后门", "车架不要太高，刹车能用即可，掉漆没关系。", "<p>预算七十元以内，最好在河西或中心市场附近看车。孩子暑假学骑，车铃和后座都可以没有。</p><p>两名卖家在留言里约周日下午到修鞋摊旁试车。管理员提醒不要把学校和家庭地址写在公开页面。</p>"),
    "x-listing-tutor": article("x-listing-tutor", "listing", "09-H", "暑期替小学生看作业", "2004-07-11 16:40", "用户：师专二年级", "下午两点到六点，可看语文数学作业，不负责接送。", "<p>发布者住在河西桥附近，最多同时照看三名孩子。家长需自备练习册和水杯，周末不接。</p><p>费用按周结算，第一次见面请家长本人到场。若孩子发烧或需要用药，应留在家中由家属照顾。</p>"),

    "x-health-bottlecart": article("x-health-bottlecart", "health", "10-F", "自制小推车搬氧气瓶安全吗", "2004-07-06 20:18", "河西家属", "楼道没有电梯，想给钢瓶装两个轮子。", "<p>多名病友建议不要自行焊接瓶身或阀门附近的固定件。可以购买带绑带的专用小车，搬运时让瓶身保持稳定，不能拖着阀门上楼。</p><p>版主补充，不同供应点对押金瓶和周转瓶的搬运要求不同，最好先电话询问。楼梯转角太窄时应请配送人员协助。</p>"),
    "x-health-sleep": article("x-health-sleep", "health", "10-G", "陪床时怎样轮班睡两个小时", "2004-07-16 00:06", "守夜人", "连续守夜第三天，听见电话响都会心慌。", "<p>回帖者建议把吃药、吸氧和观察时间写成一张交班表，每两小时换一次人。没有家属替班时，可以向护士说明自己需要短暂休息。</p><p>有人说自己过去总觉得离开床边就是不孝，后来才明白，累到记错时间同样会伤害病人。</p>"),
    "x-health-weather": article("x-health-weather", "health", "10-H", "闷热天气的通风与休息", "2004-07-17 10:30", "版主青栀", "本周湿度较高，家庭氧疗用户注意室内通风。", "<p>不要为了开空调把门窗完全封死，设备周围应留出散热和操作空间。使用燃油发电机时必须放在室外，排气口远离门窗。</p><p>若多人同时出现头痛、恶心或呼吸不畅，应立即离开房间并求助，不要先假定只是天气闷热。</p>"),

    "x-gallery-breakfast": article("x-gallery-breakfast", "gallery", "11-F", "凌晨五点的司机早餐", "2004-06-23", "罗大川", "九张搪瓷碗、蒸笼和还没睡醒的饭馆照片。", "<p>老罗给每张照片写了价格：稀饭五角、鸡蛋六角、酸菜免费。最模糊的一张里，老板娘正把一碗面递过车窗。</p><p>留言者没有讨论摄影，只争论哪家饭馆能把水壶灌满。老罗回复说，能让司机洗把脸的地方就值得留一张。</p>"),
    "x-gallery-milepost": article("x-gallery-milepost", "gallery", "11-G", "被货车司机写满的里程碑", "2004-07-02", "罗大川", "公路边的旧碑背面写着修胎电话和饭馆方向。", "<p>里程碑正面数字已经掉漆，背面却有铅笔、粉笔和圆珠笔留下的号码。有人写“前方八里有水”，旁边又被补了一句“冬天不开”。</p><p>老罗说这些字比地图更新得快，也消失得快。修路队刷一层白灰，半年的路线记忆就没有了。</p>"),
    "x-gallery-roadside": article("x-gallery-roadside", "gallery", "11-H", "路边等货的三个下午", "2004-05-19", "罗大川", "货场不开单，司机们在树荫下等了三天。", "<p>第一天大家还围着下棋，第二天有人拆车门修玻璃，第三天只剩几件晾在后视镜上的背心。</p><p>相册里没有抱怨文字，只有每天下午同一个角度的停车线。第三张照片多出一把借来的竹椅。</p>"),

    "x-public-water": article("x-public-water", "public", "05-F", "河西片区停水送水安排", "2004-07-20 07:30", "供水服务简报", "清淤期间河西三条巷道临时停水六小时。", "<p>送水车依次停靠河西小学、桥头粮店和三院家属院，每处停留四十分钟。居民请自带干净容器，行动不便家庭可向社区登记。</p><p>恢复供水后先放流三分钟，水色异常可拨供水值班电话。网页时间若与楼道通知不同，以现场广播为准。</p>"),
    "x-public-bridge": article("x-public-bridge", "public", "05-G", "河西桥栏杆油漆施工", "2004-07-09", "市政养护公告", "施工期间保留一侧人行通道，自行车请下车推行。", "<p>旧漆清理和新漆干燥共需三天，遇雨顺延。施工人员会在两端设置木牌，夜间保留反光灯。</p><p>附近居民不要把衣物晾在桥栏上，儿童经过时由家长照看。油漆未干处已经用麻绳隔开。</p>"),
    "x-public-library": article("x-public-library", "public", "05-H", "暑期阅览室开放时间", "2004-07-05", "文化服务公告", "社区阅览室周二至周日开放，午间不闭馆。", "<p>报刊阅览区上午八点半开放，少儿区下午一点开放。每人一次最多借两本书，旧杂志可以在登记后带回家。</p><p>阅览室没有空调，下午会开窗通风。雷雨天气提前闭馆时，管理员会在门口黑板上写明。</p>"),

    "x-forum-raincoat": article("x-forum-raincoat", "forum", "18-F", "驾驶室漏雨，哪种雨布耐用", "2004-07-14 22:18", "蓝货车", "车顶接缝一遇大雨就滴水，临时补过两次。", "<div class=\"forum-post\"><div class=\"forum-user\">修胎老周</div><div class=\"forum-message\">别拿广告布直接糊，太阳一晒胶全开。先找漏点，临时用帆布压在行李架下面。</div></div><div class=\"forum-post\"><div class=\"forum-user\">蓝货车</div><div class=\"forum-message\">明白了，周末进城买密封条。副驾驶脚下已经垫了脸盆。</div></div>"),
    "x-forum-radiofix": article("x-forum-radiofix", "forum", "18-G", "车载收音机一过坑就断声", "2004-07-03 18:09", "跑西线的罗", "天线没断，拍一下仪表台又能响。", "<div class=\"forum-post\"><div class=\"forum-user\">夜班扳手</div><div class=\"forum-message\">先看保险片夹子和搭铁线，别一上来就拆调谐器。老车震动大，十有八九是接头松。</div></div><p>楼主两天后回复，确实是搭铁螺丝松了，并答应下次路过给修理铺带一袋橘子。</p>"),
    "x-forum-lunchbox": article("x-forum-lunchbox", "forum", "18-H", "夜班饭盒总被拿错", "2004-07-13 01:26", "门卫小秦", "八个铝饭盒长得一样，凌晨下班谁都认不出。", "<p>工友们建议在盒盖上敲姓名缩写，或用不同颜色的布条系在提手。有人说自己的咸菜连续三天进了别人的肚子。</p><p>版主把帖子从欠薪版移到职工闲聊，并在标题后加了“非投诉”。</p>"),

    "x-industry-dorm": article("x-industry-dorm", "industry", "16-F", "临时宿舍用电说明", "2004-07-06", "项目后勤", "宿舍禁止使用电炉和自接插线板。", "<p>每间宿舍保留照明、风扇和手机充电插座。跳闸后由门卫联系电工，不得自行打开配电箱。</p><p>夜班人员白天休息，走廊收音机请调低音量。晾晒工作服不要遮挡窗户和灭火器。</p>"),
    "x-industry-canteen": article("x-industry-canteen", "industry", "16-G", "食堂本周菜单与饭票补办", "2004-07-13", "项目后勤", "雨天材料车晚到，周三晚餐改为面条。", "<p>早餐供应稀饭、馒头和咸菜，夜班可在门卫室登记留饭。饭票遗失需班组长签字补办，旧票作废。</p><p>食堂请各组归还搪瓷碗，不要带到宿舍长期占用。生病或忌辣可以提前告诉大师傅。</p>"),
    "x-industry-toolcheck": article("x-industry-toolcheck", "industry", "16-H", "公用工具每周清点", "2004-07-08", "机务班", "扳手、吊带和手电筒统一在周五交接。", "<p>借用长吊带、安全绳和电缆盘需在门卫登记用途与归还时间。沾油工具先擦净，再放回编号柜。</p><p>本周缺少两只十七号套筒和一把木柄锤。使用人若带到宿舍，请在下班前送回。</p>"),

    "x-blog-cinema": article("x-blog-cinema", "blog", "25-F", "采访手记：最后一场露天电影", "2008-08-16", "何频", "放映机坏了两次，观众仍坐到片尾。", "<p>电影放在河堤空地，白墙上有一块多年洗不掉的广告字。孩子们追着光柱跑，老人自带板凳坐在最后一排。</p><p>散场后我问放映员为什么还坚持。他说胶片已经借来了，总要让等着的人看完。这句话没有写进第二天的简讯。</p>"),
    "x-blog-tailor": article("x-blog-tailor", "blog", "25-G", "采访手记：裁缝铺里等取衣的人", "2007-09-04", "何频", "一条街上三家裁缝铺，各自记着不同的老顾客。", "<p>等取衣的人会聊天气、孩子和哪家拉链耐用。店主低头踩机器，很少抬头，却能从声音认出谁来拿哪件衣服。</p><p>我问她为什么留着过期取件单，她说有些人隔几年才回来，名字留下比衣服留下重要。</p>"),
    "x-blog-corrections": article("x-blog-corrections", "blog", "25-H", "整理说明：我怎样标记后补内容", "2009-06-28", "何频", "旧稿原文、后来回忆和编辑批注使用不同格式。", "<p>原稿照录，不修正当年的错别字；后来确认的时间放在方括号内；无法核实的回忆只写在页脚，不混入正文。</p><p>我也会保留自己当时写错的判断。把错误全部擦掉，会让后来的人以为我们从一开始就知道答案。</p>"),

    "x-personal-uniform": article("x-personal-uniform", "personal", "26-F", "开学前的一排校服", "2008-08-27", "顾小满", "十二条裤脚、七枚纽扣和两件写错名字的外套。", "<p>开学前一周最忙，家长总说孩子一暑假又长高了。小满把急件按上学日期夹在不同颜色的衣架上。</p><p>有个男孩第二次来时带了一把糖，说上次裤脚没有被同学看出改过。小满把糖放在柜台，晚上被煤球叼走一颗。</p>"),
    "x-personal-buttons": article("x-personal-buttons", "personal", "26-G", "装纽扣的铁皮饼干盒", "2007-04-12", "顾小满", "盒里没有成套纽扣，只有几十年攒下来的单只。", "<p>黑色的来自旧工作服，贝壳扣多半是母亲留下的，几枚蓝塑料扣是父亲从病患家属那里带回来的。</p><p>小满不给盒子分类。顾客挑不到一样的，她就劝人把整排都换掉，再把拆下来的旧扣放回盒里。</p>"),
    "x-personal-rain": article("x-personal-rain", "personal", "26-H", "雨天提前关门的一天", "2009-07-16", "顾小满", "桥下开始积水，最后三件衣服顺延到第二天。", "<p>小满给留过电话的顾客逐个打过去，没联系上的就在卷帘门上贴纸条。煤球一听雷声就钻进布箱，只露出半只耳朵。</p><p>关门前她把缝纫机踏板垫高，又检查了一遍旧电脑和装续费汇款单的铁盒。雨停后，纸条只剩下一角还粘在门上。</p>"),
    "x-laogu-diary": {
      route: "x-laogu-diary",
      site: "personal",
      label: "日记",
      title: "老顾的日记",
      date: "内容预留",
      author: "顾成礼",
      address: "http://archive.lanchuan.local/personal/laogu-diary.html",
      lead: "",
      html: "",
      layout: "diary",
      requires: "lock-27",
      catalogHidden: true,
      mediaRoute: null
    }
  });
})();
