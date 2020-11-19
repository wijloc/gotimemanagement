import React from 'react';
import './styles/App.css';
import Home from './home'
import Tools from './tools'
import About from './about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      <div className="body">
        <div className="content">
          <div className="area-util">
            <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/">Início</Link>
                  </li>
                  <li>
                    <Link to="/tools">Ferramentas</Link>
                  </li>
                  <li>
                    <Link to="/about">Sobre</Link>
                  </li>
                </ul>
              </div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/tools">
                  <Tools />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
