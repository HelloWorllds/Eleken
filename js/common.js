(function($){
    $(document).ready(function () {
        //header events
        	$('.main-menu__item').click(function() {
        		$('.main-menu__item').removeClass('main-menu__item_active');
        		$(this).addClass('main-menu__item_active');
        	});

        //main container events

        //footer events
        	$('.footer-menu__item').click(function() {
        		$('.footer-menu__item').removeClass('footer-menu__item_active');
        		$(this).addClass('footer-menu__item_active');
        	});
    })
})(jQuery);