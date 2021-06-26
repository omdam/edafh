/********************************
 * 
 * lazy load  *
 * 
 ********************************/
lazyLoad();

function lazyLoad() {
    const images = document.querySelectorAll('.lazy-omd');

    const optionsLazyLoad = {
        //  rootMargin: '-50px',
        // threshold: 1
    }

    const imageObserver = new IntersectionObserver(function (enteries) {
        enteries.forEach(function (entery) {
            if (!entery.isIntersecting) {
                return;
            } else {
                preloadImage(entery.target);
                imageObserver.unobserve(entery.target);
            }
        });

    }, optionsLazyLoad);

    images.forEach(function (image) {
        imageObserver.observe(image)
    });
}

function preloadImage(img) {
    img.src = img.getAttribute('data-src');
    img.onload = function () {
        img.parentElement.classList.remove('loading-omd');
        img.parentElement.classList.add("loaded-omd");
        img.parentElement.parentElement.classList.add("lazy-head-om");
    }
}

jQuery(document).ready(function ($) {

    /******************************** 
     * 
     * main slider  *
     * 
     ********************************/
    new Swiper('.main-slider-om .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.main-slider-om .swiper-pagination',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.main-slider-om .swiper-button-next',
        //     prevEl: '.main-slider-om .swiper-button-prev',
        // },
    });


    /******************************** 
   * 
   * top categoreis slider  *
   * 
   ********************************/
    new Swiper('.h-top-categories-om .swiper-container', {
        spaceBetween: 15,
        slidesPerView: 8,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.h-top-categories-om .swiper-button-next',
            prevEl: '.h-top-categories-om .swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            480: {
                slidesPerView: 1,

            },
            767: {
                slidesPerView: 3,

            },
            992: {
                slidesPerView: 5,

            },
            1200: {
                slidesPerView: 8,
            },
        },
    });

    /******************************** 
    * 
    * favorite offers slider  *
    * 
    ********************************/
    new Swiper('.h-favorite-offers-om .swiper-container', {
        spaceBetween: 15,
        slidesPerView: 5,
        freeMode: true,
        autoplayDisableOnInteraction: true,
        // longSwipes: true,
        // autoplay: 3000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },

        navigation: {
            nextEl: '.h-favorite-offers-om .swiper-button-next',
            prevEl: '.h-favorite-offers-om .swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            480: {
                slidesPerView: 1,

            },
            767: {
                slidesPerView: 3,

            },
            992: {
                slidesPerView: 5,

            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    /******************************** 
   * 
   * choose for you slider  *
   * 
   ********************************/
    new Swiper('.h-choose-for-you-om .swiper-container', {
        spaceBetween: 15,
        slidesPerView: 5,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        longSwipes: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        // loop: true,


        navigation: {
            nextEl: '.h-choose-for-you-om .swiper-button-next',
            prevEl: '.h-choose-for-you-om .swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            450: {
                slidesPerView: 2,

            },
            767: {
                slidesPerView: 3,

            },
            992: {
                slidesPerView: 5,

            },
            1200: {
                slidesPerView: 5,
            },
        },
    });


    /******************************** 
   * 
   * finest brands slider  *
   * 
   ********************************/
    new Swiper('.h-finest-brands-om .swiper-container', {
        spaceBetween: 15,
        slidesPerView: 8,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        longSwipes: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },


        navigation: {
            nextEl: '.h-finest-brands-om .swiper-button-next',
            prevEl: '.h-finest-brands-om .swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 3,

            },
            767: {
                slidesPerView: 5,

            },
            992: {
                slidesPerView: 5,

            },
            1200: {
                slidesPerView: 8,
            },
        },
    });


    /******************************** 
   * 
   * home mobile slider  *
   * 
   ********************************/
    new Swiper('.h-mobile-section-om .swiper-container', {
        spaceBetween: 15,
        slidesPerView: 5,
        freeMode: true,
        longSwipes: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },

        navigation: {
            nextEl: '.h-mobile-section-om .swiper-button-next',
            prevEl: '.h-mobile-section-om .swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            450: {
                slidesPerView: 2,

            },
            767: {
                slidesPerView: 3,

            },
            992: {
                slidesPerView: 5,

            },
            1200: {
                slidesPerView: 5,
            },
        },
    });


    /********************************
     * 
     * toggle fav class in a product --  *
     * 
     ********************************/

    $(".fav-butt-om").on("click", function (e) {
        e.preventDefault();

        $(this).toggleClass("favorite-product-active-om")
    });


    /********************************
   * 
   * tabs block for main singin form  *
   * 
   ********************************/

    $(".ss-activate-tab-om").on("click", function (e) {
        e.preventDefault();

        let target_id = $(this).data("form-tab");

        $(target_id).siblings().removeClass("active-om").hide();
        $(target_id).fadeIn().addClass("active-om");

    });


    /********************************
   * 
   * categoreies list activation  *
   * 
   ********************************/

    $(".header-categoreies-main-list-om .li-om").on("mouseenter", function (e) {
        e.preventDefault();

        $(".header-category-decsription-om").fadeIn().addClass("active-men-om");

    })
    $(".header-categoreies-mega-menu-om").on('mouseleave', function () {
        $(".header-category-decsription-om").fadeOut().removeClass("active-men-om");
    });


    /********************************
   * 
   * header search result  *
   * 
   ********************************/
    $('#search-result-history-om').on('click', function (e) {
        e.stopPropagation();

        //remove this element element when cross is clicked
        if ($(e.target).is(".close-butt-om")) {
            // console.log();
            $(e.target).parent().remove();
        }

        // remove all elements form the list 
        if ($(e.target).is(".remove-all-search-history")) {
            // console.log();
            $(e.target).closest("#search-result-history-om").find(".search-result-list-om").html("")
        }
    });

    // activate search history on focus
    $("body").on("click", function (e) {

        if ($(e.target).is('#header-search-input-om')) {
            if (!$(e.target).val()) {
                $("#search-result-history-om").addClass("active-sh");
            }
        } else {
            $("#search-result-history-om").removeClass("active-sh");

        }
    });

    $("#header-search-input-om").on("keyup", function (e) {
        if ($(this).val()) {
            $("#search-result-history-om").removeClass("active-sh");
        } else {
            $("#search-result-history-om").addClass("active-sh");
        }

    });

    // end header search result

    /********************************
   * 
   * show password  *
   * 
  ********************************/
    $(".show-password-button-om").on("click", function (e) {
        e.preventDefault();


        if ($(this).parent().find("input").attr("type") == "text") {

            $(this).parent().find("input").attr("type", "password");
            $(this).removeClass("show-om");

        } else {
            $(this).parent().find("input").attr("type", "text");
            $(this).addClass("show-om");
        }
    });

    /********************************
     * 
     * footer colapsed in small sizes *
     * 
     ********************************/
    //
    if ($(window).width() <= 991) {
        $('.collapse-head-om').on('click', function () {

            $('.collapse-head-om').not(this).parent().find('.list-collapse-om').slideUp();
            $(this).parent().find('.list-collapse-om').slideToggle({
                queue: false,
                complete: function () {
                    $(".list-collapse-om").each(function () {
                        if ($(this).css("display") == "none") {
                            $(this).parent().removeClass("active");
                        } else {
                            $(this).parent().addClass("active")
                        }
                    });
                }
            });

        });
    }


    /********************************
     * 
     * menu active and close button  *
     * 
     ********************************/
    // nav men activation 
    $("#menu-butt-activ-om").on("click", function (e) {
        e.preventDefault();

        $("#navbar-menu-om").addClass("active-menu");
        $(".overlay").addClass("active");
        $("body").addClass("overflow-body");
    });

    // nav men close 
    $(".close-butt-om , .overlay ").on("click", function (e) {
        e.preventDefault();
        $("#navbar-menu-om").removeClass("active-menu");
        $(".overlay").removeClass("active");

        $("body").removeClass("overflow-body");

    });


    /********************************
     * 
     * sticky navbar *
     * 
     ********************************/
    // asign height to the header 
    var headerHeight = $("header").outerHeight();

    var lastScroll = 0;
    $(document).on('scroll', function () {
        var currentScroll = $(this).scrollTop();

        // scroll down
        if (currentScroll < lastScroll && currentScroll > headerHeight + 100) {
            // add class avtive menu 
            // if ($(".fixed-header-warper").hasClass("not-active-menu-om")) {
            $(".fixed-header-warper").addClass("active-menu-om");
            $(".fixed-header-warper").removeClass("not-active-menu-om");
            // }
            // console.log("move up");

        } else if (currentScroll > lastScroll && currentScroll > headerHeight + 100) { // scroll up 
            // remove class avtive menu 
            if ($(".fixed-header-warper").hasClass("active-menu-om")) {

                $(".fixed-header-warper").removeClass("active-menu-om");
                $(".fixed-header-warper").addClass("not-active-menu-om");
            }
            // $("#search-button-activation-om").removeClass("search-is-active");
            // $("#search-form-act-om").addClass("not-active").removeClass("active");

        } else {
            $(".fixed-header-warper").removeClass("active-menu-om");
            $(".fixed-header-warper").removeClass("not-active-menu-om");
        }
        lastScroll = currentScroll;

    });


    /********************************
     * 
     * search page  - filter collapse *
     * 
     ********************************/
    $(".sp-filter-block-om .site-head-block-om").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("collapsed").parent().find(".sp-filter-list-om").slideToggle();
        console.log();
    })

    /********************************
     * 
     * search page  - result section remove butt *
     * 
     ********************************/
    // remove all butt
    $("#sp-all-result-remove-om").on("click", function (e) {
        e.preventDefault();

        $("#sp-search-result-list-om").html("");
    });

    // remove element butt 
    $(".sp-search-result-section-om .close-butt-om").on("click", function (e) {
        e.preventDefault();

        $(this).parent().remove();
    });


    /********************************
     * 
     * search page  - result section remove butt *
     * 
     ********************************/

    $(".spp-layout-buttons-om .butt-om").on("click", function (e) {
        e.preventDefault();

        $(this).addClass("active-om").siblings().removeClass("active-om");

        if ($(this).hasClass("network-grid-om")) {

            $("#spp_change_layout_om").removeClass("list-grid-om");
        } else {

            $("#spp_change_layout_om").addClass("list-grid-om");
        }

    });


    var swiper = new Swiper(".s-product-slider-2 .swiper-container", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".s-product-slider-1 .swiper-container", {
        loop: false,
        spaceBetween: 10,
        navigation: {
            nextEl: ".s-product-slider-2 .swiper-container .swiper-button-next",
            prevEl: ".s-product-slider-2 .swiper-container .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

      /********************************
     * 
     * single product page  - triger tab button *
     * 
     ********************************/

    $("#show_allspecs_triger_tab_om").on("click",function(e){
        e.preventDefault();

        $("#product-specifications-tab").trigger("click")
    });

    /********************************
     * 
     * mixItUp init  *
     * 
     ********************************/
    // function mixItUpInit() {
    //     var containerEl = document.querySelector('#mix-container-om');
    //     var mixer = "";
    //     if (containerEl) {

    //         mixer = mixitup(containerEl);
    //         mixer.forceRefresh();
    //     }
    // }
    // mixItUpInit();


    /********************************
     * 
     * input file value change  *
     * 
     ********************************/

    //  $('.input-file-om ').on('change', function(e) {
    //      var fileName = " ";
    //      if (e.target.files[0]) {
    //          fileName = e.target.files[0].name;

    //      }
    //      var elementToTakeFileVal = $(this).parent().parent().children(".file-ouput");

    //      elementToTakeFileVal.text(fileName);
    //  });


});