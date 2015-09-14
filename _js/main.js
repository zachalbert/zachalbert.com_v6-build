if( screen.width < 640 ) {
  var topOfPage = $('.site-main').offset().top - 168;
} else {
  var topOfPage = $('.site-main').offset().top - 84;
}

$(function() {
  // Scatter the stars about the heavens
  var num_stars = 500;
  var min_size = 1;
  var max_size = 3;
  var star = "";

  for( var i=0; i<num_stars; i++ ) {
    var xPos = Math.random()*104-2;
    var yPos = Math.random()*104-2;
    var size = Math.round(min_size + ((Math.random()*max_size)-min_size));
    var opacity = Math.random()*0.4+0.4;

    star += '<span class="star" style="left: '+xPos+'%; top: '+yPos+'%; width: '+size+'px; height: '+size+'px; opacity: '+opacity+';"></span>';
  }

  $('#star-field').append(star);

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

  $('.float-label').floatlabel({
    slideInput: true,
    labelStartTop: '10px',
    labelEndTop: '-24px',
    typeMatches: /text|password|email|number|textarea|search|url/
  });

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

  // Pause the animation when clicking the pause button & store the value

  var isPaused;
  if( window.localStorage ) {
    isPaused = localStorage.getItem("orrry_pause");
    
    if( isPaused == 'true' ) {
      $('body').addClass('paused');
    } else {
      $('body').removeClass('paused');
    }
  }

  $('.pause-animation').click(function(e) {
    e.preventDefault();
    isPaused = localStorage.getItem("orrry_pause");

    if( window.localStorage ) {
      if( isPaused === 'true' ) {
        $('body').removeClass('paused');
        localStorage.clear();
        localStorage.setItem("orrry_pause", "false");
        isPaused = false;
      } else {
        $('body').addClass('paused');
        localStorage.clear();
        localStorage.setItem("orrry_pause", "true");
        isPaused = true;
      }
    }

  });

  // Kill Orrry description holder
  var orrryEls = $('.description-holder h1, .description-holder p');

  $('.close-description-holder').click(function(e) {
    e.preventDefault();
    orrryEls.slideToggle("5000");
    $(this).toggleClass('__spin');  
  });

  // Hyphenate side titles
  $('.post-title, .post-title a, .hyphenate').hyphenate('en-us');

  // Add internal links to H2s
  $(function() {
    return $(".post-single .body h2, .post-single .body h3, .post-single .body h4, .post-single .body h5, .post-single .body h6").each(function(i, el) {
      var $el, icon, id;
      $el = $(el);
      id = $el.attr('id');
      icon = '<i>&infin;</i>';

      if (id) {
        // Clear id from the header
        $el.removeAttr('id');

        // Add :before object to the header with pos absolute and anchor offset class + id
        return $el.prepend($("<a />").addClass("anchor-offset").attr("href", "#").attr("id", id))
                  .prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
      }
    });
  });

  // Load Dribbble feed
  $.jribbble.getShotsByPlayerId('zachalbert', function (playerShots) {
      var html = [];
  
      $.each(playerShots.shots, function (i, shot) {
          html.push('<a href="' + shot.url + '"><img src="' + shot.image_teaser_url + '" alt="' + shot.title + '"></a>');
      });
  
      $('#portfolio').html(html.join(''));
  }, {page: 1, per_page: 18});

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
      navLinkSwitch = topOfPage + 34;

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

// Segment.io analytics.js: https://segment.com/docs/libraries/analytics.js/quickstart/
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.0.1";
analytics.load("4FMSpYVtfxATJXUPHk9qRAfmNck2sWGM");
analytics.page()
}}();