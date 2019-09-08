import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact }
];

function App() {
  return (
    <Router>
      <>
        <div>
          {routes.map(route => {
            return (
              <NavLink
                key={route.path}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </NavLink>
            );
          })}
        </div>
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </>
    </Router>
  );
}

export default App;
