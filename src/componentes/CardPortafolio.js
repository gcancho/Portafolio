import React from 'react';
import Boton from './Boton';
import BotonCard from './BotonCard';

const CardPortafolio = ({imagen, colorCard, nombreWebsite, clase, link}) => {
    return (
        <article className="card-portafolio" style={{background: colorCard}}>
            <img className={clase} src={imagen} alt="" />
            <div className="card-portafolio__footer">
                <BotonCard link={link} />
                <label className="card-portafolio__titulo">{nombreWebsite}</label>
            </div>
        </article>
    );
}

export default CardPortafolio;