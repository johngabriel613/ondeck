const openNav = document.querySelector('.menu')
const closeNav = document.querySelector('.product-label img')
const productNav = document.querySelector('.products-wrapper')

openNav.addEventListener('click', () => {
    productNav.classList.add('active')
})

closeNav.addEventListener('click', () => {
    productNav.classList.remove('active')
})