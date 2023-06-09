const scrollTop = () => {
    const scrollTop = document.getElementById("scroll-top");
    if (window.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
};

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