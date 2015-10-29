$(document).ready(function(){
	$(".social-web-name").hide();
    $(".social-web").mouseenter(function(){
        $(".social-web-name", this).show();
    });
    $(".social-web").mouseleave(function(){
        $(".social-web-name").hide();
    });
});