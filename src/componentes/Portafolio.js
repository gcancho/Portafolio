import React from 'react';
import CardPortafolio from './CardPortafolio';
import ImagenPortafolio2 from './../imagenes/portafolio-2.jpg';

const Portafolio = () => {
    return (
        <section className="portafolio" id="portafolio">
            <div className="portafolio__wrap wrap">
                <h2 className="portafolio__titulo titulo">Portafolio</h2>
                <div className="portafolio__lista">
                    <CardPortafolio imagen={ImagenPortafolio2} nombreWebsite="E-Commerce Website" colorCard="" />
                    <CardPortafolio imagen={ImagenPortafolio2} nombreWebsite="E-Commerce Website" colorCard="" />
                    <CardPortafolio imagen={ImagenPortafolio2} nombreWebsite="E-Commerce Website" colorCard="" />
                    <CardPortafolio imagen={ImagenPortafolio2} nombreWebsite="E-Commerce Website" colorCard="" />
                    <CardPortafolio imagen={ImagenPortafolio2} nombreWebsite="E-Commerce Website" colorCard="" />
                    <CardPortafolio imagen={ImagenPortafolio2} nombreWebsite="E-Commerce Website" colorCard="" />
                </div>
            </div>
        </section>
    );
}

export default Portafolio;