$(".header__menu-adaptive").css('display', 'none')
$(".burger").click(function(){
    $(".header__menu-adaptive").slideToggle("slow");
});

$('.slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
});