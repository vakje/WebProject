// Import cart data from external file
import cart from './cartData.js'
// Wait until the DOM is fully loaded before executing code
document.addEventListener('DOMContentLoaded',()=>{
     // Select the container where cart items will be displayed
    const cartWrapper=document.querySelector('.cart-wrapper');
    
     // Function to render all cart items to the page
    function renderCart(){
          // If cart is empty or not defined, display a message and return
        if(cart.length<=0||!cart){
            return cartWrapper.innerHTML=`
                <h1>There are no items in cart</h1>
            `
        }
         // Loop through cart items and add each one to the HTML
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
        // Create the checkout button and add it after the products
        const checkOutBtn=document.createElement('a');
        checkOutBtn.className='check-out-btn';
        checkOutBtn.setAttribute('href','Signin.html');
        checkOutBtn.innerHTML='Check Out';
        cartWrapper.appendChild(checkOutBtn);
        
         // Add click listeners to all remove buttons
        document.querySelectorAll('.rem-cart-btn').forEach(btn=>{
            btn.addEventListener('click',()=>{
                console.log('works');
                // Remove item from cart array by its index (taken from parent element's ID)
                cart.splice(btn.parentElement.getAttribute('id'),1);
                 // Update localStorage with the new cart data
                localStorage.setItem('cart',JSON.stringify(cart));
                  // Clear the cart display and re-render
                cartWrapper.innerHTML='';
                renderCart();
            })
        })
    }

       // Initial call to render the cart when the page loads
    renderCart();

});

