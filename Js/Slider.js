let pictures = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5"
];

const buttons = document.querySelectorAll('.btn');
const imageDiv = document.querySelector('.imgHero');
let counter = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
 
        if (button.classList.contains('btn-left')) {
            counter--;
            if (counter < 0) {
                counter = pictures.length - 1;
            }
            imageDiv.style.backgroundImage = `url('../Assets/Img/${pictures[counter]}.jpg')`;
        }


        if (button.classList.contains('btn-right')) {
            counter++;
            if (counter > pictures.length - 1) {
                counter = 0;
            }

            imageDiv.style.backgroundImage = `url('../Assets/Img/${pictures[counter]}.jpg')`;
        }
    });
});