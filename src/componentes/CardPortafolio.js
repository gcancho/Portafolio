import React from 'react';
import BotonCard from './BotonCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const CardPortafolio = ({imagen, nombreWebsite, clase, link1, link2}) => {
    return (
        <article className="card-portafolio">
            <img className={clase} src={imagen} alt="" />
            <div className="card-portafolio__footer">
                <BotonCard link1={link1} texto="Ver proyecto" nombreClase={"card-portafolio__boton"}/>
                <BotonCard link2={link2} texto="Ver código" nombreClase={"card-portafolio__boton card-portafolio__boton--icono"} icono={faGithub}/>
                <label className="card-portafolio__titulo">{nombreWebsite}</label>
            </div>
        </article>
    );
}

export default CardPortafolio;