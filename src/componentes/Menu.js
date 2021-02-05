import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    const [menuMobile, cambiarMenuMobile] = useState(false);
    const toogleMenu = () =>{
        cambiarMenuMobile(!menuMobile);
    }
    const cerrarMenu = () =>{
        cambiarMenuMobile(false);
    }
    return (
        <nav className="menu">
            <div className="menu__hamburger" onClick={toogleMenu}>
                <FontAwesomeIcon icon={faBars} className="menu__icono menu__icono--absolute" />
            </div>
            {/* <ul className="menu__lista"> */}
            <ul className={menuMobile? "menu__lista active" : "menu__lista"}>
                <li className="menu__item"><a href="#inicio" className="menu__link" onClick={cerrarMenu}>Inicio</a></li>
                <li className="menu__item"><a href="#presentacion" className="menu__link" onClick={cerrarMenu}>Sobre mí</a></li>
                <li className="menu__item"><a href="#portafolio" className="menu__link" onClick={cerrarMenu}>Portafolio</a></li>
                <li className="menu__item"><a href="#contacto" className="menu__link" onClick={cerrarMenu}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Menu;