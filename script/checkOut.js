import cart from './cartData.js'


document.addEventListener('DOMContentLoaded',()=>{
    let totalPrice=0;
    const wrapper=document.querySelector('.price-container');
    
    function renderCheckout(){
        cart.forEach(e=>{
            wrapper.innerHTML+=`
                <div>
                    <h1>${e.name}: </h1>
                    <h1>${e.priceInCents/100} $</h1>
                </div>
            `
            totalPrice+=Number(e.priceInCents);
            
        })
    
        const totalPriceH1=document.createElement('h1');
        totalPriceH1.className='totalPrice';
        totalPriceH1.innerHTML=`${totalPrice/100} $`;
        wrapper.appendChild(totalPriceH1);

    }


    renderCheckout();

    function activateSuccess(){
        document.querySelector('.success-container').style.display='flex';

        const id=setTimeout(()=>{
            document.querySelector('.success-container').style.display='none';
        },1000)
        return id;
    }


    document.querySelector('.buy').addEventListener('click',activateSuccess);
})