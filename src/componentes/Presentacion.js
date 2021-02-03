import React from 'react';
import CardSkill from './CardSkill';
import Datos from './Datos';
import ImagenGio from './../imagenes/gio.jpg'
import { faHtml5, faReact, faSass, faFigma, faCss3, faPhp } from '@fortawesome/free-brands-svg-icons'

const Presentacion = () => {
    return (
        <section className="presentacion" id="presentacion">
            <div className="presentacion__wrap wrap">
                <h2 className="presentacion__subtitulo subtitulo">Sobre mí</h2>
                <div className="presentacion__personal">
                    <img className="presentacion__imagen" src={ImagenGio} alt="" />
                    <div className="presentacion__descripcion">
                        <h3 className="presentacion__nombre">Hola soy Giovanni Cancho</h3>
                        <p className="presentacion__descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id libero ipsa qui quia. Laboriosam natus, odio illo sed, debitis, blanditiis reiciendis harum repellendus eaque nesciunt saepe unde architecto minus a.</p>
                        <Datos />
                    </div>
                </div>
                <div className="presentacion__cards">
                    <CardSkill miIcono={faHtml5} />
                    <CardSkill miIcono={faCss3}/>
                    <CardSkill miIcono={faReact}/>
                    <CardSkill miIcono={faFigma}/>
                    <CardSkill miIcono={faSass}/>
                    <CardSkill miIcono={faPhp}/>
                </div>
            </div>
        </section>
    );
}

export default Presentacion;