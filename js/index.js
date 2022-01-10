const modalContainerEl = document.querySelector('.modal__container')
const modalCloseEl = document.querySelector('.close__icon')
const loginLinkEl = document.querySelector('.login__link')

const IS_OPEN = 'is-open'

const toggleModal = () => {
	console.log('click')
	modalContainerEl.classList.toggle(IS_OPEN)
}

modalContainerEl.addEventListener('click', toggleModal)
modalCloseEl.addEventListener('click', toggleModal)
loginLinkEl.addEventListener('click', toggleModal)

const footerTitleEl = document.querySelectorAll('.footer__section__title')

const toggleExpandSection = element => () =>
	element.classList.toggle('is-expanded')

footerTitleEl.forEach(el => {
	el.addEventListener('click', toggleExpandSection(el.parentElement))
})
