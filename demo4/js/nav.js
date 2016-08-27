$(function(){
	$("li").has("ul")//has 指有....
	.mouseover(function(){
		$(this).children("ul").css("display","block");
	});
	.mouseout(function(){
		  $(this).children("ul").css("display","none");
		});// children 指子元素
});