const toggleButton = document.getElementsByClassName('main-nav__toggle')[0]
const navLinks = document.getElementsByClassName('main-nav__list')[0]

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
