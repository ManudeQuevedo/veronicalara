import './App.css'
import "normalize.css"
import React from 'react'
import Layout from './components/layout'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import Promotions from './pages/promotions'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={About} />
          <Route exact path="/servicios" component={Services} />
          <Route exact path="/promociones" component={Promotions} />
          <Route exact path="/contacto" component={Contact} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App
