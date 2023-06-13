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

    $(".city_crime").hover(
        function(){
            $("#secret_movie_detail").show();
            $("#secret_movie_ticketing").show();
            $(this).find("img:eq(0)").css("filter", "brightness(0.5)")
        },
        function(){
            $("#secret_movie_detail").hide();
            $("#secret_movie_ticketing").hide();
            $(this).find("img:eq(0)").css("filter", "brightness(1)")
        }
    );
   




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

    $("#play_btn").on("click",function(){
            $("#video_obj").trigger("play");
    });
    $("#stop_btn").on("click",function(){
        $("#video_obj").trigger("pause");
});
   
    $("#top_btn").hide();
    $("#ticketing_btn").hide();
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 270) { 
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
			},1);  
				return false;
		});
        $("#main_nav2").hide();
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) { 
				$('#main_nav2').show();
			}else {
				$('#main_nav2').hide();
			}
		});     

    //  -------------------------------------------
      
    var carWidth2 = $(".detail_img_wrap").width();  
    var carLength2 = $(".slide_img").length;   
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


    // -----------------------------------------------------
    $("#alphabetical_order").on("click",function(){
        $("#movie_list").hide();
        $("#movie_list2").show();
        $("#alphabetical_order").css("border-bottom","2px solid #333")
        $("#ticketing_order").css("border-bottom","none");
    });
    $("#ticketing_order").on("click",function(){
        $("#movie_list2").hide();
        $("#movie_list").show();
        $("#alphabetical_order").css("border-bottom","none")
        $("#ticketing_order").css("border-bottom","2px solid #333");
    });
        $("#movie_list a").on("click",function(){
            var movieTitle = $(this).attr("title");
            var pTag =$("<p>").text(movieTitle);
           
            $("#pick_movie").find("p:eq(0)").remove();
            $("#pick_movie").append(pTag);
            $("#pick_movie").css("background","none");
            movieTrue = true;
        });
        var movieTrue = false;
        $("#movie_list li").on("click",function(){
            $(this).addClass("movie_list_active");
            $(this).find("span").addClass("movie_list_span_active");
            $(this).siblings().removeClass("movie_list_active");
            $(this).siblings().find("span").removeClass("movie_list_span_active");
        });
       

        $("#select_special_theater, #movie_list a").on("click",function(){
            $("#select_special_theater").toggleClass('special_theater_active');
            $('#select_special_theater_menu').toggle();
        });

        $("#select_special_theater_menu a").on("click",function(){
            var theaterTitle = $(this).attr("title");
            var pTag2 =$("<span>").text(theaterTitle);
            $("#pick_movie").find("span:eq(0)").remove();
            $("#pick_movie").append(pTag2);
            $("#pick_movie").css("background","none");
            specialTrue = true;
        });
        var specialTrue = false;
        $("#region_detail a").on("click",function(){
            var regionTitle = $(this).attr("title");
            var pTag3 =$("<p>").text(regionTitle);
            $("#pick_theater, #choice_detail").find("p:eq(0)").remove();
            $("#pick_theater, #choice_detail").append(pTag3);
            $("#pick_theater").css("background","none");
            regionTrue = true;
        });
        var regionTrue =false;
        $("#region_detail li").on("click",function(){
            $(this).addClass("region_active");
            $(this).siblings().removeClass("region_active");
            $(this).find("a").addClass("region_a_active");
            $(this).siblings().find("a").removeClass("region_a_active");
        });


        $("#date a").on("click",function(){
            var dateTitle = $(this).attr("title");
            var pTag4 =$("<span>").text(dateTitle);
            $("#pick_theater,#choice_detail").find("span:eq(0)").remove();
            $("#pick_theater,#choice_detail").append(pTag4);
            $("#pick_theater").css("background","none");
            dateTrue=true;
        });
        var dateTrue = false;
        $("#date li").on("click",function(){
            $(this).addClass("date_active");
            $(this).siblings().removeClass("date_active");
            $(this).find("a").addClass("date_a_active");
            $(this).siblings().find("a").removeClass("date_a_active");
        });

        $("#choice_time a").on("click",function(){
            var timeTitle = $(this).attr("title");
            var pTag5 =$("<h4>").text(timeTitle);
            $("#pick_theater, #choice_detail").find("h4:eq(0)").remove();
            $("#pick_theater, #choice_detail").append(pTag5);
            $("#pick_theater").css("background","none");
            timeTrue=true;
        });
        var timeTrue =false;
        $("#choice_time li").on("click",function(){
            $(this).addClass("choice_active");
            $(this).siblings().removeClass("choice_active");
            $(this).find("span").addClass("choice_span_active");
            $(this).siblings().find("span").removeClass("choice_span_active");
            $(this).find(".time_box").addClass("choice_box_active");
            $(this).siblings().find(".time_box").removeClass("choice_box_active");
            $("#go_seat_choice").addClass("go_seat_choice_active");
        });

        $("#go_seat_choice").on("click",function(){
            if(movieTrue != true){
                alert("영화를 선택하세요");
            }else if(specialTrue != true){
                alert("극장 종류를 선택하세요")
            }else if(regionTrue !=true){
                alert("상영 지역을 선택하세요")
            }else if(dateTrue !=true){
                alert("상영 날짜를 선택하세요")
            }else if(timeTrue !=true){
                alert("시간을 선택하세요")
            }else{
            $("#ticketing").hide();
            $("#select_seat").show();
            $("#go_seat_choice").hide();
            $("#go_seat_choice2").show();
            
        }
        });
        $("#go_seat_choice2").on("click",function(){   
           if(personnelOn !=true){
                alert("좌석을 선택하세요")
           }else{
            $("#select_seat").hide();
            $("#go_seat_choice2").hide();
            $("#ready_payment").show();
            $("#go_payment").show();
         }
        });
        // ----------------------------------------------------------
        var personnel01Click = function() {
            $(".seat_line li a").removeClass("seat_active2")
            $(this).parent().siblings().find("a").removeClass("personnel_a_active");
            $(this).addClass("personnel_a_active");
            $(".seat_line li a").off("mouseenter mouseleave click");
            $(".seat_line li a").hover(
                function() {
                    $(this).addClass("seat_active");
                },
                function() {
                    $(this).removeClass("seat_active");
                }
            );
            $(".seat_line li a").click(
                function(){
                    $(".seat_line li a").removeClass("seat_active2");
                    $(this).addClass("seat_active2");
                    $("#go_seat1").css("background","none");
                    $("#go_seat2").css("background","none");
                    $("#go_seat1").html("<p>14000원</p>");
                    $("#payment_amount_detail").find("span").remove();
                    $("#payment_amount_detail").html("<span>14000원</span>");
                    $("#go_seat_choice2").css("background-position","0px -326px");
                    $("#go_seat_choice2").css("background-position","-150px -326px");
                    personnelOn =true;
                }
            );
        };
        var personnelOn = false;
        var personnel02Click = function() {
            $(".seat_line li a").removeClass("seat_active2")
            $(this).parent().siblings().find("a").removeClass("personnel_a_active");
            $(this).addClass("personnel_a_active");
            $(".seat_line li a").off("mouseenter mouseleave click");
            $(".seat_line li a").hover(
                function() {
                    $(this).addClass("seat_active");
                    $(this).parent().next().find("a").addClass("seat_active");
                },
                function() {
                    $(this).removeClass("seat_active");
                    $(this).parent().next().find("a").removeClass("seat_active");
                }
            );
            $(".seat_line li a").click(
                function(){
                    $(".seat_line li a").removeClass("seat_active2");
                    $(this).addClass("seat_active2");
                    $(this).parent().next().find("a").addClass("seat_active2");
                    $("#go_seat1").css("background","none");
                    $("#go_seat2").css("background","none");
                    $("#go_seat1").find("p").remove();
                    $("#go_seat1").html("<p>28000원</p>");
                    $("#payment_amount_detail").find("span").remove();
                    $("#payment_amount_detail").html("<span>28000원</span>");
                    $("#go_seat_choice2").css("background-position","0px -326px");
                    $("#go_seat_choice2").css("background-position","-150px -326px");
                    personnelOn =true;
                }
            );
        };
        var personnel03Click = function() {
            $(".seat_line li a").removeClass("seat_active2")
            $(this).parent().siblings().find("a").removeClass("personnel_a_active");
            $(this).addClass("personnel_a_active");
            $(".seat_line li a").off("mouseenter mouseleave click");
            $(".seat_line li a").hover(
                function() {
                    $(this).addClass("seat_active");
                    $(this).parent().next().find("a").addClass("seat_active");
                    $(this).parent().prev().find("a").addClass("seat_active");
                },
                function() {
                    $(this).removeClass("seat_active");
                    $(this).parent().next().find("a").removeClass("seat_active");
                    $(this).parent().prev().find("a").removeClass("seat_active");
                }
            );
            $(".seat_line li a").click(
                function(){
                    $(".seat_line li a").removeClass("seat_active2");
                    $(this).addClass("seat_active2");
                    $(this).parent().next().find("a").addClass("seat_active2");
                    $(this).parent().prev().find("a").addClass("seat_active2");
                    $("#go_seat1").css("background","none");
                    $("#go_seat2").css("background","none");
                    $("#go_seat1").find("p").remove();
                    $("#go_seat1").html("<p>42000원</p>");
                    $("#payment_amount_detail").find("span").remove();
                    $("#payment_amount_detail").html("<span>42000원</span>");
                    $("#go_seat_choice2").css("background-position","0px -326px");
                    $("#go_seat_choice2").css("background-position","-150px -326px");
                    personnelOn =true;
                }
            );
        };
        
        $("#personnel01").on("click", personnel01Click);
        $("#personnel02").on("click", personnel02Click);
        $("#personnel03").on("click", personnel03Click);
        // --------------------------------------------------------------
        $("#sign_submit").on("click",function(){
             if($("#user_name_sign").val() == ""){
                alert("이름을 입력해주세요");
            }else if($("#user_id_sign").val() == ""){
                alert("ID를 입력해주세요")
            }else if ($("#user_id_sign").val().length < 5) {
                alert("ID는 최소 5자 이상이어야 합니다");
            }else if($("#user_password_sign").val() == ""){
                alert("password를 입력해주세요")
            }else if ($("#user_password_sign").val().length < 5) {
                alert("비밀번호는 최소 5자 이상이어야 합니다");
            }
            else if($("#user_password_sign_re").val() == ""){
                alert("password를 확인해주세요")
            }else if($("#user_id_sign").val() == $("#user_password_sign").val()){
                alert("아이디와 비밀번호를 다르게 입력해주세요")
            }else if($("#user_password_sign").val() != $("#user_password_sign_re").val()){
                alert("비밀번호 확인이 동일하지 않습니다.")
            }
            else if($("#user_gender").val() == ""){
                alert("성별를 선택해주세요")
            }else if($("#user_tel").val() == ""){
                alert("전화번호를 입력해주세요")
            }else if($("#user_tel_type").val() == ""){
                alert("통신사를 선택해주세요")
            }
            
            
            else{
                alert("회원가입이 완료되었습니다");
            }
        });
       
    //   -------------------------------------------------------------------
    $(".master_alter_button").on("click",function(){
        alert("변경되었습니다.");
    });


    $("#cinema_add").on("click",function(){
        $("#master_menu_wrap").hide();
        $("#cinema_add_wrap").show();
    });
    $("#cinema_add_main_go").on("click",function(){
        $("#cinema_add_wrap").hide();
        $("#master_menu_wrap").show();
    });

    $("#cinema_alter").on("click",function(){
        $("#master_menu_wrap").hide();
        $("#cinema_alter_wrap").show();
    });
    $("#cinema_alter_main_go").on("click",function(){
        $("#cinema_alter_wrap").hide();
        $("#master_menu_wrap").show();
    });

    $("#movie_add").on("click",function(){
        $("#master_menu_wrap").hide();
        $("#movie_add_wrap").show();
    });
    $("#movie_add_main_go").on("click",function(){
        $("#movie_add_wrap").hide();
        $("#master_menu_wrap").show();
    });

    $("#movie_alter").on("click",function(){
        $("#master_menu_wrap").hide();
        $("#movie_alter_wrap").show();
    });
    $("#movie_alter_main_go").on("click",function(){
        $("#movie_alter_wrap").hide();
        $("#master_menu_wrap").show();
    });

    $("#theater_add").on("click",function(){
        $("#master_menu_wrap").hide();
        $("#theater_add_wrap").show();
    });
    $("#theater_add_main_go").on("click",function(){
        $("#theater_add_wrap").hide();
        $("#master_menu_wrap").show();
    });

    $("#theater_alter").on("click",function(){
        $("#master_menu_wrap").hide();
        $("#theater_alter_wrap").show();
    });
    $("#theater_alter_main_go").on("click",function(){
        $("#theater_alter_wrap").hide();
        $("#master_menu_wrap").show();
    });
        

});