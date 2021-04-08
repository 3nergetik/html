const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');

headerBurger.onclick = () => {
    headerMenu.classList.toggle('active-menu');
}