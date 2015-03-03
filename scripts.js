$(function(){
    $('#nav').hover(function(){
        $(this).animate({width:'200px'},500);
    },function(){
        $(this).animate({width:'35px'},500);
    });

    $( "#mobilenavhead" ).click(function() {
	  $( "#mobilenav" ).slideToggle( "slow", function() {
	    // Animation complete.
	  });
	});
});

