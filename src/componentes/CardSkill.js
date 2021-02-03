import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass } from '@fortawesome/free-brands-svg-icons'

const CardSkill = ({miIcono}) => {
    return (
        <article className="card-skill">
            <FontAwesomeIcon icon={miIcono} className="card-skill__icono"/>
            <label className="card-skill__texto"></label>
        </article>
    );
}

export default CardSkill;