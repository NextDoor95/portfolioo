const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text,.about,.portfolio,.contact',{delay:190, origin:'bottom'})