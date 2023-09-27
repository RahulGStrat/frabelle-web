// CLICK TO DROPDOWN
function myFunction() {
  document.getElementById("clicktodrop").classList.toggle("show1");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("fb-click-drop__body");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show1")) {
        openDropdown.classList.remove("show1");
      }
    }
  }
  if(!event.target.matches('.fb-carttable__headitem')){
    const ele = document.querySelector('#ctl17_liMoveSelected')
    const ele2 = document.querySelector('#ctl17_liCopySelected')
    if(ele){
      ele.classList.remove('active')
    }
    if(ele2){
      ele2.classList.remove('active')
    }
  }
};

// CLICK TO DROPDOWN END ////////////////
// if(!event.target.matches('.fb-filter-cnt__clr')){
//   const ele3 = document.querySelector('#ctl17_liMoveSelected')
// };
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


// fb-checkout-recipes
$(".fb-checkout-recipes-slick").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: true,

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
// document.querySelectorAll(".fb-featured__tabbtn").forEach((e) => {
//   e.addEventListener("click", () => {
//     $(".fb-featured__product-slick").slick("refresh");
//     document.querySelector(".fb-featured__loader").classList.add("load");
//     //
//     setTimeout(() => {
//       document.querySelector(".fb-featured__loader").classList.remove("load");
//     }, 500);
//   });
// });

$(".fb-featured__tabbtn").on("shown.bs.tab", function (e) {
  $(".fb-featured__product-slick").slick("setPosition");
});

// pageg header start
const page_header = document.querySelector(".fb-page-header");
const header_controller = document.querySelector(".fb-header__controller");
const header_nav = document.querySelector(".fb-header-nav-wrap");
const header_navLinks = document.querySelectorAll(".fb-header-nav__item");
const header_toplink = document.querySelector(".fb-toplinks__wrap");
const search_icon_mob = document.querySelector(".fb-header__search-icon--mob");
const search_bar = document.querySelector(".fb-header__search");
const megaMenu = document.querySelector(".fb-header-megamenu__outer");

// function to make header sticky
const headerSticky = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 20) {
    if (page_header) {
      page_header.classList.add("fb-page-header--sticky");
    }
  } else {
    if (page_header) {
      page_header.classList.remove("fb-page-header--sticky");
    }
  }
};

// function to add active to the header nav links - Unipuehover
header_navLinks.forEach(item=>{
  item.addEventListener('mouseenter',()=>{
    const link = item.querySelector(".fb-header-nav__link")
    link.classList.add('active-link')
  })
  item.addEventListener('mouseleave',()=>{
    const link = item.querySelector(".fb-header-nav__link")
    link.classList.remove('active-link')
  })
})

// to caputure screen width
function screenWidthFinder() {
  var screen_width = document.body.clientWidth;
  if (page_header) {
    if (screen_width < 1199) {
      page_header.classList.add("fb-page-header--sticky");
    } else {
      headerSticky();
    }
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
if (header_controller) {
  header_controller.addEventListener("click", () => {
    header_controller.classList.toggle("fb-header__controller--checked");
    search_bar.classList.remove("fb-header__search--active");
    var screen_width = document.body.clientWidth;
    if (screen_width < 1199) {
      megaMenu.classList.toggle("fb-header-megamenu__active");
    } else {
      header_nav.classList.toggle("fb-header-nav__active");
    }
  });
}
// controller end

// search bar mob start
if (search_icon_mob) {
  search_icon_mob.addEventListener("click", () => {
    header_controller.classList.remove("fb-header__controller--checked");
    megaMenu.classList.remove("fb-header-megamenu__active");
    search_bar.classList.toggle("fb-header__search--active");
  });
}
// search bar mob end

// megamenu start
const megaHome = document.querySelector(".fb-header-megamenu__home");
const megaInner = document.querySelectorAll(".fb-header-megamenu__home-inner");
const megaRoom = document.querySelectorAll(".fb-header-megamenu__home-room");
const megaLinks = document.querySelectorAll(".fb-header-megamenu__link");
const megaLinkSub = document.querySelectorAll(".fb-header-megamenu__sub");
const megaBack = document.querySelectorAll(".fb-header-megamenu__back");

// link forward start
megaLinks.forEach((item) => {
  item.addEventListener("click", () => {
    let dataid = item.dataset.id;
    megaHome.classList.add("d-none");
    megaLinkSub.forEach((subItem) => {
      if (subItem.dataset.content === dataid) {
        megaInner.forEach((item) => item.classList.add("d-none"));
        subItem.classList.remove("d-none");
      }
    });
  });
});
// link forward end

// back button start
megaBack.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("fb-header-megamenu__back-two")) {
      item.parentElement.classList.add("d-none");
      let childs = [...item.parentElement.parentElement.children];
      childs.forEach((item) => {
        if (item.classList.contains("fb-header-megamenu__home-inner")) {
          item.classList.remove("d-none");
        }
      });
    } else {
      item.parentElement.classList.add("d-none");
      let childs = [...item.parentElement.parentElement.parentElement.children];
      childs.forEach((item) => {
        if (item.classList.contains("fb-header-megamenu__home")) {
          item.classList.remove("d-none");
        }
      });
    }
  });
});
// back button end

// megamenu end

// pageg header end

// order-summary

const orderbtn = document.querySelectorAll(".fb-order__summarydrop-btn");
const orderinnerbtn = document.querySelectorAll(
  ".fb-dropdown .accordion-button"
);
const orderCnt = document.querySelectorAll(".fb-order__summarydrop-cnt");
const orderinnerCnt = document.querySelectorAll(
  ".fb-dropdown .accordion-collapse"
);

