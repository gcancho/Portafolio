import React from 'react';
import CardPortafolio from './CardPortafolio';

const Portafolio = () => {
    return (
        <section className="portafolio">
            <h2 className="portafolio__subtitulo">Portafolio</h2>
            <div className="portafolio__lista">
                <CardPortafolio/>
                <CardPortafolio/>
                <CardPortafolio/>
                <CardPortafolio/>
                <CardPortafolio/>
                <CardPortafolio/>
            </div>
        </section>
    );
}

export default Portafolio;