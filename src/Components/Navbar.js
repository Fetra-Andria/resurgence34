import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { DiFsharp } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { Button } from './Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(true); 

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    },[])
    return (
        <IconContext.Provider value={{ color : '#fff'}}>
            <nav className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' >
                        RESURGENCES34
                        <DiFsharp className='navbar-icon'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes className='fa-times' /> : <FaBars className='fa-bars' />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/a-propos-de-nous' className='nav-links' onClick={closeMobileMenu}>
                                A-propos-de-nous
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/contact' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>CONTACT</Button>
                                </Link>
                            ) : (
                                <Link to='/contact' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>CONTACT</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
             </nav>
        </IconContext.Provider>
    );
};

export default Navbar;