window.addEventListener("resize", () => {
  if (window.innerWidth < 1024) {
    orderbtn.forEach((e) => {
      e.classList.add("collapsed");
    });
    orderCnt.forEach((e) => {
      e.classList.remove("show");
    });
    orderinnerbtn.forEach((e) => {
      e.classList.remove("collapsed");
    });
    orderinnerCnt.forEach((e) => {
      e.classList.add("show");
    });
  } else {
    orderbtn.forEach((e) => {
      e.classList.remove("collapsed");
    });
    orderCnt.forEach((e) => {
      e.classList.add("show");
    });
    orderinnerbtn.forEach((e) => {
      e.classList.add("collapsed");
    });
    orderinnerCnt.forEach((e) => {
      e.classList.remove("show");
    });
  }
});
const sidebar_filter = document.querySelector(".fb-sidebar__controller");
const sidebar_filter_body = document.querySelector(".fb-sidebar__body");
const sidebar_filter_close = document.querySelector(".fb-sidebar__head-logo");
const sidebar_filter_options = document.querySelectorAll(".fb-filter-opns__list");

if (sidebar_filter && sidebar_filter_close && sidebar_filter_body) {
  sidebar_filter.addEventListener("click", () => {
    sidebar_filter_body.classList.add("fb-sidebar__body--active");
  });
  sidebar_filter_close.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar_filter_body.classList.remove("fb-sidebar__body--active");
  });
}
                                                                                                                                               

// To set the sidebar filters above 5 hiden
if(sidebar_filter_options){
  sidebar_filter_options.forEach(item=>{
    const sidebar_filters = item.querySelectorAll(".fb-filter-opns__list-item")
    const sidebar_filter_readmore = item.querySelector(".fb-seemore-more");
    let triger = false;
    if(sidebar_filters.length >  4){
      sidebar_filter_readmore.classList.add("fb-seemore-more--show");
      sidebar_filters.forEach((item,index)=>{
        if(item.classList.contains("show-item") && index > 4){
          item.classList.remove("show-item")
        }
      })
    }
    if(sidebar_filter_readmore){
      sidebar_filter_readmore.addEventListener("click",(e)=>{
        e.preventDefault();
        triger=!triger;
        let text = sidebar_filter_readmore.querySelector(".fb-seemore-more__btn .fb-seemore-more__btn-text");
        if(triger){
          text.textContent = "See less"
          sidebar_filter_readmore.classList.add("fb-seemore-more--arrow")
          sidebar_filters.forEach(item=>{
            if(!item.classList.contains("show-item")){
             item.classList.add("show-item")
            }
           })
        }else{
          text.textContent = "See more"
          sidebar_filter_readmore.classList.remove("fb-seemore-more--arrow")
          sidebar_filters.forEach((item,index)=>{
          if(item.classList.contains("show-item") && index > 4){
            item.classList.remove("show-item");
           }
           })
        }
      })
    }
  })
}

// ask question
const question_link = document.querySelector("#question");
const question_label = document.querySelector(".fb-askquestion__link");
const question_body = document.querySelector(".fb-askquestion__body");

if (question_link) {
  question_link.addEventListener("change", (e) => {
    if (e.target.checked) {
      console.log("ho");
      question_label.textContent = "Hide the form";
      question_body.classList.add("show");
    } else {
      question_label.textContent = "Ask a question";
      question_body.classList.remove("show");
    }
  });
}

const pass = document.querySelector("#pass-toggle");
const passOut = document.querySelector("#pass-out");
if (pass) {
  pass.addEventListener("click", () => {
    if (passOut.querySelector("input").type === "password") {
      passOut.querySelector("input").type = "text";
      pass.querySelectorAll("img")[0].style.display = "block";
      pass.querySelectorAll("img")[1].style.display = "none";
    } else {
      passOut.querySelector("input").type = "password";
      pass.querySelectorAll("img")[0].style.display = "none";
      pass.querySelectorAll("img")[1].style.display = "block";
    }
  });
}
// wishlist popup

let cards_wishlist = document.querySelectorAll(".fb-product-tile");

cards_wishlist.forEach((item) => {
  let wishlistBtn = item.querySelector(
    ".fb-product-tile .fb-product-tile__fav"
  );
  let wishlistBody = item.querySelector(
    ".fb-product-tile .fb-click-drop__body"
  );
  if(wishlistBtn){
    wishlistBtn.addEventListener("click", () => {
      wishlistBody.classList.toggle("fav_active");
    });
  }
  item.addEventListener("mouseleave", () => {
    if(wishlistBody){
      wishlistBody.classList.remove("fav_active");
    }
  });
});
// HIDE INPUT
const checkbox1 = document.getElementById('ctl17_checkbox1');
const checkbox2 = document.getElementById('ctl17_checkbox2');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

if (checkbox1) {
  checkbox1.addEventListener('change', function () {
    if (checkbox1.checked) {
      one.style.display = 'block';
      two.style.display = 'block';
    } else {
      one.style.display = 'none';
      if (!checkbox2.checked) {
        two.style.display = 'none';
      }
    }
  });
}

if (checkbox2) {
  checkbox2.addEventListener('change', function () {
    if (checkbox2.checked) {
      two.style.display = 'block';
      three.style.display = 'block';
    } else {
      three.style.display = 'none';
      if (!checkbox1.checked) {
        two.style.display = 'none';
      }
    }
  });
}


// listing page btn

const viewBtn = document.querySelectorAll('.fb-prdct-list-outer__viewlink');

viewBtn.forEach((item) => {
  item.addEventListener('click', () => {
    viewBtn.forEach((e) => {
      e.classList.remove('active');
    })
    item.classList.add('active');
  })
})


// btn close 
