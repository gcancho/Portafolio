import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const BotonCard = ({ link1, link2, texto, icono, nombreClase}) => {
    return (
        <>
            <a target="_blank" href={link1?link1:link2} className={nombreClase}>
                <FontAwesomeIcon icon={icono}/>
                {texto}
            </a>
        </>
    );
}

export default BotonCard;