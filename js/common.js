(function($){
    $(document).ready(function () {
        //header events
        	$('.main-menu__item').click(function() {
        		$('.main-menu__item').removeClass('main-menu__item_active');
        		$(this).addClass('main-menu__item_active');
        	});

        //main container events
        	$('.insurance-list__toggler-list').click(function() {
        		$('.insurance-list__body').removeClass('insurance-list__body_type_tiles');
        		$('.insurance-list__body').addClass('insurance-list__body_type_list');
        	});

        	$('.insurance-list__toggler-tiles').click(function() {
        		$('.insurance-list__body').removeClass('insurance-list__body_type_list');
        		$('.insurance-list__body').addClass('insurance-list__body_type_tiles');
        	});

        //footer events
        	$('.footer-menu__item').click(function() {
        		$('.footer-menu__item').removeClass('footer-menu__item_active');
        		$(this).addClass('footer-menu__item_active');
        	});

        //mobile devices events
        	if ($(window).width() < 1260) {
        		$('.insurance-list__body').removeClass('insurance-list__body_type_list');
        		$('.insurance-list__body').addClass('insurance-list__body_type_tiles');

        		$('.mob-menu__hamburger').click(function() {
        			$(this).toggleClass('mob-menu__hamburger_active');
        			$('.mob-menu__items').toggleClass('mob-menu__items_active');
        		});
        	}
    })
})(jQuery);