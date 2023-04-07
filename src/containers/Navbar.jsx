import React, { useState } from 'react'
import '../styles/Navbar.scss';
import { MdAccountBox } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdEast } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { Link } from 'react-router-dom';

import NavMenu from './NavMenu';

export default function Navbar() {

    const [menuValue, setMenuValue] = useState(false);

    const openModal = () => {
        setMenuValue(true);
    }
    const closeModal = () => {
        setMenuValue(false);
    }

    return (
        <>
            <header className='nav-main'>
                <nav className='nav'>
                    <Link to="/" className='link-nav-home' onClick={closeModal}><MdAccountBox className='icon-nav'/></Link>
                    {menuValue ? <MdClear onClick={closeModal} className='icon-nav'/> : <MdOutlineMenu className='icon-nav' onClick={openModal}/>}
                    <h4 className='h4-nav'><span className='span-nav'>© 2023</span> TomásLeggire</h4>
                </nav>
            </header>
            <NavMenu menuValue={menuValue} setMenuValue={setMenuValue}/>
            <MdEast className='icon-nav nav-mobile'/>
        </>
    )
}