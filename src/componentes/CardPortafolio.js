import React from 'react';

const CardPortafolio = ({imagen, colorCard, nombreWebsite}) => {
    return (
        <article className="card-portafolio" style={{background: colorCard}}>
            <img className="card-portafolio__imagen" src={imagen} alt="" />
            <div className="card-portafolio__footer">
                <label className="card-portafolio__titulo">{nombreWebsite}</label>
                <a className="card-portafolio__boton"></a>
            </div>
        </article>
    );
}

export default CardPortafolio;