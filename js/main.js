// nav bar active class add 
$('.navbar-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})


// To top Arrow 
$('.toTop').click(function(){
    $("html, body").animate({
        scrollTop: 0
    }, 2000);
});


$('.toTop').hide();


$(window).scroll(function () {
    let windowPosition = $(window).scrollTop();

    if (windowPosition < 1000) {
        $('.toTop').fadeOut();
    } else {
        $('.toTop').fadeIn();
    }
    // menu fixed 
    if (windowPosition > 100){
        $('body').addClass('fixed')
    } else {
        $('body').removeClass('fixed')
    }
});

// Nav bar smooth scrooling 

$('.navbar-nav a[href^="#"]').click(function() {
    let target = this.hash;

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 600);
});

// wow js init 
new WOW({
    animateClass: 'animate__animated'
}).init();

