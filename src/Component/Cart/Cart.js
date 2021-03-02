import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, player) => total + Number(player.salary), 0);

    return (
        <div>
            <h1>Added Players: {cart.length}</h1>
            <div style={{display: 'none'}} className="player-list">
                <h4>Member Name and Salary</h4>
                {
                    cart.map(player => <div>
                        <div className="added-player">
                            <h5>{player.name}</h5>
                            <p>${player.salary}</p>
                        </div>
                    </div>)
                }
                <h3>Total Cost : ${total}</h3>
            </div>
        </div>
    );
};

export default Cart;