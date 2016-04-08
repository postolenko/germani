$(document).ready(function() {

    getScrollToTopBtn();

    $("body").css({"padding-top" : $(".header-bg").height() + "px" });

    $(document).scroll(function() {

        getScrollToTopBtn();

    });


    $(window).resize(function() {

        // $(".right-col-footer").height($("footer .row").height());
        // $(".left-col-footer").height($("footer .row").height());

    });


    // $(".right-col-footer").height($("footer .row").height());
    // $(".left-col-footer").height($("footer .row").height());


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