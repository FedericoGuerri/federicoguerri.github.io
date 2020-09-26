// some mind blowing mobile nav jquery
$(document).ready(function() {
  $("#toggle").click(function() {
    $(this).fadeToggle("slow", 0);
    $(".overlay-nav").fadeIn("slow,", 0)
    $(".close").click(function() {
      $(this).fadeToggle("slow", 0)
      $(".overlay-nav").fadeOut("slow", 0)
      $("#toggle").fadeIn("slow", 0)
      $(".close").fadeIn("slow", 0)

    });
  });
});

// About Link going to about picture with supporting paragraphs

$(document).ready(function() {
  $('.about').click(function() {
    $('html, body').animate({
      scrollTop: $('.about-me').offset().top
    }, 1200);
  });
});

//Portfolio Link going to flexbox portfolio section
$(document).ready(function() {
  $('.projects').click(function() {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 1200);
  });
});

// Contact link going to contact section
$(document).ready(function() {
  $('.contact-nav').click(function() {
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 1200);
  });
});

// Work link going to portfolio section
$(document).ready(function() {
  $('.work').click(function() {
    $('html, body').animate({
      scrollTop: $('.flex').offset().top
    }, 1200);
  });
});

$(document).ready(function() {
  $('a').click(function() {
    $('overlay-nav').fadeOut();
  });
});

// Figure animations
$(document).ready(function() {
  // $('#one').on({
  //   mouseenter: function() {
  //     $('#img1').css("height", "75px")
  //     $('#img1').css("opacity", "1")
  //   }
  // });

  $('#one, #two, #three, #four, #five, #six, #seven').on({
    mouseleave: function() {
      $('figcaption').css("height", "0px")
      $('figcaption').css("opacity", "0")
    }

  });
});

$(document).ready(function() {
  $('figure').hover(
    function() {
      $(this).css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
			$('figure').css("-webkit-filter", "grayscale(100%)")
			$(this).css("-webkit-filter", "grayscale(0%)")
    },
    function() {
      $(this).css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
			$('figure').css("-webkit-filter", "grayscale(0%)")
			$(this).css("-webkit-filter", "grayscale(0%)")
    }
  )
});

// figcaption doesn't show up under 960px. Should get better performance on mobile.
$(document).ready(function() {
  $(window).resize(function() {
    if ($(window).width() < 960) {
      $('figcaption').css('display', 'none')
    } else {
      $('figcaption').css('display', 'block')
    }
  });
});







// Give Figcaption an ID and on MouseEnter And Leave use CSS properties #work
