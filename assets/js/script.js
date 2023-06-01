// onload accordion collapse
const accordionButton = document.querySelectorAll(
  ".fb-footer__linksec .accordion-button"
);
const accordionCnt = document.querySelectorAll(
  ".fb-footer__linksec .accordion-collapse"
);
window.addEventListener("resize", () => {
  if (window.innerWidth < 1024) {
    accordionButton.forEach((e) => {
      e.classList.add("collapsed");
    });
    accordionCnt.forEach((e) => {
      e.classList.remove("show");
    });
  } else {
    accordionButton.forEach((e) => {
      e.classList.remove("collapsed");
    });
    accordionCnt.forEach((e) => {
      e.classList.add("show");
    });
  }
});

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
$(".fb-featured__product-slick").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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

//
document.querySelectorAll(".fb-featured__tabbtn").forEach((e) => {
  e.addEventListener("click", () => {
    $(".fb-featured__product-slick").slick("refresh");
    document.querySelector(".fb-featured__loader").classList.add("load");
    //
    setTimeout(() => {
      document.querySelector(".fb-featured__loader").classList.remove("load");
    }, 500);
  });
});

// pageg header start
const page_header = document.querySelector(".fb-page-header");
const header_controller = document.querySelector(".fb-header__controller");
const header_nav = document.querySelector(".fb-header-nav-wrap");
const header_toplink = document.querySelector(".fb-toplinks__wrap");
const search_icon_mob = document.querySelector(".fb-header__search-icon--mob");
const search_bar = document.querySelector(".fb-header__search");

// function to make header sticky
const headerSticky = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 20) {
    page_header.classList.add("fb-page-header--sticky");
  } else {
    page_header.classList.remove("fb-page-header--sticky");
  }
};

// to caputure screen width
function screenWidthFinder() {
  var screen_width = document.body.clientWidth;
  if (screen_width < 1199) {
    page_header.classList.add("fb-page-header--sticky");
  } else {
    headerSticky();
  }
}

// sticky header on pagescroll start
window.addEventListener("scroll", () => {
  screenWidthFinder();
});
// sticky header on pagescroll end

// sticky header on pageload start
window.addEventListener("load", () => {
  screenWidthFinder();
});
// sticky header on pageload end

// sticky header on page resize start
window.addEventListener("resize", () => {
  screenWidthFinder();
});
// sticky header on page resize end

// controller start
header_controller.addEventListener("click", () => {
  header_controller.classList.toggle("fb-header__controller--checked");
  search_bar.classList.remove("fb-header__search--active");
  header_nav.classList.toggle("fb-header-nav__active");
});
// controller end

// search bar mob start
search_icon_mob.addEventListener("click", () => {
  header_controller.classList.remove("fb-header__controller--checked");
  header_nav.classList.remove("fb-header-nav__active");
  search_bar.classList.toggle("fb-header__search--active");
});
// search bar mob end

// pageg header end
