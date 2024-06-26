// 장바구니
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

// 검색창
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = headerEl.querySelector('.search-closer')
const searchShadowEl = headerEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)


function showSearch() {
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed') // html 태그 선택자
  headerMenuEls.reverse().forEach((el, idx) => {
    el.style.transitionDelay = idx * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.forEach((el, idx) => {
    el.style.transitionDelay = idx * .4 / searchDelayEls.length + 's'
  })
  setTimeout(() => {
    searchInputEl.focus()  
  }, 600);
}

function hideSearch() {
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed') // html 태그 선택자
  headerMenuEls.reverse().forEach((el, idx) => {
    el.style.transitionDelay = idx * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.reverse().forEach((el, idx) => {
    el.style.transitionDelay = idx * .4 / searchDelayEls.length + 's'
  })
  searchDelayEls.reverse()
  searchInputEl.value = ''
}

// 요소의 가시성 관찰
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  })
})

infoEls = document.querySelectorAll('.info')
infoEls.forEach((el) => {
  io.observe(el)
})

// 비디오 재생!
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

playBtn.addEventListener('click', () => {
  video.play();
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
})

pauseBtn.addEventListener('click', () => {
  video.pause();
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
})