import React from 'react';
const Datos = () => {
    return (
        <div className="datos" id="datos">
            <div className="datos__columna">
                <label className="datos__columna__item"><b>Nombre:</b> Giovanni Cancho</label>
                <label className="datos__columna__item"><b>Nacionalidad:</b> Peruana</label>
                <label className="datos__columna__item"><b>Carrera Universitaria:</b> Ingeniería de Sistemas</label>
            </div>
            <div className="datos__columna">
                <label className="datos__columna__item"><b>Celular:</b> 955427033</label>
                <label className="datos__columna__item"><b>Ciudad:</b> Lima</label>
                <label className="datos__columna__item"><b>Especialidad:</b> Desarrollo Front-End</label>
            </div>
        </div>
    );
}

export default Datos;