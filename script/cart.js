import cart from './cartData.js'

document.addEventListener('DOMContentLoaded',()=>{

    const cartWrapper=document.querySelector('.cart-wrapper');
    
    
    function renderCart(){
    
        if(cart.length<=0||!cart){
            return cartWrapper.innerHTML=`
                <h1>There are no items in cart</h1>
            `
        }

        cart.forEach((e,i)=>{
            cartWrapper.innerHTML+=`
                <div id=${i} class="cart-product-container">
                    <img class="cart-product-image" src="${e.image}" alt="${e.name}-image">
                    <h1 class="cart-product-name">${e.name}</h1>
                    <p class="cart-product-price">${(e.priceInCents)/100}$</p>
                    <button class="rem-cart-btn">Remove</button>
                </div>
            `
        })

        const checkOutBtn=document.createElement('a');
        checkOutBtn.className='check-out-btn';
        checkOutBtn.setAttribute('href','Signin.html');
        checkOutBtn.innerHTML='Check Out';
        cartWrapper.appendChild(checkOutBtn);
        
        
        document.querySelectorAll('.rem-cart-btn').forEach(btn=>{
            btn.addEventListener('click',()=>{
                console.log('works');
                cart.splice(btn.parentElement.getAttribute('id'),1);
                localStorage.setItem('cart',JSON.stringify(cart));
                cartWrapper.innerHTML='';
                renderCart();
            })
        })
    }


    renderCart();

});

