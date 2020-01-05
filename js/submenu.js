//$(function () {
//    $('.gnb, .gnbbg').hover(function () {
//        $('.gnbbg, .sub').stop().animate({
//            height: 'toggle',
//            opacity: 'toggle'
//        }, 200);
//    }, function () {
//        $('.gnbbg, .sub').stop().animate({
//            height: 'toggle',
//            opacity: 'toggle'
//        }, 500);
//    })
//});
/* PC 메뉴*/
$(function () {
    $('.gnb>ul>li').has('div').hover(function () {
        var sub = $(this).find('div');
        //                $('.subs').stop().slideUp();
        $('.sub, .gnbbg').stop().animate({
            opacity: 'hide'
        }, 100);
        //                $('.sub, .gnbbg').stop().slideUp();
        if (sub.hasClass('sub')) {
            sub.stop().animate({opacity:'show'});                 $('.gnbbg').stop().animate({opacity:'show'});
//            sub.stop().slideDown(500);
//            $('.gnbbg').stop().slideDown(500);
        } else {
            sub.stop().slideDown(500);
        }
    }, function () {
        //                $('.subs').stop().slideUp();
        $('.sub, .gnbbg').stop().animate({
            opacity: 'hide'
        }, 100);
        //                $('.sub, .gnbbg').stop().slideUp();
    });
    /* 모바일 메뉴*/
    $('.m-gnb>ul>li>a').click(function () {
        $(this).parent().find('.sub').stop().animate({right:0,opacity:'show'});
        $('.sub ul').stop().animate({opacity:'show'});
    });
    $('.sub>div').click(function () {
        $('.sub').stop().animate({
            right: '-100%'
        });
    });
    $('.m-menu-btn').click(function () {
        $('.m-gnb li').find('ul').stop().slideUp();
        if ($(this).hasClass('on')) {
            $('html, body').removeClass('ony');
            $('.m-menu, .sub').stop().animate({right: '-100%',
                opacity: 'hide'}); 
            $(this).removeClass('on');
        } else {
            $('html, body').addClass('ony');
            $('.m-menu').animate({
                right: '0',
                opacity: 'show'
            });
            $(this).addClass('on');
        }
    });
});
