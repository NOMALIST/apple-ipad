const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', (event) => {
  event.stopPropagation()
  if(basketEl.classList.contains('show') ) {
    // hide
    hideBasket()
  } else {
    // show
    showBasket()
  }
})

basketEl.addEventListener('click', (event) => {
  event.stopPropagation()
})

window.addEventListener('click', () => {
  hideBasket()
})

function showBasket() {
  basketEl.classList.add('show')
}

function hideBasket() {
  basketEl.classList.remove('show')
}