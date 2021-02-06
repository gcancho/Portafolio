import React from 'react';
import CardSkill from './CardSkill';
import Datos from './Datos';
import ImagenGio from './../imagenes/gio.jpg'
import { faHtml5, faReact, faSass, faFigma, faCss3, faPhp } from '@fortawesome/free-brands-svg-icons';

const Presentacion = () => {
    return (
        <section className="presentacion" id="presentacion">
            <div className="presentacion__wrap wrap">
                <h2 className="presentacion__titulo titulo">Sobre mí</h2>
                <div className="presentacion__personal">
                    <img className="presentacion__imagen" src={ImagenGio} alt="" />
                    <div className="presentacion__descripcion">
                        <h3 className="presentacion__nombre">Hola soy Giovanni Cancho</h3>
                        <p className="presentacion__parrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id libero ipsa qui quia. Laboriosam natus, odio illo sed, debitis, blanditiis reiciendis harum repellendus eaque nesciunt saepe unde architecto minus a.</p>
                        {/* <Datos /> */}
                    </div>
                </div>
                {/* <div className="presentacion__cards">
                    <CardSkill miIcono={faHtml5} texto="Html 5"/>
                    <CardSkill miIcono={faCss3} texto="Css 3"/>
                    <CardSkill miIcono={faReact} texto="React JS"/>
                    <CardSkill miIcono={faFigma} texto="Figma"/>
                    <CardSkill miIcono={faSass} texto="Sass"/>
                    <CardSkill miIcono={faPhp} texto="Php"/>
                </div> */}
            </div>
        </section>
    );
}

export default Presentacion;