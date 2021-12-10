


                $(document).ready(function(){
                    $('.slider').slick({
                        autoplay: true,
                 centerMode: true,
                 centerPadding: '60px',
                 slidesToShow: 5,
                 speed:800,
                 index: 2,
                 responsive: [
                   {
                     breakpoint: 768,
                     settings: {
                       arrows: false,
                       centerMode: true,
                       centerPadding: '40px',
                       slidesToShow: 3
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       arrows: false,
                       centerMode: true,
                       centerPadding: '40px',
                       slidesToShow: 1
                     }
                   }
                 ]
               });
                   });

