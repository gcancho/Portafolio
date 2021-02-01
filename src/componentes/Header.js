import React from 'react';
import Menu from './Menu';
import logo from './../imagenes/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap wrap">
                <div className="header__barra">
                    <a className="header__logo" src={logo}>
                        {/* <img className="header__imagen"  alt="" /> */}
                    </a>
                    <Menu />
                </div>
            </div>
        </header>
    );
}

export default Header;