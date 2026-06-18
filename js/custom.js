// sell_slider end
$(document).ready(function () {
    $('.sell_slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom buttons for navigation
    $('.prev-slide1').click(function () {
        $('.sell_slider').slick('slickPrev'); // Go to previous slide
    });

    $('.next-slide1').click(function () {
        $('.sell_slider').slick('slickNext'); // Go to next slide
    });
});

// sell_slider end


// Product detail 
$('.productdetailfor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.productdetailnav'
});
$('.productdetailnav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.productdetailfor',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false

});
// end 


/////////////////// product +/-
$(document).ready(function () {
    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
        if ($(this).hasClass('minus')) {
            var count = parseFloat($input.val()) - 1;
            count = count < 1 ? 1 : count;
            if (count < 2) {
                $(this).addClass('dis');
            } else {
                $(this).removeClass('dis');
            }
            $input.val(count);
        } else {
            var count = parseFloat($input.val()) + 1
            $input.val(count);
            if (count > 1) {
                $(this).parents('.num-block').find(('.minus')).removeClass('dis');
            }
        }

        $input.change();
        return false;
    });

});
// product +/-



// testimonial_slider Starts

$(".testimonial_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '',
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            autoPlay: true,
            slidesToScroll: 1,
            arrows: false,
        },
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            autoPlay: true,
            slidesToScroll: 1,
            arrows: false,
        },
    },
    ],
});

// testimonial_slider Ends


// blog_slider Starts

$(".blog_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            autoPlay: true,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            autoPlay: true,
            slidesToScroll: 1,
            arrows: false,
        },
    },
    ],
});

// blog_slider Ends

// product_slider Starts

$(".product_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            autoPlay: true,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            autoPlay: true,
            slidesToScroll: 1,
            arrows: false,
        },
    },
    ],
});

// product_slider Ends

// banner_card_slider Starts

