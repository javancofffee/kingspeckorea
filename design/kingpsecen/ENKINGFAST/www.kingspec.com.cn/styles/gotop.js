function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').show();
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$("html,body").animate({ scrollTop: 0 },300);
	})

 

	
});

$(window).scroll(function(e){
	b();		
});
/* download by www.sucaijiayuan.com */