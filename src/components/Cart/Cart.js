import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
     shipping = 0;
    }
    else if(total > 20) {
        shipping = 5;
    }
    else if(total > 0){
          shipping = 15;
    }
    const tax = Math.round(total / 10);
    return (
        <div >
            <h3>Order Details</h3>
            <p>Items Order: {cart.length} </p>
            <p>Product Price = {total}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>VAT: {tax}</p>
            <p>Total Price : {total + shipping } </p>
        </div>
    );
};

export default Cart;