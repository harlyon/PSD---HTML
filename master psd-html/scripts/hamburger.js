
// HAMBURGER MENU

var openNavigation = function() {
  $('.hamNav').slideDown();
  $('.toggle').addClass('open');
};

var closeNavigation = function() {
  $('.hamNav').slideUp();
  $('.toggle').removeClass('open');
};

$( '.toggle' ).on( 'click', function( e ) {  
  if ( $('.hamNav').is(':visible') ) {
    closeNavigation();
  } else {
    openNavigation();    
  }
});

$( '.hamBtn' ).click(function() {
  if ( $('.hamNav').is(':visible') ) {
    closeNavigation();
  } else {
    openNavigation();    
  }
});