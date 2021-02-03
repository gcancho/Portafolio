import React from 'react';
import hero from './../imagenes/hero.svg';
import Boton from './Boton';

const Inicio = () => {
    return (
        <section className="inicio" id="inicio">
            <div className="inicio__wrap wrap">
                <div className="inicio__saludo">
                    <h1 className="inicio__nombre">Hola soy Giovanni</h1>
                    <label className="inicio__nombre inicio__nombre--profesion">Desarrollador Front-End</label>
                    <Boton />
                </div>
               
                {/* <img src="assets/undraw_new_message_2gfk.svg" class="footer__img" alt="Imagen ilustracion Contacto"></img> */}
                <img className="inicio__picture" src={hero} alt="hero" />
            </div>
        </section>
    );
}

export default Inicio;