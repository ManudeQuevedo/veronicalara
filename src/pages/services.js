import React from "react"
import "../assets/styles/services.css"
import { Link } from "react-router-dom"
import Equipment from "../assets/img/bg-main-page.svg"
import Obstetricia from "../assets/img/obstetricia.png"
import Ginecologia from '../assets/img/Ginecologia.png'
import Colposcopia from "../assets/img/colposcopia.png"
import Infertilidad from "../assets/img/infertilidad.png"

const Services = props => {
  return (
    <React.Fragment>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-2">
            <div className="left">
              <h1 className="services-title">Mis Servicios</h1>
              <h3 className="services-text">
                Cuento con una ámplia variedad de servicios integrales para ti
              </h3>
            </div>
            <div className="right">
              <div className="services-center">
                <img src={Equipment} alt="Equipo de Ultrasonido" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <p className="services-text">
            Ofrezco servicios de calidad, me capacito constantemente para poder
            brindarte la mejor atención sin poner en riesgo tu salud e
            integridad, usando tecnología de vanguardia, haciéndote sentir
            tranquila.
          </p>
        </div>
      </div>
      <div className="content-basic">
        <div className="grid-2">
          <div className="card-c">
            <div className="service-icons">
              <img className="img" src={Ginecologia} alt="Ginecología" />
            </div>
            <h3>Ginecología</h3>
            <div className="text">
              <ul className="services-list">
                <li>
                  Ginecología Regenerativa
                  <ul>
                    <li>Vaginoplastia</li>
                    <li>Labioplastia</li>
                    <li>Blanqueamiento vulvar</li>
                    <li>Rejuvenecimiento vaginal con laser</li>
                    <li>Punto G</li>
                  </ul>
                </li>
                <li>
                  Tratamientos con laser
                  <ul>
                    <li>Lesiones precursoras de cancer</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-c">
            <div className="service-icons">
              <img className="img" src={Obstetricia} alt="Ginecología" />
            </div>
            <h3>Obstetricia</h3>
            <div className="text">
              <ul className="services-list">
                <li>Partos humanizados</li>
                <li>Cesáreas</li>
                <li>Legrados uterinos</li>
                <li>Control prenatal de embarazo</li>
                <li>Embarazo gemelar</li>
                <li>Ultrasonido de alta resolución</li>
                <li>Ultrasonido 3D y 4D</li>
                <li>Ultrasonido de bebé 3D y 4D</li>
                <li>Ultrasonido del crecimiento</li>
              </ul>
            </div>
          </div>
          <div className="card-c">
            <div className="service-icons">
              <img className="img" src={Colposcopia} alt="Ginecología" />
            </div>
            <h3>Colposcopía</h3>
            <div className="text">
              <ul className="services-list">
                <li>
                  Detección del virus del papiloma humano (VPH) con colposcopía
                  o pruebas moleculares
                </li>
                <li>
                  Tratamiento contra el virus del papiloma humano (VPH) y/o
                  displacias cervicales, vaginales o valvulares
                </li>
                <li>Quitar tumores benignos de la mama</li>
                <li>Tratamiento con laser para verrugas genitales</li>
                <li>Lesiones pre-cancerosas</li>
              </ul>
            </div>
          </div>
          <div className="card-c">
            <div className="service-icons">
              <img className="img" src={Infertilidad} alt="Ginecología" />
            </div>
            <h3>Infertilidad</h3>
            <div className="text">
              <ul className="services-list">
                <li>Pruebas de fertilidad femenina</li>
                <li>Seguimientos foliculares</li>
                <li>Inseminación artificial</li>
                <li>Baja complejidad</li>
                <li>Miomectomías</li>
                <li>Tratamiento para el climaterio y Menopausia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="learnMore base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <div className="work-together">Para saber precios</div>
            <div className="work-together3">
              <Link to="/contacto" className="btn-bigger btn-ghost">
                Contáctame
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
