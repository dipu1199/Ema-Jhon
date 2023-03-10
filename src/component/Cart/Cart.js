import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;