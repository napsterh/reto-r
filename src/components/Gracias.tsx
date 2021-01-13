import React from 'react';
import Logo from '../assets/logo-rimac.png'
import Familia from '../assets/Illustration.png'
import Gracias from '../assets/gracias.png'

function Pariente(): JSX.Element {

    return (
        <div className="gracias">
            <div className="grid-gracias">
                <div className="descripcion-gracias">
                    <div className="descripcion-gracias__familia">
                        <img src={Familia} alt=""/>
                    </div>
                    <div className="descripcion-gracias__logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="formulario-gracias">
                    <div className="formulario-gracias__gracias">
                        <img src={Gracias} alt=""/>
                    </div>
                    <p className="formulario-gracias__titulo">
                        ¡Gracias por<span className="formulario-gracias__color"> confiar en nosotros!</span>
                    </p>
                    <h5 className="formulario-gracias__subtitulo">
                    Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo en las siguientes 48 horas.
                    </h5>
                    <div className="formulario-gracias__form__btn">
                            <input type="submit" value="Ir a salud Rimac" className=" solid"/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Pariente;