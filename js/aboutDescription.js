const descriptionBtns = document.querySelectorAll('.left__descriptionBtn');
const ulDescriptions = document.querySelectorAll('.description__containerList');


const btnClick = () => {
    descriptionBtns.forEach(btn => {
        btn.addEventListener('click', checkClick);
    });
}

const checkClick = (e) => {
    if (e.target.matches('.left__descriptionBtn')) {
        e.target.nextElementSibling.classList.toggle('description__containerList--js');
    } else {}
}

document.addEventListener('DOMContentLoaded', btnClick)