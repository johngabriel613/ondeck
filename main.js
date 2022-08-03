//mobile navigation

const open = document.querySelector('.menu')
const close = document.querySelector('.products-label img')
const nav = document.querySelector('.products-wrapper')

open.addEventListener('click', () => {
    nav.classList.add('active')
})

close.addEventListener('click', () => {
    nav.classList.remove('active')
})