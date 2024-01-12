/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { jobs } from '../../../utilities/category'
import Category from '../Category/Category';
import './Categories.css'
const Catagories = () => {
    return (
        <div className='categoriesContainer'>
            <h2 className='h2'>Don't Compare Yourself With Others. No One Can Play Your Role Better Than You !!</h2>
            <div className='categoriesSubContainer'>
                {
                    jobs.map(job => <Category key={job.id} job={job}></Category>)
                }
            </div>
        </div>
    );
};

export default Catagories;