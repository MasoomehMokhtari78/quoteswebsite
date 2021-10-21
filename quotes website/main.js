// navbar
const navMenu = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const links = document.querySelector(".links");
const linksMenu = document.querySelector(".links-menu")

const authors = document.querySelector(".authors");
const authorsMenu = document.querySelector(".authors-menu")

authors.addEventListener("click", () => {
    if(authorsMenu.style.display == "block"){
        authorsMenu.style.display = "none";
    }else{
        authorsMenu.style.display = "block";
    }

});

links.addEventListener("click", () => {
    if(linksMenu.style.display == "block"){
        linksMenu.style.display = "none";
    }else{
        linksMenu.style.display = "block";
    }

});

function toggleMenu() {
    if(navMenu.classList.contains("showMenu")) {
        navMenu.classList.remove("showMenu");
        // navMenu.style.display = "none";
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }else {
        navMenu.classList.add("showMenu");
        // navMenu.style.display = "flex";
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
burger.addEventListener("click", toggleMenu);

// slider
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    }else {
        slides[0].classList.add('current');
    }
    setTimeout(() =>current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    }else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() =>current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}