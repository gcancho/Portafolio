import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const BotonCard = ({ link}) => {
    return (
        <>
            <a target="_blank" href={link} className="card-portafolio__boton">Ver proyecto</a>
            <a target="_blank" href={link} className="card-portafolio__boton card-portafolio__boton--icono">
                <FontAwesomeIcon icon={faGithub}/>Ver proyecto</a>
        </>
    );
}

export default BotonCard;