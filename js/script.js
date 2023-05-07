let burgerBtn = document.querySelector('.burger-btn'),
    burgerMenu = document.querySelector('.burger-menu'),
    burgerClose = document.querySelector('.burger-menu__close');


let prevScrollpos = window.pageYOffset;
window.onscroll = () => {

    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header__bottom ").style.top = "100%";
        // console.log('вниз');
    } else {
        document.querySelector(".header__bottom ").style.top = "-100%";
        // console.log('вверх');
    }
    prevScrollpos = currentScrollPos;
};

let clicked = false;

burgerBtn.onclick = () => {
    burgerMenu.classList.toggle('menu-active');
};


let player = document.querySelector(".reverseEffect");

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


