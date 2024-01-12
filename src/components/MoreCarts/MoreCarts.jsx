/* eslint-disable no-unused-vars */
import React from 'react';
import { moreAlbums } from '../../../utilities/MoreAlbums';
import MoreCart from '../Cart/moreCart';
import './MoreCarts.css'
const MoreCarts = () => {
    return (
        <div className='MoreCartsContainer'>
            {
                moreAlbums.map(moreAlbum => <MoreCart key={moreAlbum.id} moreAlbum={moreAlbum}></MoreCart>)
            }
        </div>
    );
};

export default MoreCarts;