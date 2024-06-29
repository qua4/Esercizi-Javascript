const colors = ["lightgreen", "red", "cyan", "yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    const randomNumber = ottieniNumeroACaso();

    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
});

function ottieniNumeroACaso(){
    return Math.floor(Math.random()*colors.length);
}