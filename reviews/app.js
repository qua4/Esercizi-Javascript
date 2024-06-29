const reviews = [
    {
        id: 1,
        name:'Rino Ceronte',
        job: 'Zoologo',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quos unde perferendis accusantium, alias debitis rerum dolore voluptas quisquam maxime in quaerat eum enim pariatur officiis voluptatibus? Porro, pariatur adipisci?',
    },
    {
        id: 2,
        name:'Orazio Lazio',
        job: 'Ultras',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil natus facilis corrupti quidem consequatur magnam eveniet sunt iste, rerum ratione laboriosam repellendus omnis assumenda odio quam vel officia laudantium atque at praesentium vero quisquam accusamus expedita. Explicabo, voluptates non blanditiis corrupti quidem voluptas adipisci, qui velit quo eius temporibus, totam cumque. Officiis quaerat eveniet veniam maiores nulla odio recusandae praesentium, illo molestiae ipsum optio maxime debitis ea consequuntur est exercitationem! Sint similique nemo et, obcaecati ullam dolor facere eligendi?',
    },
    {
        id: 3,
        name:'Sara Amara',
        job: 'Avvocato',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, velit.',
    },
    {
        id: 4,
        name:'Natasha Bagasha',
        job: 'Estetista',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius excepturi sit dolorem eos nesciunt aspernatur?',
    }
];

const img =  document.getElementById('person-img');
const author =  document.getElementById('author');
const job =  document.getElementById('job');
const info =  document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson()
});

function showPerson(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Diamo un motivo di esistere ai buttons ->
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*reviews.length)
    showPerson();
});