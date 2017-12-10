(function($){
    // dom 
    const $navbarButton = $('#navbar-button'),
          $coverNavbar = $('.cover--navbar'),
          $coverNavbarLink = $('.cover--navbar--link');

    // a way of knowing if the navbar was "fixed" by navbarFix
    var navbarFixed = true;

    // navbar functionality
    $navbarButton.on('click', () => {
        if ($coverNavbar.is(':visible')) {
            $coverNavbarLink.fadeOut();
            $coverNavbar.slideUp();
        } else {
            $coverNavbarLink.fadeIn();
            $coverNavbar.slideDown().css('display', 'flex');
        }
    });

    //making sure navbar is still visible in case navbar was hidden and the button isn't visible anymore. also takes care of hiding the nav if the browser is later resized to mobile size
    function navbarFix() {
        let wdvWidth = $(window).width();

        // fix this
        if (wdvWidth > 940 && navbarFixed)
            navbarFixed = false;

        if (wdvWidth > 940 && $coverNavbar.is(':hidden')) {
            $coverNavbarLink.css('display', 'initial');
            $coverNavbar.css('display', 'flex');

        } else if (wdvWidth < 940 && !navbarFixed) {
            $coverNavbarLink.css('display', 'none');
            $coverNavbar.css('display', 'none');
            
            navbarFixed = true;
        }
    }

    $(window).resize(navbarFix);
})(jQuery)