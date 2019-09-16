import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <>
        <nav>
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          <NavLink to="/about" activeClassName="active" exact>About</NavLink>
          <NavLink to="/contact" activeClassName="active" exact>contact</NavLink>
        </nav>
        <div className="container">
          <Route exact path="/">
            {({ match }) => {
              return (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Home />
                  </div>
                </CSSTransition>
              )
            }}
          </Route>
          <Route exact path="/about">
            {({ match }) => {
              return (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <About />
                  </div>
                </CSSTransition>
              )
            }}
          </Route>
          <Route exact path="/contact">
            {({ match }) => {
              return (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Contact />
                  </div>
                </CSSTransition>
              )
            }}
          </Route>
        </div>
      </>
    </Router>
  );
}

export default App;
