
var adsReporterData = [
    {"title":"网易新闻","link":"http://3g.163.com"},
    {"title":"学生被录取却\"无学可上\" 因专业招生人数不够停办","link":"http://3g.163.com/news/article/CS6PJ6AI0001875P.html#child=all&offset=3"},
    {"title":"白宫首席战略师被辞:将在白宫外继续为特朗普而战","link":"http://3g.163.com/news/article/CS6PJKTE000181KN.html#child=all&offset=5"},
    {"title":"美国最新研究发现一种人体蛋白可改善认知能力","link":"http://3g.163.com/news/article/CS6OQBAM0001899N.html#child=all&offset=9"},
    {"title":"斐济群岛附近海域发生6.4级地震 暂无人员伤亡","link":"http://3g.163.com/news/article/CS6OJR5L0001875O.html#child=all&offset=11"},
    {"title":"武汉一大学生打工挣钱 毕业前夕游遍世界70座城市","link":"http://3g.163.com/news/article/CS6O7CH80001875P.html#child=all&offset=13"},
    {"title":"中国足协:明年出台职业裁判制度 视频裁判尽快试行","link":"http://3g.163.com/news/article/CS6O6J1M000187VE.html#child=all&offset=15"},
    {"title":"该说再见啦 牧马人限量版上市售54.99万","link":"http://3g.163.com/auto/article/CS6NBD5Q0008856R.html#offset=2"},
    {"title":"发改委新一批混改名单曝光：中粮资本等入围","link":"http://3g.163.com/money/article/CS6M6PNT002581PP.html#child=all&offset=4"}
];
var currentAd;

