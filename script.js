const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on: {
        slideChangeTransitionStart: function () {
            animateSlide(this.activeIndex);
        }
    }
});

function animateSlide(index) {
    let activeSlide = document.querySelector('.swiper-slide-active');
    let img = activeSlide.querySelector('img');
    let text = activeSlide.querySelector('h2');

    //Reset style before animation
    gsap.set([img, text],
        {
            opacity: 0,
            scale: 1,
        }
    )

    //Animate Image and text
    gsap.to(img,
        {
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scale: 1.2,
        }
    )
    gsap.to(text,
        {
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 0.3,
            scale: 1.2,
        }
    )
}

setTimeout(() => animateSlide(swiper.activeIndex), 100);