$(document).ready(function () {
    /* Menu Toggler */
    $('.menuToggler').on('click', function () {
        $(this).toggleClass('open');
        $('.topNav').toggleClass('open');
    });
    
    $('.topNav .navLink').on('click', function () {
        $('.menuToggler').removeClass('open');
        $('.topNav').removeClass('open');
    });
    //Smooth Scroll
    $('.navList a').click(function (link) {
        link.preventDefault();
        
        let target = $(this).attr('href');
        
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 2000);
    });
    //Back To Top
    $('#up').click(function (link) {
        link.preventDefault();
        
        let target = $(this).attr('href');
        
        $('html, body').stop().animate({
            scrollTop: 0
        }, 2000);
    });
    /* AOS */
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});
