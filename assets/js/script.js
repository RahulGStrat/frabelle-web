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
}

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
})
// sticky header on pagescroll end

// sticky header on pageload start
window.addEventListener("load", () => {
  screenWidthFinder();
})
// sticky header on pageload end

// sticky header on page resize start
window.addEventListener("resize", () => {
  screenWidthFinder();
})
// sticky header on page resize end

// controller start
header_controller.addEventListener("click", () => {
  header_controller.classList.toggle("fb-header__controller--checked");
  search_bar.classList.remove("fb-header__search--active");
  header_nav.classList.toggle("fb-header-nav__active");
})
// controller end

// search bar mob start
search_icon_mob.addEventListener("click", () => {
  header_controller.classList.remove("fb-header__controller--checked");
  header_nav.classList.remove("fb-header-nav__active");
  search_bar.classList.toggle("fb-header__search--active");
})
// search bar mob end

// pageg header end 
