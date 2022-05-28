import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {useNavigate} from 'react-router-dom';
import CategoryTCKD from './components/CategoryTCKD';
import World from './components/World';
import {BrowserRouter as Router, Switch, Routes, Link, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='App container'>
        <div className='Header'>
          <div className="HeaderTop">
            <a className="navbar-brand" href="#">2QV</a>
            <form className="d-flex" role="search">
                <input className="search form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <nav className="navbarBig navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/About">About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/Contact">Contact</Link>
                  </li>
              </ul>
            </div>
          </nav>
        </div>

        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/About" component={<About/>}></Route>
          <Route path="/Contact" component={<Contact/>}></Route>
        </Switch>

        <div className='World'>
          <World/>
          <CategoryTCKD/>
        </div>
        <div className='World'>
          <World/>
        </div>
        
      </div>
    </Router>
  );
}

export default App;