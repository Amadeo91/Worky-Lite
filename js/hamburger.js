const hamburgerContainer = document.querySelector('.hamburger__container');
const hamburgerIco = document.querySelector('.hamburger__ico');
const hamburgerClose = document.querySelector('.hamburger__close');
const hamburgerMenu = document.querySelector('.hamburger__menu');


const showHamburgerMenu = () => {
    hamburgerContainer.classList.toggle("hamburgerActive");
    hamburgerMenu.classList.toggle("menuActive");
    if (hamburgerContainer.classList.contains("hamburgerActive")) {
        hamburgerIco.style.display = 'none';
        hamburgerClose.style.display = 'block';
    } else {
        hamburgerIco.style.display = 'block';
        hamburgerClose.style.display = 'none';
    }
}

hamburgerContainer.addEventListener('click', showHamburgerMenu);