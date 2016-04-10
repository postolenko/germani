$(document).ready(function() {

    getScrollToTopBtn();

    $("body").css({"padding-top" : $(".header-bg").height() + "px" });

    $(document).scroll(function() {

        getScrollToTopBtn();

    });

    $(".respmenubtn").click(function() {

        if ( $(".main-nav-box").offset().top < $(window).scrollTop() ) {

            $(".respmenubtn").addClass("respmenubtn-active");

            $(".main-nav-box").stop().animate({"top": 0}, 300);

        } else {

            $(".respmenubtn").removeClass("respmenubtn-active");

            $(".main-nav-box").stop().animate({"top": -110 + "%" }, 300);

        }


    });



    // Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top - $(".header-bg").height()
                    }, 2000);
                    return false;
                }
            }
        });
    });


    // Show or hide ".scroll-to-top" button

    function getScrollToTopBtn() {

        if ( $(window).scrollTop() > $(".head-section").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }


    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


});