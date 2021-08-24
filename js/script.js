$(".header__menu-adaptive").css('display', 'none')
$(".filter-dropdown").css('display', 'none')
$(".sort-dropdown").css('display', 'none')
$(".burger").click(function(){
    $(".header__menu-adaptive").slideToggle("slow");
});
$(".filter__button").click(function() {
    $(".filter-dropdown").slideToggle("slow");
})
$(".sort__button").click(function() {
  $(".sort-dropdown").slideToggle("slow");
  $(".arrow-down").toggleClass("active");
})


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
            slidesToShow: 1,
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



$('.detail-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  dots: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        fade: true,
        cssEase: 'linear'
      }
    },
  ]
});