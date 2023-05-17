const productInfos = [
    {
        title: "Тарт «Экзотика»",
        info: "Песочный тарт, крем из маракуйи, желе из экзотических фруктов, воздушное безе, 550г.",
        price: 21.8,
        sale: 15
    },
    {
        title: "Тарт «Экзотик2а»",
        info: "Песочный тарт, крем из маракуйи, желе из экзотических фруктов, воздушное безе, 550г.",
        price: 25.8,
        sale: 15
    },
    {
        title: "Тарт «Экзотика»",
        info: "Песочный тарт, крем из маракуйи, желе из экзотических фруктов, воздушное безе, 550г.",
        price: 21.8,
        sale: 15
    }];

ScrollOut({
    targets: ".animated-item",
    // threshold:0.5,
    // once: false
});

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



let modal = document.body.querySelector(".modal_wrapper"),
    modalTitle = document.body.querySelector(".modal_title"),
    modalOldPrice = document.body.querySelector(".modal_block__old-price"),
    modalNewPrice = document.body.querySelector(".modal_block__price");

let modalCloseButton = document.body.querySelector(".modal_close_button");
if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeModal);
}

let ids = document.body.querySelectorAll("div[data-product]");

// console.log(ids);
ids.forEach(card => {
    if (card.getBoundingClientRect().left > window.innerWidth) {
        card.classList.remove("animated-item");
    }
    card.addEventListener("click", () => {
        console.log(card.dataset.product);
        toggleModal(productInfos[card.dataset.product])
    });
});

function toggleModal(info) {
    modalTitle.innerHTML = info.title;
    modalOldPrice.innerHTML = info.price + " руб.";
    modalNewPrice.innerHTML = info.price - info.price * info.sale * 0.01 + " руб.";
    modal.classList.toggle("is-open");
    window.addEventListener("scroll", StopScroll);

};

function StopScroll() {
    window.scroll(0, 0);
}


function closeModal() {
    modal.classList.remove("is-open");
    window.removeEventListener("scroll", StopScroll);
};

let backBtn = document.querySelector(".back-btn");
if(backBtn){
    backBtn.onclick = () => {
        // window.location = history.back();
        history.back();
    }
}

