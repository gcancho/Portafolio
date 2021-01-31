import React from 'react';

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu__hamburger">
                <i className="menu__icon"></i>
            </div>
            <ul className="menu__lista">
                <li className="menu__item"><a className="menu__link">Inicio</a></li>
                <li className="menu__item"><a className="menu__link">Sobre mí</a></li>
                <li className="menu__item"><a className="menu__link">Portafolio</a></li>
                <li className="menu__item"><a className="menu__link">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Menu;