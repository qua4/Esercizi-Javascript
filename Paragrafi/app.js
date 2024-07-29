const text = [
    `Bro siamo al piano 1 .`,
    `Questo è il Secondo, come Shrek 2`,
    `Paragrafo Numero 3 Caro `,
    `ecco il 4!.`,
    `siamo a 5 bro`,
    `666`,
    `I Magnifici 7`,
    `Otto come Bisc8`,
    `Nove Nove!`,
  ];

  const form= document.querySelector('.lorem-form');
  const result= document.querySelector('.lorem-text');
  const amount = document.getElementById('amount');

  form.addEventListener("submit", function (e){
    e.preventDefault();
    const value= parseInt(amount.value);
    //Se è vuoto ->
    // Se è -1 ->
    // Superiore a 9

    if(isNaN(value) || value < 0 || value > 9){
        result.innerHTML = `<p class="result"> Inserisci da 1 a 9 e nessun carattere alfabetico </p>`;
    }
    else{
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        })
        .join("");
        result.innerHTML = tempText;
    }
  });