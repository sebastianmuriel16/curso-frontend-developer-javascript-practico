const menuEmail = document.querySelector(".navbar-email");
const desktoMenu = document.querySelector(".desktop-menu");
const MenuHamIcon = document.querySelector(".menu"); // menu hamburgesa de la vista movil
const Mobilemenu = document.querySelector(".mobile-menu");
const menuCarritoAside = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")



menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoAside.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add("inactive")
    }

    desktoMenu.classList.toggle("inactive"); //toggle -> intercambiar entre quitar o agregar la clase inactive
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    Mobilemenu.classList.toggle("inactive")
}

function toggleCarritoAside(){
    const isMobileMenuClosed = Mobilemenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        Mobilemenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}