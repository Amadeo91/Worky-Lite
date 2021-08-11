const UpBtn = document.querySelector('.siteUp');

const showBtn = () => {
    window.scrollY >= 1020 ? UpBtn.style.display = 'block' : UpBtn.style.display = 'none';
}

const siteUp = () => {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', showBtn);
UpBtn.addEventListener('click', siteUp);