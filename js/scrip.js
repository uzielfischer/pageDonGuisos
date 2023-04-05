const isScrolling = () => {
    const headerEl = document.querySelector(".cab_fir");
    let windowPosotion = window.scrollY > 100;
    headerEl.classList.toggle('active',windowPosotion);
}

window.addEventListener('scroll', isScrolling);