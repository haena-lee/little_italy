
const $body = $('body');
const $nav = $('nav');
const $hamburger = $('.hamburger')

$hamburger.on('click', openOverlay);

// Prevents focus ring from appearing on mousedown only
$hamburger.on('mousedown', (e) => {
    e.preventDefault();
});

function openOverlay(e) {
    $body.toggleClass('show');
    $nav.slideToggle(200);
}

// Listen for when a media query
const mql = window.matchMedia("(max-width: 670px)"); // Create the query list.

// Add the media query listener function that will listen
// for media query changes
mql.addListener(showNav)

function showNav(mq) { 

    // if the media query is false...
    // -> screen is wider than 670px?
    if(!mq.matches){
        // Removes the show class from the body...
        // -> prevents the hamburger from remaining in the cross position
        $body.removeClass('show');
        // Removes the 'style' attribute
        // -> jQuery adds a 'style' attribute with the value of
        // 'display: none;' -> on the nav element when you run
        // any effect (slidetoggle, Fade...etc...)
        $nav.removeAttr('style');

    }

} // Define a callback function for the event listener.


// smooth scroll

$("a[href^='#']").click(function() {
    const position = $($(this).attr('href')).offset().top;
    $('body, html').animate({
        scrollTop: position
    }, 400 );
});

// back to top

$(document).ready(function() {
    var offset = 250;
    var duration = 300;
  
 $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
    } else {
        $('.back-to-top').fadeOut(duration);
    }
});
  

$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
    });
});

