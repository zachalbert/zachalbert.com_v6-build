var topOfPage = $('.site-main').offset().top - 84;

$(function() {
  // Scatter the stars about the heavens
  var num_stars = 500;
  var min_size = 1;
  var max_size = 3;

  for( var i=0; i<num_stars; i++ ) {
    var xPos = Math.random()*104-2;
    var yPos = Math.random()*104-2;
    var size = Math.round(min_size + ((Math.random()*max_size)-min_size));
    var opacity = Math.random()*0.4+0.4;

    $('#star-field').append('<span class="star" style="left: '+xPos+'%; top: '+yPos+'%; width: '+size+'px; height: '+size+'px; opacity: '+opacity+';"></span>');
  }

  // Scroll to show just the edge of the project
  window.scrollTo(0, topOfPage);
});

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {

  $('.float-label').floatlabel({slideInput: false});

  // Set hover states
  $('.solar-system > div > .orbit').hover(function() {
    $(this).mousemove(function(e) {
      $(this).prev().css({
        'display': 'block',
        'opacity': '1',
        'left': e.clientX+10,
        'top': e.clientY+10
      });
    });
  }, function() {
    $(this).prev().css({
      'display': 'none',
      'opacity': '0'
    });
  });

  // Pause the animation when clicking the pause button
  $('.pause-animation').click(function(e) {
    e.preventDefault();

    /**
     * Set a variable & cookie for whether the pause button was hit
     * https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
    **/
    // docCookies.setItem(solar_system_pause, value[, end[, path[, domain[, secure]]]]);
    
    $('body').toggleClass('paused');
  });

  var navLinks = $('#about-nav > li > a');

  $(navLinks).click(function(e) {
    e.preventDefault();
    navLinks.removeClass('active');
    $(this).addClass('active');
  });

});


/**
 * Scroll events
 * https://gist.github.com/Warry/4254579
 */
$(function() {

  // Detect request animation frame
  var scroll = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60) },
      lastPosition  = -1,
      wHeight       = window.innerHeight,
      siteNavWrap   = $('.nav-wrapper'),
      siteMain      = $('.site-main').offset().top,
      topLink       = $('.link-to-top'),
      orrryBlock    = $('.orrry-description .description-holder'),
      navLinkSwitch = topOfPage + 34,
      sec1          = $("#about-trigger").offset().top,
      sec2          = $("#contact").offset().top;

  // If page has scrolled, add or remove fixed class
  function loop() {
    // Only fire if the page has scrolled
    if( lastPosition == window.pageYOffset ) {
      scroll(loop);
      return false;
    } else {
      lastPosition = window.pageYOffset;
    }

    // Orrry description fade point
    if( lastPosition < siteMain/2 ) {
      orrryBlock.addClass('fadeInUp').removeClass('fadeOutDown');
    } else {
      orrryBlock.addClass('fadeOutDown').removeClass('fadeInUp');
    }

    // Starting position
    if( lastPosition >= topOfPage ) {
      $('body').addClass('__top');
      $('.link-to-top').attr("href", "#top");
    } else {
      $('body').removeClass('__top');
      $('.link-to-top').attr("href", "#page");
    }

    // Link text hits white
    if( lastPosition <= navLinkSwitch ) {
      $('body').addClass('__nav-link');
    } else {
      $('body').removeClass('__nav-link');
    }

    // Give nav links an active class when the section is visible
    var scrollPos = $(document).scrollTop();
    $('.internal-link').each(function() {
      if( $("#about").offset().top <= scrollPos && ($("#about").offset().top + $("#about+section").height() - 1) > scrollPos ) {
        $('.about').addClass('active');
        $('.contact').removeClass('active');
      } else if( $("#contact").offset().top <= scrollPos ) {
        $('.contact').addClass('active');
        $('.about').removeClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // Nav is fully on top of window edge
    if( lastPosition > siteMain ) {
      siteNavWrap.addClass('__fixed');
      // TODO: Write / read from a cookie based on the pause button
      $('body').addClass('__paused');
    } else {
      siteNavWrap.removeClass('__fixed');
      // TODO: Write / read from a cookie based on the pause button
      $('body').removeClass('__paused');
    }

    scroll(loop);
  }

  loop();
});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3878555-1', 'auto');
ga('send', 'pageview');
