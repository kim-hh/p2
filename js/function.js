$(function () {
    /* 메인페이지 배너 bxslider*/
    $('.visual ul').bxSlider({
        auto: true,
        pager: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });
    $('.m-visual ul').bxSlider({
        auto: true,
        pager: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });
    /* 메인페이지 배너 bxslider 종*/
    
    /* */
    $('.collection ul li, .news li, .sns li, .gnb .sub2 li, .gnb .sub3 li').hover(function () {
        $(this).siblings().stop().fadeTo(500, 0.4);
    }, function () {
        $(this).siblings().stop().fadeTo(500, 1);
    });
    $('.collection ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        autoplay: false,
        arrows: true
    });
    $('.m-collection ul').slick({
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
    });
    $('.m-sns ul').slick({
        slidesToShow: 1,
        variableWidth: true
    });
    //    $(' body.collect .collection-list').hover(function () {
    //        $(this).css({backgroundColor:'#940000'});
    //        $('body.collect .collection-list dt').css({color:'#fff'});
    //        $('body.collect .collection-list dt span').css({backgroundColor:'#fff'});
    //        
    //        $('body.collect .collection-list dd').css({color:'#fff'});
    //    }, function () {
    //        $('body.collect .collection-list:nth-of-type(even)').css({backgroundColor:'#eee'});
    //        $('body.collect .collection-list:nth-of-type(odd)').css({backgroundColor:'#fff'});
    //        $('body.collect .collection-list dt').css({color:'#940000'});
    //        $('body.collect .collection-list dd').css({color:'#000'});
    //    });
    $('.visual a span').hover(function () {
        $('.visual a .arrow-line').stop().animate({
            width: '250px'
        }, 100);
    }, function () {
        $('.visual a .arrow-line').stop().animate({
            width: '200px'
        }, 100);
    });

    $('body.detail .detail-info .small li').click(function (e) {
        var j = $(this).index();
        $('.detail-info .big li').css({
            display: 'none'
        });
        $('.detail-info .big li').eq(j).css({
            display: 'block'
        });
        $(this).stop().fadeTo(500, 1);
        $(this).siblings().stop().fadeTo(500, 0.4);
        e.preventDefault();
    });
    $('body.detail .similar ul li').hover(function () {
        $(this).siblings().stop().fadeTo(500, 0.4);
    }, function () {
        $(this).siblings().stop().fadeTo(500, 1);
    });
    $('body.brand .partner ul li').hover(function () {
        $(this).stop().animate({
            top: "-80px",
            left: "-22px"
        }, 200);
    }, function () {
        $(this).stop().animate({
            top: "0",
            left: "0"
        }, 200);
    });
    $('body.mobile footer .m-sitemap>li>a').click(function (e) {
        e.preventDefault();
        $('.m-sitemap li').find('ul').stop().slideUp();
        $('body.mobile footer .m-sitemap>li>a').removeClass('on');
        if (!$(this).parent().find('ul').is(':hidden')) {
            $(this).addClass('on');
        }
        $(this).parent().find('ul').stop().slideToggle();
        $(this).toggleClass('on');
    });
});
