$(window).ready(function(){
	
	//导航栏对象
	new Vue({
		el:"#brandHeader_bottom_middle",
		data:{
			//导航栏数组对象
			li_list:[
				{
					img_src:"https://p3.lefile.cn/fes/cms/2019/09/19/wsj9ku9cnmrxuihyowxk9a3qct2mun732227.png",
					imgChange_src:"https://p3.lefile.cn/fes/cms/2019/09/19/ucay6lo8f7da987du9aevjtz1kke3b250481.png",
					atext:"品牌故事",
				},
				{
					img_src:"https://p3.lefile.cn/fes/cms/2019/09/19/bxd0sqd8nri8z5ghneqdyz0mzyi53m801375.png",
					imgChange_src:"https://p4.lefile.cn/fes/cms/2019/09/19/7bybwu939zg17qladfvhhamapkqxg7515549.png",
					atext:"合作伙伴&案例",
				},
				{
					img_src:"https://p4.lefile.cn/fes/cms/2019/09/19/smr1sy87d4ug3ivuc20aoucu6a8uma172703.png",
					imgChange_src:"https://p3.lefile.cn/fes/cms/2019/09/19/909mvxr5k9er4yijyxzomedm5kxxm5965012.png",
					atext:"新闻&图像",
				},
				{
					img_src:"https://p4.lefile.cn/fes/cms/2020/05/27/zb7x6yaefe9pyvpgtjlemawme2d80g226900.png",
					imgChange_src:"https://p1.lefile.cn/fes/cms/2020/05/27/jcxiwmi22hppvj2mv8jn918zxzx80e660048.png",
					atext:"市场活动",
				},
				{
					img_src:"https://p1.lefile.cn/fes/cms/2019/09/19/oi8bnvq92enjtduoq446co27oc8o73956537.png",
					imgChange_src:"https://p1.lefile.cn/fes/cms/2019/09/19/0boqpqf39ls852jqtzp8qnx96lid27628306.png",
					atext:"关于联想",
				}
			],
			textColor:"blue",
			index:"none",
			sonIndex:"none",
			timer:"",
			index2:"",
			//下拉框数组对象
			liSon_list:[
				[
					{
						atext:"品牌愿景"
					},
					{
						atext:"品牌纪事"
					},
					{
						atext:"品牌行动"
					},
					{
						atext:"品牌荣誉"
					},
					{
						atext:"品牌公益"
					}
				],
				[
					{
						atext:"成功案例"
					},
					{
						atext:"合作伙伴"
					},
					{
						atext:"产品发布"
					}
				],
				[
					{
						atext:"新闻"
					},
					{
						atext:"媒体图像"
					}
				],
				[
					{
						atext:"市场活动"
					}
				],
				[
					{
						atext:"公司简介"
					},
					{
						atext:"投资者关系"
					},
					{
						atext:"联系我们"
					},
					{
						atext:"参观联想"
					}
				]
			]
		},
		methods:{
			liColorChange(i){
				clearTimeout(this.timer)
				this.index = i;
				this.index2 = i;
			},
			liColorRemove(i){
			this.index = "none";
			},
			liSonColorChange(i){
				this.sonIndex = i;
			},
			liSonColorRemove(i){
				this.sonIndex = "none";
			}
		}
	})
	
	//视屏轮播
	var video_idnex = 1;
	$("#brandBody>#brandBody_head>span").eq(0).click(function(){
		video_idnex--;
		$("#brandBody>#brandBody_head>#video_shufflingFigure").animate({"margin-left":video_idnex*-100+"%"},500);
		$("#brandBody>#brandBody_head>ul>li").eq(video_idnex-1).children().css("background-color","white");
		$("#brandBody>#brandBody_head>ul>li").eq(video_idnex-1).siblings().children().css("background-color","gray");
		if(video_idnex==0){
			video_idnex = 3;
			$("#brandBody>#brandBody_head>#video_shufflingFigure").animate({"margin-left":video_idnex*-100+"%"},0);
		}
	})
	$("#brandBody>#brandBody_head>span").eq(1).click(function(){
		video_idnex++;
		$("#brandBody>#brandBody_head>#video_shufflingFigure").animate({"margin-left":video_idnex*-100+"%"},500);
		$("#brandBody>#brandBody_head>ul>li").eq(video_idnex-1).children().css("background-color","white");
		$("#brandBody>#brandBody_head>ul>li").eq(video_idnex-1).siblings().children().css("background-color","gray");
		if(video_idnex==4){
			video_idnex = 1;
			$("#brandBody>#brandBody_head>#video_shufflingFigure").animate({"margin-left":video_idnex*-100+"%"},0);
			$("#brandBody>#brandBody_head>ul>li").eq(0).children().css("background-color","white");
			$("#brandBody>#brandBody_head>ul>li").eq(0).siblings().children().css("background-color","gray");
		}
	})
	$("#brandBody>#brandBody_head>ul>li").each(function(i,e){
		$(e).click(function(){
			$(this).children().css("background-color","white");
			$(this).siblings().children().css("background-color","gray");
			var li_index = i+1;
			$("#brandBody>#brandBody_head>#video_shufflingFigure").animate({"margin-left":li_index*-100+"%"},500);
		})
	})
	
	new Vue({
		el:"#brandBody_body_middle",
		data:{
			list:[
				{
					span:"品牌愿景",
					p:'"Smarter Technology For All"展望了一个未来世界，在这里，联想所有的技术—即便是最基础的—都将从智能开始。从设备到数据中心的产品、服务和解决方案。我们将智能技术解决方案带给最需要它们的人。',
					img_src:"https://p3.lefile.cn/fes/cms/2019/09/10/duq6hugh3eezs3ffswztyebwemb49n144853.jpg"
				},
				{
					span:"品牌纪事",
					p:'联想集团继续领跑全球PC市场，出货量稳居第一，市场占有率超过25%，市占率增长数值也同样是行业最高。2019Q2全球个人电脑出货量增长1.5％，总计为6300万台。',
					img_src:"https://p1.lefile.cn/fes/cms/2019/09/10/sqa45xu92z2lt0gi3fc3yfnnvnp1lu045164.jpg"
				},
				{
					span:"品牌行动",
					p:'8月28日联想签约央视“品牌强国工程”，成首批战略合作伙伴。履行品牌强国使命，推动中国制造。今天的联想，通过业务国际化，成功地将中国品牌做成了世界品牌，登上了全球PC市场第一的高峰。',
					img_src:"https://p1.lefile.cn/fes/cms/2019/09/10/ejg7sbdpc555tzzcz911a5rq94ek6z855937.jpg"
				},
				{
					span:"品牌荣誉",
					p:'《财富》杂志今天公布了2019年世界500强排行榜，已经连续上榜9年的联想集团继续荣登世界500强榜单，联想集团18/19财年全年营业额创历史新高，折合人民币3422亿元，年比年增长12.5%。',
					img_src:"https://p2.lefile.cn/fes/cms/2019/09/10/9ngxwmkav0fmkokt27idek0cjbwceo347471.jpg"
				},
				{
					span:"品牌公益",
					p:'用真心帮助孩子，尽己所能，陪他们实现心中的“小梦想”；用真情回馈家乡，奉献爱心，给街巷邻里带去片片温暖。7月14日， “我和我的祖国”圆计划—圆满假期大学生暑期公益行”活动全面启动。',
					img_src:"https://p1.lefile.cn/fes/cms/2019/09/10/5g44zdonoiwweb662bwfpb8fumucpg548936.jpg"
				}
			],
			index:0,
			spanIndex:"none",
			liBorderBottom:"",
		},
		methods:{
			liChange(i){
				this.index = i;
				this.spanIndex = i;
				this.liBorderBottom = "liBorderBottom";
				$("#brandBody>#brandBody_body>#brandBody_body_middle>#brandBody_body_middle_footer>span").eq(i).show();
				
			},
			liRemove(i){
				this.index = i;
				this.spanIndex = "none";
				this.liBorderBottom = "";
				$("#brandBody>#brandBody_body>#brandBody_body_middle>#brandBody_body_middle_footer>span").eq(i).hide();
			}
		}
	})
	
	//滚轮事件
	$(window).scroll(function(){
		var top = 50;
		if($(window).scrollTop()>top){
			$("#brandHeader_bottom").css({"position":"fixed","top":"0px","height":"50px"});
		}else{
			$("#brandHeader_bottom").css({"position":"relative","bottom":"0px","height":"70px"});
		}
	})
	
	var brandBody_body_middle_changeY = [0,0];
	var brandBody_body_middle_changeY2 = [0,0];
	var brandBody_body_middle_changeY3 = [0,0];
	var top = $("#brandBody_body_middle").offset().top;
	var top2 = $("#brandBody_body_middle3>div>section:eq(0)").offset().top-50;
	var top3 = $("#brandBody_body_middle2").offset().top;
	function middleTranslateY(middleNum,iNum){
		if(brandBody_body_middle_changeY3[middleNum-2]<0 || brandBody_body_middle_changeY2[middleNum-2]<0 || brandBody_body_middle_changeY[middleNum-2]<0){
			brandBody_body_middle_changeY3[middleNum-2] = 0;
			brandBody_body_middle_changeY2[middleNum-2] = 0;
			brandBody_body_middle_changeY[middleNum-2] = 0;
		}
		brandBody_body_middle_changeY3[middleNum-2] += 15;
		brandBody_body_middle_changeY2[middleNum-2] += 6;
		brandBody_body_middle_changeY[middleNum-2] += 3;
		$("#brandBody>#brandBody_body>#brandBody_body_middle"+middleNum+">div>section>div").each(function(i,e){
			if(i<iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY[middleNum-2]+"px)"});
			}else if(i == iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY2[middleNum-2]+"px)"});
			}else{
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY3[middleNum-2]+"px)"});
			}
		})
		$("#brandBody>#brandBody_body>#brandBody_body_middle"+middleNum+">div>footer>div").each(function(i,e){
			if(i<iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY[middleNum-2]+"px)"});
			}else if(i == iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY2[middleNum-2]+"px)"});
			}else{
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY3[middleNum-2]+"px)"});
			}
		})
	}
	function middleTranslateY_(middleNum,iNum){
		if(brandBody_body_middle_changeY3[middleNum-2]>0 || brandBody_body_middle_changeY2[middleNum-2]>0 || brandBody_body_middle_changeY[middleNum-2]>0){
			brandBody_body_middle_changeY3[middleNum-2] = 0;
			brandBody_body_middle_changeY2[middleNum-2] = 0;
			brandBody_body_middle_changeY[middleNum-2] = 0;
		}
		brandBody_body_middle_changeY3[middleNum-2] -= 15;
		brandBody_body_middle_changeY2[middleNum-2] -= 6;
		brandBody_body_middle_changeY[middleNum-2] -= 3;
		$("#brandBody>#brandBody_body>#brandBody_body_middle"+middleNum+">div>section>div").each(function(i,e){
			if(i<iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY[middleNum-2]+"px)"});
			}else if(i = iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY2[middleNum-2]+"px)"});
			}else{
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY3[middleNum-2]+"px)"});
			}
		})
		$("#brandBody>#brandBody_body>#brandBody_body_middle"+middleNum+">div>footer>div").each(function(i,e){
			if(i<iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY[middleNum-2]+"px)"});
			}else if(i = iNum){
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY2[middleNum-2]+"px)"});
			}else{
				$(e).css({"transform":"translate(0px,"+brandBody_body_middle_changeY3[middleNum-2]+"px)"});
			}
		})
	}
	var ifBottom;
	var scrollFunc = function(e) {
		var e = e || window.event;
		if(e.wheelDelta) {   
			if($(window).scrollTop()>top && $(window).scrollTop()<top2){
				if(e.wheelDelta > 0 && !ifBottom) {     //当鼠标滚轮向上滚动时
					middleTranslateY(2,2);
				}
				if(e.wheelDelta < 0 && !ifBottom) {     //当鼠标滚轮向下滚动时
					middleTranslateY_(2,2);
				}
			}
			if($(window).scrollTop()>top3){
				if(e.wheelDelta > 0 && !ifBottom) {     //当鼠标滚轮向上滚动时
					middleTranslateY(3,2);
				}
				if(e.wheelDelta < 0 && !ifBottom) {     //当鼠标滚轮向下滚动时
					middleTranslateY_(3,2);
				}
			}
		}
	}
	window.addEventListener("wheel", scrollFunc);
	
	//
	$("#brandBody>#brandBody_body>#brandBody_body_middle2>section>#brandBody_body_middle2_chanPinAnLiBottom>div>a").each(function(i,e){
		$(e).mouseover(function(){
			$(e).parent().children().eq(0).children().eq(1).css({"width":"0px"});
			$(e).css("color","white");
		})
		$(e).mouseout(function(){
			$(e).parent().children().eq(0).children().eq(1).css({"width":"85%"});
			$(e).css("color","rgb(245,160,160)");
		})
	})
	$(".brandBody_body_middle3_a>div>a").each(function(i,e){
		$(e).mouseover(function(){
			$(e).parent().children().eq(0).children().eq(1).css({"width":"0px"});
			$(e).css("color","white");
		})
		$(e).mouseout(function(){
			$(e).parent().children().eq(0).children().eq(1).css({"width":"85%"});
			$(e).css("color","rgb(245,160,160)");
		})
	})
	
	$(window).scroll(function() {
	    if ($(document).scrollTop()<=0){
			console.log("滚动条已经到达顶部");
	    }
	    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
			console.log("滚动条已经到达底部为");
			ifBottom = true;
	    }else{
	    	ifBottom = false;
	    }
	});
	
	//底部
	new Vue({
		el:"#brandFooter",
		data:{
			li_list:[
				["关于联想","投资者关系","加入我们","联系我们","参观联想","销售网点查询","服务网点查询"],
				["联想商城","今日秒杀","联想合伙人","私人定制","以旧换新","积分商城"],
				["联想服务","驱动与软件下载","热门解决方案","Lenovo Quick Fix工具","24小时智能客服","保修配置查询","服务政策查询","上门快修","延长保修","更多服务"],
				["联想网站群","联想创投","聚享汇","联想电脑管家","联想超融合","联想研究院","联想数据中心","联想 Filez"],
				["","联想百应平台","联想租赁商城","联想企业网盘","ThinkPad官网","lecoo商城","联想大数据","联想商用官网"],
			],
			countries:["China","Americe","Japan","Canada","Australia","Tailand","China","Americe","Japan","Canada","Australia","Tailand","China","Americe","Japan","Canada","Australia","Tailand"],
			countryNameColor:"countryNameColor",
			SelectedIndex:"none"
		},
		methods:{
			countryNameColorChange(i){
				this.SelectedIndex = i;
			},
			countryNameColorRemove(i){
				this.SelectedIndex = "none";
			}
		}
	})
	
	//video
	var videos = ["https://lenovo-1257188835.file.myqcloud.com/lenovo-brand-2.mp4","https://lenovo-1257188835.file.myqcloud.com/lenovo-hello-world-pc.mp4","https://lenovo-1257188835.file.myqcloud.com/outplay.mp4"];
	$("#brandBody_head_text>div>a").each(function(i,e){
		$(e).click(function(){
			$("#brandBody>#brandVideo>div>video").attr("src",videos[i-1]);
			$("#brandBody>#brandVideo").show();
		})
	})
	
	$("#brandBody>#brandVideo>div>a").click(function(){
		$("#brandBody>#brandVideo>div>video").attr("src","");
		$("#brandBody>#brandVideo").hide();
	})
})