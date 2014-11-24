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

  // Scroll to the sun on load
  var sun_pos = Math.round($('#sun > .orbit').offset().top - 10);
  var sun_offset = $(window).height() - sun_pos - 61;
  var top_of_page = $(window).height() - 180;
  
  window.scrollTo(0, top_of_page);
  $('.orrry-description').css('bottom', sun_offset);
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

  // Set hover states
  $('.solar-system > div > .orbit').hover(function() {
    $(this).mousemove(function(e) {
      $(this).prev().css({
        'display': 'block',
        'opacity': '1',
        'left': e.pageX+10,
        'top': e.pageY-175
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


/*
// this isn't firing....
console.log('yay')

// Scroll stuff
var mainHeader = $('.site-nav')
  , header = mainHeader.clone().addClass('__fixed').appendTo('body')
  , top_limit = header.outerHeight()
;

bindEvents();

function bindEvents() {
    $(window).scroll( scrollEvent );
}

function scrollEvent() {
    var top = $(window).scrollTop();
    console.log(top)
    // avoid any logic if nothing must be done
    if ( top < top_limit && !header.is(':visible')
        || top > top_limit && header.is(':visible')
    ) return;
    // unbind the scroll event to avoid its execution
    // until slide animation is complete
    $(window).unbind( 'scroll' );
    // show/hide the header
    if ( top > top_limit ) {
        header.slideDown( 400, bindEvents );
    } else {
        header.slideUp( 400, bindEvents );
    }
};
*/


});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3878555-1', 'auto');
ga('send', 'pageview');
