function showsubmenu(li){
		var submenu=li.$("ul")[0];
		submenu.style.display="block";
		}
function hidesubmenu(li){
		var submenu=li.$("ul")[0];
		submenu.style.display="none";
		}

$(function(){
	$(".menu").mouseover(function(){
		$(this).children("ul").show();
	});
	$(".menu").mouseout(function(){
		$(this).children("ul").hide();
	});
});

$(function(){
	$(".menu ul li").mouseover(function(){
		$(this).children("ul").show();
	});
	$(".menu ul li").mouseout(function(){
		$(this).children("ul").hide();
	});
});