import React from "react"
import "../assets/styles/promotions.css"

const Promotions = props => {
  return (
    <React.Fragment>
      <div className="base-grid banner-home">
        <div className="content-basic">
          <div className="grid-1">
            <h1 className="title">Promociones vigentes</h1>
            <p className="subtitle">
              Promoción vigente del x al x de x del 2019
            </p>
          </div>
        </div>
      </div>
      <div className="base-grid">
        <div className="content-basic">
          <div className="grid-2">
            <div className="card-a">
              <div className="title">Promo 1</div>
            </div>
            <div className="card-a">
               <div className="title">Promo 2</div>
            </div>
            <div className="card-a">
               <div className="title">Promo 3</div>
            </div>
            <div className="card-a">
               <div className="title">Promo 4</div>
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="learnMore base-grid">
        <div className="content-basic">
          <div className="grid-1">
            <div className="work-together">Agenda tu cita</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Promotions;
