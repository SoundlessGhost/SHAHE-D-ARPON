/* eslint-disable no-unused-vars */
import React from 'react';
import './Carts.css'
import { Albums } from '../../../utilities/Albums'
import { moreAlbums } from '../../../utilities/MoreAlbums';
import Cart from '../Cart/Cart';
import MoreCart from '../Cart/moreCart';
const Carts = () => {
    return (
        <div>
            <div className='CartsContainer'>
                {
                    Albums.map(Album => <Cart key={Album.id} Album={Album}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;