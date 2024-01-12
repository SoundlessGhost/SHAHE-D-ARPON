/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Header.css'
import logo from '../../assets/Call.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import IsActive from '../isActive/isActive';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }
    // Dropdown_Function
    // const handleDropdown = () => {
    //     const dropDown = document.getElementById('dropdownContainer')
    //     dropDown.style.display === "none" ? dropDown.style.display = "block" :
    //         dropDown.style.display = "none";
    //     dropDown.style.display = '';
    // }
    return (
        <div className='HeaderContainer'>
            <div className='HeaderSubContainer'>
                {
                    user ? <div className='HeaderImg'>
                        <img src={user.photoURL} alt="" />
                        <p className='HeaderName'>{user.displayName}</p>
                    </div>
                        : <div className='HeaderImg'>
                            <img src={logo} alt="" />
                            <p className='HeaderName'>Silent Ghost</p>
                        </div>
                }
            </div>
            <div className='AnchorContainer'>
                <IsActive to="/home">Home</IsActive>
                <IsActive to="/about">About</IsActive>
                <IsActive to="/blogs">Blogs</IsActive>
                <IsActive to="/services">Services</IsActive>
            </div>
            {
                user ? 
                <div className='loginStyle'>
                    <p>{user.email}</p>
                    <button onClick={handleLogOut} className='LogOutBtn'>logOut</button>
                </div>
                    :
                    <div className='loginX'>
                        <IsActive to="/login">Login</IsActive>
                    </div>
            }
        </div>
    );
};

export default Header;