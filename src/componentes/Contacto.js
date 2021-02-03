import React from 'react';
import Footer from './Footer';
import Social from './Social';
import pictureContacto from './../imagenes/globos.svg';
import { faHtml5, faReact, faSass, faFigma, faCss3, faPhp } from '@fortawesome/free-brands-svg-icons';

const Contacto = () => {
    return (
        <>
            <section className="contacto" id="contacto">
                <div className="contacto__wrap wrap">
                    <div className="contacto__info">
                        <h2 className="contacto__titulo titulo">¿Quieres contactarme?</h2>
                        <p className="contacto__descripcion">Te dejo mis redes sociales y mi correo electrónico :</p>
                        <p className="contacto__correo">giocancho.contacto@gmail.com</p>
                        <Social />
                    </div>
                    <img className="contacto__picture" src={pictureContacto} alt="" />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contacto;