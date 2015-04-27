
 $(document).ready(function() {

   $('.hero-content h1').click(function() {
   $(this).fadeOut('slow');
   });

  $('.hero-content h3').hover(function() {
	  $(this).css("color", "green");
	  });

     $('.selling-points .point h5').click(function() {
	     $(this).css("fontSize", "36px");
     });

  });




