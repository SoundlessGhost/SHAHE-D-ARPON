/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Category.css'
const Category = ({ job }) => {
    const { category_name, picture } = job
    return (
        <div className='categoryContainer'>
            <img src={picture} alt="" />
            <p>{category_name}</p>
        </div>
    );
};

export default Category;