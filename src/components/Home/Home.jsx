/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css'
import ai from '../../../Images/sky.jpg'
import Catagories from '../Categories/Categories';
import Carts from '../Carts/Carts';
const Home = () => {
    return (
        <div>
            <div className='homeContainer'>
                <div>
                    <h1>Mr Been Says Being Sad Is A Waste Of Time, <br /> <span className='span'>Find Some Reason To Smile .</span></h1>
                    <p>One Day Brain Asked Heart:
                        Why Are You Sending Messages To People Without Any Reason? Lovely Reply By Heart To Brain: You Need Reasons And I Need Relations.<br /><br />
                        Someone Asked God,
                        If Everything Is Already Written In Destiny Then Why Should I Wish??
                        God Smiled And Said,
                        Maybe On Some Pages I've Written
                        "As You Wish!!"</p>
                    <button className='button'>Get Start </button>
                </div>
                <div>
                    <img src={ai} alt="" />
                </div>
            </div>
            <Catagories></Catagories>
            <Carts></Carts>
        </div>
    );
};

export default Home;