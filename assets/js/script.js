// onload accordion collapse
const accordionButton = document.querySelectorAll('.fb-footer__linksec .accordion-button');
const accordionCnt = document.querySelectorAll('.fb-footer__linksec .accordion-collapse');
window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        accordionButton.forEach((e) => {
            e.classList.add('collapsed');
        })
        accordionCnt.forEach((e) => {
            e.classList.remove('show');
        })
    } else {
        accordionButton.forEach((e) => {
            e.classList.remove('collapsed');
        })
        accordionCnt.forEach((e) => {
            e.classList.add('show');
        })
    }
})

// testimonials
// $('.fb-customer__outer').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });
$(".fb-customer__outer").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
//   main banner start
$(".fb-MainBanner__tile-wrap").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
//   Main banner end
$('.fb-featured__product-slick').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
          arrows:false,

          responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: true
                        }
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      },
                    ]
        });
