ScrollOut({
    targets: ".animated-item",
    // threshold:0.5,
    // once: false
});



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


//модальное окно
let modal = document.body.querySelector(".modal_wrapper"),
    modalTitle = document.body.querySelector(".modal_title"),
    modalOldPrice = document.body.querySelector(".modal_block__old-price"),
    modalNewPrice = document.body.querySelector(".modal_block__price"),
    modalInfo = document.body.querySelectorAll(".modal_info"),
    modalImg = document.body.querySelector(".modal_img"),
    modalLikes = document.body.querySelector(".modal_likes"),
    modalCardBottom = document.body.querySelector(".modal_block__bottom");

let modalCloseButton = document.body.querySelector(".modal_close_button");
if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeModal);
}

let ids = document.body.querySelectorAll("div[data-product]");


ids.forEach(card => {
    if (card.getBoundingClientRect().left > window.innerWidth) {
        card.classList.remove("animated-item");
    }
    card.addEventListener("click", () => {
        toggleModal(card);
    });
});

function toggleModal(card) {
    modalTitle.innerHTML = card.querySelector(".card__title").innerHTML;
    modalInfo[0].innerHTML = card.querySelectorAll(".card__info")[0].innerHTML;
    modalInfo[1].innerHTML = card.querySelectorAll(".card__info")[1].innerHTML;
    price = parseFloat(card.querySelector(".card__price").innerHTML.slice(0, -4));

    modalOldPrice.innerHTML = price + " руб.";
    modalNewPrice.innerHTML = +price - (+price * 15 * 0.01) + " руб.";
    modalImg.src = card.querySelector(".card__img").src;
    modalLikes.querySelector(".card__rating-number").innerHTML =  card.querySelector(".card__rating-number").innerHTML;

    if(card.querySelector(".likes__like").classList.contains("clicked")){
        modalLikes.querySelector(".likes__like").classList.add("clicked");
    }else{
        modalLikes.querySelector(".likes__like").classList.remove("clicked");
    }

    if(card.querySelector(".card__cart-btn").classList.contains("card__cart-btn_active")){
        modalCardBottom.querySelector(".card__cart-btn").classList.add("card__cart-btn_active");
        modalCardBottom.querySelector(".card__cart-btn").innerHTML = "В корзине &#10004;";
    }
    else{
        modalCardBottom.querySelector(".card__cart-btn").classList.remove("card__cart-btn_active");
        modalCardBottom.querySelector(".card__cart-btn").innerHTML = "В корзину";
    }
    
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


//возврат 404 страницы
let backBtn = document.querySelector(".back-btn");
if (backBtn) {
    backBtn.onclick = () => {
        history.back();
    }
}



