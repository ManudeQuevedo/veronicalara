import React from 'react'
import GoogleMap from '../components/contact/googleMaps'
import Form from '../components/contact/form'
import '../assets/styles/contact.css'

const Contact = () => {
   return (
       <React.Fragment>
          <div className="base-grid">
             <div className="content-basic">
                <div className="grid-2">
                   <div className="left">
                      <h1 className="contact-title">Contáctame</h1>
                      <h3 className="contact-text">
                         Cualquier duda, sugerencia o inquietud, estoy para servirte
                      </h3>
                   </div>
                   <div className="right">
                      <Form />
                   </div>
                </div>
                <div>
                   <h2 className="contact-subtitle">Hospital Ángeles México</h2>
                   <p className="contact-text">Dirección:</p>
                   <p className="contact-text">
                      Calle Agrarismo No. 208 <br />
                      Torre B Piso 8 Consultorio 853-1, Col. Escandón, C.P. 11800 CDMX,
                      Alcaldía Miguel Hidalgo
                   </p>
                   <h4 className="contact-important">
                      Agenda una cita hoy mismo al{" "}
                      <span className="contact-phone">5273-1290</span> con gusto
                      resolveré todas tus dudas
                   </h4>
                </div>
             </div>
          </div>
          <GoogleMap />
       </React.Fragment>
   );
}

export default Contact
