import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    let shippingCost = 0;
    if(totalPrice<15 && totalPrice>0){
        shippingCost = shippingCost + 4.99;
    }
    else if(15<totalPrice && totalPrice<30){
        shippingCost = 2.49;
    }

    const totalCharge = totalPrice/10;
    const grandTotal = totalPrice + shippingCost + totalCharge;

    function formatAmout (amount){
        const fixedAmount = amount.toFixed(2);
        return Number(fixedAmount);
    }
    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${totalPrice} </p>
            <p><small>Shipping Cost: ${shippingCost} </small></p>
            <p>Tax + VAT: ${formatAmout(totalCharge)} </p>
            <p>Total Price: ${formatAmout(grandTotal)}</p>
        </div>
    );
};

export default Cart;