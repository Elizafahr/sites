//прокрутка по кнопке
document.getElementById('main-action-btn').onclick = function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
}

//перенос по ссылкам в навигации
let links = document.querySelectorAll('.manu-item > a')
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' })
  }
}

//перенос по кнопкам в карточках меню
let buttons = document.getElementsByClassName('product-button')
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' })
  }
}

//валидация
let burger = document.getElementById('burger')
let phone = document.getElementById('phone')
let name = document.getElementById('name')
document.getElementById('getOrder').onclick = function () {
  let hasError = false;
  [burger, name, phone].forEach(item => {
    //Добавила проверку, чтобы пробел не считывался как введенное поле
    if (!item.value || item.value.trim() === "") {
      item.parentElement.style.background = 'red';
      hasError = true;
    }
    else {
      item.parentElement.style.background = '';
    }
  });

  if (!hasError) {
    [burger, name, phone].forEach(item => {
      item.value = ''
    });
    alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
  }
}


//change price data-base-price
let prices = document.getElementsByClassName('products-item-price');
document.getElementById("change-currency").onclick = function (e) {
  let currency = e.target.innerHTML;

  let newCurrency = '$';
  let coefficient = 1;
  if (currency === '$') {
    newCurrency = '₽';
    coefficient = 90.25;
  } else if (currency === '₽') {
    newCurrency = 'BYK';
    coefficient = 3;
  } else if (currency === 'BYK') {
    newCurrency = '€';
    coefficient = 0.9;
  } else if (currency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  }
  e.target.innerText = newCurrency;
  for (let i = 0; i < prices.length; i++) {
    //убрала fixed(1), чтобы числа отображались целостно
    prices[i].innerText = (prices[i].getAttribute('data-base-price') * coefficient).toFixed() + ' ' + newCurrency;
  }
};