import React, { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import "./navbar.styles.css"

const checkActive = (location) => {
  if (!location) return false
  const { pathname } = location
  return pathname === "/"
}

export default (props) => {
  const [isTop, setIsTop] = useState(true)

  document.addEventListener("scroll", () => {
    if ((window.scrollY === 0) !== isTop) {
      setIsTop(window.scrollY === 0)
    }
  })

  useEffect(() => {
    setIsTop(window.scrollY === 0)
  }, [])

  useEffect(() => {
    const menu = document.getElementById("menu-responsive")
    const menuBurger = document.getElementById("burger-buttom")
    menuBurger.addEventListener(
      "click",
      e => {
        let isActive = menuBurger.classList.contains("is-active")
        if (isActive) {
          menuBurger.classList.remove("is-active")
          menu.classList.remove("is-active")
        } else {
          menuBurger.classList.add("is-active")
          menu.classList.add("is-active")
        }
      },
      []
    )

    menu.addEventListener("click", e => {
      menuBurger.classList.remove("is-active")
      menu.classList.remove("is-active")
    })
  }, [])

  return (
    <React.Fragment>
      <nav className={`top-menu ${isTop ? "" : "no-top"}`}>
        <div className="info-menu">
          <Link to="/promociones">
            ¡Click aquí para conocer las promociones del mes!
          </Link>
        </div>
        <div className="top-menu-wrapper">
          <div className="logo" />
          <div className="hamburger--3dxy" id="burger-buttom">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
          <div className="menuItems">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/acerca">
              <span>Conóceme</span>
            </NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/promociones">Promociones</NavLink>
            <NavLink to="/contacto">
              <span>Contacto</span>
            </NavLink>
          </div>
        </div>
        <div className="menuItems-responsive" id="menu-responsive">
          <div>
            <div className="menuItems-top-margin">
              <NavLink to="/" isActive={checkActive}>
                Inicio
              </NavLink>
              <NavLink to="/acerca">Conóceme</NavLink>
              <NavLink to="/servicios">Servicios</NavLink>
              <NavLink to="/promociones">Promociones</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}