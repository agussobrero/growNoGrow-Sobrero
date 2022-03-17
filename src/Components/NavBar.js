import React from 'react';
import '../Components/NavBar.css';

const NavBar = () => {
    return (
        <div className='navBar'>
            <h1 className='brand'>GrowNoGrow</h1>
            <ul className='navBar-list' >
                <li>Home</li>
                <li>Products</li>
                <li>Reviews</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar