const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show Menu
if(navToggle){
  navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
  })
}

// Hidden Menu
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// Hidden menu when click on link
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))