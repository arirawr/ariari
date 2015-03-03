$(function(){
    $('#nav').hover(function(){
        $(this).animate({width:'200px'},500);
    },function(){
        $(this).animate({width:'35px'},500);
    });
});

$(function(){
    $('#mobilenav').hover(function(){
        $(this).animate({height:'500px'},500);
    },function(){
        $(this).animate({height:'50px'},500);
    });
});