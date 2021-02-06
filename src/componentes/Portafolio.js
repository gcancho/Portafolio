import React from 'react';
import CardPortafolio from './CardPortafolio';
import ImagenPortafolio1 from './../imagenes/portafolio-1.jpg';
import ImagenPortafolio2 from './../imagenes/portafolio-2.jpg';
import ImagenPortafolio3 from './../imagenes/portafolio-3.jpg';
import ImagenPortafolio4 from './../imagenes/portafolio-4.jpg';
import ImagenPortafolio5 from './../imagenes/portafolio-5.jpg';
import ImagenPortafolio6 from './../imagenes/portafolio-6.jpg';

const Portafolio = () => {
    return (
        <section className="portafolio" id="portafolio">
            <div className="portafolio__wrap wrap">
                <h2 className="portafolio__titulo titulo">Portafolio</h2>
                <div className="portafolio__lista">
                    <CardPortafolio clase={"card-portafolio__imagen"} imagen={ImagenPortafolio1} nombreWebsite="Es-Commerce Website" link1="https://gcancho.github.io/blog-wordpress/" link2="https://github.com/gcancho/Blog-wordpress" />
                    <CardPortafolio clase={"card-portafolio__imagen"} imagen={ImagenPortafolio2} nombreWebsite="E-Commerce Website"  link1="https://gcancho.github.io/Hotel-Ventura/" link2="https://github.com/gcancho/Hotel-Ventura"/>
                    <CardPortafolio clase={"card-portafolio__imagen"} imagen={ImagenPortafolio6} nombreWebsite="E-Commerce Website"  link1="https://gcancho.github.io/Mis-mascotas/" link2="https://github.com/gcancho/Mis-mascotas"/>
                    {/* <CardPortafolio clase={"card-portafolio__imagen"} imagen={ImagenPortafolio4} nombreWebsite="E-Commerce Website" colorCard="" />
                    <CardPortafolio clase={"card-portafolio__imagen"} imagen={ImagenPortafolio5} nombreWebsite="E-Commerce Website" colorCard="" />
                    <CardPortafolio clase={"card-portafolio__imagen"} imagen={ImagenPortafolio6} nombreWebsite="E-Commerce Website" colorCard="" /> */}
                </div>
            </div>
        </section>
    );
}

export default Portafolio;