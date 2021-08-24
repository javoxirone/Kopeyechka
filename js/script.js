$(".header__menu-adaptive").css('display', 'none')
$(".burger").click(function(){
    $(".header__menu-adaptive").slideToggle("slow");
});

$('.slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [
        {
          breakpoint: 1001,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 321,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
      ]
});