window.addEventListener("DOMContentLoaded",()=>{"use strict";$(document).ready((function(){var e=$("#button-up");$(window).scroll((function(){$(this).scrollTop()>300?e.fadeIn():e.fadeOut()})),e.on("click",(function(){return $("body, html").animate({scrollTop:0},800),!1}))}));new Swiper(".swiper-container",{direction:"vertical",slidesPerView:"auto",freeMode:!0,freeModeSticky:!0,scrollbar:{el:".swiper-scrollbar"},pagination:{el:".swiper-pagination",type:"fraction"},mousewheel:!0});(()=>{const e=document.querySelector("#menu-togle"),n=document.querySelector(".menu__nav");document.addEventListener("click",t=>{t.target.closest("#menu-togle")?(e.classList.toggle("menu-icon-active"),n.classList.toggle("menu__nav--active")):(t.target.closest("li>a")||!t.target.closest("nav")||t.target.closest(".menu__btn")||t.target.closest(".nav__close"))&&(e.classList.remove("menu-icon-active"),n.classList.remove("menu__nav--active"))})})();(()=>{document.querySelector(".cities");const e=document.querySelector(".subcities"),n=document.querySelectorAll(".subcities__flag");n.forEach((t,l)=>{t.addEventListener("click",o=>{let i=o.target;i.closest(".subcities")&&e.classList.toggle("subcities-active"),t===i&&(e=>{for(let t=0;t<n.length;t++)e===t&&console.log(e)})(l),console.log(i)})})})()});const modalForm=()=>{let e=$(".modal");modalBtn=$("[data-toggle = modal]"),closeBtn=$(".modal__close"),modalBtn.on("click",(function(){e.toggleClass("modal--visible")})),closeBtn.on("click",(function(){e.toggleClass("modal--visible")})),$(document).keyup("click",(function(e){"27"==e.which&&$(".modal").removeClass("modal--visible")})),$(document).click((function(n){$(n.target).is(".modal")&&e.toggleClass("modal--visible")})),$(".modalSend-btn").on("click",(function(e){e.preventDefault(),$(".modalSend").fadeIn()})),$(document).keyup("click",(function(e){"27"==e.which&&$(".modalSend").fadeOut()})),$(document).on("click",(function(e){$(".modalSend").fadeOut()}))};modalForm(),$("[type=tel]").mask("+7(000)000-00-00",{placeholder:"+7"}),$(".send__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:16},userEmail:{required:!0,email:!0},userMessage:{required:!0,minlength:10,maxlength:30},checkBoxSendForm:"required"},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче 2 символов",maxlength:"Имя не длиньше 15 символов"},userPhone:{required:"Телефон обязателен",minlength:"! Не правильный формат телефона"},userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"},userMessage:{required:"Вопрос обязателен",minlength:"Вопрос не короче 10 символов",maxlength:"Вопрос не длиньше 30 символов"},checkBoxSendForm:"! Подтвердите согласие на обработку персональных данных"},submitHandler:function(e){$.ajax({type:"POST",url:"sendForm.php",data:$(".send__form").serialize(),success:function(n){$(e)[0].reset(),$(".modalSend").fadeIn()}})}}),$(".modal__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:16},userEmail:{required:!0,email:!0},userMessage:{required:!0,minlength:10,maxlength:30},checkBoxModal:"required"},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче 2 символов",maxlength:"Имя не длиньше 15 символов"},userPhone:{required:"Телефон обязателен",minlength:"! Не правильный формат телефона"},userEmail:{required:"Обязательно укажите email",email:"Введите в формате: name@domain.com"},userMessage:{required:"Вопрос обязателен",minlength:"Вопрос не короче 10 символов",maxlength:"Вопрос не длиньше 30 символов"},checkBoxModal:"! Подтвердите согласие на обработку персональных данных"},submitHandler:function(e){$.ajax({type:"POST",url:"sendModal.php",data:$(".modal__form").serialize(),success:function(n){$(e)[0].reset(),$(".modalSend").fadeIn()}})}});