import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Boton = ({icono, texto, link}) => {
    return (
        <a href="#presentacion" className="boton boton--margin">
            <FontAwesomeIcon className="boton__icono boton__icono--caretdown" icon={icono} />{texto}</a>
    );
}

export default Boton;