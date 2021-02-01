import React from 'react';
import CardSkill from './CardSkill';
import Datos from './Datos';

const Presentacion = () => {
    return (
        <section className="presentacion" id="presentacion">
            <h2 className="presentacion__subtitulo">Portafolio</h2>
            <div className="presentacion__personal">
                <img className="presentacion__imagen" src="" alt="" />
                <div className="presentacion__descripcion">
                    <h3 className="presentacion__nombre">Hola soy Giovanni Cancho</h3>
                    <p className="presentacion__descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id libero ipsa qui quia. Laboriosam natus, odio illo sed, debitis, blanditiis reiciendis harum repellendus eaque nesciunt saepe unde architecto minus a.</p>
                    <Datos />
                </div>
            </div>
            <div className="presentacion__cards">
                <CardSkill/>
                <CardSkill/>
                <CardSkill/>
                <CardSkill/>
                <CardSkill/>
                <CardSkill/>
            </div>
        </section>
    );
}

export default Presentacion;