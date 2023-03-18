const menuEmail = document.querySelector(".navbar-email");
const desktoMenu = document.querySelector(".desktop-menu");
const MenuHamIcon = document.querySelector(".menu"); // menu hamburgesa de la vista movil
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const Mobilemenu = document.querySelector(".mobile-menu");
const menuCarritoAside = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector('#productDetail');




menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoAside.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetialAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }

    desktoMenu.classList.toggle("inactive"); //toggle -> intercambiar entre quitar o agregar la clase inactive
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetialAside(); //se llama a la funcion para no repetir el condicional de isAsideClosed

    Mobilemenu.classList.toggle("inactive")
}

function toggleCarritoAside(){
    const isMobileMenuClosed = Mobilemenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        Mobilemenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    desktoMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetialAside(){
    productDetailContainer.classList.add('inactive');
}


const productList = []; // array con la informacion de los productos

productList.push({
    name: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    precio: 320,
    image: 'https://i.blogs.es/275f5d/img_3323/450_1000.jpg',
})

productList.push({
    name: 'Computador',
    precio: 620,
    image: 'https://blog.soltekonline.com/content/images/size/w2000/2019/08/00000.jpg',
})
 /*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProducts(arr) {
        arr.map(product=>{
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('div');
        productPrice.innerText = '$' +product.precio; 
        const productName = document.createElement('div');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    })
    
}

renderProducts(productList);