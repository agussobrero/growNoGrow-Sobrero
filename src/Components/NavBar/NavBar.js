import React from 'react';
import './NavBar.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className='navBar'>
            <h1 className='brand'>GrowNoGrow</h1>
            <ButtonGroup variant="text" aria-label="text button group" className='navBar-list'>
                <Button size="large" className='navBar-list'>Home</Button>
                <Button size="large" className='navBar-list'>Products</Button>
                <Button size="large" className='navBar-list'>Reviews</Button>
                <Button size="large" className='navBar-list'>Contact</Button>
                <CartWidget />
            </ButtonGroup>
        </div>
    )
}

export default NavBar