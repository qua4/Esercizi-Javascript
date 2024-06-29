let count = 0;
        const value = document.getElementById("value");
        const btns = document.querySelectorAll(".btn");

        btns.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                const styles = e.currentTarget.classList;
                if (styles.contains('diminuisci')){
                    count--;
                }
                else if (styles.contains('aumenta')){
                    count++;
                }
                else{
                    count = 0;
                }
                if (count >0){
                    value.style.color ="navy";
                }
                if (count <0){
                    value.style.color ="purple";
                }
                if (count === 0){
                    value.style.color ="black";
                }
                value.textContent = count;
            });
        });