const menuEmail = document.querySelector(".navbar-email");
const desktoMenu = document.querySelector(".desktop-menu");
const MenuHamIcon = document.querySelector(".menu"); // menu hamburgesa de la vista movil
const Mobilemenu = document.querySelector(".mobile-menu");



menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);



function toggleDesktopMenu(){
    desktoMenu.classList.toggle("inactive"); //toggle -> intercambiar entre quitar o agregar la clase inactive
}

function toggleMobileMenu(){
    Mobilemenu.classList.toggle("inactive")
}