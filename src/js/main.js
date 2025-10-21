import '/src/sass/style.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

try {
    const swiper = new Swiper('.works__slider', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                spaceBetween: 35,
                slidesPerView: 3,
            }
        }
    }
    );
} catch (error) {

}

const burger = document.querySelector(".burger"),
    close = document.querySelector(".aside__cross"),
    menu = document.querySelector(".aside");

burger.addEventListener("click", () => {
    menu.classList.add("aside--active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("aside--active");
    document.body.style.overflow = "";
});

try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Удаляем активный класс у всех табов и контента
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            // Добавляем активный класс к нажатому табу и показываем соответствующий контент
            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    // Показываем первый контент при загрузке
    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) { }

try {
    const validator = new JustValidate('.question-form');

    validator.addField('#name', [
        {
            rule: 'required',
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 15,
        },
    ]).addField('#email', [
        {
            rule: 'required',
        },
        {
            rule: 'email',
        },
    ]).addField('#question', [
        {
            rule: 'required',
        },
        {
            rule: 'minLength',
            value: 3,
        },
    ], {
        errorsContainer: ".error-message"
    }).addField('#checkbox', [
        {
            rule: 'required',
        },
    ], {
        errorsContainer: '.checkbox-error-message'
    })

} catch (e) {

}

try {
    const validator = new JustValidate('.newsletter-form');

    validator.addField('#email', [
        {
            rule: 'required',
        },
        {
            rule: 'email',
        },
    ], {
        errorsContainer: '.newsletter-form__email--error'
    }).addField('.newsletter-form__checkbox', [
        {
            rule: 'required',
        },
    ], {
        errorsContainer: '.newsletter-form__checkbox--error'
    })

} catch (e) {

}