(function () {
    const cards = Array.from(document.querySelectorAll(".slider-card"));
    if (!cards.length) return;

    let activeIndex = Math.min(2, cards.length - 1);

    /* ---------------- tilt (unchanged) ---------------- */
    function enableTilt(centerCard) {
        const container = centerCard;
        const inner =
            centerCard.querySelector(".banner-card-img") || centerCard;
        const MAX_DEG = 14,
            EASE = 0.12;
        let targetRX = 0,
            targetRY = 0,
            currRX = 0,
            currRY = 0,
            rafId = null;

        function animate() {
            currRX += (targetRX - currRX) * EASE;
            currRY += (targetRY - currRY) * EASE;
            inner.style.transform = `rotateX(${currRX}deg) rotateY(${currRY}deg)`;
            if (
                Math.abs(targetRX - currRX) < 0.01 &&
                Math.abs(targetRY - currRY) < 0.01
            ) {
                rafId = null;
                return;
            }
            rafId = requestAnimationFrame(animate);
        }

        function onMove(e) {
            const r = container.getBoundingClientRect();
            const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
            const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
            const clx = Math.max(-1, Math.min(1, nx));
            const cly = Math.max(-1, Math.min(1, ny));
            targetRY = clx * MAX_DEG;
            targetRX = -cly * MAX_DEG;
            if (!rafId) rafId = requestAnimationFrame(animate);
        }

        function onLeave() {
            targetRX = 0;
            targetRY = 0;
            if (!rafId) rafId = requestAnimationFrame(animate);
        }

        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseenter", onMove);
        container.addEventListener("mouseleave", onLeave);

        return function detach() {
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("mouseenter", onMove);
            container.removeEventListener("mouseleave", onLeave);
            if (rafId) cancelAnimationFrame(rafId);
            inner.style.transform = "";
        };
    }

    let detachTilt = () => { };
    function wireTiltForCenter() {
        detachTilt();
        const center = document.querySelector(".slider-card.center");
        if (center) detachTilt = enableTilt(center);
    }

    /* ---------------- slider layout ---------------- */
    function updateSlider() {
        cards.forEach((c) => (c.className = "slider-card hidden"));

        const total = cards.length;
        const idx = [
            (activeIndex - 2 + total) % total,
            (activeIndex - 1 + total) % total,
            activeIndex,
            (activeIndex + 1) % total,
            (activeIndex + 2) % total,
        ];

        cards[idx[0]].className = "slider-card far-left";
        cards[idx[1]].className = "slider-card side-left";
        cards[idx[2]].className = "slider-card center";
        cards[idx[3]].className = "slider-card side-right";
        cards[idx[4]].className = "slider-card far-right";

        wireTiltForCenter();
    }

    /* ---------------- manual controls only ---------------- */
    const container = cards[0].parentElement;
    let locked = false;

    function next() {
        if (locked) return;
        locked = true;
        activeIndex = (activeIndex + 1) % cards.length;
        updateSlider();
        setTimeout(() => (locked = false), 350);
    }

    function prev() {
        if (locked) return;
        locked = true;
        activeIndex = (activeIndex - 1 + cards.length) % cards.length;
        updateSlider();
        setTimeout(() => (locked = false), 350);
    }

    // --- drag/swipe
    let startX = 0,
        deltaX = 0,
        dragging = false;
    const THRESHOLD = 40;

    container.addEventListener("pointerdown", (e) => {
        dragging = true;
        startX = e.clientX;
        deltaX = 0;
        container.setPointerCapture(e.pointerId);
    });

    container.addEventListener("pointermove", (e) => {
        if (!dragging) return;
        deltaX = e.clientX - startX;
    });

    container.addEventListener("pointerup", (e) => {
        if (!dragging) return;
        dragging = false;
        container.releasePointerCapture?.(e.pointerId);
        if (Math.abs(deltaX) > THRESHOLD) {
            deltaX < 0 ? next() : prev();
        }
    });

    // --- optional: scroll wheel
    let wheelLock = false;
    container.addEventListener(
        "wheel",
        (e) => {
            if (wheelLock) return;
            wheelLock = true;
            (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) > 0
                ? next()
                : prev();
            setTimeout(() => (wheelLock = false), 500);
        },
        { passive: true }
    );

    // --- button controls
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn?.addEventListener("click", prev);
    nextBtn?.addEventListener("click", next);

    // init
    updateSlider();
    window.addEventListener("resize", wireTiltForCenter);
})();

// banner_card_slider Ends

// Testi slider start
$(".testi_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            autoPlay: true,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            autoPlay: true,
            slidesToScroll: 1,
            dots: false,
        },
    },
    ],
});

// Testi slider end


// product slider  start
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    centerPadding: '100px',
    focusOnSelect: true
});
// product slider  end

// simple slick slider start
$(".tab_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
});
// simple slick slider start


// simple slick slider end

// wow animation js
$(function () {
    new WOW().init();
});
// wow animation js

// Cart Plus minus
document.addEventListener('DOMContentLoaded', function () {
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const numberDisplay = document.getElementById('number');

    minusButton.addEventListener('click', function () {
        let currentValue = parseInt(numberDisplay.textContent);
        if (currentValue > 0) {
            numberDisplay.textContent = currentValue - 1;
        }
    });

    plusButton.addEventListener('click', function () {
        let currentValue = parseInt(numberDisplay.textContent);
        numberDisplay.textContent = currentValue + 1;
    });
});
// Cart Plus minus


// Responsive Menu  
$(function () {
    $('#menu').slicknav();
});
// Responsive Menu  

// Header And Footer Layout 
$("#Header").load("layout/header.html");

$("#Footer").load("layout/footer.html");

setTimeout(function () {

    $(function () {
        $('#menu').slicknav();
    });
}, 1000);
// Header And Footer Layout


// Password Hide 
function togglePasswordVisibility(toggleButton) {
    $(toggleButton).toggleClass("fa-eye fa-eye-slash");
    var input = $($(toggleButton).attr("toggle"));
    if (input.attr("type") === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
}
// Attach event listener
$(document).on("click", ".toggle-password", function () {
    togglePasswordVisibility(this);
});
// Password Hide 