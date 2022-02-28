var import_jquery = import("./../libraries/jquery/jquery");
var import_swiper = import("./../libraries/swiper/swiper");
$(document).ready(function () {
    var show_mnue = document.getElementById("show_mnue");
    var minify_mnue = document.getElementById("minify_mnue");
    var minify_mnue_back = document.getElementById("minify_mnue_back");
    minify_mnue_back.addEventListener("click", function () {
        minify_mnue.style.display = "none";
        minify_mnue_back.style.display = "none";
        document.body.style.overflowY = "scroll";
    })
    show_mnue.addEventListener("click", function () {
        minify_mnue.style.display = "flex";
        minify_mnue_back.style.display = "flex";
        document.body.style.overflowY = "hidden";
    })
    var cloes_mnue = document.getElementById("cloes_mnue");
    cloes_mnue.addEventListener("click", function (prams) {
        minify_mnue.style.display = "none";
        minify_mnue_back.style.display = "none";
        document.body.style.overflowY = "scroll";
    })
    $(window).resize(function () {
        if (window.innerWidth > 1024) {
            minify_mnue.style.display = "none";
            minify_mnue_back.style.display = "none";
            document.body.style.overflowY = "scroll";
        }
    });

    var swiper = new Swiper('.swiper_one', {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".swiper_one-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper_one-button-next",
            prevEl: ".swiper_one-button-prev",
        },
    });
    var swiper = new Swiper(".swiper_two", {
        effect: "cards",
        grabCursor: true,
    });
})