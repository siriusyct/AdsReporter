
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
