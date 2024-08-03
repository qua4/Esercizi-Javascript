const months = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ];
  const weekdays = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ];

  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");
  let futureDate = new Date(2025, 8, 3, 9, 15, 0);//Anno,Mese,Giorno,Ora,Minuto,Secondo
  const year = futureDate.getFullYear();  
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  let month = futureDate.getMonth(); //leggi sotto
  month = months[month]; // uguale al weekday ma questo è fatto in 2 passaggi
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDay()];//in una sola riga è più veloce

  giveaway.textContent = `Il giveaway termina il giorno ${weekday} ${date} ${month} ${year} alle ${hours}:${minutes}`;

  const futureTime = futureDate.getTime();

  function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t% oneDay)/oneHour);
    let minutes = Math.floor((t% oneHour) / oneMinute);
    let seconds = Math.floor((t% oneMinute) / 1000);
    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    };

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(t <0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`;
    };
  };

  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();
