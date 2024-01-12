/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MoreCart = ({ moreAlbum }) => {
    console.log(moreAlbum);
    const { picture, title } = moreAlbum
    return (
        <div>
            <div className='albumContainer'>
                <img src={picture} alt="" />
                <p>{title}</p>
            </div>
        </div>
    );
};

export default MoreCart;