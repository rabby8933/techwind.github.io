//header color change
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active-header");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("active-header");
    }
  });
});

//navbar dropdown
$(".navbar .dropdown").hover(
  function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown(150);
  },
  function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp(150);
  }
);

//tiny slider
var slider = tns({
  container: ".my-slider",
  items: 6,
  nav: false,
  mouseDrag: true,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  responsive: {
    350: {
      items: 2,
    },
    800: {
      items: 3,
    },
    900: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1350: {
      items: 6,
    },
  },
});

//tab items
$(".tab-1").click(function () {
  $(this).addClass("acitve");
  $(".tab-2").removeClass("acitve");
  $(".tab-3").removeClass("acitve");
});
$(".tab-2").click(function () {
  $(this).addClass("acitve");
  $(".tab-1").removeClass("acitve");
  $(".tab-3").removeClass("acitve");
});
$(".tab-3").click(function () {
  $(this).addClass("acitve");
  $(".tab-1").removeClass("acitve");
  $(".tab-2").removeClass("acitve");
});

$(".tab-1").click(function () {
  $("#step-1").fadeIn("slow");
  $("#step-2").hide();
  $("#step-3").hide();
});
$(".tab-2").click(function () {
  $("#step-2").fadeIn("slow");
  $("#step-1").hide();
  $("#step-3").hide();
});
$(".tab-3").click(function () {
  $("#step-3").fadeIn("slow");
  $("#step-1").hide();
  $("#step-2").hide();
});

//marquee
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

setTimeout(function () {
  $(".preloader-wrapper").fadeToggle();
}, 2000);

//go top
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
