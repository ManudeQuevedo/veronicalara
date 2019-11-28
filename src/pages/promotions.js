import React from "react"
import "../assets/styles/promotions.css"

const Promotions = props => {
  return (
      <React.Fragment>
        <div className="base-grid banner-promotions">
          <div className="content-basic">
            <div className="grid-1">
              <h1 className="promotion-title">Promociones vigentes</h1>
            </div>
          </div>
        </div>
        <div className="base-grid">
          <div className="content-basic">
            <div className="grid-3">
              <div className="card-promotion">
                <div className="promotion-title">
                  Exploración de mama y<br />
                  Colposcopia gratis
                </div>
                <div className="grid-1">
                  <p className="promotion-text">
                    * Todos los servicios incluyen consulta gratis
                  </p>
                </div>
                <div className="promotion-footer-title">
                  $800
                  <p className="promotion-footer-text">* Precio regular $1,800</p>
                </div>
              </div>

              <div className="card-promotion">
                <div className="promotion-title">
                  Ultrasonido primer
                  <br />
                  Embarazo
                </div>
                <div className="grid-1">
                  <p className="promotion-text">
                    * Todos los servicios incluyen consulta gratis
                  </p>
                </div>
                <div className="promotion-footer-title">
                  $800
                  <p className="promotion-footer-text">* Precio regular $1,500</p>
                </div>
              </div>

              <div className="card-promotion">
                <div className="promotion-title">
                  Carita de bebé en
                  <br />
                  3D y 4D
                </div>
                <div className="grid-1">
                  <p className="promotion-text">
                    * Todos los servicios incluyen consulta gratis
                  </p>
                </div>
                <div className="promotion-footer-title">
                  $800
                  <p className="promotion-footer-text">* Precio regular $1,500</p>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div className="learnMore base-grid">
          <div className="content-basic">
            <div className="grid-1">
              <div className="promotions-subfooter">
                Para agendar tu cita, llámanos al 
                <span className="contact-phone"> 5273-1290</span>, ó contáctame vía
                correo electrónico llenando el formulario en la sección de contacto con las dudas y/o promoción de tu interés, me contactaré contigo a la brevedad posible para dar seguimiento.
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
  );
};

export default Promotions;
