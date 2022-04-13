import React from 'react';
import './NavBar.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";
import pages from '../../pages/pages';


const NavBar = () => {

    return(
        <div className='navBar'>
                    <h1 className='brand'>
                        <Link className="navBar-link" to={"/home"}>GrowNoGrow</Link>
                    </h1>
                    <ButtonGroup variant="text" aria-label="text button group" className='navBar-list'>
                        <Button size="large" className='navBar-list'>
                            <Link className="navBar-link" to={`/crema`}>Crema</Link>
                        </Button>
                        <Button size="large" className='navBar-list'>
                            <Link className="navBar-link" to={`/aceite`}>Aceite</Link>
                        </Button>
                        <Button size="large" className='navBar-list'>
                            <Link className="navBar-link" to={`/pet`}>Pet</Link>
                        </Button>

                        {pages.map( (page)=> {
                            return(
                        <Button size="large" className='navBar-list' key={page.id}>
                            <Link className="navBar-link" to={page.path}>{page.page}</Link>
                        </Button>
                                )
                            })
                        }
                        <CartWidget />
                    </ButtonGroup>
                </div>
    )
}

export default NavBar
