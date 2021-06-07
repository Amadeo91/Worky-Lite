const slider = document.querySelector('.darkMode__circle');
const body = document.querySelector('.body');
const h2Tags = document.querySelectorAll('h2');
const h3Tags = document.querySelectorAll('h3');
const h4Tags = document.querySelectorAll('h4');
const pTags = document.querySelectorAll('p');
const pricingOptions = document.querySelectorAll('pricing__option');


const slide = () => {
    slider.classList.toggle('darkMode__circle--slide');
    body.classList.toggle('wrapper__dark');

    h2Tags.forEach(h2Tag => {
        h2Tag.classList.toggle('whiteText')
    });
    h3Tags.forEach(h3Tag => {
        if (h3Tag.classList.contains('option--js')) {
            return
        } else {
            h3Tag.classList.toggle('whiteText')
        }
    });
    h4Tags.forEach(h4Tag => {
        h4Tag.classList.toggle('whiteText')
    });
    pTags.forEach(pTag => {
        if (pTag.classList.contains('option--js')) {
            return
        } else {
            pTag.classList.toggle('whiteText')
        }
    });

}
slider.addEventListener('click', slide);