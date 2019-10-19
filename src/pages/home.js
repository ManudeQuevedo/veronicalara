import React from "react"
import "../assets/styles/home.css"
import { Link } from "react-router-dom"
import Veronica from '../assets/img/veronicalara.svg'

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="base-grid banner-home">
        <div className="content-basic">
          <div className="grid-2">
            <div className="left">
              <h1 className="title">Ginecología y Obstetricia.</h1>
              <h3 className="subtitle">
                Cédula Profesional: <strong>1708127</strong>
                <br />
                Cédula Especialidad: <strong>4452705</strong>
              </h3>
            </div>
            <div className="right">
              <img src={Veronica} alt="Verónica Lara Vaca" />
            </div>
          </div>
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-2">
            <div className="card-a">
              <div className="title">Servicios</div>
              <div className="text">
                Checa la amplia variedad de servicios integrales que tengo
                disponibles para ti y tu bebé, todos estos servicios son
                brindados con los más altos estándares de calidad.
              </div>
            </div>
            <div className="card-a">
              <div className="grid-1">
                <Link className="btn-bigger btn-ghost" to="/servicios">
                  Servicios
                </Link>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="learnMore base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <div className="work-together">Agenda tu cita</div>
            <div className="work-together3">
              <Link to="/contacto" className="btn-bigger btn-ghost">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home