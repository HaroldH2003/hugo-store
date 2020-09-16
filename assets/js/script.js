// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

(function ($) {
  'use strict';

  
  // product Slider
  $('.product-image-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-image">';
    }
  });

  // Product slider
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

})(jQuery);

addBackToTop({
  backgroundColor: '#000',
  cornerOffset: 20, // px
  diameter: 56, // px
  ease: inOutSine, // any one from https://www.npmjs.com/package/ease-component will do
  id: 'back-to-top',
  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>',
  onClickScrollTo: 0, // px
  scrollContainer: document.body, // or a DOM element, e.g., document.getElementById('content')
  scrollDuration: 100, // ms
  showWhenScrollTopIs: 1, // px
  size: diameter, // alias for diameter
  textColor: '#fff',
  zIndex: 1
})