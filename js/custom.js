$(document).ready(function() {
  $(".main-box").show();
});

$(window).on("load", function() {
  $(".main-box").fadeOut("slow");
});

$(window).scroll(function(){
	if($(window).scrollTop() > 100){
		$("header").addClass("newheader");
		$(".btt").fadeIn();
	}else{
		$("header").removeClass("newheader")
		$(".btt").fadeOut();
	}
});
$(document).ready(function(){
	$("form .btn").mouseenter(function(){
		$(this).animate({letterSpacing:"10px"});
	});
	$("form .btn").mouseleave(function(){
		$(this).animate({letterSpacing:"0px"});
	});
	$(".setting-box").click(function(){
		$(".color-box").toggleClass("openbox");
	});
	$(".green").click(function(){
		colorGreen()
	});
	$(".blue").click(function(){
		colorBlue()
	});
	$(".orange").click(function(){
		colorOrange()
	});
	$(".pink").click(function(){
		colorPink()
	});
	function colorGreen(){
		document.documentElement.style.setProperty("--blue","#1A5D1A");
	}
	function colorBlue(){
		document.documentElement.style.setProperty("--blue","#3a37eb");
	}
	function colorOrange(){
		document.documentElement.style.setProperty("--blue","#E57C23");
	}
	function colorPink(){
		document.documentElement.style.setProperty("--blue","#EA1179");
	}
});
