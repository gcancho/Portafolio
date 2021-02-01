import React from 'react';
import hero from './../imagenes/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Inicio = () => {
    return (
        <section className="inicio" id="inicio">
            <div className="inicio__saludo">
                <h1 className="inicio__nombre">Hola soy Giovanni !</h1>
                <label className="inicio__nombre inicio__nombre--profesion">Desarrollador Front-End</label>
                <a href="#presentacion" className="boton boton--margin">
                    <FontAwesomeIcon className="boton__icono boton__icono--caretdown" icon={faCaretDown}/>Leer más</a>
            </div>
            {/* <img src="assets/undraw_new_message_2gfk.svg" class="footer__img" alt="Imagen ilustracion Contacto"></img> */}
            <img className="inicio__picture" src={hero} alt="" />
        </section>
    );
}

export default Inicio;