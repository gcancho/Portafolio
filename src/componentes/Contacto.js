import React from 'react';
import Footer from './Footer';
import Social from './Social';


const Contacto = () => {
    return (
        <>
            <section className="contacto" id="contacto">
                <div className="contacto__info">
                    <h2 className="contacto__titulo">¿Quieres contactarme?</h2>
                    <p className="contacto__descripcion"></p>
                    <Social/>
                </div>
                <img className="contacto__picture" src="" alt="" />
            </section>
            <Footer />
        </>
    );
}

export default Contacto;