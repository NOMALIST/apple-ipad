const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', (event) => {
  event.stopPropagation()
  if(basketEl.classList.contains('show') ) {
    // hide
    basketEl.classList.remove('show')
  } else {
    // show
    basketEl.classList.add('show')
  }
})

basketEl.addEventListener('click', (event) => {
  event.stopPropagation()
})

window.addEventListener('click', () => {
  basketEl.classList.remove('show')
})