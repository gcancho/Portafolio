import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass } from '@fortawesome/free-brands-svg-icons'

const CardSkill = ({miIcono, texto}) => {
    return (
        <article className="card-skill">
            <FontAwesomeIcon icon={miIcono} className="card-skill__icono"/>
            <label className="card-skill__texto">{texto}</label>
        </article>
    );
}

export default CardSkill;