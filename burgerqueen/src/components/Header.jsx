import React from 'react'
import Logo from '../img/Logo.png'
import { Link } from "react-router-dom";

//componente del header que ingresa el logo.
const Header = () => {
    return (
        <div>
            <header id="banner">
                <Link to="/">
                    <img id="logoBanner" src={Logo} alt="logoBurgerQueen"/>
                </Link>
            </header>
        </div>
    )
}

export default Header
