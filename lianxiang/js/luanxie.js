$(document).ready(function(){
	var _index=0;
	$('#content>ul>li').click(function(){
		$(this).css({"border-bottom":"4px solid rgba(0,0,0,0.5)"}).siblings().css({"border-bottom":"none"});
		_index = $(this).index();
		$('.Tab').eq(_index).show().siblings().hide();
	})
	$(".block").hide();
	$("#block>div>ul>li").mouseover(function(){
		
		var _index1 = $(this).index();
		$(".block").eq(_index).show().siblings(".block").hide();
		$(".block").eq(_index).children("div").eq(_index1).show().siblings().hide();
		console.log(_index1)
	})
	// $('#one>ul>li').hover(function(){
	// 	var index = $(this).index();
	// 	$('.com').eq(index).show().siblings().hide();
	// 	// console.log(index);a
	// });
	// $('#two>ul>li').hover(function(){
	// 	var index_two = $(this).index();
	// 	$('.com_two').eq(index_two).show().siblings().hide();
	// 	// console.log(index_two);
	// })
	// 	$('#three>ul>li').hover(function(){
	// 	var index_three = $(this).index();
	// 	$('.com_three').eq(index_three).show().siblings().hide();
	// 	// console.log(index_three);
	// })
	// 	$('#four>ul>li').hover(function(){
	// 	var index_four = $(this).index();
	// 	$('.com_four').eq(index_four).show().siblings().hide();
	// 	// console.log(index_four);
	// })
	// 	$('#five>ul>li').hover(function(){
	// 	var index_five = $(this).index();
	// 	$('.com_five').eq(index_five).show().siblings().hide();
	// 	// console.log(index_five);
	// })
})