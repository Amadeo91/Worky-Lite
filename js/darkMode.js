const slider = document.querySelector('.darkMode__circle');
const body = document.querySelector('.body');
const textTags = document.querySelectorAll('h2, p');

const slide = () => {
    slider.classList.toggle('darkMode__circle--slide');
    body.classList.toggle('wrapper__dark');

    textTags.forEach(tag => {
        if (tag.classList.contains('option--js')) {
            return
        } else {
            tag.classList.toggle('whiteText')
        }
    });
}
slider.addEventListener('click', slide);