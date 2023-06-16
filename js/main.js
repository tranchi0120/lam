
const scrollTop = () => {
    const scrollTop = document.getElementById("scroll-top");
    if (window.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
};

// animation using ScrollReveal
window.addEventListener("scroll", scrollTop);

const sr__top = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: false,
});

sr__top.reveal(
    `.info,.header-menu,.hero-top,
    .hero-bottom,.news-box,.investor-box,
    .cuture-left,.cuture-right,.food-left,.food-right,.destination-group`,
    {
        interval: 200,
    }
);

const sr__left = ScrollReveal({
    origin: "left",
    distance: "30px",
    duration: 2000,
    reset: false,
})

sr__left.reveal(
    `.title,.btn-stories`,
    {
        interval: 200,
    }
)

// menuMobile
const openMenu = document.querySelector('.icon-open')
const closeMenu = document.querySelector('.icon-close')
const headerMenu = document.querySelector('.header-menu')

openMenu.addEventListener('click', () => {
    headerMenu.classList.add('menuMobile')
})
closeMenu.addEventListener('click', () => {
    headerMenu.classList.remove('menuMobile')
})

//  scrollbar using swiperjs
const heroswiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});