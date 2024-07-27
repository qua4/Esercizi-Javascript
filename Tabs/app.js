const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const tabImage = document.getElementById("tab-image");


about.addEventListener("click", function (e){
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        articles.forEach(function(article){
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");

        if (id === "harry") {
            tabImage.src = "./harry.png";
        } else if (id === "hermione") {
            tabImage.src = "./hermione.jpg";
        } else if (id === "ron") {
            tabImage.src = "./ron.jpg";
        }
    }
});