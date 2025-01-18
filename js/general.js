$(document).ready(function() {
    $.fn.verticalAlign = function() { return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px'); };
    $.fn.verticalbAlign = function() { return this.css("padding-bottom", ($(this).parent().height() - $(this).height()) / 2 + 'px'); };
    $.fn.windowAlign = function() { return this.css("padding-top", ($(window).height() - $(this).height()) / 2 + 'px'); };

    setTimeout(function() {
        $('.vCenter').each(function() { $(this).verticalAlign(); });
        $('.wCenter').each(function() { $(this).windowAlign(); });
        $('.vbCenter').each(function() { $(this).verticalbAlign(); });
    }, 800);


})

$(window).on('resize', function() {

    ww = document.body.clientWidth;
    wh = document.body.clientHeight;

    $('.vCenter').each(function() { $(this).verticalAlign(); });
    $('.wCenter').each(function() { $(this).windowAlign(); });


}).trigger('resize');


$(window).bind('resize orientationchange', function() {
    $('.vCenter').each(function() { $(this).verticalAlign(); });
    $('.wCenter').each(function() { $(this).windowAlign(); });
});

$(document).ready(function() {
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });





    // $('.next-slide').click(function(){
    //     var slider = $( '.map' );
    //     slider[0].slick.slickGoTo(parseInt(2));
    //     });


    //accord action

    // $('#seraccoone .panel-heading').hasClass('active')
    // tabs
    $('#seraccoone').click(function() {
        $('#start_step2').removeClass('activated')
        $('#start_step3').removeClass('activated')
        $('#start_step1').addClass('activated')
        
        $('#collapseTwo').collapse('hide');
         $('#collapseThree').collapse('hide');
        $('#collapseOne').collapse('show');
        
        
        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(0));
    })
    $('#seraccotwo').click(function() {
        $('#start_step1').removeClass('activated')
        $('#start_step3').removeClass('activated')
        $('#start_step2').addClass('activated')
       
        $('#collapseOne').collapse('hide');
        $('#collapseThree').collapse('hide');
        $('#collapseTwo').collapse('show');
        
        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(1));
    })
    $('#seraccothree').click(function() {
        $('#start_step1').removeClass('activated')
        $('#start_step2').removeClass('activated')
        $('#start_step3').addClass('activated')
        
        $('#collapseTwo').collapse('hide');
    $('#collapseOne').collapse('hide');
    $('#collapseThree').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(2));
    })
    $('#seraccofour').click(function() {
        $('#start_step5').removeClass('activated')
        $('#start_step6').removeClass('activated')
        $('#start_step4').addClass('activated')
        
        $('#collapseFive').collapse('hide');
    $('#collapseSix').collapse('hide');
    $('#collapseFour').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(0));
    })
    $('#seraccofive').click(function() {
        $('#start_step4').removeClass('activated')
        $('#start_step6').removeClass('activated')
        $('#start_step5').addClass('activated')
        
        $('#collapseFour').collapse('hide');
        $('#collapseSix').collapse('hide');
        $('#collapseFive').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(1));
    })
    $('#seraccosix').click(function() {
        $('#start_step4').removeClass('activated')
        $('#start_step5').removeClass('activated')
        $('#start_step6').addClass('activated')
       
        $('#collapseFive').collapse('hide');
        $('#collapseFour').collapse('hide');
        $('#collapseSix').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(2));
    })
    $('#seraccoSeven').click(function() {
        $('#start_step8').removeClass('activated')
        $('#start_step9').removeClass('activated')
        $('#start_step7').addClass('activated')
        
        $('#collapseEight').collapse('hide');
        $('#collapseNine').collapse('hide');
        $('#collapseSeven').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(0));
    })
    $('#seraccoEight').click(function() {
        $('#start_step7').removeClass('activated')
        $('#start_step9').removeClass('activated')
        $('#start_step8').addClass('activated')
        
        $('#collapseSeven').collapse('hide');
        $('#collapseNine').collapse('hide');
        $('#collapseEight').collapse('show');


        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(1));
    })
    $('#seraccoNine').click(function() {
        $('#start_step7').removeClass('activated')
        $('#start_step8').removeClass('activated')
        $('#start_step9').addClass('activated')
        
        $('#collapseEight').collapse('hide');
        $('#collapseSeven').collapse('hide');
        $('#collapseNine').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(2));
    })
    $('#seraccoTen').click(function() {
        $('#start_step11').removeClass('activated')
        $('#start_step12').removeClass('activated')
        $('#start_step10').addClass('activated')
        
        $('#collapseEleven').collapse('hide');
        $('#collapseTwelve').collapse('hide');
        $('#collapseTen').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(0));
    })
    $('#seraccoEleven').click(function() {
        $('#start_step10').removeClass('activated')
        $('#start_step12').removeClass('activated')
        $('#start_step11').addClass('activated')
        
        $('#collapseTen').collapse('hide');
        $('#collapseTwelve').collapse('hide');
        $('#collapseEleven').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(1));
    })
    $('#seraccoTwelve').click(function() {
        $('#start_step10').removeClass('activated')
        $('#start_step11').removeClass('activated')
        $('#start_step12').addClass('activated')
        
        $('#collapseEleven').collapse('hide');
        $('#collapseTen').collapse('hide');
        $('#collapseTwelve').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(2));
    })
    $('#seraccoThirteen').click(function() {
        $('#start_step14').removeClass('activated')
        $('#start_step15').removeClass('activated')
        $('#start_step13').addClass('activated')
        
        $('#collapseFourteen').collapse('hide');
        $('#collapseFifteen').collapse('hide');
        $('#collapseThirteen').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(0));
    })
    $('#seraccoFourteen').click(function() {
        $('#start_step13').removeClass('activated')
        $('#start_step15').removeClass('activated')
        $('#start_step14').addClass('activated')
        
        $('#collapseThirteen').collapse('hide');
        $('#collapseFifteen').collapse('hide');
        $('#collapseFourteen').collapse('show');

        var slider = $('.stepslide');
        slider[0].slick.slickGoTo(parseInt(1));
    })
    $('#seraccoFifteen').click(function() {
            $('#start_step13').removeClass('activated')
            $('#start_step14').removeClass('activated')
            $('#start_step15').addClass('activated')
             4
            $('#collapseFourteen').collapse('hide');
            $('#collapseThirteen').collapse('hide');
            $('#collapseFifteen').collapse('show');
            
            var slider = $('.stepslide');
            slider[0].slick.slickGoTo(parseInt(2));

        })
        // headertabs



    $('#start_step1').click(function(e) {
        $('#start_step3').removeClass('activated')
        $('#start_step2').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseTwo').collapse('hide');
        $('#collapseThree').collapse('hide');
        $('#collapseOne').collapse('show');
        // window.location.href = 'index.html';
    });
    $('#start_step2').click(function(e) {
        $('#start_step1').removeClass('activated')
        $('#start_step3').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseOne').collapse('hide');
        $('#collapseThree').collapse('hide');
        $('#collapseTwo').collapse('show');
        // window.location.href = 'index.html';
    });
    $('#start_step3').click(function(e) {
        $('#start_step2').removeClass('activated')
        $('#start_step1').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseOne').collapse('hide');
        $('#collapseTwo').collapse('hide');
        $('#collapseThree').collapse('show');
        // window.location.href = 'index.html';
    });
    $('#start_step4').click(function(e) {
        $('#start_step6').removeClass('activated')
        $('#start_step5').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseFive').collapse('hide');
        $('#collapseSix').collapse('hide');
        $('#collapseFour').collapse('show');
        // window.location.href = 'about.html';
    });
    $('#start_step5').click(function(e) {
        $('#start_step4').removeClass('activated')
        $('#start_step6').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseFour').collapse('hide');
        $('#collapseSix').collapse('hide');
        $('#collapseFive').collapse('show');
        // window.location.href = 'about.html';
    });
    $('#start_step6').click(function(e) {
        $('#start_step5').removeClass('activated')
        $('#start_step4').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseFour').collapse('hide');
        $('#collapseFive').collapse('hide');
        $('#collapseSix').collapse('show');
        // window.location.href = 'about.html';
    });
    $('#start_step7').click(function(e) {
        $('#start_step9').removeClass('activated')
        $('#start_step8').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseEight').collapse('hide');
        $('#collapseNine').collapse('hide');
        $('#collapseSeven').collapse('show');
        // window.location.href = 'process.html';
    });
    $('#start_step8').click(function(e) {
        $('#start_step7').removeClass('activated')
        $('#start_step9').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseSeven').collapse('hide');
        $('#collapseNine').collapse('hide');
        $('#collapseEight').collapse('show');
        // window.location.href = 'process.html';
    });
    $('#start_step9').click(function(e) {
        $('#start_step8').removeClass('activated')
        $('#start_step7').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseSeven').collapse('hide');
        $('#collapseEight').collapse('hide');
        $('#collapseNine').collapse('show');
        // window.location.href = 'process.html';
    });
    $('#start_step10').click(function(e) {
        $('#start_step12').removeClass('activated')
        $('#start_step11').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseEleven').collapse('hide');
        $('#collapseTwelve').collapse('hide');
        $('#collapseTen').collapse('show');
        // window.location.href = 'pricing.html';
    });
    $('#start_step11').click(function(e) {
        $('#start_step10').removeClass('activated')
        $('#start_step12').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseTen').collapse('hide');
        $('#collapseTwelve').collapse('hide');
        $('#collapseEleven').collapse('show');
        // window.location.href = 'pricing.html';
    });
    $('#start_step12').click(function(e) {
        $('#start_step11').removeClass('activated')
        $('#start_step10').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseTen').collapse('hide');
        $('#collapseEleven').collapse('hide');
        $('#collapseTwelve').collapse('show');
        // window.location.href = 'pricing.html';
    });
    $('#start_step13').click(function(e) {
        $('#start_step15').removeClass('activated')
        $('#start_step14').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseFourteen').collapse('hide');
        $('#collapseFifteen').collapse('hide');
        $('#collapseThirteen').collapse('show');
        // window.location.href = 'contact.html';
    });
    $('#start_step14').click(function(e) {
        $('#start_step13').removeClass('activated')
        $('#start_step15').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseThirteen').collapse('hide');
        $('#collapseFifteen').collapse('hide');
        $('#collapseFourteen').collapse('show');
        // window.location.href = 'contact.html';
    });
    $('#start_step15').click(function(e) {
        $('#start_step14').removeClass('activated')
        $('#start_step13').removeClass('activated')
        $(this).addClass('activated')
        $('#collapseThirteen').collapse('hide');
        $('#collapseFourteen').collapse('hide');
        $('#collapseFifteen').collapse('show');
        // window.location.href = 'contact.html';
    });


   

    //image chnage
    $("#seraccoone").click(function() {
        var imageoneUrl = "images/step1-main-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $("#seraccotwo").click(function() {
        var imagetwoUrl = "images/ser-step-2-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $("#seraccothree").click(function() {
        var imagethreeUrl = "images/ser-step-3-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $("#seraccofour").click(function() {
        var imageoneUrl = "images/about-step-4.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $("#seraccofive").click(function() {
        var imagetwoUrl = "images/about-step-5.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $("#seraccosix").click(function() {
        var imagethreeUrl = "images/about-step-6.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $("#seraccoSeven").click(function() {
        var imageoneUrl = "images/proc-step-7-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $("#seraccoEight").click(function() {
        var imagetwoUrl = "images/proc-step-8-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $("#seraccoNine").click(function() {
        var imagethreeUrl = "images/proc-step-9-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $("#seraccoTen").click(function() {
        var imageoneUrl = "images/proc-step-10-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $("#seraccoEleven").click(function() {
        var imagetwoUrl = "images/proc-step-11-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $("#seraccoTwelve").click(function() {
        var imagethreeUrl = "images/proc-step-12-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $("#seraccoThirteen").click(function() {
        var imageoneUrl = "images/proc-step-13-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $("#seraccoFourteen").click(function() {
        var imagetwoUrl = "images/proc-step-14-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $("#seraccoFifteen").click(function() {
        var imagethreeUrl = "images/proc-step-14-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $('#start_step1').click(function(e) {
        var imageoneUrl = "images/step1-main-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $('#start_step2').click(function(e) {
        var imagetwoUrl = "images/ser-step-2-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $('#start_step3').click(function(e) {
        var imagethreeUrl = "images/ser-step-3-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $('#start_step4').click(function(e) {
        var imageoneUrl = "images/about-step-4.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $('#start_step5').click(function(e) {
        var imagetwoUrl = "images/about-step-5.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $('#start_step6').click(function(e) {
        var imagethreeUrl = "images/about-step-6.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $('#start_step7').click(function(e) {
        var imageoneUrl = "images/proc-step-7-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $('#start_step8').click(function(e) {
        var imagetwoUrl = "images/proc-step-8-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $('#start_step9').click(function(e) {
        var imagethreeUrl = "images/proc-step-9-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $('#start_step10').click(function(e) {
        var imageoneUrl = "images/proc-step-10-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $('#start_step11').click(function(e) {
        var imagetwoUrl = "images/proc-step-11-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $('#start_step12').click(function(e) {
        var imagethreeUrl = "images/proc-step-12-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });
    $('#start_step13').click(function(e) {
        var imageoneUrl = "images/proc-step-13-bg.png";
        $(".page-container").css("background-image", "url(" + imageoneUrl + ")");
    });
    $('#start_step14').click(function(e) {
        var imagetwoUrl = "images/proc-step-14-bg.png";
        $(".page-container").css("background-image", "url(" + imagetwoUrl + ")");
    });
    $('#start_step15').click(function(e) {
        var imagethreeUrl = "images/proc-step-14-bg.png";
        $(".page-container").css("background-image", "url(" + imagethreeUrl + ")");
    });


    // plus minus accordions


    // $('#start_step4').click(function(e) {
    //     e.preventDefault()
    //     $('.vlog').addClass("active");
    //     $('#start_step4').addClass('activated');

    // });

    $('.topprogressbar').click(function(e) {
        $('.topprogressbar').removeClass('activated');
        $(this).addClass('activated');

    });

    $('.progess-borders.active a').click(function(e) {
        e.preventDefault()
    })






    //about

    $('.ft').mouseover(function() {
        $(this).parent().addClass('ft-hover');
    })
    $('.ft').mouseout(function() {
        $(this).parent().removeClass('ft-hover');
    })
    $('.tp').mouseover(function() {
        $(this).parent().addClass('tp-hover');
    })
    $('.tp').mouseout(function() {
            $(this).parent().removeClass('tp-hover');
        })
        // $('.ft').on('mouseover', function() {

    // }).on('mouseout', function() {
    //     $('#shape').removeClass('ft-hover');
    // });
    // $('.tp').on('mouseover', function() {
    //     $('#shape').addClass('tp-hover');
    // }).on('mouseout', function() {
    //     $('#shape').removeClass('tp-hover');
    // });


    //screw rotattion

    $(".step-7-left-img.one").mouseover(function() {
        $(this).toggleClass('hover');
        $('.step-7-left-img.two').toggleClass('hover');
        $('.step-7-left-img.three').toggleClass('hover');
        $('.step-7-left-img-small').toggleClass('hover');
    });
    $(".step-7-left-img.two").mouseover(function() {
        $(this).toggleClass('hover');
        $('.step-7-left-img.one').toggleClass('hover');
        $('.step-7-left-img.three').toggleClass('hover');
        $('.step-7-left-img-small').toggleClass('hover');
    });
    $(".step-7-left-img.three").mouseover(function() {
        $(this).toggleClass('hover');
        $('.step-7-left-img.two').toggleClass('hover');
        $('.step-7-left-img.one').toggleClass('hover');
        $('.step-7-left-img-small').toggleClass('hover');
    });


    $('.stepslide').slick({
        infinite: true,
        slidesToShow: 1, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false, // Adds the dots on the bottom
        prevArrow: '<div class="class-to-style prev-btn"><i class="fas fa-chevron-left"></i><span class="sr-only">Prev</span></div>',
        nextArrow: '<div class="class-to-style next-btn"><i class="fas fa-chevron-right"></i><span class="sr-only">Next</span></div>',
        mobilefirst: true,

    });


    $('.stepslide').on('afterChange', function() {
        var dataId = $('.slick-current').attr("data-slick-index");
        if (dataId == 0) {
            $('.panel-group .panel-collapse').hide()
            $('#accordion .panel:nth-child(1) .panel-collapse').show();
        } else if (dataId == 1) {
            $('.panel-group .panel-collapse').hide()
            $('#accordion .panel:nth-child(2) .panel-collapse').show();
        } else if (dataId == 2) {
            $('.panel-group .panel-collapse').hide()
            $('#accordion .panel:nth-child(3) .panel-collapse').show();

        }

    });

    
//header step slider 

 if (screen.width < 768) {
    

    $('.next-btn ').click(function() {
        var afdataId = $('.slick-current').attr("data-slick-index");
        console.log(afdataId)
        if (afdataId == 0  && $('.slick-slide').hasClass('res-step-slide1') ) {
            window.location.href = 'about.html';

        }
        else if (afdataId == 0  && $('.slick-slide').hasClass('res-step-slide4') ) {
            window.location.href = 'process.html';

        }
        else if (afdataId == 0  && $('.slick-slide').hasClass('res-step-slide7') ) {
            window.location.href = 'pricing.html';

        }
        else if (afdataId == 0  && $('.slick-slide').hasClass('res-step-slide10') ) {
            window.location.href = 'contact.html';

        }
        else if (afdataId == 0  && $('.slick-slide').hasClass('res-step-slide13') ) {
            window.location.href = 'index.html';

        }
        
    });

    $('.prev-btn').click(function(){
   
        var befdataID = $('.slick-current').attr("data-slick-index");
        console.log(befdataID)
        if (befdataID == 2  && $('.slick-slide').hasClass('res-step-slide3') ) {
            window.location.href = 'contact.html';

        }
        else if (befdataID == 2  && $('.slick-slide').hasClass('res-step-slide6') ) {
            window.location.href = 'index.html';

        }
        else if (befdataID == 2  && $('.slick-slide').hasClass('res-step-slide9') ) {
            window.location.href = 'about.html';

        }
        else if (befdataID == 2  && $('.slick-slide').hasClass('res-step-slide12') ) {
            window.location.href = 'process.html';

        }
        else if (befdataID == 2  && $('.slick-slide').hasClass('res-step-slide15') ) {
            window.location.href = 'pricing.html';

        }
    
})
}
   



//prev and next
//next btn
$('#next_step1').click(function(e){
    e.preventDefault();
    if($('#start_step1').hasClass('activated') && $('#collapseOne').collapse('show')){
        $('#start_step1').removeClass('activated')
        $('#start_step3').removeClass('activated')
           $('#start_step2').addClass('activated')
           $('#collapseOne').collapse('hide');
           $('#collapseThree').collapse('hide');
           $('#collapseTwo').collapse('show');


    }
    else if($('#start_step2').hasClass('activated') && $('#collapseTwo').collapse('show')){
        $('#start_step1').removeClass('activated')
        $('#start_step2').removeClass('activated')
        $('#start_step3').addClass('activated')
        $('#collapseTwo').collapse('hide');
           $('#collapseOne').collapse('hide');
           $('#collapseThree').collapse('show');

    }
    else if($('#start_step3').hasClass('activated') && $('#collapseThree').collapse('show')){
        
        window.location.href = 'about.html';
    }
    else if($('#start_step4').hasClass('activated') && $('#collapseFour').collapse('show')){
        $('#start_step4').removeClass('activated')
        $('#start_step6').removeClass('activated')
           $('#start_step5').addClass('activated')
           $('#collapseFour').collapse('hide');
           $('#collapseSix').collapse('hide');
           $('#collapseFive').collapse('show');


    }
    else if($('#start_step5').hasClass('activated') && $('#collapseFive').collapse('show')){
        $('#start_step4').removeClass('activated')
        $('#start_step5').removeClass('activated')
        $('#start_step6').addClass('activated')
        $('#collapseFive').collapse('hide');
           $('#collapseFour').collapse('hide');
           $('#collapseSix').collapse('show');
           

    }
    else if($('#start_step6').hasClass('activated')&& $('#collapseSix').collapse('show')){
        
        window.location.href = 'process.html';
    }
    else if($('#start_step7').hasClass('activated')&& $('#collapseSeven').collapse('show')){
        $('#start_step7').removeClass('activated')
        $('#start_step9').removeClass('activated')
           $('#start_step8').addClass('activated')
           $('#collapseSeven').collapse('hide');
           $('#collapseNine').collapse('hide');
           $('#collapseEight').collapse('show');


    }
    else if($('#start_step8').hasClass('activated')&& $('#collapseEight').collapse('show')){
        $('#start_step8').removeClass('activated')
        $('#start_step7').removeClass('activated')
        $('#start_step9').addClass('activated')
        $('#collapseSeven').collapse('hide');
           $('#collapseEight').collapse('hide');
           $('#collapseNine').collapse('show');

    }
    else if($('#start_step9').hasClass('activated')&& $('#collapseNine').collapse('show')){
        
        window.location.href = 'pricing.html';
    }
    else if($('#start_step10').hasClass('activated') && $('#collapseTen').collapse('show')){
        $('#start_step10').removeClass('activated')
        $('#start_step12').removeClass('activated')
           $('#start_step11').addClass('activated')
           $('#collapseTen').collapse('hide');
           $('#collapseTwelve').collapse('hide');
           $('#collapseEleven').collapse('show');


    }
    else if($('#start_step11').hasClass('activated') && $('#collapseEleven').collapse('show')){
        $('#start_step11').removeClass('activated')
        $('#start_step10').removeClass('activated')
        $('#start_step12').addClass('activated')
        $('#collapseTen').collapse('hide');
           $('#collapseEleven').collapse('hide');
           $('#collapseTwelve').collapse('show');

    }
    else if($('#start_step12').hasClass('activated') && $('#collapseTwelve').collapse('show')){
        
        window.location.href = 'contact.html';
    }
    else if($('#start_step13').hasClass('activated') && $('#collapseThirteen').collapse('show')){
        $('#start_step13').removeClass('activated')
        $('#start_step15').removeClass('activated')
           $('#start_step14').addClass('activated')
           $('#collapseThirteen').collapse('hide');
           $('#collapseFifteen').collapse('hide');
           $('#collapseFourteen').collapse('show');


    }
    else if($('#start_step14').hasClass('activated') && $('#collapseFourteen').collapse('show')){
        $('#start_step14').removeClass('activated')
        $('#start_step13').removeClass('activated')
        $('#start_step15').addClass('activated')
        $('#collapseFourteen').collapse('hide');
           $('#collapseThirteen').collapse('hide');
           $('#collapseFifteen').collapse('show');

    }
    else if($('#start_step15').hasClass('activated')){
        
        window.location.href = 'contact.html';
    }
})

//prev btn

$('#prev_step1').click(function(e){
    e.preventDefault();
    if($('#start_step1').hasClass('activated') && $('#collapseOne').collapse('show')){
        window.location.href = 'index.html';
    }
    else if($('#start_step2').hasClass('activated') && $('#collapseTwo').collapse('show')){
        $('#start_step2').removeClass('activated')
        $('#start_step3').removeClass('activated')
        $('#start_step1').addClass('activated')
        $('#collapseTwo').collapse('hide');
           $('#collapseThree').collapse('hide');
           $('#collapseOne').collapse('show');

    }
    else if($('#start_step3').hasClass('activated') && $('#collapseThree').collapse('show')){
        
        $('#start_step1').removeClass('activated')
        $('#start_step3').removeClass('activated')
        $('#start_step2').addClass('activated')
        $('#collapseThree').collapse('hide');
           $('#collapseOne').collapse('hide');
           $('#collapseTwo').collapse('show');
    }
    else if($('#start_step4').hasClass('activated') && $('#collapseFour').collapse('show')){
        window.location.href = 'index.html';

    }
    else if($('#start_step5').hasClass('activated') && $('#collapseFive').collapse('show')){
        $('#start_step6').removeClass('activated')
        $('#start_step5').removeClass('activated')
        $('#start_step4').addClass('activated')
        $('#collapseFive').collapse('hide');
           $('#collapseSix').collapse('hide');
           $('#collapseFour').collapse('show');

    }
    else if($('#start_step6').hasClass('activated') && $('#collapseSix').collapse('show')){
        
        $('#start_step4').removeClass('activated')
        $('#start_step6').removeClass('activated')
        $('#start_step5').addClass('activated')
        $('#collapseFour').collapse('hide');
           $('#collapseSix').collapse('hide');
           $('#collapseFive').collapse('show');
    }
    else if($('#start_step7').hasClass('activated') && $('#collapseSeven').collapse('show')){
        window.location.href = 'about.html';

    }
    else if($('#start_step8').hasClass('activated') && $('#collapseEight').collapse('show')){
        $('#start_step8').removeClass('activated')
        $('#start_step9').removeClass('activated')
        $('#start_step7').addClass('activated')
        $('#collapseEight').collapse('hide');
           $('#collapseNine').collapse('hide');
           $('#collapseSeven').collapse('show');

    }
    else if($('#start_step9').hasClass('activated') && $('#collapseNine').collapse('show')){

        $('#start_step7').removeClass('activated')
        $('#start_step9').removeClass('activated')
           $('#start_step8').addClass('activated')
           $('#collapseSeven').collapse('hide');
           $('#collapseNine').collapse('hide');
           $('#collapseEight').collapse('show');

    }
    else if($('#start_step10').hasClass('activated') && $('#collapseTen').collapse('show')){
        window.location.href = 'process.html';

    }
    else if($('#start_step11').hasClass('activated') && $('#collapseEleven').collapse('show')){
        $('#start_step11').removeClass('activated')
        $('#start_step12').removeClass('activated')
        $('#start_step10').addClass('activated')
        $('#collapseEleven').collapse('hide');
           $('#collapseTwelve').collapse('hide');
           $('#collapseTen').collapse('show');

    }
    else if($('#start_step12').hasClass('activated') && $('#collapseTwelve').collapse('show')){
        
        $('#start_step10').removeClass('activated')
        $('#start_step12').removeClass('activated')
           $('#start_step11').addClass('activated')
           $('#collapseTen').collapse('hide');
           $('#collapseTwelve').collapse('hide');
           $('#collapseEleven').collapse('show');

    }
    else if($('#start_step13').hasClass('activated') && $('#collapseThirteen').collapse('show')){
        window.location.href = 'pricing.html';

    }
    else if($('#start_step14').hasClass('activated') && $('#collapseFourteen').collapse('show')){
        $('#start_step14').removeClass('activated')
        $('#start_step15').removeClass('activated')
        $('#start_step13').addClass('activated')
        $('#collapseFourteen').collapse('hide');
           $('#collapseFifteen').collapse('hide');
           $('#collapseThirteen').collapse('show');

    }
    else if($('#start_step15').hasClass('activated') && $('#collapseFifteen').collapse('show')){
        
        $('#start_step13').removeClass('activated')
        $('#start_step15').removeClass('activated')
           $('#start_step14').addClass('activated')
           $('#collapseThirteen').collapse('hide');
           $('#collapseFifteen').collapse('hide');
           $('#collapseFourteen').collapse('show');

    }
})
//menu hover




$(".has-sub").mouseenter(function () {
    $(".has-sub> a").addAttr('data-content')
    
});
 $(".has-sub").mouseleave(function(){
    $(".has-sub> a").removeAttr()
       
});


});

function toggle() {
    var tog = document.querySelector('.toggle');
    var cir = document.querySelector('.circle');

    tog.classList.toggle('clicked');
    cir.classList.toggle('clicked');
}

