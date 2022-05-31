function newsSlider() {
    var swiper = new Swiper('.news .swiper-container', {
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            430: {
                slidesPerView: "auto",
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}

$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });
    newsSlider()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob").toggleClass("header__mob--active")
        $(".header").toggleClass("header--active")
        $("body").toggleClass("fixed-body")
    })


    $(".tarifs__tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".tarifs__tab").removeClass("tarifs__tab--active")
        $(this).addClass("tarifs__tab--active")
        $(".tarifs__content").removeClass("tarifs__content--active")
        $(`.tarifs__content[data-tabs-path="${path}"]`).addClass("tarifs__content--active")
    })

    $(".qa-card__show").click(function() {
        $(this).parents(".qa-card").toggleClass("qa-card--active")
        $(this).siblings(".qa-card__hidden").slideToggle()
    })

    $(".scroll-up").click(function() {
        $("body,html").scrollTop(0);
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scroll-up").addClass("scroll-up--active")
        } else {
            $(".scroll-up").removeClass("scroll-up--active")
        }
    })


    // $('.video').parent().click(function() {
    //     if ($(this).children(".video").get(0).paused) {
    //         $(this).children(".video").get(0).play();
    //         $(this).children(".playpause").fadeOut();
    //     } else {
    //         $(this).children(".video").get(0).pause();
    //         $(this).children(".playpause").fadeIn();
    //     }
    // });
});