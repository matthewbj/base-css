/*
  base-css.jquery.js by Matt Jordan
  Version 0.1
  git.io/base-css
  CC BY-SA
  
  jQuery handler to trigger with media queries. 
 
*/
$(document).ready(function () {
    $(window).resize(function () {
		   
        var width = $(window).width();

        if (width > 991) {

            // Desktop view	

        } else if (width > 768 && width < 991) {

            // Tablet view

        } else if (width > 480 && width < 767) {

            // Mobile landscape view

        } else if (width < 479) {

            // Mobile portait view

        }
    });
});
