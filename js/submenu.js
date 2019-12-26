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
$(function(){
            $('.gnb>ul>li').has('div').hover(function(){
                var sub = $(this).find('div');
//                $('.subs').stop().slideUp();
                $('.sub, .gnbbg').stop().animate({opacity:'hide'},100);
//                $('.sub, .gnbbg').stop().slideUp();
                if(sub.hasClass('sub')){
//                    sub.stop().animate({opacity:'show'});
                    sub.stop().slideDown(500);
//                    $('.gnbbg').stop().animate({opacity:'show'});
                    $('.gnbbg').stop().slideDown(500);
                } else {
                    sub.stop().slideDown(500);
                }
            }, function(){
//                $('.subs').stop().slideUp();
                $('.sub, .gnbbg').stop().animate({opacity:'hide'},100);
//                $('.sub, .gnbbg').stop().slideUp();
            });
        });