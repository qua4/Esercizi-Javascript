const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index *100}%`;
});


// Assegnamo funzioni ai Buttons
let counter = 0;
nextBtn.addEventListener('click', function (){
    counter++;
    carousel();
});
prevBtn.addEventListener('click', function (){
    counter--;
    carousel();
});

//Facciamo il Carosello
function carousel(){

    //Lavorare solo sulle immagini presenti
    if(counter === slides.length){
        counter= 0;
    }else if( counter < 0){
        counter = slides.length-1;
    }else if( counter > 3){
        counter = 0;
    }

    // Mostra Bottoni  
    if (counter == slides.length-1){
        nextBtn.style.display = "none"
    } else {
        nextBtn.style.display = "block"
    }
    if (counter == 0){
        prevBtn.style.display = "none"
    } else {
        prevBtn.style.display = "block"
    }
    
    //Usiamo in CSS la Transazione Orizzontale(x) andando indirtro a sinistra di percentuali dove sono collocate le immagini
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`
    });
}