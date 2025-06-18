import data from './data.js'
import cart from './cartData.js'

 // Container to render products
const mainPageWrapper=document.querySelector('.main-page-wrapper');

// Generate HTML for all products and inject into page
function generateMainPage() {
    let html = '';
    data.forEach(e => {
        html += `
            <div id="${e.id}" class="product-container">
                <h1 class="product-name">${e.name}</h1>
                <img class="product-image" src="${e.image}" alt="${e.name}-image">
                <p class="product-price">${((e.priceInCents)/100).toFixed(2)}$</p>
                <button class="add-cart-btn">Add To Cart</button>
            </div>
        `;
    });
    // Insert all products at once for better performance
    mainPageWrapper.innerHTML = html;  
}
generateMainPage();
// Select all "Add To Cart" buttons after rendering
const addToCartBtn=document.querySelectorAll('.add-cart-btn');

// Add click event listener to each button to add item to cart
addToCartBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const addedItemId=btn.parentElement.getAttribute('id');
        const item=data.find(i=>i.id==addedItemId);
         // Add selected product to cart array
        cart.push({
            id: item.id,
            name: item.name,
            image: item.image,
            priceInCents: item.priceInCents
        });
        // Update cart in localStorage to persist across page reloads
        localStorage.setItem('cart',JSON.stringify(cart));
        activateSuccess();
    })
})

function activateSuccess(){
    document.querySelector('.success-container').style.display='flex';

    const id=setTimeout(()=>{
        document.querySelector('.success-container').style.display='none';
    },1000)
    return id;
}
