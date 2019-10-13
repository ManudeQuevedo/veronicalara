import React from "react"
import "../assets/styles/about.css"
import Picture from "../assets/img/dra-1.jpeg"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const About = props => {
  return (
    <React.Fragment>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-2">
            <div className="left">
              <h1 className="about-title">
                Conoce mi experiencia <br />
                como Ginecóloga <br />y Obstetra.
              </h1>
              <h3 className="about-text">
                Certificada por el Colegio Mexicano de Ginecología y Obstetricia
              </h3>
            </div>
            <div className="right">
              <div className="about-center">
                <img src={Picture} alt="Verónica Lara Vaca" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <p className="about-text">
            Egresada del Instituto Politécnico Nacional (IPN), posteriormente
            realicé la Especialidad en Ginecología y Obstetricia en la
            Universidad Nacional Autónoma de México (UNAM), además cuento con
            estudios de Alta Especialidad en Colposcopia que realizó en el
            extranjero.
          </p>
          <p className="about-text">
            He sido ponente en cursos de Cáncer Cervicouterino y VPH además de
            haber asistido a diversos congresos en temas relacionados en
            Medicina Materno Fetal. Asimismo la Dra, Verónica Lara Vaca, está
            certificada por el Colegio de Ginecología y Obstetricia.
          </p>
        </div>
      </div>
      <div>
        <h1 className="about-title-bottom">
          Educación y <br />
          Experiencia Profesional
        </h1>
        <div className="timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Septiembre de 1983 a Julio de 1988"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h2 className="vertical-timeline-element-title">
                Médico Cirujano y Partero
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                Escuela Superior de Medicina del Instituto Politécnico Nacional
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Marzo de 1991 a Febrero de 1994"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h2 className="vertical-timeline-element-title">
                Gineco-Obstetricia
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                Tacuba, Hospital ISSSTE
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="De 1995 a 1999"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h2 className="vertical-timeline-element-title">
                Medico de Base en Atención Médica Continua
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                Clínica de especialidades: Inidanilla de ISSSTE, Ciudad de
                México
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Noviembre de 1990 a Agosto de 1999"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h2 className="vertical-timeline-element-title">
                Especialidad en Colposcopía Diagnóstica y Operatoria
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                Dieu Hospital, Lyon Francia
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Noviembre de 1990 a Agosto de 1999"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Especialidad en Cirugía Laparoscópica
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dieu Hospital, Lyon Francia
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Mayo del 2000 a la Actualidad"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Medico Especialista (No familiar)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Unidad de Alta Especialidad de Ginecología y Obstetricia Luis
                Castelazo Ayala (Gineco 4) IMSS
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="del 2010 a la Actualidad"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Médico de base en Ginecología y Obstetricia
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Centro Médico Nacional 20 de Noviembre ISSSTE
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="del 2010 a la Actualidad"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Médico de base en Ginecología y Obstetricia
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Centro Médico Nacional 20 de Noviembre ISSSTE
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Del 1 de Agosto del 2007 al 31 de Enero del 2008"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Adiestramiento en Ultrasonografía Gineco-Obstétrica y
                Ultrasonido Doppler
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hospital de Gineco-obstetricia Castelazo Ayala No. 4 del IMSS
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Del 2009 a la actualidad"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Miembro titular y Certificación por el Colegio Mexicano de
                Ginecología y Obstetricia
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Colegio Mexicano de Ginecología y Obstetricia (COMEGO)
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Del 2013 a la actualidad"
              iconStyle={{ background: "rgb(66, 198, 186)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Médico Especialista en Ginecología y Obstetrícia
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hospital Ángeles México
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <div className="learnMore base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <div className="about-work-together2">Misión y Visión</div>
            <div className="about-work-together3">
              <p className="text">
                Otorgar un servicio de excelencia, ético, profesional y
                discreto, brindando el más alto y último esfuerzo para lograr
                nuestro principal objetivo: tu bienestar como paciente.
              </p>
              <p className="text">
                Ser tu mejor opción en prevención, enseñanza y tratamiento, en
                todo lo relacionado con el área de Ginecología y Obstetricia,
                para que los problemas de salud no sean más una preocupación
                para tí.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
