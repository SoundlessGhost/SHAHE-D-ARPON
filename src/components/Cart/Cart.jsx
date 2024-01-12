/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = ({ Album }) => {
    const { picture, title } = Album
    return (
        <div className='albumContainer'>
            <div>
                <img src={picture} alt="" />
                <p>{title}</p>
                <Link to="/more_cart"><button>See More</button></Link>
            </div>
        </div>
    );
};

export default Cart;