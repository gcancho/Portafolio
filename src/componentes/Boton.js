import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Boton = () => {
    return (
        <a href="#contacto" className="boton boton--margin">
            <FontAwesomeIcon className="boton__icono boton__icono--caretdown" icon={faCaretDown} />Leer más</a>
    );
}

export default Boton;