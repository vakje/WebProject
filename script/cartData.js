// Try to get the 'cart' data from localStorage and parse it from JSON string to JavaScript object/array
// If there's nothing stored, default to an empty array
const cart=JSON.parse(localStorage.getItem('cart'))||[];

// Export the cart so it can be used in other JavaScript files/modules
export default cart;
