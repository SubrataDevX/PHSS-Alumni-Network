$(document).ready(function () {

    function curvedSliderInit() {
        setTimeout(function () {
            $('.curvedBoxouter').not('.slick-initialized').slick({
                infinite: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerPadding: '20px',
                dots: true,
                arrows: true,
                nextArrow: '<i class="fa fa-angle-right slick-next"><\/i>',
                prevArrow: '<i class="fa fa-angle-left slick-prev"><\/i>',
                appendDots: '.custSlickNav',
                appendArrows: '.custSlickNav',
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 570,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
            });

            $('.curvedBoxouter').slick('refresh');
        }, 20);
    }

    if ($(window).width() < 768) {
        curvedSliderInit();
    }


    function awardsSliderInit() {
        setTimeout(function () {
            $('.awardsBoxOuter').not('.slick-initialized').slick({
                infinite: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerPadding: '20px',
                dots: true,
                arrows: true,
                nextArrow: '<i class="fa fa-angle-right slick-next"><\/i>',
                prevArrow: '<i class="fa fa-angle-left slick-prev"><\/i>',
                appendDots: '.awardsSlickNav',
                appendArrows: '.awardsSlickNav',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 570,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
            });

            $('.awardsBoxOuter').slick('refresh');
        }, 20);
    }

    awardsSliderInit();

    function resizeAboutInfobox() {
        $('.about-info-card').removeAttr("style");
        var list = new Array();
        var resMaxHeight = "";
        var resMaxHeightAbtInfoBox = "";
        $('.about-info-card').each(function () {
            list.push($(this).outerHeight());
            resMaxHeightAbtInfoBox = Math.max.apply(Math, list);
        });
        $('.about-info-card').css("height", resMaxHeightAbtInfoBox);
    }

    function resizeCurvedbox() {
        $('.curved-cotent-box').removeAttr("style");
        var list = new Array();
        var resMaxHeight = "";
        var resMaxHeightCurvedBox = "";
        $('.curved-cotent-box').each(function () {
            list.push($(this).outerHeight());
            resMaxHeightCurvedBox = Math.max.apply(Math, list);
        });
        $('.curved-cotent-box').css("height", resMaxHeightCurvedBox);
    }

    resizeAboutInfobox();
    resizeCurvedbox();

    $(window).resize(function () {
        setTimeout(function () {
            if ($(window).width() < 768) {
                curvedSliderInit();
            }
            awardsSliderInit();
            resizeAboutInfobox();
            resizeCurvedbox();
        }, 20);
    });

})
// timeline module
$(document).ready(function () {

    function timelineLeftPath() {
        $(".timeline-content-box.timeline-company-milestone").each(function () {
            var pathWidth = $(".timeline-progress-bar span").offset().left - $(this).children(".timeline-item-box").offset().left - 50;
            $(this).children(".block-connect-line").css("width", pathWidth);
        })
    }
    timelineLeftPath();

    function timelineRightPath() {
        $(".timeline-content-box.timeline-product-milestone").each(function () {
            //console.log($(".timeline-progress-bar span").offset().left)
            //console.log($(this).children(".timeline-item-box").offset().left)
            var pathWidth = $(this).children(".timeline-item-box").offset().left - $(".timeline-progress-bar span").offset().left;
            $(this).children(".block-connect-line").css("width", pathWidth);
        })
    }
    timelineRightPath();

    $(document).on("click", ".timeline-year-head a", function () {
        $(this).parent().next(".timeline-year-body").slideToggle();
        timelineLeftPath();
        timelineRightPath();
        $(this).parent().parent(".timeline-year-wrap").toggleClass("timeline-active")
    })

    $(document).on("click", ".read-more-button a", function () {
        $(".hidden-data").fadeIn();
        $(this).parent().hide();
        timelineLeftPath();
        timelineRightPath();
    })

    $(window).resize(function () {
        timelineLeftPath();
        timelineRightPath();
    })


});