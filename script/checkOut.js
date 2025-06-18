// Import the cart array from the cartData.js module (from localStorage or empty)
import cart from './cartData.js'

// Run the script after the HTML has fully loaded
document.addEventListener('DOMContentLoaded',()=>{
     // Track total price of all products in the cart
    let totalPrice=0;
      // Select the container where the price details will be shown
    const wrapper=document.querySelector('.price-container');
    // Function to render checkout item list and total price
    function renderCheckout(){
        // Loop through each item in the cart
        cart.forEach(e=>{
            wrapper.innerHTML+=`
                <div>
                    <h1>${e.name}: </h1>
                    <h1>${e.priceInCents/100} $</h1>
                </div>
            `
            totalPrice+=Number(e.priceInCents);
            
        })
         // Create an h1 to display the final total price
        const totalPriceH1=document.createElement('h1');
        totalPriceH1.className='totalPrice';
        totalPriceH1.innerHTML=`${totalPrice/100} $`;
       // Add the total price element to the page
        wrapper.appendChild(totalPriceH1);

    }

    // Call the function to render the price info
    renderCheckout();
    // Function to show a temporary success popup (like a purchase success message)
    function activateSuccess(){
        document.querySelector('.success-container').style.display='flex';
         // Hide the popup after 1 second
        const id=setTimeout(()=>{
            document.querySelector('.success-container').style.display='none';
        },1000)
        return id;
    }

    // Attach event to the "buy" button that triggers the success message
    document.querySelector('.buy').addEventListener('click',activateSuccess);
})