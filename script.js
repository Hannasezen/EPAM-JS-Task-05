'use strict';

//variables
let listButton = document.querySelector('#list');
let pizzaCards = document.querySelector('#pizzaCards');
let sorts = document.querySelector('#sorts');
let resultArray = []; //array for sorting
let pizzas = [
  {
    img: './img/mashrooms.jpg',
    name: 'Грибная пицца',
    ingredients: ['основа', 'соус', 'грибы', 'помидоры', 'сыр', 'chees'],
    callory: 578,
    price: 129
  },
  {
    img: './img/margarita.jpg',
    name: 'Маргарита пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'моцарелла', 'сыр', 'chees'],
    callory: 362,
    price: 119
  },
  {
    img: './img/pepperony.jpeg',
    name: 'Пепперони пицца',
    ingredients: ['основа', 'соус', 'салями', 'ветчина', 'сыр'],
    callory: 486,
    price: 149
  },
  {
    img: './img/salyami.jpg',
    name: 'Салями пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'салями', 'оливки', 'сыр'],
    callory: 379,
    price: 139
  },
  {
    img: './img/vegetarian.jpeg',
    name: 'Вегетарианская пицца',
    ingredients: ['основа', 'cоус', 'помидоры', 'кукуруза', 'сыр'],
    callory: 618,
    price: 79
  },
  {
    img: './img/firmennaya.jpg',
    name: 'Фирменная пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'салями', 'огурцы', 'грибы', 'сыр'],
    callory: 519,
    price: 118
  },
  {
    img: './img/fintess.jpg',
    name: 'Фитнесс пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'сыр', 'chees'],
    callory: 295,
    price: 59
  },
  {
    img: './img/vetchina.jpg',
    name: 'Ветчина пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'ветчина', 'сыр', 'chees'],
    callory: 356,
    price: 127
  },
  {
    img: './img/chiken.jpg',
    name: 'Куриная пицца',
    ingredients: ['основа', 'соус', 'куриное филе', 'ананасы', 'сыр'],
    callory: 451,
    price: 136
  },
  {
    img: './img/family.jpg',
    name: 'Семейная пицца',
    ingredients: ['основа', 'соус', 'огурцы', 'салями', 'куриное филе', 'сыр'],
    callory: 623,
    price: 189
  },
  {
    img: './img/bavariya.jpg',
    name: 'Баварская пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'баварские колбаски', 'сыр'],
    callory: 456,
    price: 148
  },
  {
    img: './img/sea.jpg',
    name: 'Морская пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'креветки', 'рыба', 'мидии', 'сыр'],
    callory: 519,
    price: 118
  },
  {
    img: './img/ukrainian.jpg',
    name: 'Украинская пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'сало', 'чеснок', 'грибы', 'сыр'],
    callory: 676,
    price: 99
  },
  {
    img: './img/spring.jpg',
    name: 'Весенняя пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'кукуруза', 'укроп', 'сыр'],
    callory: 369,
    price: 159
  },
  {
    img: './img/sweet.jpg',
    name: 'Сладкая пицца',
    ingredients: ['основа', 'нутелла', 'бананы', 'орехи', 'зефир'],
    callory: 1019,
    price: 154
  }
];

// sort buttons
let sortPrice = document.querySelector('#byPrice');
let sortCallory = document.querySelector('#byCallory');
let sortName = document.querySelector('#byName');

// user events
// change pages view
listButton.addEventListener('click', toggleView)

// for sort results on the page
sorts.addEventListener('click', sort)

// loading results on the page
window.onload = loadPizzas();

function loadPizzas (arr) {
  arr = arr || pizzas;
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `<div class="card__img">
                      <img src='${arr[i].img}'></img>
                    </div>
                    <div class="card__text">
                    <div class="card__description">
                      <div class="card__name">"${arr[i].name}"</div>
                      <div class="card__ingredients">Ингредиенты: ${arr[i].ingredients.join(', ')}</div>
                      <div class="card__callory">${arr[i].callory} кКал</div>
                    </div>
                    <div class="card__price">Цена <span>${arr[i].price}</span> грн</div>
                    </div>`
    pizzaCards.appendChild(li)
  }
}

function sort() {
  if (event.target.nodeName === "BUTTON") {
    resultArray = pizzas.sort((a, b) => {
      let prop = event.target.id.slice(2).toLowerCase();
      if (a[prop] > b[prop]) {
        return 1
      } else if (a[prop] < b[prop]) {
        return -1
      }
      return 0
    })
    pizzaCards.innerHTML = ''
    loadPizzas(resultArray);
  }  
}

function toggleView() {
  document.body.classList.toggle('list');
}



