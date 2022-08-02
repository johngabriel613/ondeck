const openNav = document.querySelector('.menu img')
const closeNav = document.querySelector('.products-label img')
const productsNav = document. querySelector('.products-wrapper')

openNav.addEventListener('click', () => {
    productsNav.classList.add('active')
})

closeNav.addEventListener('click', () => {
    productsNav.classList.remove('active')
})
