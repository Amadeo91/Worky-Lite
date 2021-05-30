const descriptionBtn = document.querySelectorAll('.left__descriptionBtn')
const ulDescriptions = [document.querySelectorAll('.description__containerList')]


const showDescriptions = () => {
    for (let i = 0; i < descriptionBtn.length; i++) {
        let btn = descriptionBtn[i];
        btn.addEventListener('click', () => {
            ulDescriptions.forEach(ulDescription => {
                const ul = ulDescription[i]
                ul.classList.toggle('description__containerList--js')
            });
        })
    }
}
document.addEventListener('DOMContentLoaded', showDescriptions);