var fullTestDataHW = [
    {
        "date":"2017-09-10",
        "listData":[
            {"theme":"主题1","platform":"baidu","icon":"baidu.png","title":"微信流量神话货车是否已经严重超载？","link":"https://baijia.baidu.com/s?id=1579104254650084080&wfr=pc&fr=idx_lst"},
            {"theme":"主题2","platform":"baidu","icon":"baidu.png","title":"我们翻了今日头条、知乎、豆瓣的用户协议，发现了这些秘密","link":"https://baijia.baidu.com/s?id=1579067993889800026&wfr=pc&fr=idx_lst"},
            {"theme":"主题1","platform":"baidu","icon":"baidu.png","title":"无人便利店系列深度采访：无法取代的夫妻店","link":"https://baijia.baidu.com/s?id=1579057227875661868&wfr=pc&fr=idx_lst"},
            {"theme":"主题3","platform":"文汇","icon":"wenhui.png","title":"2名上海潜水员失踪 遗体已被打捞上岸","link":"http://www.whb.cn/zhuzhan/kandian/20170920/104154.html"},
            {"theme":"主题1","platform":"baidu","icon":"baidu.png","title":"苹果三星新“机皇”遇冷，国产手机该高兴吗？","link":"https://baijia.baidu.com/s?id=1579028769187644302&wfr=pc&fr=idx_lst"},
            {"theme":"主题1","platform":"baidu","icon":"baidu.png","title":"不论胜负，苹果稳赢！三大派别争夺东芝半导体，苹果介入坐享其成","link":"https://baijia.baidu.com/s?id=1578942195084406275&wfr=pc&fr=idx_lst"},
            {"theme":"主题2","platform":"sina","icon":"sina.png","title":"一张44年前的1200元银行存单 现在能取出多少？","link":"http://news.sina.com.cn/s/qw/2017-09-21/doc-ifymeswc8845154.shtml"},
            {"theme":"主题1","platform":"sina","icon":"sina.png","title":"新华社:斗气解决不了朝鲜半岛核问题","link":"http://news.sina.com.cn/w/zx/2017-09-21/doc-ifymeswc8986874.shtml"},
            {"theme":"主题3","platform":"sina","icon":"sina.png","title":"歼20生产压力又增大：美军明年要买100架F35战机","link":"http://mil.news.sina.com.cn/jssd/2017-09-21/doc-ifymesii4623338.shtml"},
            {"theme":"主题1","platform":"sina","icon":"sina.png","title":"人物|让AI都忌惮的业余球员!他真能晃断脚踝","link":"http://sports.sina.com.cn/basketball/nba/2017-09-20/doc-ifykywuc8155090.shtml"},
            {"theme":"主题1","platform":"头条","icon":"toutiao.png","title":"考驾照新规10月1日起正式实施，很多人的朋友圈都炸开了锅","link":"http://www.toutiao.com/a6467887961940705805/"},
            {"theme":"主题1","platform":"头条","icon":"toutiao.png","title":"不论胜负，苹果稳赢！三大派别争夺东芝半导体，苹果介入坐享其成","link":"http://www.toutiao.com/a6467820634180157966/"},
            {"theme":"主题2","platform":"头条","icon":"toutiao.png","title":"“双一流”大学和“985”有啥区别 为何分成AB两类？","link":"http://www.toutiao.com/a6468087511544496654/"},
            {"theme":"主题3","platform":"头条","icon":"toutiao.png","title":"今年北京人口有望20年来首次减少 专家称对高层次人才引力不减","link":"http://www.toutiao.com/i6468092313510871566/"},
            {"theme":"主题1","platform":"头条","icon":"toutiao.png","title":"“双一流”大学名单公布 42所学校如何选出？","link":"http://www.toutiao.com/i6468084344467489293/"},
            {"theme":"主题2","platform":"头条","icon":"toutiao.png","title":"全国铁路今迎大调图 京沪高铁“复兴号”正式提速","link":"http://www.toutiao.com/a6467882377247342862/"},
            {"theme":"主题2","platform":"baidu","icon":"baidu.png","title":"苏有朋斥责周杰炒作：还心如清白？陈年旧事乱拼接！当网友傻么？","link":"https://baijia.baidu.com/s?id=1579140080176560633&wfr=pc&fr=ch_lst"},
            {"theme":"主题3","platform":"baidu","icon":"baidu.png","title":"西班牙批片竟成周末上座冠军？我们攒了一张的购片地图","link":"https://baijia.baidu.com/s?id=1579137199043578992&wfr=pc&fr=ch_lst"},
            {"theme":"主题2","platform":"baidu","icon":"baidu.png","title":"假如雁门关外乔峰不死？他的人生结局会如何，非死不可","link":"https://baijia.baidu.com/s?id=1578977486156105782&wfr=pc&fr=ch_lst"},
            {"theme":"主题2","platform":"baidu","icon":"baidu.png","title":"一壹IP版权银行创立：IP版权银行就是IP的唯一归属","link":"https://baijia.baidu.com/s?id=1577854934664179543&wfr=pc&fr=ch_lst"},
            {"theme":"主题1","platform":"baidu","icon":"baidu.png","title":"水木然：哪位高人想出的这个公式？太牛了！","link":"https://baijia.baidu.com/s?id=1577049326410134924&wfr=pc&fr=ch_lst"},
            {"theme":"主题1","platform":"baidu","icon":"baidu.png","title":"什么是「急急如律令」｜真问真答","link":"https://baijia.baidu.com/s?id=1576621805933561752&wfr=pc&fr=ch_lst"}
        ]
    }
];

