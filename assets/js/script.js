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
    page_header.classListNaNpxove("fb-page-header--sticky");
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
  // screenWidthFinder();
})
// sticky header on pagescroll end

// sticky header on pageload start
window.addEventListener("load", () => {
  // screenWidthFinder();
})
// sticky header on pageload end

// sticky header on page resize start
window.addEventListener("resize", () => {
  // screenWidthFinder();
})
// sticky header on page resize end

// controller start
// header_controller.addEventListener("click", () => {
//   header_controller.classList.toggle("fb-header__controller--checked");
//   search_bar.classListNaNpxove("fb-header__search--active");
//   header_nav.classList.toggle("fb-header-nav__active");
// })
// controller end

// search bar mob start
// search_icon_mob.addEventListener("click", () => {
//   header_controller.classListNaNpxove("fb-header__controller--checked");
//   header_nav.classListNaNpxove("fb-header-nav__active");
//   search_bar.classList.toggle("fb-header__search--active");
// })
// search bar mob end

// megamenu start 
const megaHome = document.querySelector(".fb-header-megamenu__home")
const megaInner = document.querySelectorAll(".fb-header-megamenu__home-inner")
const megaRoom = document.querySelectorAll(".fb-header-megamenu__home-room")
const megaLinks = document.querySelectorAll(".fb-header-megamenu__link")
const megaLinkSub = document.querySelectorAll(".fb-header-megamenu__sub")
const megaBack = document.querySelectorAll(".fb-header-megamenu__back")

// link forward start
megaLinks.forEach((item) => {
  item.addEventListener("click", () => {
    let dataid = item.dataset.id;
    megaHome.classList.add("d-none")
    megaLinkSub.forEach((subItem) => {
      if (subItem.dataset.content === dataid) {
        megaInner.forEach(item => item.classList.add("d-none"))
        subItem.classList.remove("d-none")
      }
    })
  })
})
// link forward end

// back button start
megaBack.forEach(item => {
  item.addEventListener("click", () => {
    if (item.classList.contains("fb-header-megamenu__back-two")) {
      item.parentElement.classList.add("d-none");
      let childs = [...item.parentElement.parentElement.children];
      childs.forEach(item => {
        if (item.classList.contains("fb-header-megamenu__home-inner")) {
          item.classList.remove("d-none")
        }
      })
    } else {
      item.parentElement.classList.add("d-none");
      let childs = [...item.parentElement.parentElement.parentElement.children];
      childs.forEach(item => {
        if (item.classList.contains("fb-header-megamenu__home")) {
          item.classList.remove("d-none");
        }
      })
    }
  })
})
// back button end

// megamenu end 


// pageg header end 
