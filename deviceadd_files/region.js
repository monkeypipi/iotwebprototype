(function(){
	var areaData={g:{1:{py:"BJ",t:"北京",s:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],guid:1},2:{py:"DCQ",t:"东城区",p:"BJ",pid:1,guid:2},3:{py:"XCQ",t:"西城区",p:"BJ",pid:1,guid:3},4:{py:"CWQ",t:"崇文区 ",p:"BJ",pid:1,guid:4},5:{py:"XWQ",t:"宣武区",p:"BJ",pid:1,guid:5},6:{py:"CYQ",t:"朝阳区",p:"BJ",pid:1,guid:6},7:{py:"FTQ",t:"丰台区",p:"BJ",pid:1,guid:7},8:{py:"SJSQ",t:"石景山区",p:"BJ",pid:1,guid:8},9:{py:"HDQ",t:"海淀区",p:"BJ",pid:1,guid:9},10:{py:"MTGQ",t:"门头沟区",p:"BJ",pid:1,guid:10},11:{py:"FSQ",t:"房山区",p:"BJ",pid:1,guid:11},12:{py:"TZQ",t:"通州区",p:"BJ",pid:1,guid:12},13:{py:"SYQ",t:"顺义区",p:"BJ",pid:1,guid:13},14:{py:"YQX",t:"延庆县",p:"BJ",pid:1,guid:14},15:{py:"CPQ",t:"昌平区",p:"BJ",pid:1,guid:15},16:{py:"HRQ",t:"怀柔区",p:"BJ",pid:1,guid:16},17:{py:"MYX",t:"密云县 ",p:"BJ",pid:1,guid:17},18:{py:"PGQ",t:"平谷区",p:"BJ",pid:1,guid:18},19:{py:"DXQ",t:"大兴区",p:"BJ",pid:1,guid:19},21:{py:"TJ",t:"天津",s:[22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],guid:21},22:{py:"HPQ",t:"和平区",p:"TJ",pid:21,guid:22},23:{py:"HDQ",t:"河东区",p:"TJ",pid:21,guid:23},24:{py:"HXQ",t:"河西区",p:"TJ",pid:21,guid:24},25:{py:"NKQ",t:"南开区",p:"TJ",pid:21,guid:25},26:{py:"HBQ",t:"河北区",p:"TJ",pid:21,guid:26},27:{py:"HQQ",t:"红桥区",p:"TJ",pid:21,guid:27},28:{py:"TGQ",t:"塘沽区",p:"TJ",pid:21,guid:28},29:{py:"DGQ",t:"大港区",p:"TJ",pid:21,guid:29},30:{py:"DLQ",t:"东丽区 ",p:"TJ",pid:21,guid:30},31:{py:"XQQ",t:"西青区",p:"TJ",pid:21,guid:31},32:{py:"JNQ",t:"津南区",p:"TJ",pid:21,guid:32},33:{py:"BCQ",t:"北辰区",p:"TJ",pid:21,guid:33},34:{py:"JX",t:"蓟县",p:"TJ",pid:21,guid:34},35:{py:"BDQ",t:"宝坻区",p:"TJ",pid:21,guid:35},36:{py:"WQQ",t:"武清区 ",p:"TJ",pid:21,guid:36},37:{py:"NHX",t:"宁河县",p:"TJ",pid:21,guid:37},38:{py:"JHX",t:"静海县",p:"TJ",pid:21,guid:38},39:{py:"HGQ",t:"汉沽区",p:"TJ",pid:21,guid:39},41:{py:"HB",t:"河北",s:[42,43,44,45,46,47,48,49,50,51,52],guid:41},42:{py:"SJZS",t:"石家庄市",p:"HB",pid:41,guid:42},43:{py:"ZJKS",t:" 张家口市",p:"HB",pid:41,guid:43},44:{py:"CDS",t:"承德市",p:"HB",pid:41,guid:44},45:{py:"QHDS",t:"秦皇岛市",p:"HB",pid:41,guid:45},46:{py:"TSS",t:"唐山市",p:"HB",pid:41,guid:46},47:{py:"LFS",t:"廊坊市",p:"HB",pid:41,guid:47},48:{py:"BDS",t:"保定市",p:"HB",pid:41,guid:48},49:{py:"CZS",t:"沧州市 ",p:"HB",pid:41,guid:49},50:{py:"HSS",t:"衡水市",p:"HB",pid:41,guid:50},51:{py:"XTS",t:"邢台市",p:"HB",pid:41,guid:51},52:{py:"HDS",t:"邯郸市",p:"HB",pid:41,guid:52},54:{py:"SX",t:"山西",s:[55,56,57,58,59,60,61,62,63,64,65],guid:54},55:{py:"TYS",t:"太原市",p:"SX",pid:54,guid:55},56:{py:"DTS",t:"大同市",p:"SX",pid:54,guid:56},57:{py:"SZS",t:"朔州市",p:"SX",pid:54,guid:57},58:{py:"YQS",t:"阳泉市",p:"SX",pid:54,guid:58},59:{py:"ZZS",t:"长治市",p:"SX",pid:54,guid:59},60:{py:"JCS",t:"晋城市",p:"SX",pid:54,guid:60},61:{py:"XZS",t:"忻州市",p:"SX",pid:54,guid:61},62:{py:"LLS",t:"吕梁市 ",p:"SX",pid:54,guid:62},63:{py:"JZS",t:"晋中市",p:"SX",pid:54,guid:63},64:{py:"LFS",t:"临汾市",p:"SX",pid:54,guid:64},65:{py:"YCS",t:"运城市",p:"SX",pid:54,guid:65},67:{py:"LN",t:"辽宁",s:[68,69,70,71,72,73,74,75,76,77,78,79,80,81],guid:67},68:{py:"SYS",t:"沈阳市",p:"LN",pid:67,guid:68},69:{py:"CYS",t:"朝阳市",p:"LN",pid:67,guid:69},70:{py:"FXS",t:"阜新市",p:"LN",pid:67,guid:70},71:{py:"TLS",t:"铁岭市",p:"LN",pid:67,guid:71},72:{py:"FSS",t:"抚顺市",p:"LN",pid:67,guid:72},73:{py:"BXS",t:"本溪市",p:"LN",pid:67,guid:73},74:{py:"LYS",t:"辽阳市",p:"LN",pid:67,guid:74},75:{py:"ASS",t:"鞍山市 ",p:"LN",pid:67,guid:75},76:{py:"DDS",t:"丹东市",p:"LN",pid:67,guid:76},77:{py:"DLS",t:"大连市",p:"LN",pid:67,guid:77},78:{py:"YKS",t:"营口市",p:"LN",pid:67,guid:78},79:{py:"PJS",t:"盘锦市",p:"LN",pid:67,guid:79},80:{py:"JZS",t:"锦州市",p:"LN",pid:67,guid:80},81:{py:"HLDS",t:"葫芦岛市 ",p:"LN",pid:67,guid:81},83:{py:"JL",t:"吉林",s:[84,85,86,87,88,89,90,91,92],guid:83},84:{py:"ZCS",t:"长春市",p:"JL",pid:83,guid:84},85:{py:"BCS",t:"白城市",p:"JL",pid:83,guid:85},86:{py:"SYS",t:"松原市",p:"JL",pid:83,guid:86},87:{py:"JLS",t:"吉林市",p:"JL",pid:83,guid:87},88:{py:"SPS",t:"四平市",p:"JL",pid:83,guid:88},89:{py:"LYS",t:"辽源市",p:"JL",pid:83,guid:89},90:{py:"THS",t:"通化市",p:"JL",pid:83,guid:90},91:{py:"BSS",t:"白山市",p:"JL",pid:83,guid:91},92:{py:"YBCXZZZZ",t:"延边朝鲜族自治州",p:"JL",pid:83,guid:92},94:{py:"SHS",t:"上海市",s:[95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113],guid:94},95:{py:"HPQ",t:"黄浦区",p:"SHS",pid:94,guid:95},96:{py:"LWQ",t:"卢湾区",p:"SHS",pid:94,guid:96},97:{py:"XHQ",t:"徐汇区",p:"SHS",pid:94,guid:97},98:{py:"ZNQ",t:"长宁区",p:"SHS",pid:94,guid:98},99:{py:"JAQ",t:"静安区",p:"SHS",pid:94,guid:99},100:{py:"PTQ",t:"普陀区 ",p:"SHS",pid:94,guid:100},101:{py:"ZBQ",t:"闸北区",p:"SHS",pid:94,guid:101},102:{py:"HKQ",t:"虹口区",p:"SHS",pid:94,guid:102},103:{py:"YPQ",t:"杨浦区",p:"SHS",pid:94,guid:103},104:{py:"MHQ",t:"闵行区",p:"SHS",pid:94,guid:104},105:{py:"BSQ",t:"宝山区",p:"SHS",pid:94,guid:105},106:{py:"JDQ",t:"嘉定区 ",p:"SHS",pid:94,guid:106},107:{py:"PDXQ",t:"浦东新区",p:"SHS",pid:94,guid:107},108:{py:"JSQ",t:"金山区",p:"SHS",pid:94,guid:108},109:{py:"SJQ",t:"松江区",p:"SHS",pid:94,guid:109},110:{py:"CMX",t:"崇明县",p:"SHS",pid:94,guid:110},111:{py:"QPQ",t:"青浦区",p:"SHS",pid:94,guid:111},112:{py:"NHQ",t:"南汇区",p:"SHS",pid:94,guid:112},113:{py:"FXQ",t:"奉贤区",p:"SHS",pid:94,guid:113},115:{py:"JS",t:"江苏",s:[116,117,118,119,120,121,122,123,124,125,126,127,128,130],guid:115},116:{py:"NJS",t:"南京市",p:"JS",pid:115,guid:116},117:{py:"XZS",t:"徐州市",p:"JS",pid:115,guid:117},118:{py:"LYGS",t:"连云港市 ",p:"JS",pid:115,guid:118},119:{py:"XQS",t:"宿迁市",p:"JS",pid:115,guid:119},120:{py:"HAS",t:"淮安市",p:"JS",pid:115,guid:120},121:{py:"YCS",t:"盐城市",p:"JS",pid:115,guid:121},122:{py:"YZS",t:"扬州市",p:"JS",pid:115,guid:122},123:{py:"TZS",t:"泰州市",p:"JS",pid:115,guid:123},124:{py:"NTS",t:"南通市 ",p:"JS",pid:115,guid:124},125:{py:"ZJS",t:"镇江市",p:"JS",pid:115,guid:125},126:{py:"CZS",t:"常州市",p:"JS",pid:115,guid:126},127:{py:"WXS",t:"无锡市",p:"JS",pid:115,guid:127},128:{py:"SZS",t:"苏州市",p:"JS",pid:115,guid:128},130:{py:"HAS",t:"淮安市",p:"JS",pid:115,guid:130},131:{py:"ZJ",t:"浙江",s:[132,133,134,135,136,137,138,139,140,141,143],guid:131},132:{py:"HZS",t:"杭州市",p:"ZJ",pid:131,guid:132},133:{py:"HZS",t:"湖州市",p:"ZJ",pid:131,guid:133},134:{py:"JXS",t:"嘉兴市",p:"ZJ",pid:131,guid:134},135:{py:"ZSS",t:"舟山市",p:"ZJ",pid:131,guid:135},136:{py:"NBS",t:"宁波市 ",p:"ZJ",pid:131,guid:136},137:{py:"SXS",t:"绍兴市",p:"ZJ",pid:131,guid:137},138:{py:"JHS",t:"金华市",p:"ZJ",pid:131,guid:138},139:{py:"TZS",t:"台州市",p:"ZJ",pid:131,guid:139},140:{py:"WZS",t:"温州市",p:"ZJ",pid:131,guid:140},141:{py:"LSS",t:"丽水市",p:"ZJ",pid:131,guid:141},143:{py:"QZS",t:"衢州市",p:"ZJ",pid:131,guid:143},144:{py:"AH",t:"安徽",s:[145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161],guid:144},145:{py:"HFS",t:"合肥市",p:"AH",pid:144,guid:145},146:{py:"XZS",t:"宿州市",p:"AH",pid:144,guid:146},147:{py:"HBS",t:"淮北市",p:"AH",pid:144,guid:147},148:{py:"FYS",t:"阜阳市 ",p:"AH",pid:144,guid:148},149:{py:"BBS",t:"蚌埠市",p:"AH",pid:144,guid:149},150:{py:"HNS",t:"淮南市",p:"AH",pid:144,guid:150},151:{py:"CZS",t:"滁州市",p:"AH",pid:144,guid:151},152:{py:"MASS",t:"马鞍山市",p:"AH",pid:144,guid:152},153:{py:"WHS",t:"芜湖市",p:"AH",pid:144,guid:153},154:{py:"TLS",t:"铜陵市",p:"AH",pid:144,guid:154},155:{py:"AQS",t:"安庆市",p:"AH",pid:144,guid:155},156:{py:"HSS",t:"黄山市",p:"AH",pid:144,guid:156},157:{py:"LAS",t:"六安市",p:"AH",pid:144,guid:157},158:{py:"CHS",t:"巢湖市",p:"AH",pid:144,guid:158},159:{py:"CZS",t:"池州市",p:"AH",pid:144,guid:159},160:{py:"XCS",t:"宣城市",p:"AH",pid:144,guid:160},161:{py:"BZS",t:"亳州市",p:"AH",pid:144,guid:161},163:{py:"FJ",t:"福建",s:[164,165,166,167,168,169,170,171,172],guid:163},164:{py:"FZS",t:"福州市",p:"FJ",pid:163,guid:164},165:{py:"NPS",t:"南平市",p:"FJ",pid:163,guid:165},166:{py:"SMS",t:"三明市 ",p:"FJ",pid:163,guid:166},167:{py:"PTS",t:"莆田市",p:"FJ",pid:163,guid:167},168:{py:"QZS",t:"泉州市",p:"FJ",pid:163,guid:168},169:{py:"SMS",t:"厦门市",p:"FJ",pid:163,guid:169},170:{py:"ZZS",t:"漳州市",p:"FJ",pid:163,guid:170},171:{py:"LYS",t:"龙岩市",p:"FJ",pid:163,guid:171},172:{py:"NDS",t:"宁德市 ",p:"FJ",pid:163,guid:172},174:{py:"JX",t:"江西",s:[175,176,177,178,179,180,181,182,183,184,185],guid:174},175:{py:"NCS",t:"南昌市",p:"JX",pid:174,guid:175},176:{py:"JJS",t:"九江市",p:"JX",pid:174,guid:176},177:{py:"JDZS",t:"景德镇市",p:"JX",pid:174,guid:177},178:{py:"YTS",t:"鹰潭市 ",p:"JX",pid:174,guid:178},179:{py:"XYS",t:"新余市",p:"JX",pid:174,guid:179},180:{py:"PXS",t:"萍乡市",p:"JX",pid:174,guid:180},181:{py:"GZS",t:"赣州市",p:"JX",pid:174,guid:181},182:{py:"SRS",t:"上饶市",p:"JX",pid:174,guid:182},183:{py:"FZS",t:"抚州市",p:"JX",pid:174,guid:183},184:{py:"YCS",t:"宜春市 ",p:"JX",pid:174,guid:184},185:{py:"JAS",t:"吉安市",p:"JX",pid:174,guid:185},187:{py:"SD",t:"山东",s:[188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204],guid:187},188:{py:"JNS",t:"济南市",p:"SD",pid:187,guid:188},189:{py:"LCS",t:"聊城市",p:"SD",pid:187,guid:189},190:{py:"DZS",t:"德州市 ",p:"SD",pid:187,guid:190},191:{py:"DYS",t:"东营市",p:"SD",pid:187,guid:191},192:{py:"ZBS",t:"淄博市",p:"SD",pid:187,guid:192},193:{py:"WFS",t:"潍坊市",p:"SD",pid:187,guid:193},194:{py:"YTS",t:"烟台市",p:"SD",pid:187,guid:194},195:{py:"WHS",t:"威海市",p:"SD",pid:187,guid:195},196:{py:"QDS",t:"青岛市 ",p:"SD",pid:187,guid:196},197:{py:"RZS",t:"日照市",p:"SD",pid:187,guid:197},198:{py:"LYS",t:"临沂市",p:"SD",pid:187,guid:198},199:{py:"ZZS",t:"枣庄市",p:"SD",pid:187,guid:199},200:{py:"JNS",t:"济宁市",p:"SD",pid:187,guid:200},201:{py:"TAS",t:"泰安市",p:"SD",pid:187,guid:201},202:{py:"LWS",t:"莱芜市 ",p:"SD",pid:187,guid:202},203:{py:"BZS",t:"滨州市",p:"SD",pid:187,guid:203},204:{py:"HZS",t:"菏泽市",p:"SD",pid:187,guid:204},206:{py:"HN",t:"河南",s:[207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224],guid:206},207:{py:"ZZS",t:"郑州市",p:"HN",pid:206,guid:207},208:{py:"SMXS",t:"三门峡市 ",p:"HN",pid:206,guid:208},209:{py:"LYS",t:"洛阳市",p:"HN",pid:206,guid:209},210:{py:"JZS",t:"焦作市",p:"HN",pid:206,guid:210},211:{py:"XXS",t:"新乡市",p:"HN",pid:206,guid:211},212:{py:"HBS",t:"鹤壁市",p:"HN",pid:206,guid:212},213:{py:"AYS",t:"安阳市",p:"HN",pid:206,guid:213},214:{py:"PYS",t:"濮阳市 ",p:"HN",pid:206,guid:214},215:{py:"KFS",t:"开封市",p:"HN",pid:206,guid:215},216:{py:"SQS",t:"商丘市",p:"HN",pid:206,guid:216},217:{py:"XCS",t:"许昌市",p:"HN",pid:206,guid:217},218:{py:"LHS",t:"漯河市",p:"HN",pid:206,guid:218},219:{py:"PDSS",t:"平顶山市",p:"HN",pid:206,guid:219},220:{py:"NYS",t:"南阳市",p:"HN",pid:206,guid:220},221:{py:"XYS",t:"信阳市",p:"HN",pid:206,guid:221},222:{py:"JYS",t:"济源市",p:"HN",pid:206,guid:222},223:{py:"ZKS",t:"周口市",p:"HN",pid:206,guid:223},224:{py:"ZMDS",t:"驻马店市",p:"HN",pid:206,guid:224},226:{py:"NMG",t:"内蒙古",s:[227,228,229,230,231,232,233,234,235,236,237,238],guid:226},227:{py:"HHHTS",t:"呼和浩特市",p:"NMG",pid:226,guid:227},228:{py:"BTS",t:"包头市",p:"NMG",pid:226,guid:228},229:{py:"WHS",t:"乌海市",p:"NMG",pid:226,guid:229},230:{py:"CFS",t:"赤峰市",p:"NMG",pid:226,guid:230},231:{py:"HLBE",t:"呼伦贝尔",p:"NMG",pid:226,guid:231},232:{py:"XAM",t:"兴安盟 ",p:"NMG",pid:226,guid:232},233:{py:"XLGLM",t:"锡林郭勒盟",p:"NMG",pid:226,guid:233},234:{py:"WLCBS",t:"乌兰察布市",p:"NMG",pid:226,guid:234},235:{py:"BYNES",t:"巴彦淖尔市",p:"NMG",pid:226,guid:235},236:{py:"ALSM",t:"阿拉善盟",p:"NMG",pid:226,guid:236},237:{py:"EEDSS",t:"鄂尔多斯市 ",p:"NMG",pid:226,guid:237},238:{py:"TLS",t:"通辽市",p:"NMG",pid:226,guid:238},240:{py:"HLJ",t:"黑龙江",s:[241,242,243,244,245,246,247,248,249,250,251,252,253],guid:240},241:{py:"HEBS",t:"哈尔滨市",p:"HLJ",pid:240,guid:241},242:{py:"QQHES",t:"齐齐哈尔市",p:"HLJ",pid:240,guid:242},243:{py:"HHS",t:"黑河市 ",p:"HLJ",pid:240,guid:243},244:{py:"DQS",t:"大庆市",p:"HLJ",pid:240,guid:244},245:{py:"YCS",t:"伊春市",p:"HLJ",pid:240,guid:245},246:{py:"HGS",t:"鹤岗市",p:"HLJ",pid:240,guid:246},247:{py:"JMSS",t:"佳木斯市",p:"HLJ",pid:240,guid:247},248:{py:"SYSS",t:"双鸭山市",p:"HLJ",pid:240,guid:248},249:{py:"QTHS",t:"七台河市",p:"HLJ",pid:240,guid:249},250:{py:"JXS",t:"鸡西市",p:"HLJ",pid:240,guid:250},251:{py:"MDJS",t:"牡丹江市",p:"HLJ",pid:240,guid:251},252:{py:"SHDQ",t:"绥化地区",p:"HLJ",pid:240,guid:252},253:{py:"DXALDQ",t:"大兴安岭地区",p:"HLJ",pid:240,guid:253},255:{py:"HB",t:"湖北",s:[256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272],guid:255},256:{py:"WHS",t:"武汉市",p:"HB",pid:255,guid:256},257:{py:"SYS",t:"十堰市",p:"HB",pid:255,guid:257},258:{py:"XFS",t:"襄樊市",p:"HB",pid:255,guid:258},259:{py:"JMS",t:"荆门市",p:"HB",pid:255,guid:259},260:{py:"XGS",t:"孝感市 ",p:"HB",pid:255,guid:260},261:{py:"HGS",t:"黄冈市",p:"HB",pid:255,guid:261},262:{py:"EZS",t:"鄂州市",p:"HB",pid:255,guid:262},263:{py:"HSS",t:"黄石市",p:"HB",pid:255,guid:263},264:{py:"XNS",t:"咸宁市",p:"HB",pid:255,guid:264},265:{py:"JZS",t:"荆州市",p:"HB",pid:255,guid:265},266:{py:"YCS",t:"宜昌市 ",p:"HB",pid:255,guid:266},267:{py:"SZS",t:"随州市",p:"HB",pid:255,guid:267},268:{py:"XTS",t:"仙桃市",p:"HB",pid:255,guid:268},269:{py:"TMS",t:"天门市",p:"HB",pid:255,guid:269},270:{py:"QJS",t:"潜江市",p:"HB",pid:255,guid:270},271:{py:"SNJLQ",t:"神农架林区",p:"HB",pid:255,guid:271},272:{py:"ESTJZMZZZZ",t:"恩施土家族苗族自治州",p:"HB",pid:255,guid:272},274:{py:"HN",t:"湖南",s:[275,276,277,278,279,280,281,282,283,284,285,286,287,288],guid:274},275:{py:"ZSS",t:"长沙市",p:"HN",pid:274,guid:275},276:{py:"ZJJS",t:"张家界市",p:"HN",pid:274,guid:276},277:{py:"CDS",t:"常德市 ",p:"HN",pid:274,guid:277},278:{py:"YYS",t:"益阳市",p:"HN",pid:274,guid:278},279:{py:"YYS",t:"岳阳市",p:"HN",pid:274,guid:279},280:{py:"ZZS",t:"株洲市",p:"HN",pid:274,guid:280},281:{py:"XTS",t:"湘潭市",p:"HN",pid:274,guid:281},282:{py:"HYS",t:"衡阳市",p:"HN",pid:274,guid:282},283:{py:"CZS",t:"郴州市 ",p:"HN",pid:274,guid:283},284:{py:"YZS",t:"永州市",p:"HN",pid:274,guid:284},285:{py:"SYS",t:"邵阳市",p:"HN",pid:274,guid:285},286:{py:"HHS",t:"怀化市",p:"HN",pid:274,guid:286},287:{py:"LDS",t:"娄底市",p:"HN",pid:274,guid:287},288:{py:"XXTJZMZZZZ",t:"湘西土家族苗族自治州 ",p:"HN",pid:274,guid:288},290:{py:"GD",t:"广东",s:[291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311],guid:290},291:{py:"GZS",t:"广州市",p:"GD",pid:290,guid:291},292:{py:"QYS",t:"清远市",p:"GD",pid:290,guid:292},293:{py:"SGS",t:"韶关市",p:"GD",pid:290,guid:293},294:{py:"HYS",t:"河源市 ",p:"GD",pid:290,guid:294},295:{py:"MZS",t:"梅州市",p:"GD",pid:290,guid:295},296:{py:"CZS",t:"潮州市",p:"GD",pid:290,guid:296},297:{py:"STS",t:"汕头市",p:"GD",pid:290,guid:297},298:{py:"JYS",t:"揭阳市",p:"GD",pid:290,guid:298},299:{py:"SWS",t:"汕尾市",p:"GD",pid:290,guid:299},300:{py:"HZS",t:"惠州市 ",p:"GD",pid:290,guid:300},301:{py:"DGS",t:"东莞市",p:"GD",pid:290,guid:301},302:{py:"SZS",t:"深圳市",p:"GD",pid:290,guid:302},303:{py:"ZHS",t:"珠海市",p:"GD",pid:290,guid:303},304:{py:"ZSS",t:"中山市",p:"GD",pid:290,guid:304},305:{py:"JMS",t:"江门市",p:"GD",pid:290,guid:305},306:{py:"BSS",t:"佛山市 ",p:"GD",pid:290,guid:306},307:{py:"ZQS",t:"肇庆市",p:"GD",pid:290,guid:307},308:{py:"YFS",t:"云浮市",p:"GD",pid:290,guid:308},309:{py:"YJS",t:"阳江市",p:"GD",pid:290,guid:309},310:{py:"MMS",t:"茂名市",p:"GD",pid:290,guid:310},311:{py:"ZJS",t:"湛江市",p:"GD",pid:290,guid:311},313:{py:"GX",t:"广西",s:[314,315,316,317,318,319,320,321,322,323,324,325,326,327,328],guid:313},314:{py:"NNS",t:"南宁市",p:"GX",pid:313,guid:314},315:{py:"GLS",t:"桂林市",p:"GX",pid:313,guid:315},316:{py:"LZS",t:"柳州市",p:"GX",pid:313,guid:316},317:{py:"WZS",t:"梧州市",p:"GX",pid:313,guid:317},318:{py:"GGS",t:"贵港市 ",p:"GX",pid:313,guid:318},319:{py:"YLS",t:"玉林市",p:"GX",pid:313,guid:319},320:{py:"QZS",t:"钦州市",p:"GX",pid:313,guid:320},321:{py:"BHS",t:"北海市",p:"GX",pid:313,guid:321},322:{py:"FCGS",t:"防城港市",p:"GX",pid:313,guid:322},323:{py:"BSS",t:"百色市",p:"GX",pid:313,guid:323},324:{py:"HCS",t:"河池市",p:"GX",pid:313,guid:324},325:{py:"HZS",t:"贺州市",p:"GX",pid:313,guid:325},326:{py:"CZS",t:"崇左市",p:"GX",pid:313,guid:326},327:{py:"PXS",t:"凭祥市",p:"GX",pid:313,guid:327},328:{py:"LBS",t:"来宾市",p:"GX",pid:313,guid:328},330:{py:"HN",t:"海南",s:[331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349],guid:330},331:{py:"HKS",t:"海口市",p:"HN",pid:330,guid:331},332:{py:"SYS",t:"三亚市",p:"HN",pid:330,guid:332},333:{py:"QSS",t:"琼山市",p:"HN",pid:330,guid:333},334:{py:"WCS",t:"文昌市",p:"HN",pid:330,guid:334},335:{py:"QHS",t:"琼海市",p:"HN",pid:330,guid:335},336:{py:"WNS",t:"万宁市 ",p:"HN",pid:330,guid:336},337:{py:"DFS",t:"东方市",p:"HN",pid:330,guid:337},338:{py:"DZS",t:"儋州市",p:"HN",pid:330,guid:338},339:{py:"LGX",t:"临高县",p:"HN",pid:330,guid:339},340:{py:"CMX",t:"澄迈县",p:"HN",pid:330,guid:340},341:{py:"DAX",t:"定安县",p:"HN",pid:330,guid:341},342:{py:"TCX",t:"屯昌县 ",p:"HN",pid:330,guid:342},343:{py:"CJLZZZX",t:"昌江黎族自治县",p:"HN",pid:330,guid:343},344:{py:"BSLZZZX",t:"白沙黎族自治县",p:"HN",pid:330,guid:344},345:{py:"QZLZMZZZX",t:"琼中黎族苗族自治县",p:"HN",pid:330,guid:345},346:{py:"LSLZZZX",t:"陵水黎族自治县 ",p:"HN",pid:330,guid:346},347:{py:"BTLZMZZZX",t:"保亭黎族苗族自治县",p:"HN",pid:330,guid:347},348:{py:"LDLZZZX",t:"乐东黎族自治县",p:"HN",pid:330,guid:348},349:{py:"WZSS",t:"五指山市",p:"HN",pid:330,guid:349},351:{py:"SC",t:"四川",s:[352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372],guid:351},352:{py:"CDS",t:"成都市",p:"SC",pid:351,guid:352},353:{py:"GYS",t:"广元市",p:"SC",pid:351,guid:353},354:{py:"MYS",t:"绵阳市",p:"SC",pid:351,guid:354},355:{py:"DYS",t:"德阳市",p:"SC",pid:351,guid:355},356:{py:"NCS",t:"南充市",p:"SC",pid:351,guid:356},357:{py:"GAS",t:"广安市 ",p:"SC",pid:351,guid:357},358:{py:"SNS",t:"遂宁市",p:"SC",pid:351,guid:358},359:{py:"NJS",t:"内江市",p:"SC",pid:351,guid:359},360:{py:"LSS",t:"乐山市",p:"SC",pid:351,guid:360},361:{py:"ZGS",t:"自贡市",p:"SC",pid:351,guid:361},362:{py:"LZS",t:"泸州市",p:"SC",pid:351,guid:362},363:{py:"YBS",t:"宜宾市 ",p:"SC",pid:351,guid:363},364:{py:"PZHS",t:"攀枝花市",p:"SC",pid:351,guid:364},365:{py:"BZS",t:"巴中市",p:"SC",pid:351,guid:365},366:{py:"DZS",t:"达州市",p:"SC",pid:351,guid:366},367:{py:"ZYS",t:"资阳市",p:"SC",pid:351,guid:367},368:{py:"MSS",t:"眉山市",p:"SC",pid:351,guid:368},369:{py:"YAS",t:"雅安市",p:"SC",pid:351,guid:369},370:{py:"ABCZQZZZZ",t:"阿坝藏族羌族自治州",p:"SC",pid:351,guid:370},371:{py:"GZCZZZZ",t:"甘孜藏族自治州",p:"SC",pid:351,guid:371},372:{py:"LSYZZZZ",t:"凉山彝族自治州",p:"SC",pid:351,guid:372},374:{py:"CZQ",t:"重庆",s:[375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,406,407,408,409,410,411,412,413,414,415],guid:374},375:{py:"YZQ",t:"渝中区",p:"CZQ",pid:374,guid:375},376:{py:"DDKQ",t:"大渡口区",p:"CZQ",pid:374,guid:376},377:{py:"JBQ",t:"江北区",p:"CZQ",pid:374,guid:377},378:{py:"SPBQ",t:"沙坪坝区",p:"CZQ",pid:374,guid:378},379:{py:"JLPQ",t:"九龙坡区",p:"CZQ",pid:374,guid:379},380:{py:"NAQ",t:"南岸区",p:"CZQ",pid:374,guid:380},381:{py:"BBQ",t:"北碚区",p:"CZQ",pid:374,guid:381},382:{py:"WSQ",t:"万盛区",p:"CZQ",pid:374,guid:382},383:{py:"SQQ",t:"双桥区",p:"CZQ",pid:374,guid:383},384:{py:"YBQ",t:"渝北区",p:"CZQ",pid:374,guid:384},385:{py:"BNQ",t:"巴南区",p:"CZQ",pid:374,guid:385},386:{py:"WZQ",t:"万州区",p:"CZQ",pid:374,guid:386},387:{py:"FLQ",t:"涪陵区",p:"CZQ",pid:374,guid:387},388:{py:"HCS",t:"合川市",p:"CZQ",pid:374,guid:388},389:{py:"YCS",t:"永川市",p:"CZQ",pid:374,guid:389},390:{py:"JJS",t:"江津市",p:"CZQ",pid:374,guid:390},391:{py:"NCS",t:"南川市",p:"CZQ",pid:374,guid:391},392:{py:"ZSQ",t:"长寿区",p:"CZQ",pid:374,guid:392},393:{py:"QJX",t:"綦江县",p:"CZQ",pid:374,guid:393},394:{py:"TNX",t:"潼南县",p:"CZQ",pid:374,guid:394},395:{py:"TLX",t:"铜梁县",p:"CZQ",pid:374,guid:395},396:{py:"DZX",t:"大足县",p:"CZQ",pid:374,guid:396},397:{py:"RCX",t:"荣昌县",p:"CZQ",pid:374,guid:397},398:{py:"BSX",t:"璧山县",p:"CZQ",pid:374,guid:398},399:{py:"DJX",t:"垫江县",p:"CZQ",pid:374,guid:399},400:{py:"WLX",t:"武隆县",p:"CZQ",pid:374,guid:400},401:{py:"FDX",t:"丰都县",p:"CZQ",pid:374,guid:401},402:{py:"CKX",t:"城口县",p:"CZQ",pid:374,guid:402},403:{py:"LPX",t:"梁平县",p:"CZQ",pid:374,guid:403},404:{py:"QJQ",t:"黔江区",p:"CZQ",pid:374,guid:404},406:{py:"FJX",t:"奉节县",p:"CZQ",pid:374,guid:406},407:{py:"KX",t:"开县",p:"CZQ",pid:374,guid:407},408:{py:"YYX",t:"云阳县",p:"CZQ",pid:374,guid:408},409:{py:"ZX",t:"忠县",p:"CZQ",pid:374,guid:409},410:{py:"WXX",t:"巫溪县",p:"CZQ",pid:374,guid:410},411:{py:"WSX",t:"巫山县",p:"CZQ",pid:374,guid:411},412:{py:"SZTJZZZX",t:"石柱土家族自治县",p:"CZQ",pid:374,guid:412},413:{py:"XSTJZMZZZX",t:"秀山土家族苗族自治县",p:"CZQ",pid:374,guid:413},414:{py:"YYTJZMZZZX",t:"酉阳土家族苗族自治县 ",p:"CZQ",pid:374,guid:414},415:{py:"PSMZTJZZZX",t:"彭水苗族土家族自治县",p:"CZQ",pid:374,guid:415},416:{py:"TW",t:"台湾",s:[417,418,419,420,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441],guid:416},417:{py:"TBS",t:"台北市",p:"TW",pid:416,guid:417},418:{py:"GXS",t:"高雄市",p:"TW",pid:416,guid:418},419:{py:"TNS",t:"台南市",p:"TW",pid:416,guid:419},420:{py:"TZS",t:"台中市",p:"TW",pid:416,guid:420},422:{py:"JLS",t:"基隆市",p:"TW",pid:416,guid:422},423:{py:"XZS",t:"新竹市",p:"TW",pid:416,guid:423},424:{py:"JYS",t:"嘉义市",p:"TW",pid:416,guid:424},425:{py:"TBX",t:"台北县",p:"TW",pid:416,guid:425},426:{py:"YLX",t:" 宜兰县",p:"TW",pid:416,guid:426},427:{py:"XZX",t:"新竹县",p:"TW",pid:416,guid:427},428:{py:"TYX",t:"桃园县",p:"TW",pid:416,guid:428},429:{py:"MLX",t:"苗栗县",p:"TW",pid:416,guid:429},430:{py:"TZX",t:"台中县",p:"TW",pid:416,guid:430},431:{py:"ZHX",t:"彰化县",p:"TW",pid:416,guid:431},432:{py:"NTX",t:" 南投县",p:"TW",pid:416,guid:432},433:{py:"JYX",t:"嘉义县",p:"TW",pid:416,guid:433},434:{py:"YLX",t:"云林县",p:"TW",pid:416,guid:434},435:{py:"TNX",t:"台南县",p:"TW",pid:416,guid:435},436:{py:"GXX",t:"高雄县",p:"TW",pid:416,guid:436},437:{py:"PDX",t:"屏东县",p:"TW",pid:416,guid:437},438:{py:"TDX",t:" 台东县",p:"TW",pid:416,guid:438},439:{py:"HLX",t:"花莲县",p:"TW",pid:416,guid:439},440:{py:"PHX",t:"澎湖县",p:"TW",pid:416,guid:440},441:{py:"DYD",t:"钓鱼岛",p:"TW",pid:416,guid:441},442:{py:"GZ",t:"贵州",s:[443,444,445,446,447,448,449,450,451],guid:442},443:{py:"GYS",t:"贵阳市",p:"GZ",pid:442,guid:443},444:{py:"LPSS",t:"六盘水市 ",p:"GZ",pid:442,guid:444},445:{py:"ZYS",t:"遵义市",p:"GZ",pid:442,guid:445},446:{py:"BJDQ",t:"毕节地区",p:"GZ",pid:442,guid:446},447:{py:"TRDQ",t:"铜仁地区",p:"GZ",pid:442,guid:447},448:{py:"ASS",t:"安顺市",p:"GZ",pid:442,guid:448},449:{py:"QDNMZDZZZZ",t:"黔东南苗族侗族自治州 ",p:"GZ",pid:442,guid:449},450:{py:"QNBYZMZZZZ",t:"黔南布依族苗族自治州",p:"GZ",pid:442,guid:450},451:{py:"QXNBYZMZZZZ",t:"黔西南布依族苗族自治州",p:"GZ",pid:442,guid:451},453:{py:"YN",t:"云南",s:[454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469],guid:453},454:{py:"KMS",t:"昆明市 ",p:"YN",pid:453,guid:454},455:{py:"QJS",t:"曲靖市",p:"YN",pid:453,guid:455},456:{py:"YXS",t:"玉溪市",p:"YN",pid:453,guid:456},457:{py:"LJS",t:"丽江市",p:"YN",pid:453,guid:457},458:{py:"ZTS",t:"昭通市",p:"YN",pid:453,guid:458},459:{py:"PES",t:"普洱市",p:"YN",pid:453,guid:459},460:{py:"LCS",t:"临沧市 ",p:"YN",pid:453,guid:460},461:{py:"BSS",t:"保山市",p:"YN",pid:453,guid:461},462:{py:"DHDZJPZZZZ",t:"德宏傣族景颇族自治州",p:"YN",pid:453,guid:462},463:{py:"NJLLZZZZ",t:"怒江傈傈族自治州",p:"YN",pid:453,guid:463},464:{py:"DQCZZZZ",t:"迪庆藏族自治州 ",p:"YN",pid:453,guid:464},465:{py:"DLBZZZZ",t:"大理白族自治州",p:"YN",pid:453,guid:465},466:{py:"CXYZZZZ",t:"楚雄彝族自治州",p:"YN",pid:453,guid:466},467:{py:"HHHNZYZZZZ",t:"红河哈尼族彝族自治州",p:"YN",pid:453,guid:467},468:{py:"WSZZMZZZZ",t:"文山壮族苗族自治州 ",p:"YN",pid:453,guid:468},469:{py:"XSBNDZZZZ",t:"西双版纳傣族自治州",p:"YN",pid:453,guid:469},471:{py:"XC",t:"西藏",s:[472,473,474,475,476,477,478],guid:471},472:{py:"LSS",t:"拉萨市",p:"XC",pid:471,guid:472},473:{py:"NQDQ",t:"那曲地区",p:"XC",pid:471,guid:473},474:{py:"CDDQ",t:" 昌都地区",p:"XC",pid:471,guid:474},475:{py:"LZDQ",t:"林芝地区",p:"XC",pid:471,guid:475},476:{py:"SNDQ",t:"山南地区",p:"XC",pid:471,guid:476},477:{py:"RKZDQ",t:"日喀则地区",p:"XC",pid:471,guid:477},478:{py:"ALDQ",t:"阿里地区",p:"XC",pid:471,guid:478},480:{py:"SX",t:"陕西",s:[481,482,483,484,485,486,487,488,489,490],guid:480},481:{py:"XAS",t:"西安市",p:"SX",pid:480,guid:481},482:{py:"YAS",t:"延安市",p:"SX",pid:480,guid:482},483:{py:"TCS",t:"铜川市",p:"SX",pid:480,guid:483},484:{py:"WNS",t:"渭南市",p:"SX",pid:480,guid:484},485:{py:"XYS",t:"咸阳市 ",p:"SX",pid:480,guid:485},486:{py:"BJS",t:"宝鸡市",p:"SX",pid:480,guid:486},487:{py:"HZS",t:"汉中市",p:"SX",pid:480,guid:487},488:{py:"YLS",t:"榆林市",p:"SX",pid:480,guid:488},489:{py:"SLS",t:"商洛市",p:"SX",pid:480,guid:489},490:{py:"AKS",t:"安康市",p:"SX",pid:480,guid:490},492:{py:"GS",t:"甘肃",s:[493,494,495,496,497,498,499,500,501,502,503,504,505,506,508,509],guid:492},493:{py:"LZS",t:"兰州市",p:"GS",pid:492,guid:493},494:{py:"JYGS",t:"嘉峪关市",p:"GS",pid:492,guid:494},495:{py:"JCS",t:"金昌市",p:"GS",pid:492,guid:495},496:{py:"BYS",t:"白银市",p:"GS",pid:492,guid:496},497:{py:"TSS",t:"天水市 ",p:"GS",pid:492,guid:497},498:{py:"JQS",t:"酒泉市",p:"GS",pid:492,guid:498},499:{py:"ZYS",t:"张掖市",p:"GS",pid:492,guid:499},500:{py:"WWS",t:"武威市",p:"GS",pid:492,guid:500},501:{py:"QYS",t:"庆阳市",p:"GS",pid:492,guid:501},502:{py:"PLS",t:"平凉市",p:"GS",pid:492,guid:502},503:{py:"DXS",t:"定西市 ",p:"GS",pid:492,guid:503},504:{py:"LNDQ",t:"陇南地区",p:"GS",pid:492,guid:504},505:{py:"LXHZZZZ",t:"临夏回族自治州",p:"GS",pid:492,guid:505},506:{py:"GNCZZZZ",t:"甘南藏族自治州",p:"GS",pid:492,guid:506},508:{py:"YMS",t:"玉门市 ",p:"GS",pid:492,guid:508},509:{py:"DHS",t:"敦煌市",p:"GS",pid:492,guid:509},510:{py:"QH",t:"青海",s:[511,512,513,514,515,516,517,518],guid:510},511:{py:"XNS",t:"西宁市",p:"QH",pid:510,guid:511},512:{py:"HDDQ",t:"海东地区",p:"QH",pid:510,guid:512},513:{py:"HBCZZZZ",t:"海北藏族自治州",p:"QH",pid:510,guid:513},514:{py:"HNCZZZZ",t:"海南藏族自治州",p:"QH",pid:510,guid:514},515:{py:"HNCZZZZ",t:"黄南藏族自治州",p:"QH",pid:510,guid:515},516:{py:"GLCZZZZ",t:"果洛藏族自治州",p:"QH",pid:510,guid:516},517:{py:"YSCZZZZ",t:"玉树藏族自治州",p:"QH",pid:510,guid:517},518:{py:"HXMGZCZZZZ",t:"海西蒙古族藏族自治州 ",p:"QH",pid:510,guid:518},520:{py:"NX",t:"宁夏",s:[521,522,523,524,525],guid:520},521:{py:"YCS",t:"银川市",p:"NX",pid:520,guid:521},522:{py:"SZSS",t:"石嘴山市",p:"NX",pid:520,guid:522},523:{py:"WZS",t:"吴忠市",p:"NX",pid:520,guid:523},524:{py:"GYS",t:"固原市 ",p:"NX",pid:520,guid:524},525:{py:"ZWS",t:"中卫市",p:"NX",pid:520,guid:525},527:{py:"XJ",t:"新疆",s:[528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545],guid:527},528:{py:"WLMQS",t:"乌鲁木齐市",p:"XJ",pid:527,guid:528},529:{py:"KLMYS",t:"克拉玛依市",p:"XJ",pid:527,guid:529},530:{py:"SHZS",t:"石河子市",p:"XJ",pid:527,guid:530},531:{py:"KSDQ",t:"喀什地区",p:"XJ",pid:527,guid:531},532:{py:"AKSDQ",t:"阿克苏地区",p:"XJ",pid:527,guid:532},533:{py:"HTDQ",t:"和田地区",p:"XJ",pid:527,guid:533},534:{py:"TLFDQ",t:"吐鲁番地区",p:"XJ",pid:527,guid:534},535:{py:"HMDQ",t:"哈密地区 ",p:"XJ",pid:527,guid:535},536:{py:"KZLSKEKZZZZ",t:"克孜勒苏柯尔克孜自治州",p:"XJ",pid:527,guid:536},537:{py:"BETLMGZZZ",t:"博尔塔拉蒙古自治州",p:"XJ",pid:527,guid:537},538:{py:"CJHZZZZ",t:"昌吉回族自治州",p:"XJ",pid:527,guid:538},539:{py:"BYGLMGZZZ",t:"巴音郭楞蒙古自治州 ",p:"XJ",pid:527,guid:539},540:{py:"YLHSKZZZ",t:"伊犁哈萨克自治州",p:"XJ",pid:527,guid:540},541:{py:"ALES",t:"阿拉尔市",p:"XJ",pid:527,guid:541},542:{py:"TCDQ",t:"塔城地区",p:"XJ",pid:527,guid:542},543:{py:"ALTDQ",t:"阿勒泰地区",p:"XJ",pid:527,guid:543},544:{py:"TMSKS",t:"图木舒克市 ",p:"XJ",pid:527,guid:544},545:{py:"WJQS",t:"五家渠市",p:"XJ",pid:527,guid:545},547:{py:"XG",t:"香港",s:[548,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566],guid:547},548:{py:"JLCQ",t:"九龙城区",p:"XG",pid:547,guid:548},550:{py:"ZXQ",t:"中西区 ",p:"XG",pid:547,guid:550},551:{py:"DQ",t:"东区",p:"XG",pid:547,guid:551},552:{py:"GTQ",t:"观塘区",p:"XG",pid:547,guid:552},553:{py:"NQ",t:"南区",p:"XG",pid:547,guid:553},554:{py:"SSQ",t:"深水?区",p:"XG",pid:547,guid:554},555:{py:"HDXQ",t:"黄大仙区",p:"XG",pid:547,guid:555},556:{py:"WZQ",t:"湾仔区 ",p:"XG",pid:547,guid:556},557:{py:"YJWQ",t:"油尖旺区",p:"XG",pid:547,guid:557},558:{py:"LDQ",t:"离岛区",p:"XG",pid:547,guid:558},559:{py:"KQQ",t:"葵青区",p:"XG",pid:547,guid:559},560:{py:"BQ",t:"北区",p:"XG",pid:547,guid:560},561:{py:"XGQ",t:"西贡区",p:"XG",pid:547,guid:561},562:{py:"STQ",t:"沙田区 ",p:"XG",pid:547,guid:562},563:{py:"TMQ",t:"屯门区",p:"XG",pid:547,guid:563},564:{py:"DPQ",t:"大埔区",p:"XG",pid:547,guid:564},565:{py:"QWQ",t:"荃湾区",p:"XG",pid:547,guid:565},566:{py:"YLQ",t:"元朗区",p:"XG",pid:547,guid:566},567:{py:"AM",t:"澳门",s:[568,569,570],guid:567},568:{py:"AMBD",t:"澳门半岛 ",p:"AM",pid:567,guid:568},569:{py:"DZD",t:"凼仔岛",p:"AM",pid:567,guid:569},570:{py:"LHD",t:"路环岛",p:"AM",pid:567,guid:570},572:{py:"HW",t:"海外",s:[],guid:572}},pl:{B:[1],T:[21,416],H:[41,206,240,255,274,330,572],S:[54,94,187,351,480],L:[67],J:[83,115,174],Z:[131],A:[144,567],F:[163],N:[226,520],G:[290,313,442,492],C:[374],Y:[453],X:[471,527,547],Q:[510]},l:["A","B","C","F","G","H","J","L","N","Q","S","T","X","Y","Z"]};
	var eles={div:document.createElement("div"),ul:document.createElement("ul"),li:document.createElement("li"),span:document.createElement("span"),p:document.createElement("p"),a:document.createElement("a"),fragment:document.createDocumentFragment(),input:document.createElement("input")},$c=function(S,p,Z){var t=null;return eles[S]?t=eles[S].cloneNode(!0):(eles[S]=document.createElement(S),t=eles[S].cloneNode(!0)),p&&(t.id=p),Z&&(t.className=Z),t};
	/**
	 * extend method for js class
	 * @param subClass
	 * @param baseClass
	 */
	var extend = function(subClass, baseClass){
		var parent = subClass.parent = {
			/**
			 * parent construct
			 * @param obj currentObject
			 * @param args
			 */
			'__construct': function(obj, args){
				baseClass.apply(obj, args);
			}
		};
	
		for(var method in baseClass.prototype){
			parent[method] = baseClass.prototype[method];
			if(! (method in subClass.prototype)){
				subClass.prototype[method] = baseClass.prototype[method];
			}
	
		}
	};
	
	/**
	 * mix js object
	 * @param {Object} base
	 * @param {Object} child
	 */
	var mix = function(base, child){
		var o = new Object();
		for(var key in base){
			o[key] = base[key];
		}
		for(var key in child){
			o[key] = child[key];
		}
		return o;
	};
	
	var RegionYL = function(options){
		this._initRegionYL(options);
	};
	
	RegionYL.prototype = {
		
		_initRegionYL: function(options){
			this.options = {
				trigger: "",
				offsetX: 0,
				offsetY: 32,
				onProvinceSelect: function(){},
				onCitySelect: function(){},
				onQuickSelect: function(){},
				onConfirm: function(){},
				onCancel: function(){}
			};
			this.options = mix(this.options, options);
			this.cachedKeyword = null;
			this.cachedResults = {};
			this.isSuggestOpen = false;
			this.dom = {};
			this._initRegionUI();
			this._initRegionEvents();
		},
		
		_initRegionUI: function(){
			var containerBox = this.dom.container = $c("div", null, 'region');
			var inset = $c("div", null, "inset");
			var searchbar = $c("div", null, 'searchbar');
			var searchinput = this.dom.searchinput = $c('input');
			searchinput.type = "text";
			searchinput.placeholder = "拼音首字母检索";
			searchbar.appendChild(searchinput);
			
			var contentBox = $c("div", null, "contentbox");
			var province = this.dom.province = $c('div', null, 'province');
			var city = this.dom.city = $c('div', null, 'city');
			var currprovince = $c('div', null, 'current_province');
			var cp_label = $c('em');
			cp_label.innerHTML = "当前省份";
			var cp_value = this.dom.cpvalue = $c('a');
			currprovince.appendChild(cp_label);
			currprovince.appendChild(cp_value);
			var citylist = this.dom.citylist = $c('div', null, 'citylist');
			city.appendChild(currprovince);
			city.appendChild(citylist);
			
			
			var quicklist = this.dom.quicklist = $c('div', null, 'quick_list');
			contentBox.appendChild(province);
			contentBox.appendChild(city);
			contentBox.appendChild(quicklist);
			
			var foot = $c('div', null, 'foot');
			var btnReturn = this.dom.btnReturn = $c('button', null, 'fl btn_return');
			btnReturn.type = "button";
			btnReturn.innerHTML = "返回";
			var btnConfirm = this.dom.btnConfirm = $c('button', null, 'fr btn_confirm');
			btnConfirm.type = "button";
			btnConfirm.innerHTML = "确定";
			var btnCancel  = this.dom.btnCancel = $c('button', null, 'fr btn_cancel');
			btnCancel.type = "button";
			btnCancel.innerHTML = "取消";
			
			foot.appendChild(btnReturn);
			foot.appendChild(btnCancel);
			foot.appendChild(btnConfirm);
			
			inset.appendChild(searchbar);
			inset.appendChild(contentBox);
			inset.appendChild(foot);
			
			containerBox.appendChild(inset);
			window.document.body.appendChild(containerBox);
			
			this.initProvince();
		},
		
		_initRegionEvents: function(){
			var self = this;
			$(this.options.trigger).click(function(){
				var p = $(this).offset();
				$(self.dom.container).css({
					left: p.left + self.options.offsetX,
					top: p.top + self.options.offsetY,
					position: 'absolute'
				});
				
				self.open();
			});
			
			$(this.dom.province).click(function(e){
				var target = e.target;
				if(target.tagName == "A"){
					self.options.onProvinceSelect({pName: target.innerHTML});
					var pName = target.innserHTML;
					var parent = target.parentNode;
					var firstLetter = parent.py;
					var pPY = target.py;
					var guid = target.guid;
					
					var cityGUIDs = areaData.g[guid].s;
					
					var fragment = self.getCity(cityGUIDs, guid);
					
					self.dom.cpvalue.innerHTML = areaData.g[guid].t + '[选择]';
					self.dom.citylist.innerHTML = '';
					self.dom.citylist.appendChild(fragment);
					self.showCity();
				}
			});
			
			/**
			 *城市点击事件 
			 */
			$(this.dom.citylist).click(function(e){
				var target = e.target;
				if(target.tagName == 'A'){
					var pname = areaData.g[target.getAttribute('pid')].t;
					self.options.onCitySelect({cName: pname + ' ' + target.innerHTML});
					self.options.onConfirm();
					self.close();
				}
			});
			
			$(this.dom.quicklist).click(function(e){
				var target = e.target;
				if(target.tagName == 'A'){
					var name;
					var guid = target.guid;
					var area = areaData.g[guid];
					if(area.s){
						name = area.t;
					}else{
						name = areaData.g[area.pid].t + ' ' + area.t;
					}
					
					self.options.onQuickSelect({name: name});
					self.options.onConfirm();
					self.close();
				}
			});
			
			$(this.dom.btnReturn).click(function(e){
				self.showProvince();
			});
			$(this.dom.btnConfirm).click(function(e){
				self.options.onConfirm();
				self.close();
			});
			$(this.dom.btnCancel).click(function(e){
				self.options.onCancel();
				self.close();
			});
			//开始观查
			$(this.dom.searchinput).focus(function(e){
				self.startObserve();
			});
			//停止观察
			$(this.dom.searchinput).blur(function(e){
				setTimeout(function(){
					self.stopObserve();
				}, 100);
				
			});
		},
		
		//初始化省份
		initProvince: function(){
			//<span><em>A</em><a>安徽</a><a>澳门</a></span>
			//<div class="province">
			var g = areaData.g, pl = areaData.pl;
			for(var i = 0, len = areaData.l.length; i < len; i++){
				var letter = areaData.l[i];
				var span = $c('span');
				span.py = letter;
				var em = $c('em');
				em.innerHTML = letter;
				span.appendChild(em);
				for(var j = 0, jlen = areaData.pl[letter].length; j < jlen; j++){
					var pro = pl[letter][j];
					var a = $c('a');
					a.innerHTML = g[pro].t;
					a.py = g[pro].py;
					a.guid = g[pro].guid;
					span.appendChild(a);
				}
				this.dom.province.appendChild(span);
			}
		},
		/**
		 * 
 		 * @param {Array} citiesIds 城市id列表
 		 * @param {Int} pid 省份id
		 */
		getCity: function(citiesIds, pid){
			if(!this.dom['p' + pid]){
				var fragment = $c('fragment');
				for(var i= 0, len = citiesIds.length; i < len; i++){
					var a = $c('a');
					var city = areaData.g[citiesIds[i]];
					a.innerHTML = city.t;
					a.setAttribute('py', city.py);
					a.setAttribute('p', city.p);
					a.setAttribute('guid', city.guid);
					a.setAttribute('pid', city.pid);
					fragment.appendChild(a);
				}
				
				this.dom['p' + pid] = fragment;
			}
			
			return this.dom['p' + pid].cloneNode(true);
		},
		
		showCity: function(){
			
			$(this.dom.city).css({left: 400}).animate({left:0});
			$(this.dom.province).animate({left: -400});
			$(this.dom.btnReturn).show();
		},
		
		showProvince: function(){
			$(this.dom.city).animate({left:400});
			$(this.dom.province).show().animate({left:0});
			$(this.dom.btnReturn).hide();
		},
		
		//开始观察输入框
		startObserve: function(){
			
			var self = this;
			if(!this.timer){
				this.timer = setInterval(function(){
					self.onChange();
				}, 100);
			}
		},
		//停止观察输入框
		stopObserve: function(){
			if(this.timer){
				clearInterval(this.timer);
				this.timer = null;
			}
			
			this.closeSuggest();
		},
		//输入框内容改变时
		onChange: function(){
			var value = $.trim(this.dom.searchinput.value), self = this;
			
			if(value == ''){
				this.cacheResults = [];
				this.closeSuggest();
			}
			
			if(this.cachedKeyword !== null && this.cachedKeyword === value){
				return;
			}
			var fromCachedResults = false;
			if(this.cachedKeyword != null && this.cachedKeyword.length < value.length){
				fromCachedResults = true;
			}
			this.cachedKeyword = value;
			if(value != ''){
				this.getSearchResults(value, fromCachedResults, function(results){
					if(results.length !== 0){
						self.openSuggest(results);
					}
				});
				
			}else{
				this.cacheResults = [];
				this.closeSuggest();
			}
			
		},
		
		getSearchResults: function(value, fromCachedResults, callback){
			var data = areaData.g;
			/*
			if(fromCachedResults){
				data = this.cachedResults;
			}
			*/
			var temp = [];
			
			var pRegexp = new RegExp(value, 'i');
			
			var chineseRegexp = new RegExp(value);
			for(var p in data){
				if(pRegexp.test(data[p].py) || chineseRegexp.test(data[p].t)){
					temp.push(data[p].guid);
				}
			}
			this.cachedResults = temp;
			callback(temp);
		},
		//打开建议列表
		openSuggest: function(results){
			var g = areaData.g;
			this.isSuggestOpen = true;
			var cf = $c('fragment');
			var pf = $c('fragment');
			this.dom.quicklist.innerHTML = '';
			
			for(var i in results){
				var guid = results[i];
				var a = $c('a');
				a.innerHTML = g[guid].t;
				//区域类型 atype 为p 是省份
				a.guid = guid;
				pf.appendChild(a);
			}
			
			this.dom.quicklist.appendChild(pf);
			this.dom.quicklist.appendChild(cf);
			$(this.dom.quicklist).fadeIn('fast');
		},
		//关闭建议列表
		closeSuggest: function(){
			this.selectedIndex = -1;
			this.isSuggestOpen = false;
			$(this.dom.quicklist).fadeOut('fast');
		},
		
		open: function(){
			$(this.dom.container).show();
		},
		
		close: function(){
			$(this.dom.container).hide();
		}
	};
	
	window.RegionYL = RegionYL;
	
})();
