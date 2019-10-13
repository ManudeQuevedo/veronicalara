import React from "react"
import "./footer.styles.css"

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className="footer-bottom base-grid">
        <div className="content-basic">
          <div className="footer-copyrights-left">
            &copy; {new Date().getFullYear()} <strong>Dra. Veronica Lara</strong>
          </div>
          <div className="footer-copyrights-right">
            Developed by &nbsp;
            <a
              href="https://www.manudequevedo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manu de Quevedo
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer