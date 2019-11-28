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
            Ofrezco servicios de calidad capacitándome constantemente para poder
            brindarte la mejor atención sin poner en riesgo tu salud e
            integridad, usando tecnología de vanguardia haciéndote sentir
            segura y cómoda.
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
                    <li>Punto G</li>
                    <li>Sangrados Uterinos Anormales</li>
                    <li>
                      Miomatosis Uterina, Histerectomía abierta o Laparoscópica
                    </li>
                    <li>
                      Quistes de Ovario, tratamiento quirúrgico abierto o
                      Laparoscópico
                    </li>
                    <li>Síndrome de Ovario Poliquístico</li>
                    <li>Quistes benignos de mama</li>
                  </ul>
                </li>
                <li>
                  Tratamientos con <strong>Láser CO2</strong>
                  <ul>
                    <li>Rejuvenecimiento vaginal, Atrofia vaginal</li>
                    <li>Tratamiento para Incontinencia Urinaria de esfuerzo</li>
                    <li>Tensado vaginal, Vagina amplia</li>
                    <li>Tratamiento para lesiones pre-cancerosas en cervix</li>
                    <li>Condilomas anales, vulvares, vaginales y cervicales</li>
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
                <li>Parto Humanizado</li>
                <li>Cesárea</li>
                <li>Legrado uterino</li>
                <li>Control prenatal del embarazo normal y de alto riesgo</li>
                <li>Embarazo gemelar</li>
                <li>Ultrasonido de alta resolución 3D y 4D</li>
                <li>Ultrasonido de seguimiento, caritas 3D</li>
                <li>
                  Ultrasonido Genético o Estructural Primer Trimestre de 11
                  13.6 y duo.
                </li>
                <li>
                  Ultrasonido Estructural 2do Trimestre (Detecta alteraciones
                  estructurales de cerebro, corazón, abdomen y de extremidades)
                </li>
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
                  Tratamiento contra el Virus del Papiloma Humano (VPH) y/o
                  displacias cervicales, vaginales o valvulares
                </li>
                <li>Cirugía de Tumores benignos de mama</li>
                <li>
                  TRATAMIENTO CON LÁSER PARA LESIONES PRE-CANCEROSAS Y VERRUGAS
                  GENITALES
                </li>
                <li>Anoscopía alta resolución</li>
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
                <li>Pruebas de fertilidad femenina y masculina</li>
                <li>Seguimientos foliculares</li>
                <li>Inseminación Intrauterina</li>
                <li>Baja complejidad</li>
                <li>Extracción de Miomas y Polipos</li>
                <li>Tratamiento para el Climaterio y Menopausia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="learnMore base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <div className="work-together">
              Para saber precios llámame al
              <br />
              5273-1290
            </div>
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
