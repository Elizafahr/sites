//faq
const All_Details = document.querySelector(".question");

All_Details.forEach((faq) => {
    faq.addEventListener("toggle", toggleOpenOneOnly);
});

function toggleOpenOneOnly(e) {
    if (this.open) {
        All_Details.forEach((faq) => {
            if (faq != this && faq.open) faq.open = false;
        });
    }
}
//  //прокрутка по кнопке
// document.getElementById('main-action-btn').onclick = function () {
//     document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
//   }
  
  //перенос по ссылкам в навигации
  let links = document.querySelectorAll('.manu-item > a')
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      document
        .getElementById(links[i].getAttribute('data-link'))
        .scrollIntoView({ behavior: 'smooth' })
    }
  }
  
 