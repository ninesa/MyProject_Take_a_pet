const openMenu = document.querySelector(".header__menu_btn");
const form = document.querySelector(".form");
const closeMenu = document.querySelector(".form__btn_close");
const menuIntro= document.querySelector(".form__menu_paragraph_intro");
const menuHelp= document.querySelector(".form__menu_paragraph_help");
const menuNews= document.querySelector(".form__menu_paragraph_news");
const menuFriends= document.querySelector(".form__menu_paragraph_friends");
const menuContact= document.querySelector(".form__menu_paragraph_contact");

function toggleMenu(event) {
    event.preventDefault();
    form.classList.toggle("form_opened");
}
openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);


$(document).ready(function(){
    $(".form__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
menuIntro.addEventListener("click",toggleMenu);
menuHelp.addEventListener("click",toggleMenu);
menuNews.addEventListener("click",toggleMenu);
menuFriends.addEventListener("click",toggleMenu);
menuContact.addEventListener("click",toggleMenu);