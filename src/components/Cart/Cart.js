import React from 'react';
import Product from '../Product/Product';
import "./Cart.css"

const Cart = (props) => {
    function formatNumber(num) {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    };
    let shipping = 0;
    if (total > 150) {
        shipping = 0;
    }
    else if (total > 55) {
        shipping = 4.99;
    }
    else if (total > 0) {
            shipping = 12.99;
    }
    else if (total > 5){
        shipping = 0;
    }
    const tax = total / 10;

    return (
        <div className = {"cart-holder"}>
            <h4>Order Summery</h4>
        
    <p>Items Ordered : {cart.length}</p>
    <p> Product Price : {formatNumber(total)} {"$"} </p>
    <p>Total Price : {formatNumber(total + shipping)}  {"$"} </p>
    <p> Shipping Price : {formatNumber(shipping)}  {"$"} </p>
    <p>Tax : {formatNumber(tax)}  {"$"} </p>


    <button className="order-review"> Review Your Order </button>

        </div>
    );
};

export default Cart;