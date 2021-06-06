const slider = document.querySelector('.darkMode__circle');
const body = document.querySelector('.body');
const h2Tags = document.querySelectorAll('h2');
const h3Tags = document.querySelectorAll('h3');
const h4Tags = document.querySelectorAll('h4');
const pTags = document.querySelectorAll('p');

const slide = () => {
    slider.classList.toggle('darkMode__circle--slide')
    body.classList.toggle('wrapper__dark')

    h2Tags.forEach(h2Tag => {
        h2Tag.classList.toggle('whiteText')
    });
    h3Tags.forEach(h3Tag => {
        h3Tag.classList.toggle('whiteText')
    });
    h4Tags.forEach(h4Tag => {
        h4Tag.classList.toggle('whiteText')
    });
    pTags.forEach(pTag => {
        pTag.classList.toggle('whiteText')
    });
}

slider.addEventListener('click', slide);