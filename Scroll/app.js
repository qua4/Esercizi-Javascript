//<!-- Nello span mettiamo una funzione JS DATE, dove si aggiorna da solo il copyright nell'anno attuale senza che ogni volta dobbiamo modificare l'html--> //
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (){
    // linksContainer.classList.toggle("show-links");
    // getBoundingClientRect() è un metodo che restituisce un oggetto con diverse proprietà, tra cui height, che rappresenta l'altezza dell'elemento.//
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
});


// fixed navbar 
const navbar = document.getElementById("nav");
const topLink= document.querySelector(".top-link");

window.addEventListener("scroll", function (){
    const scrollHeight = document.documentElement.scrollTop;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-links");
    }
});
