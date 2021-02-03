import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu__hamburger">
                <FontAwesomeIcon icon={faBars} className="menu__icono menu__icono--absolute" />
            </div>
            <ul className="menu__lista">
                <li className="menu__item"><a href="#inicio" className="menu__link">Inicio</a></li>
                <li className="menu__item"><a href="#presentacion" className="menu__link">Sobre mí</a></li>
                <li className="menu__item"><a href="#portafolio" className="menu__link">Portafolio</a></li>
                <li className="menu__item"><a href="#contacto" className="menu__link">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Menu;