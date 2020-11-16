$(document).ready(function(){
	$('#content>ul>li').click(function(){
		$(this).css({"border-bottom":"4px solid rgba(0,0,0,0.5)"}).siblings().css({"border-bottom":"none"});
		var _index = $(this).index();
		$('.Tab').eq(_index).show().siblings().hide();
	})
	$('#one>ul>li').hover(function(){
		var index = $(this).index();
		$('.com').eq(index).show().siblings().hide();
		// console.log(index);a
	});
	$('#two>ul>li').hover(function(){
		var index_two = $(this).index();
		$('.com_two').eq(index_two).show().siblings().hide();
		// console.log(index_two);
	})
		$('#three>ul>li').hover(function(){
		var index_three = $(this).index();
		$('.com_three').eq(index_three).show().siblings().hide();
		// console.log(index_three);
	})
		$('#four>ul>li').hover(function(){
		var index_four = $(this).index();
		$('.com_four').eq(index_four).show().siblings().hide();
		// console.log(index_four);
	})
		$('#five>ul>li').hover(function(){
		var index_five = $(this).index();
		$('.com_five').eq(index_five).show().siblings().hide();
		// console.log(index_five);
	})

	
	$(".nav>ul>li:not(.hover)").mouseover(function(){
		
		$('.vdfsf').hide();
	})



	var index;
	$(".nav>ul>.hover").mouseover(function(){
		index = $(this).index();
		if(index==6){
			index=3;
		}
		console.log($('.vdfsf>#baokuo>div').eq(index))
		$('.vdfsf').show();
		$('.vdfsf>#baokuo>.xiala').eq(index).show().siblings().hide();
		$(".vdfsf>.xiala_shangcheng_content").eq(index).show().siblings(".xiala_shangcheng_content").hide();
	})
	$("#baokuo>.xiala>.xiala_shangcheng_ul>li").mouseover(function(){
		var index1 = $(this).index();
		$(".vdfsf>.xiala_shangcheng_content").eq(index).children("div").eq(index1).show().siblings().hide();
	})

	$('.vdfsf').hover(function(){
		$('.vdfsf').show();
		console.log('1');
	},function(){
		$('.vdfsf').hide();
	})

	$('.wechat').hover(function(){
		$('.erweima').show();
	},function(){
		$('.erweima').hide();
	})


})