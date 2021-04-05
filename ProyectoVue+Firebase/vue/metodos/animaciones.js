function animaHeader(){
	$(window).scroll(function() {
    if ($(window).scrollTop() > 70 ){

        $('.anima_header').removeClass('animate__fadeInLeft');
        $('.anima_header').addClass('animate__fadeOutRight');

    } else {

      $('.anima_header').removeClass('animate__fadeOutRight');
        $('.anima_header').addClass('animate__fadeInLeft');
        //$('.elemento').removeClass('animate__fadeInDown');

    };
});
}




export{animaHeader}