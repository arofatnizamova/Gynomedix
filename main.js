$(document).ready(function () {

    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
      autoplay: true,
    }
    let extraOptions = {}
    if (slider.hasClass('banner')) {
      extraOptions = {
        slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          autoplay: true,
      }
    } else if (slider.hasClass('advantages')) {
      extraOptions = {
        slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          dots: false,
          autoPlay: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2.1,
                slidesToScroll: 1,
                dots: true,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
                    },
          ]
      }
    }else if (slider.hasClass('medicine')) {
      extraOptions = {
        slidesToShow: 2.9,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          dots: false,
          autoPlay: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
                    },
          ]
      }
    }
    slider.slick($.extend({}, extraOptions, options ));
  })
  AOS.init();
  
  })
  