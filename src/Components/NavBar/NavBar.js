import React, {useState} from 'react';
import './NavBar.css';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";
import pages from '../../pages/pages';


const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)}

    const handleClose = () => {
        setAnchorEl(null)}

    return(
        <div className='navBar'>
            <h1 className='brand'>
                <Link className="navBar-link" to={"/home"}>GrowNoGrow</Link>
            </h1>
            <div className='navBar-group'>
                <ul className='navBar-list'>        
                {pages.map( (page)=> {
                    return(
                        page.page === "Productos" ? (
                            <li key={page.id}> 
                                <Button 
                                    className='navBar-link-product'
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    >{page.page}
                                </Button>
                                <Menu  
                                    aria-label="text button group"
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}>
                                    <MenuItem size="large" className='navBar-list' onClick={handleClose}>
                                        <Link className="navBar-link" to={`/crema`}>Crema</Link>
                                    </MenuItem>
                                    <MenuItem size="large" className='navBar-list' onClick={handleClose}>
                                        <Link className="navBar-link" to={`/aceite`}>Aceite</Link>
                                    </MenuItem>
                                    <MenuItem size="large" className='navBar-list' onClick={handleClose}>
                                        <Link className="navBar-link" to={`/pet`}>Mascotas</Link>
                                    </MenuItem>
                                </Menu>
                            </li>
                            ) : (
                            <li key={page.id}>
                                <Button size="large" className='navBar-list'>
                                    <Link className="navBar-link" to={page.path}>{page.page}</Link>
                                </Button>
                            </li>
                            )
                        )
                    })
                }
                </ul>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar
