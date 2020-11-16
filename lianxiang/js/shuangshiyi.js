$(window).ready(function(){
			
	//尝试用vue框架v-for写商品
	var body_middleGoods7 = new Vue({
		el:"#body_middleGoods7",
		data:{
			lists:[
				{
					img_src:"https://p3.lefile.cn/product/adminweb/2020/10/19/NoeJczGGH8C9kSfEewgII6vcv-5920.jpg",
					p1:"联想平板小新Pad 11英寸 学习娱乐平板电脑 深空灰",
					p2:"Qualcomm® Snapdragon™ 662/8核/Android系统/11英寸/6G/128G/WIFI版/深空灰",
					miaoSha:false,
					price:"1499",
					priceDelete:false,
					priceDeleteNum:""
				},
				{
					img_src:"https://p1.lefile.cn/product/adminweb/2020/10/19/5jZDS9FqO1y0ITekQAzb1KKRQ-3287.jpg",
					p1:"联想平板小新Pad Pro 11.5英寸 影音娱乐办公学习平板电脑 深空灰",
					p2:"Qualcomm® Snapdragon™ 730G/8核/Android系统/11.5英寸/6G/128G/WIFI版/深空灰",
					miaoSha:false,
					price:"2299",
					priceDelete:false,
					priceDeleteNum:""
				},
				{
					img_src:"https://p2.lefile.cn/product/adminweb/2020/03/24/0IzBinCnaxCWVCneG75df2Wzw-6724.jpg",
					p1:"联想M10 PLUS 网课平板电脑 10.3英寸 WIFI版 枪灰色",
					p2:"MediaTek P22T/8核/Android系统/10.3英寸/4G/64G/WIFI版/枪灰色/网课平板",
					miaoSha:false,
					price:"1099",
					priceDelete:false,
					priceDeleteNum:""
				},
				{
					img_src:"https://p3.lefile.cn/product/adminweb/2019/10/28/KlB15FKLS2Au5RrEwbyc6ByZT-7036.jpg",
					p1:"联想YOGA tab5网课平板电脑 10.1英寸全高清4G+64G 8核 YT-X705F",
					p2:"高通439八核/Android系统/10.1英寸/4GB/64GB/WIFI版/深空灰/网课平板",
					miaoSha:false,
					price:"1399",
					priceDelete:false,
					priceDeleteNum:""
				}
			]
		}
	})
	var body_middleGoods8 = new Vue({
		el:"#body_middleGoods8",
		data:{
			lists:[
				{
					img_src:"https://p4.lefile.cn/fes/cms/2020/11/05/g69buobrmtge7rj9zaiyowy2qh1vfl810035.jpg",
					p1:"拯救者电竞手机Pro 16GB+512GB 至尊透明版 太空无垠",
					p2:"次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
					miaoSha:false,
					price:"5999",
					priceDelete:false,
					priceDeleteNum:""
				},
				{
					img_src:"https://p1.lefile.cn/fes/cms/2020/11/05/m82tft9uu9jgxos2wk3l1acvfu7liu847722.jpg",
					p1:"拯救者电竞手机 Pro 12GB+256GB 炽焰战甲",
					p2:"次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
					miaoSha:true,
					price:"3999",
					priceDelete:true,
					priceDeleteNum:"4199"
				},
				{
					img_src:"https://p4.lefile.cn/product/adminweb/2020/10/30/4d7ZlJupCm3yhenHEKXpCBRov-9517.jpg",
					p1:"motorola 摩托罗拉 刀锋 5G 8GB+256GB 锋雅黑",
					p2:"5G刀锋折叠屏 | 双屏双视界 | 无缝无折痕 | 4800万像素超强自拍	",
					miaoSha:false,
					price:"12499",
					priceDelete:false,
					priceDeleteNum:""
				},
				{
					img_src:"https://p2.lefile.cn/product/adminweb/2020/11/04/nQcvZW2fQvJOGfdsP3TUxvGt4-4827.jpg",
					p1:"Lenovo GaN 90W 拯救者电竞手机专用适配器",
					p2:"GaN工艺丨充电速度快丨插口可折叠",
					miaoSha:false,
					price:"249",
					priceDelete:false,
					priceDeleteNum:""
				}
			]
		}
	})
	var body_middleGoods9 = new Vue({
		el:"#body_middleGoods9",
		data:{
			lists1:[
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/05/25/hW99vuxZdEOOiIhy0cxi6ZULq-9911.jpg",
				p1:"智能体脂秤Mini E2",
				p2:"全家使用 20项核心指标测量 不连手机也可读取体脂率，云存储同步 体重秤男女健康减肥 一年换新质保售后无忧",
				p2Hidden:false,
				miaoSha:false,
				price:"129",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2020/06/05/vzzTuni729QPIlf02ytzrqD0e-7995.jpg",
				p1:"联想蜂窝胎滑板车M2（黑色）",
				p2:"【升级版，新品上市】三重刹车，三重减震，折叠车身，120KG承重，APP智能锁车，好玩不止一点",
				p2Hidden:false,
				miaoSha:true,
				price:"1699",
				priceDelete:true,
				priceDeleteNum:"2199"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/09/08/l2cjCBgMIykKab998Qpmvfcag-6653.jpg",
				p1:"联想智能MINI投影仪“小神兽”国潮版",
				p2:"【新品上市】神兽底座,内置电池，虎妈模式，无线投屏",
				p2Hidden:false,
				miaoSha:true,
				price:"1399",
				priceDelete:true,
				priceDeleteNum:"1499"
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2020/08/14/ql0k3QlYjnhhhqixVnre0k2Oa-8483.jpg",
				p1:"联想个人云存储A1 3TB",
				p2:"【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据",
				p2Hidden:false,
				miaoSha:false,
				price:"1399",
				priceDelete:false,
				priceDeleteNum:""
			}],
			lists2:[
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2019/10/19/boQMCrzT7egBm5nKHagwTM22g-1626.jpg",
				p1:" 联想小新 X3 USB3.1闪存盘(32GB) 银",
				p2:"次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
				p2Hidden:true,
				miaoSha:true,
				price:"27.9",
				priceDelete:true,
				priceDeleteNum:"39.9"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2018/08/24/U1OHDCmnoNi958Mps3I07yy5F-5552.jpg",
				p1:"联想小新Air2双模鼠标-冰河银",
				p2:"【无线蓝光】 全金属表层 无线切割 便携办公 台式机笔记本鼠标",
				p2Hidden:false,
				miaoSha:true,
				price:"89",
				priceDelete:true,
				priceDeleteNum:"109"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2018/04/24/eFUBtipyT59kJDtpiSqe8eO5I-7643.jpg",
				p1:"联想拯救者电竞耳机 游戏耳麦 Star Y360 （黑色）",
				p2:"拯救者Y360 电竞耳机；自适应悬浮式头梁亲肤人造蛋白材质；独立USB声卡； 7.1声道环绕；音效声效灯效一键掌控",
				p2Hidden:false,
				miaoSha:true,
				price:"139",
				priceDelete:true,
				priceDeleteNum:"299"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2019/06/12/5QpvjK29aY5cNE8JpCsXGpzwL-0829.jpg",
				p1:"联想U04分线器 USB3.0一拖四多接口 HUB扩展 深灰色",
				p2:"铝合金材质 高速扩展 笔记本台式电脑4口集线器USB延长线",
				p2Hidden:false,
				miaoSha:true,
				price:"59",
				priceDelete:true,
				priceDeleteNum:"69"
			}],
			lists3:[
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2019/08/30/xXP0TkNRoznYRatYsbpY9k9US-1757.jpg",
				p1:"联想（Lenovo）拯救者Y27q-20 27英寸 专业电竞显示器",
				p2:"电竞显示器里的小金钢，快来购买哦！QHD 2K 高清显示  165Hz刷新率 1ms急速响应  FreeSync技术 画片更流畅",
				p2Hidden:false,
				miaoSha:false,
				price:"3099",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2020/04/01/jRMJcDXrnBkMjcLOxuyqpIIpf-4409.jpg",
				p1:"联想（Lenovo)L27i 27英寸全高清超窄边电脑显示器",
				p2:"27英寸全高清超窄边框",
				p2Hidden:false,
				miaoSha:false,
				price:"1099",
				priceDelete:false,
				priceDeleteNum:"4199"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2020/08/07/mzkW6QO8c0ur6RPcNP6Vak2KT-8291.jpg",
				p1:"联想/ThinkVision 思匠27全面屏 2k IPS升降旋转显示器 P27h-20",
				p2:"27英寸，广视角IPS类硬屏，2560*1440（2K），99%sRGB，四边无边框，全功通Type-C,全功通升降底座，带以太网口，接口：DP1.2+DPout+Type-C+HDMI1.4*2",
				p2Hidden:false,
				miaoSha:false,
				price:"2699",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2019/08/07/nHcii4kwLFXqDAkfgsKc963Hf-1795.jpg",
				p1:"联想/ThinkVision M14 14英寸 便携显示器",
				p2:"扩展你的笔记本的视野全功通Type-C接口*2",
				p2Hidden:false,
				miaoSha:false,
				price:"1599",
				priceDelete:false,
				priceDeleteNum:""
			}]
		}
	})
	var body_middleGoods10 = new Vue({
		el:"#body_middleGoods10",
		data:{
			lists1:[
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2020/08/31/2gJPBCwlKMRLAQ4wgKPphgp5R-9035.jpg",
				p1:"联想无线键鼠套装MK21（送电脑远程调修服务）",
				p2:"10米无线传输距离，免开关，内置多集省电模式；光学引擎鼠标，3档DPI可调，人体工学设计，一键触发远程服务",
				p2Hidden:false,
				miaoSha:true,
				price:"75",
				priceDelete:true,
				priceDeleteNum:"129"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2020/09/02/kLkLGtWgti75nzh67iXqI8Zk8-1032.jpg",
				p1:"联想都市简约手提内胆包B11 灰黑色（送电脑远程调修服务）",
				p2:"大容量、轻重量，笔记本电脑、鼠标、移动电源、适配器等轻松放入；隐藏式提手、内衬短毛绒布、防泼溅面料。赠：1次价值98元电脑远程调修服务",
				p2Hidden:false,
				miaoSha:false,
				price:"79",
				priceDelete:false,
				priceDeleteNum:"2199"
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2020/09/02/r3luJlgtYcZOf9Y2NWmVbSSDY-5488.jpg",
				p1:"联想都市简约双肩包B1801 Pro 灰黑色（送电脑远程调修服务）",
				p2:"25L大容量、防泼溅面料、背部透气网格、两侧防渗水侧边带、背部隐形防盗收纳袋，旅行箱尼龙推车带，让出行更省力。赠：1次价值98元电脑远程调修服务",
				p2Hidden:false,
				miaoSha:false,
				price:"99",
				priceDelete:false,
				priceDeleteNum:"1499"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2019/03/27/SYAHyvfWomlIOgBZjoceIEGeH-1463.jpg",
				p1:"联想清洁套装C01",
				p2:"强力去污、清洁彻底、多设备通用",
				p2Hidden:false,
				miaoSha:true,
				price:"29",
				priceDelete:true,
				priceDeleteNum:"49"
			}],
			lists2:[
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/06/09/Vlm89WhtlmRC8lfUQvFuTNAQU-2443.jpg",
				p1:"联想液晶记事板",
				p2:"无需充电、分区消除、笔锋清晰、磁吸机身",
				p2Hidden:false,
				miaoSha:true,
				price:"179",
				priceDelete:true,
				priceDeleteNum:"199"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2019/10/31/K8zGIk44KVxS0xxlNMTZuzVN5-8434.jpg",
				p1:"笔记本便携适配器（65W细圆口）",
				p2:"小巧便携、支持手机快充、多设备通用",
				p2Hidden:false,
				miaoSha:true,
				price:"199",
				priceDelete:true,
				priceDeleteNum:"259"
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2019/12/24/WPxtaKNzpnFzEaa0CsRLWuct0-6441.jpg",
				p1:"联想马卡龙无彩壳鼠标M23 ",
				p2:"蓝牙双模、磁吸上盖、彩壳随心换",
				p2Hidden:false,
				miaoSha:true,
				price:"89",
				priceDelete:true,
				priceDeleteNum:"179"
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2019/07/15/rN6vZt9SD7nxaW1zyVQZxUQTl-6769.jpg",
				p1:"联想有线键鼠套装MK618",
				p2:"纤薄键帽、手感舒适、经久耐用",
				p2Hidden:false,
				miaoSha:true,
				price:"59",
				priceDelete:true,
				priceDeleteNum:"79"
			}],
			lists3:[
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2019/05/08/sKCK1h8ylySdHI6mhuzAxkLI4-7082.jpg",
				p1:"Lenovo Care＋笔记本整机延保服务",
				p2:"原厂硬件、全国联保、免费换件",
				p2Hidden:false,
				miaoSha:false,
				price:"299",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2019/01/04/Zm6CPRhvEDNe8p6cuCufPFgID-4178.jpg",
				p1:"专家1对1重装系统",
				p2:"系统卡顿、蓝屏死机、系统崩溃",
				p2Hidden:false,
				miaoSha:true,
				price:"98",
				priceDelete:true,
				priceDeleteNum:"118"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2019/01/24/SR7iM18elMsDR8LOP1oNl4xo6-9000.jpg",
				p1:"电脑故障检修服务（上门）",
				p2:"系统卡顿、蓝屏死机、病毒入侵",
				p2Hidden:false,
				miaoSha:false,
				price:"119",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2018/09/05/R7G0YeDosZXkQHZqVUGcAFJ4e-3887.jpg",
				p1:"专家1对1新机开荒",
				p2:"必备软件、硬盘分区、驱动安装",
				p2Hidden:false,
				miaoSha:true,
				price:"79",
				priceDelete:true,
				priceDeleteNum:"98"
			}]
		}
	})
	var body_middleGoods11 = new Vue({
		el:"#body_middleGoods11",
		data:{
			lists1:[
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2020/05/07/yCzMg0ogUc31rujelJHklkPMb-5327.jpg",
				p1:"LEGION GEARS 拯救者 弹药系列 铝合金散热支架Z2 陨石灰",
				p2:"高效散热 六段可调 铝合金材质 折叠便携",
				p2Hidden:false,
				miaoSha:false,
				price:"149",
				priceDelete:false,
				priceDeleteNum:"129"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/05/06/UOVK1t2uQ07Jj3wBPOxTxpoxU-9677.jpg",
				p1:"拯救者电竞鼠标垫 Speed Max C款",
				p2:"表面顺滑 精细热转印 加厚设计 底部防滑",
				p2Hidden:false,
				miaoSha:false,
				price:"69",
				priceDelete:false,
				priceDeleteNum:"2199"
			},
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2020/05/07/lzEhtt3ln2hHZmNjnOTenMpiH-9487.jpg",
				p1:"Lenovo 500 高清网络摄像头",
				p2:"全高清广角镜头 面部识别 隐私保护",
				p2Hidden:false,
				miaoSha:false,
				price:"199",
				priceDelete:false,
				priceDeleteNum:"1499"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/06/10/bRVxRKdlgdVhBHH4wECKvvNtR-7582.jpg",
				p1:"Lenovo Legion 170W 方口便携式电源适配器",
				p2:"强力去污、清洁彻底、多设备通用",
				p2Hidden:true,
				miaoSha:false,
				price:"299",
				priceDelete:false,
				priceDeleteNum:"49"
			}],
			lists2:[
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2020/08/17/AtsW9z0K3ZZE4BWCZqjBIQmy1-6034.jpg",
				p1:"小新新选 新动系列 蓝牙鼠标",
				p2:"小新蓝牙鼠标",
				p2Hidden:false,
				miaoSha:false,
				price:"59",
				priceDelete:false,
				priceDeleteNum:"199"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2020/10/30/Hd2XCUxvbwbg6rTs3JVBa0G4U-2956.jpg",
				p1:"小新 USB-C 五合一多功能扩展坞 银色",
				p2:"小新 USB-C 五合一多功能扩展坞 银色",
				p2Hidden:false,
				miaoSha:false,
				price:"149",
				priceDelete:false,
				priceDeleteNum:"259"
			},
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2020/07/08/MnWlrBGQs8BKMpUdq1TtuDKej-5309.jpg",
				p1:"小新 Mini支架&鼠标垫套装 粉白",
				p2:"悬空散热  |  轻薄便携  |  表面顺滑  |  加厚耐磨",
				p2Hidden:false,
				miaoSha:false,
				price:"69",
				priceDelete:false,
				priceDeleteNum:"179"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/10/19/rT9oBTk5NZznhBZ39tQ5cBQW1-6595.jpg",
				p1:"小新新选 智能小键盘贴膜 R5",
				p2:"智能小键盘贴膜 R5 （适用 Yoga 14s， 小新Pro-14 ）",
				p2Hidden:false,
				miaoSha:false,
				price:"69",
				priceDelete:false,
				priceDeleteNum:"79"
			}],
			lists3:[
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2020/10/19/54syOwkCqLGTl05sA6uJvvviV-3772.jpg",
				p1:"YOGA 65W电源适配器-故宫文创联名版 锦绣红",
				p2:"原厂硬件、全国联保、免费换件",
				p2Hidden:true,
				miaoSha:false,
				price:"169",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p3.lefile.cn/product/adminweb/2020/10/19/GqZdixW5l2EK4uL7VLl9VOmaz-4026.jpg",
				p1:"YOGA双肩包 岩灰色",
				p2:"可容纳15.6英寸及以下轻薄本",
				p2Hidden:false,
				miaoSha:false,
				price:"399",
				priceDelete:false,
				priceDeleteNum:"118"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/10/19/Kblw45I3w9f8kKesDGCpbLCu1-9342.jpg",
				p1:"YOGA单肩手提包 岩灰色",
				p2:"可容纳14英寸及以下轻薄本",
				p2Hidden:false,
				miaoSha:false,
				price:"249",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2020/08/13/kxox9s02n9VkEENsfRNZLW6vI-2689.jpg",
				p1:"YOGA手提内胆包/收纳包限定礼盒 故宫文创联名款",
				p2:"YOGA手提内胆包/收纳包限定礼盒 故宫文创联名款",
				p2Hidden:false,
				miaoSha:false,
				price:"269",
				priceDelete:false,
				priceDeleteNum:"98"
			}]
		}
	})
	var body_middleGoods12 = new Vue({
		el:"#body_middleGoods12",
		data:{
			lists1:[
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2019/12/18/nn9sV2wkXbNchOZ2ker307vRy-6372.jpg",
				p1:"联想（Lenovo）小新M7208W Pro 黑白激光无线WiFi多功能打印机",
				p2:"高效散热 六段可调 铝合金材质 折叠便携",
				p2Hidden:true,
				miaoSha:true,
				price:"999",
				priceDelete:true,
				priceDeleteNum:"1099"
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2020/09/15/NBW3iiBBezVWlN0f6UySBNoBt-0248.jpg",
				p1:"联想激光多功能一体机M7206",
				p2:".小巧身材，睿省之选 ·每分钟20页打印速度，高效快捷输出 ·打印/复印/扫描三合一，高效多面手 · 一键票证和身份证双面复印，快捷易用 · 鼓粉分离耗材，降低长期使用成本 · 超小尺寸机身，静音打印",
				p2Hidden:false,
				miaoSha:false,
				price:"969",
				priceDelete:false,
				priceDeleteNum:"2199"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/09/14/l1tSdiMDojtdSK0vF1LSW3HcC-3809.jpg",
				p1:"联想打印机LJ2268W",
				p2:"全高清广角镜头 面部识别 隐私保护",
				p2Hidden:true,
				miaoSha:false,
				price:"799",
				priceDelete:false,
				priceDeleteNum:"1499"
			},
			{
				img_src:"https://p1.lefile.cn/product/adminweb/2020/09/15/yieSCMilQINAZWrNh5kQKYwcu-1514.jpg",
				p1:"联想领像激光多功能一体机M101DW",
				p2:"自动双面，打印/复印/扫描 三合一，26页每分钟高效打印，Wifi打印，智能APP，鼓粉分离打印成本低",
				p2Hidden:false,
				miaoSha:true,
				price:"1249",
				priceDelete:true,
				priceDeleteNum:"1299"
			}],
			lists2:[
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/09/03/Ckw5T8UMXkUU0nYpsKJAfyuPY-1601.jpg",
				p1:"联想激光多功能一体机M7268W",
				p2:"精简紧凑外观设计，充分释放桌面空间 打印复印扫描三合一 三步智能安装，极致友好体验 每分钟22页快速输出，高效得力助手 低噪音设计，营造安静舒适环境 低功耗设计，节能环保更节约 一年内百城上门服务",
				p2Hidden:false,
				miaoSha:false,
				price:"1099",
				priceDelete:false,
				priceDeleteNum:"199"
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2016/07/19/wbFrVn7IhCSqMXfLQv9RGdR7Q-6213.jpg",
				p1:"联想激光多功能一体机M7216NWA",
				p2:"·每分钟20页打印速度   -标配自动进稿器 清晰复印",
				p2Hidden:false,
				miaoSha:false,
				price:"1299",
				priceDelete:false,
				priceDeleteNum:"259"
			},
			{
				img_src:"https://p2.lefile.cn/g1/M00/02/6A/CmPJi1W1-dOANnSXAACN_Dp-L_w175.jpg",
				p1:"联想激光多功能一体机M7206W",
				p2:"无线办公，每分钟20页打印速度，打印/复印/扫描三合一",
				p2Hidden:false,
				miaoSha:true,
				price:"1099",
				priceDelete:true,
				priceDeleteNum:"1149"
			},
			{
				img_src:"https://p3.lefile.cn/g1/M00/02/69/CmPJilW1-9SAats7AACkMQ2D0YE140.jpg",
				p1:"联想激光多功能一体机 M7256WHF",
				p2:"每分钟20页打印速度，打印/复印/扫描/传真四合一，-标配wifi模块",
				p2Hidden:false,
				miaoSha:false,
				price:"1449",
				priceDelete:false,
				priceDeleteNum:"79"
			}],
			lists3:[
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2016/07/19/qNpCC1FUZvS4Qi6tObru9YL2d-7267.jpg",
				p1:"联想激光多功能一体机M7605D",
				p2:"·打印/复印/扫描三合一，商务办公选择·每分钟30页输出，",
				p2Hidden:false,
				miaoSha:true,
				price:"1449",
				priceDelete:true,
				priceDeleteNum:"1499"
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2016/07/19/4kwr9yQH5CBqz0MDnarvq4x2n-5917.jpg",
				p1:"联想激光多功能一体机M7400PRO（升级版）",
				p2:"·绿色桌面办公·打印/复印/扫面三合一·每分钟24页输出·一键多份身份证/票证双面复印·大屏双行中文LCD，人性化设计",
				p2Hidden:false,
				miaoSha:true,
				price:"1299",
				priceDelete:true,
				priceDeleteNum:"1349"
			},
			{
				img_src:"https://p4.lefile.cn/product/adminweb/2020/09/14/1MWitAxJtDUXUaM3yip8V2Bwh-9786.jpg",
				p1:"联想激光多功能一体机CM7110W",
				p2:"可容纳14英寸及以下轻薄本",
				p2Hidden:true,
				miaoSha:false,
				price:"2399",
				priceDelete:false,
				priceDeleteNum:""
			},
			{
				img_src:"https://p2.lefile.cn/product/adminweb/2020/09/15/TnJvevLV4DmeB6G4YOfM8gKZp-1939.jpg",
				p1:"联想彩色激光打印机CS1821",
				p2:"助力桌面办公，精彩如影随形 ·标配一键ECO设置，经济更环保 ·高达2400*600dpi有效输出，提升打印质量 ·标配400MHz处理器+64MB内存，轻松处理各类办公文档 ·鼓粉分离，有效降低使用成本 ·一年百城免费上门",
				p2Hidden:false,
				miaoSha:false,
				price:"1499",
				priceDelete:false,
				priceDeleteNum:"98"
			}]
		}
	})
	
	//中间部分标题点击
	$(".body_middleGoods_header").each(function(index,element){
		$(element).children().click(function(){
			$(this).css("background-color","rgb(216,191,216)").siblings().css("background-color","white");
			$("#mybody>#body_middleGoods"+(index+1)+">.body_middleGoods_body>ul").eq($(this).index()).removeClass("myHidden").siblings().addClass("myHidden");
			console.log(index);
		})
	})
	
	//导航栏操作
	var navBg = [
	"https://p3.lefile.cn/fes/cms/2020/10/21/475dg428klpbmfbpuk9b66c4kpslhz363921.png",
	"https://p2.lefile.cn/fes/cms/2020/10/21/ilxi2seoctyr35yeyvhzwu410xrb5z971733.png",
	"https://p1.lefile.cn/fes/cms/2020/10/21/2o2duurme58m6o02p431lydwvsyv1s560496.png",
	"https://p3.lefile.cn/fes/cms/2020/10/21/dgdikimwxenfdg5k6bofxjh2r0qs08617642.png",
	"https://p2.lefile.cn/fes/cms/2020/10/21/mi8ozoqmq4mpia52rumaozfmsng26r851452.png",
	"https://p1.lefile.cn/fes/cms/2020/10/21/x8o6eau5fsurju80g5xcoskx0o6pms734929.png",
	"https://p4.lefile.cn/fes/cms/2020/10/21/1b87chwf91o9faf3mlu5ni149uqh4l089884.png",
	"https://p4.lefile.cn/fes/cms/2020/10/21/2k9fox7yrptfgqa3wvzob1fjs3cgu6706591.png",
	"https://p3.lefile.cn/fes/cms/2020/10/21/1zocyqvmi4qfk8ii2x9gj41doq91ge375779.png",
	"https://p2.lefile.cn/fes/cms/2020/10/21/on0gwcettf9a0rui0vnts2vckabeay993226.png",
	"https://p1.lefile.cn/fes/cms/2020/10/21/mukqvxmur4yzsbcd5or7sh2n6p7aon165691.png",
	"https://p3.lefile.cn/fes/cms/2020/10/21/ezq0jqbpnn3xytb11consyyvog13hy921899.png",
	"https://p2.lefile.cn/fes/cms/2020/10/21/n49vmfbh977w4f5y6n3poe2cckqh9c279849.png",
	"https://p4.lefile.cn/fes/cms/2020/10/27/5rhpiryk274ztnahiy1ywm8y1waw6h343755.png",
	"https://p1.lefile.cn/fes/cms/2020/11/03/u0heg84gbc1mzmi71bi1dq9yt9lgzt114211.png",
	"https://p3.lefile.cn/fes/cms/2020/10/27/elesc2kyalt0lewz77g9s3qo07b8o5036314.png"
	];
	$("#mynav>ul>li>a:gt(0)").each(function(index,element){
		$(element).css("background-image","url("+navBg[index]+")");
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$("#mynav").show();
		}else{
			$("#mynav").hide();
		}
	})
	var headerHeight = 50;
	$("#mynav>ul>li>a:eq(0)").click(function(){
		var Top = $("#body_middleBg0").offset().top - headerHeight;
		$("html,body").animate({"scrollTop":Top+"px"},500);
	})
	$("#mynav>ul>li>a:gt(0)").click(function(){
		if($(this).parent().index()==16){
			$("html,body").animate({"scrollTop":"0px"},500);
			return;
		}
		var Top = $("#body_middleBg_"+($(this).parent().index()-1)).offset().top - headerHeight;
		$("html,body").animate({"scrollTop":Top+"px"},500);
	})
	
})