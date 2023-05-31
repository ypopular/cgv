$(function(){
    var carWidth = $(".wrap").width(); 
    var carLength = $(".column").length;    
    $(".inner").css({
        width : carWidth * carLength,
        marginLeft : - carWidth
    });
    function prevReady() {
        $(".column").last().prependTo(".inner");
    }
    prevReady();
    function prevAni() {
        $(".btn").hide();
        $(".inner").animate({
         marginLeft : parseInt( $(".inner").css("margin-left") ) + carWidth
        }, function(){
            updateSetting();
            prevReady();
        });
    }
    function nextAni() {
        $(".btn").hide();
        $(".inner").animate({
            marginLeft : parseInt( $(".inner").css("margin-left") ) - carWidth
        }, function(){
            updateSetting();
            $(".column").first().appendTo(".inner");
        });
    }
    function updateSetting() {
        $(".btn").show();
        $(".inner").css("margin-left", "-1000px");
    }
    $(".prev").click(prevAni);
    $(".next").click(nextAni);

//    $(".sp_hover").mouseover(function(){
   
//     $(this).addClass('active');
//     $(this).css("border","none");

//    });
//    $(".sp_hover").mouseleave(function(){
//     $(this).removeClass('active');
//    });


$(".sp_idx").siblings().hide();
$(".sp_idx").first().show();

var $contents = $(".sp_idx");
$(".sp_hover").mouseover(function(){
    var idx = $(this).index();
    var section = $contents.eq(idx);


   $(this).addClass('active');
   $(this).siblings().removeClass('active')
   $(this).siblings().css("border-top","1px solid #ccc")
   $(this).next().css("border-top","none")
  section.show()
  section.siblings().hide()
});
    $("#main_nav").hover(function(){
        $("#secret_nav").stop().slideDown();
    
    });
    $("#main_nav, #secret_nav").mouseleave(function(){
        $("#secret_nav").stop().slideUp();
       
    });

    $("#main_nav2").hover(function(){
        $("#secret_nav2").stop().slideDown();
    
    });
    $("#main_nav2, #secret_nav2").mouseleave(function(){
        $("#secret_nav2").stop().slideUp();
       
    });

    // $("#play_btn").on("click",function(){
    //     if($("#video_obj").pause){
    //         $("#video_obj").trigger("play");
    //     }else{
    //         $("#video_obj").trigger("pause");
            
    //     }
    
    // });
    $("#play_btn").on("click",function(){
            $("#video_obj").trigger("play");
    });
    $("#stop_btn").on("click",function(){
        $("#video_obj").trigger("pause");
});
    // $("#play_btn").on("click",function(){
    //     $("#video_obj").toggle(
    //         function(){$(this).trigger("play")},
    //         function(){$(this).trigger("pause")}
    //     );
    // });
    $("#top_btn").hide();
    $("#ticketing_btn").hide();
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 270) { // 스크롤 내릴 표시
				$('#top_btn').fadeIn();
                $("#ticketing_btn").fadeIn();
			}else {
				$('#top_btn').fadeOut();
                $("#ticketing_btn").fadeOut();
			}
		});     
		$('#top_btn').click(function () {
			$('body,html').animate({
				scrollTop: 0
			},1);  // 탑 이동 스크롤 속도
				return false;
		});
        $("#main_nav2").hide();
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
				$('#main_nav2').show();
			}else {
				$('#main_nav2').hide();
			}
		});     

    //  -------------------------------------------
      
    var carWidth2 = $(".detail_img_wrap").width();  // 보여질 박스의 너비
    var carLength2 = $(".slide_img").length;    // 아이템의 개수
    $(".detail_img_inner").css({
        width : carWidth2 * carLength2,
        marginLeft : - carWidth2
    });
    function prevReady2() {
        $(".slide_img").last().prependTo(".detail_img_inner");
    }
    prevReady2();
    function prevAni2() {
        $(".detail_btn").hide();
        $(".detail_img_inner").animate({
            marginLeft : parseInt( $(".detail_img_inner").css("margin-left") ) + carWidth2
        }, function(){
            updateSetting2();
            prevReady2();
        });
    }
    function nextAni2() {
        $(".detail_btn").hide();
        $(".detail_img_inner").animate({
            marginLeft : parseInt( $(".detail_img_inner").css("margin-left") ) - carWidth2
        }, function(){

            updateSetting2();
            $(".slide_img").first().appendTo(".detail_img_inner");
        });
    }
    function updateSetting2() {
        $(".detail_btn").show();
        $(".detail_img_inner").css("margin-left", "-1000px");
    }

    $(".detail_prev").click(prevAni2);
    $(".detail_next").click(nextAni2);


});