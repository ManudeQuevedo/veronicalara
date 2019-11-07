import React from "react"
import "../assets/styles/promotions.css"

const Promotions = props => {
  return (
    <React.Fragment>
      <div className="base-grid banner-promotions">
        <div className="content-basic">
          <div className="grid-1">
            <h1 className="promotion-title">Promociones vigentes</h1>
            <p className="subtitle">
              Promociones vigente del 01 al 30 de Noviembre del 2019
            </p>
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
              Para agendar tu cita, contáctame proporcionandome tu nombre,
              correo y número telefonico así como la promoción de tu interes, me
              comunicaré a la brevedad posible contigo para agendar tu cita
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Promotions;
