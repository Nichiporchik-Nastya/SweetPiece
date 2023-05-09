// let prevScrollpos = window.pageYOffset;
// window.onscroll = () => {

//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.querySelector(".header__top").style.top = "-100%";
//         // console.log('вниз');
//     } else {
//         document.querySelector(".header__top").style.top = "100%";
//         // console.log('вверх');
//     }
//     prevScrollpos = currentScrollPos;
// };


let burgerBtn = document.querySelector('.burger-btn'),
    burgerMenu = document.querySelector('.burger-menu');
burgerBtn.onclick = () => {
    burgerMenu.classList.toggle('menu-active');
};

//кнопка бургер-меню

let player = document.querySelector(".reverseEffect");
let clicked = false;
player.addEventListener("click", () => {

    if (clicked) {
        player.setDirection(-1);
        clicked = false;
    } else {
        player.setDirection(1);
        clicked = true;
    }
    player.play();

});

ScrollOut({  
	targets: ".animated-item",
	threshold:0.5,
	once: false
});

