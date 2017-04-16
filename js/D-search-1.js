window.onload=function(){
	var myScroll;
	myScroll=new IScroll("#wrapper", {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		resizeScrollbars:true,
	});
	
	$('.D-title > div:nth-child(4)').click(function(){
		$(".D-qingkong").remove();
	})
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
	
//	搜索重绘
	$("#H-search").focus(function(){
		$(".D-focus").remove();
//		$('#H-search').keyup(function(){
//			let value=$(this).val();
//			let arr=[];
//			$(".H-renqi-titleBox .title-1").each(function(){	
//				let name=$(this).attr("value");
//				arr.push(name);				
//			})
//			if(arr.indexOf(value)!=-1){
//				$(this).parent().parent().show();
//			}else{
//				$(this).parent().parent().hide();
//			}
//			
//		})
	})
	
	
	
	
	
	
}