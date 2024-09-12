$(window).scroll(function () {
  if ($(window).width() > 991) { // Check if screen width is greater than 991px
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("header").addClass("stickyheader");
      $(".logo").attr("src", "assets/images/logo_1.png"); // Change to sticky logo
    } else {
      $("header").removeClass("stickyheader");
      $(".logo").attr("src", "assets/images/logo_1.png"); // Change back to original logo
    }
  } else {
    // Reset to the original state when the screen width is less than 991px
    $("header").removeClass("stickyheader");
    $(".logo").attr("src", "assets/images/logo_1.png");
  }
});

// drop-down
document.addEventListener('DOMContentLoaded', function () {
  const resourcesLink = document.getElementById('resources-link');
  const dropdownMenu = document.getElementById('dropdown-menu');

  resourcesLink.addEventListener('click', function (e) {
    // Prevent default anchor behavior
    e.preventDefault();

    // Toggle the dropdown on click
    dropdownMenu.classList.toggle('show');
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!resourcesLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});

// sliders

$(document).ready(function () {
  $('.event_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 1500,
    centerMode: false,
    arrows: true,
    infinite: true,
    prevArrow: $('.event-left'),
    nextArrow: $('.event-right'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 578,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 426,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
    ]
  });
});

// counter js start here
function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
          countNum: element.html()
      }).animate({
          countNum: maxval
      }, {
          //duration 5 seconds
          duration: 3000,
          easing: 'linear',
          step: function() {
              element.html(Math.floor(this.countNum) + html);
          },
          complete: function() {
              element.html(this.countNum + html);
          }
      });
  }

}

//When the document is ready
$(function() {
  $(window).scroll(function() {
      $(".counter-h2[data-max]").each(function() {
          inVisible($(this));
      });
  })
});

// counter js end here



//scrolling nav
$(document).ready(function() {
  // Add scrollspy to <body>
  $('body').scrollspy({ target: ".navbar", offset: 50 });

  // Add smooth scrolling on all links inside the navbar
  $("#navbarText a, .quick-links-layout a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function() {

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.replace = hash;
          });
      } // End if
  });
});

// -----Country Code Selection
$("#mobile_code").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
});


