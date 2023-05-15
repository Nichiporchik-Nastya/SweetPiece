let includedFooter = document.querySelector('footer'); //находим тег на странице
//добавляем информацию в тег
includedFooter.insertAdjacentHTML("afterbegin", `
<div class="footer-top">
<div class="address-blocks__wrapper">
    <div class="address-block">
        <div class="address-block__title">ул. Притыцкого, 101а</div>
        <div class="address-block__subtitle">ст. м. «Каменная горка»</div>
    </div>
    <div class="address-block">
        <div class="address-block__title">ул. Притыцкого, 101а</div>
        <div class="address-block__subtitle">ст. м. «Каменная горка»</div>
    </div>
    <div class="address-block">
        <div class="address-block__title">ул. Притыцкого, 101а</div>
        <div class="address-block__subtitle">ст. м. «Каменная горка»</div>
    </div>
    <div class="address-block">
        <div class="address-block__title">ул. Притыцкого, 101а</div>
        <div class="address-block__subtitle">ст. м. «Каменная горка»</div>
    </div>
</div>
<div class="copyright">
    &copy;2010 — 2023, Лакомый кусочек Все права защищены
    <br />
    Дизайн и разработка: Ничипорчик А.И.
</div>
</div>
<div class="footer-bottom">
<div class="footer-bottom__left">
    <div class="opening-hours">
        9:00—20:00
        <br />
        Ежедневно
    </div>
    <div class="contacts">
        <a href="mailto:kysochek@mail.ru">kysochek@mail.ru</a>
        <div class="social-links">
            <a href="https:/vk.com/" target="_blank">
                <img src="./img/icons/vk.svg" alt="Вконтакте">
            </a>
            <a href="https:/telegram.org/" target="_blank">
                <img src="./img/icons/telegram.svg" alt="Телеграм">
            </a>
            <a href="https:/viber.com/" target="_blank">
                <img src="./img/icons/viber.svg" alt="Вайбер">
            </a>
        </div>
    </div>

</div>
<div class="footer-bottom__right">

    <div class="phone-numbers">
        +375 (44) 272-57-42
        <br />
        +375 (33) 206-88-12
    </div>
    <a href="./404.html" class="privacy-policy">
        Политика
        <br />
        конфиденциальности
    </a>
</div>
</div>
	`);

let includedHeader = document.querySelector('header');
includedHeader.insertAdjacentHTML("afterbegin", `
<div class="header__top container">
    <nav class="nav-static">
        <a href="/" class="logo">
            <div class="logo__link">
                <lottie-player class="logo__anim" src="./animations/logo.json" background="transparent"
                    speed="1" style="height: 3em;" hover></lottie-player>
                <img class="logo__img" src="./img/logo.svg" alt="Логотип" title="На главную">
            </div>
            <div class="logo__title">
                <p class="logo__first-line">Лакомый кусочек</p>
                <p class="logo__second-line">Кафе-кондитерская</p>
            </div>
        </a>
        <ul class="nav-static__menu">
            <li class="nav-static__menu-item">
                <a href="./menu.html" class="header-btns__btn btn" id="menu">Меню</a>
            </li>
            <li class="nav-static__menu-item">
                <a href="./sales.html" class="header-btns__btn btn" id="about">Скидки</a>
            </li>
            <li class="nav-static__menu-item">
                <a href="#" class="header-btns__btn btn" id="contacts">Отзывы</a>
            </li>
            <li class="nav-static__menu-item">
                <a href="#" class="header-btns__btn btn" id="shops">О нас</a>
            </li>
        </ul>
    </nav>

    <div class="header-btns">
        <a href="./menu.html" class="search__link btn">
            <img src="img/icons/search.svg" class="search__icon" alt="Поиск...">
        </a>
        <a href="tel:+375332068812" class="header-btns__btn btn">
            +375 (33) 206-88-12
        </a>
        <a href="./auth.html" class="header-btns__secondary btn">
            Войти
        </a>
        <a href="./reg.html" class="header-btns__primary btn">
            Зарегистрироваться
        </a>
        <lottie-player class="burger-btn reverseEffect" src="./animations/menuV2.json" speed="1"
            style="height: 3em; width: 40px;" alt="Бургер-меню"></lottie-player>
    </div>
</div>


<div class="container burger-menu">
    <div class="header-btns">
        <a href="./auth.html" class="header-btns__secondary btn">
            Войти
        </a>
        <a href="./reg.html" class="header-btns__primary btn">
            Зарегистрироваться
        </a>
    </div>

    <div class="burger-menu__nav-wrapper">
        <div class="burger-menu__nav-title">Разделы</div>
        <ul class="burger-menu__nav">
            <li class="burger-menu__nav-item">
                <a href="./menu.html" id="search">Поиск...</a>
            </li>
            <li class="burger-menu__nav-item">
                <a href="./menu.html" id="menu">Меню</a>
            </li>
            <li class="burger-menu__nav-item">
                <a href="./sales.html" id="sales">Скидки</a>
            </li>
            <li class="burger-menu__nav-item">
                <a href="#" id="reviews">Отзывы</a>
            </li>
            <li class="burger-menu__nav-item">
                <a href="#" id="about">О нас</a>
            </li>
        </ul>
        <div class="burger-menu__nav-title">Категории</div>
        <ul class="burger-menu__nav">
            <li class="burger-menu__nav-item">
                <a href="./menu.php">
                    Выпечка
                </a>
            </li>
            <li class="burger-menu__nav-item">
                <a href="./menu.php">
                    Десерты
                </a>
            </li>
            <li class="burger-menu__nav-item">
                <a href="./menu.php">
                    Конфеты
                </a>
            </li>
            <li class="burger-menu__nav-item">
                <a href="./menu.php">
                    Наборы
                </a>
            </li>
        </ul>
    </div>
    <div>
        <ul class="burger-menu__social-links">
            <li title="Вконтакте">
                <a href="https:/vk.com/">
                    Вконтакте
                </a>
            </li>
            <li title="Telegram">
                <a href="https:/telegram.org/">
                    Telegram
                </a>
            </li>
            <li>
                <a href="https:/viber.com/" title="Viber">
                    Viber
                </a>
            </li>
        </ul>
        <div class="burger-menu__bottom">
            <div class="copyright">
                &copy;2010 — 2023, Лакомый кусочек Все права защищены
                <br />
                Дизайн и разработка: Ничипорчик А.И.
            </div>
        </div>
    </div>
</div>`);


let modalWrapper = document.querySelector('.modal_wrapper');
modalWrapper.insertAdjacentHTML("afterbegin", `
		<div class="modal_window ">
		<button class="modal_close_button" title="закрыть модальное окно">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2L22 22" stroke="black" stroke-width="2" stroke-linecap="round" />
				<path d="M22 2L2 22" stroke="black" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
		<h2 class="modal_title"><span>Conceptrary</span><br>сборник<br>концептов</h2>
			<div class="modal_block">
				<h3 class="modal_subtitle">concept&nbsp;&mdash; идея&nbsp;&plus; library&nbsp;&mdash; библиотека</h3>
				<p>Онлайн-сборник концептуальных изображений персонажей и&nbsp;окружения из самых разных мульт-вселенных</p>

				<p>Это в первую очередь курсовой проект студентки БГТУ. Сам сайт несёт развлекательно-познавательный характер и&nbsp;не имеет
				своей целью оскорбить чьи-либо чувства или использовать чужой труд в&nbsp;коммерческих целях. Все права на изображения принадлежат их правообладателям</p>
			</div>
	</div>
`);

