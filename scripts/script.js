
const $body = $('body');
const $nav = $('nav');
const $hamburger = $('.hamburger')

// hamburger

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

// textarea
$('#message').focus(function() {
    $('#message').html('');
})



// newsletter signup
const $signupButton = $('#submit-button');
$signupButton.click(function(e){
    e.preventDefault();
    $('#nl-thankyou').html('Thank you. You are now signed up for our newsletter!');
    $('#newsletter').css('display', 'none');
})


// jump to thank you page upon submitting the form
const $submit = $('#submit-form');
$submit.click(function(){
    window.location = 'thankyou.html';
})


// map
        var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 49.2747265, lng: -123.1259307},
            zoom: 13,
            styles: [
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e9e9e9"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dedede"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#333333"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        }
                    ]
            });
        }