var fullTestData = [
    {
        "type":"time",
        "typeName":"日期",
        "typeIndex":0,
        "isSel":true,
        "listData":[
            {
                "label":"2017-08-26",
                "data":[
                    {"title":"网易新闻","link":"http://3g.163.com"},
                    {"title":"学生被录取却\"无学可上\" 因专业招生人数不够停办","link":"http://3g.163.com/news/article/CS6PJ6AI0001875P.html#child=all&offset=3"},
                    {"title":"白宫首席战略师被辞:将在白宫外继续为特朗普而战","link":"http://3g.163.com/news/article/CS6PJKTE000181KN.html#child=all&offset=5"},
                    {"title":"美国最新研究发现一种人体蛋白可改善认知能力","link":"http://3g.163.com/news/article/CS6OQBAM0001899N.html#child=all&offset=9"},
                    {"title":"斐济群岛附近海域发生6.4级地震 暂无人员伤亡","link":"http://3g.163.com/news/article/CS6OJR5L0001875O.html#child=all&offset=11"},
                    {"title":"武汉一大学生打工挣钱 毕业前夕游遍世界70座城市","link":"http://3g.163.com/news/article/CS6O7CH80001875P.html#child=all&offset=13"},
                    {"title":"中国足协:明年出台职业裁判制度 视频裁判尽快试行","link":"http://3g.163.com/news/article/CS6O6J1M000187VE.html#child=all&offset=15"},
                    {"title":"该说再见啦 牧马人限量版上市售54.99万","link":"http://3g.163.com/auto/article/CS6NBD5Q0008856R.html#offset=2"},
                    {"title":"发改委新一批混改名单曝光：中粮资本等入围","link":"http://3g.163.com/money/article/CS6M6PNT002581PP.html#child=all&offset=4"}
                ]
            },
            {
                "label":"2017-08-25",
                "data":[
                    {"title":"学生被录取却\"无学可上\" 因专业招生人数不够停办","link":"http://3g.163.com/news/article/CS6PJ6AI0001875P.html#child=all&offset=3"},
                    {"title":"白宫首席战略师被辞:将在白宫外继续为特朗普而战","link":"http://3g.163.com/news/article/CS6PJKTE000181KN.html#child=all&offset=5"}
                ]
            },
            {
                "label":"2017-08-24",
                "data":[
                    {"title":"该说再见啦 牧马人限量版上市售54.99万","link":"http://3g.163.com/auto/article/CS6NBD5Q0008856R.html#offset=2"},
                    {"title":"发改委新一批混改名单曝光：中粮资本等入围","link":"http://3g.163.com/money/article/CS6M6PNT002581PP.html#child=all&offset=4"}
                ]
            }
        ]
    },
    {
        "type":"content",
        "typeName":"内容",
        "typeIndex":1,
        "isSel":false,
        "listData":[
            {
                "label":"内容A",
                "data":[
                    {"title":"武警魔鬼周训练:每天训练18小时 人均负重60斤","link":"http://3g.163.com/news/article/CSQ2SDD40001899N.html#child=all&offset=2"},
                    {"title":"侠客岛:\"洋状\"告不停 香港反对派认谁当干爹？","link":"http://3g.163.com/news/article/CSQ2F9SA0001899N.html#child=all&offset=3"},
                    {"title":"印度\"大师\"被判罪引发骚乱 为何那么多人追随他?","link":"http://3g.163.com/news/article/CSQ1CM3G0001899N.html#child=all&offset=4"},
                    {"title":"韩国毒卫生巾致上万女性受害 政府进行全面检测","link":"http://3g.163.com/news/article/CSPT8MK000018AOR.html#child=all&offset=10"},
                    {"title":"俩小偷为求公平摄像头下分赃 监控视频成作案铁证","link":"http://3g.163.com/news/article/CSPRVMKD0001875P.html#child=all&offset=12"},
                    {"title":"泰国警方严密监控英拉曼谷住处 随时准备搜查","link":"http://3g.163.com/news/article/CSPRP9I60001899N.html#child=all&offset=13"},
                    {"title":"媒体评\"海底捞后厨被查\"事件:只顾比烂 不分对错?","link":"http://3g.163.com/news/article/CSPQMLNC0001875P.html#child=all&offset=15"},
                    {"title":"台风\"帕卡\"27日登陆 国家海洋局启动三级应急响应","link":"http://3g.163.com/news/article/CSPQJST60001899N.html#child=all&offset=16"},
                    {"title":"美共和党通过决议案:完全支持特朗普对台湾军售","link":"http://3g.163.com/news/article/CSPQG2BS0001899N.html#child=all&offset=17"},
                    {"title":"伊朗：卡塔尔驻伊朗大使已开始在德黑兰办公","link":"http://3g.163.com/news/article/CSPQ4IUP0001875O.html#child=all&offset=18"}
                ]
            },
            {
                "label":"内容B",
                "data":[
                    {"title":"韩国毒卫生巾致上万女性受害 政府进行全面检测","link":"http://3g.163.com/news/article/CSPT8MK000018AOR.html#child=all&offset=10"},
                    {"title":"俩小偷为求公平摄像头下分赃 监控视频成作案铁证","link":"http://3g.163.com/news/article/CSPRVMKD0001875P.html#child=all&offset=12"}
                ]
            },
            {
                "label":"内容C",
                "data":[
                    {"title":"美共和党通过决议案:完全支持特朗普对台湾军售","link":"http://3g.163.com/news/article/CSPQG2BS0001899N.html#child=all&offset=17"},
                    {"title":"伊朗：卡塔尔驻伊朗大使已开始在德黑兰办公","link":"http://3g.163.com/news/article/CSPQ4IUP0001875O.html#child=all&offset=18"}
                ]
            }
        ]
    },
    {
        "type":"channel",
        "typeName":"渠道",
        "typeIndex":2,
        "isSel":false,
        "listData":[
            {
                "label":"渠道A",
                "data":[
                    {"title":"世锦赛谌龙崩盘遭横扫 0-2不敌丹麦一哥无缘卫冕","link":"http://3g.163.com/sports/article/CSPJK1N400058782.html#offset=3"},
                    {"title":"1/4决赛天津女排负北京 走下神坛无缘全运4连冠","link":"http://3g.163.com/sports/article/CSQ4AKM800058782.html#offset=11"},
                    {"title":"终极boss跺脚足坛地震!2200亿玩世界杯,欧洲转会变权力的游戏","link":"http://3g.163.com/sports/article/CSOIRA8C00058781.html#offset=13"},
                    {"title":"GIF-燃!英超猛汉轰小角度凌空爆射 外脚背暴力学","link":"http://3g.163.com/sports/article/CSPSN91P00058781.html#offset=14"},
                    {"title":"主裁超长补时引争议 曼联拥趸:他是曼城防线新援","link":"http://3g.163.com/sports/article/CSQ3DOUO00058781.html#offset=16"},
                    {"title":"曝库鸟通牒利物浦:别给我报名欧冠 现在只想去巴萨","link":"http://3g.163.com/sports/article/CSQ2GFTO00058781.html#offset=17"},
                    {"title":"比利时站汉密尔顿夺杆 追平车王舒马赫68杆纪录","link":"http://3g.163.com/sports/article/CSPUPCOV00058782.html#offset=21"},
                    {"title":"因体检没过而告吹的交易:火箭因此夺冠 老猫退役","link":"http://3g.163.com/sports/article/CSP83FBR0005877U.html#offset=23"},
                    {"title":"自虐啊!越南U23门将撞倒队友 贡献对手空门大礼","link":"http://3g.163.com/sports/article/CSPP7BNB00058780.html#offset=26"},
                    {"title":"国足再减员!王燊超腹股沟拉伤 已返回上海治疗","link":"http://3g.163.com/sports/article/CSPLIOOM00058780.html#offset=27"}
                ]
            },
            {
                "label":"渠道B",
                "data":[
                    {"title":"GIF-燃!英超猛汉轰小角度凌空爆射 外脚背暴力学","link":"http://3g.163.com/sports/article/CSPSN91P00058781.html#offset=14"},
                    {"title":"主裁超长补时引争议 曼联拥趸:他是曼城防线新援","link":"http://3g.163.com/sports/article/CSQ3DOUO00058781.html#offset=16"}
                ]
            },
            {
                "label":"渠道C",
                "data":[
                    {"title":"自虐啊!越南U23门将撞倒队友 贡献对手空门大礼","link":"http://3g.163.com/sports/article/CSPP7BNB00058780.html#offset=26"},
                    {"title":"国足再减员!王燊超腹股沟拉伤 已返回上海治疗","link":"http://3g.163.com/sports/article/CSPLIOOM00058780.html#offset=27"}
                ]
            }
        ]
    }
];
