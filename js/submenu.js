$(function () {
    $('.gnb, .gnbbg').hover(function () {
        $('.gnbbg, .sub').stop().animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 200);
    }, function () {
        $('.gnbbg, .sub').stop().animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 500);
    })
});
