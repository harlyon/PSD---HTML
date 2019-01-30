
// Smooth Scroll to Element

$(document).ready(function(){
    $('a[href^="#"]').click(function(e) {
    	e.preventDefault();
      $('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);
      return false;
    });
});