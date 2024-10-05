import React, { Component } from 'react'
import News from './News'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
 


  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg shadow bg-dark ">
            <div className="container-fluid text-light">
                <Link className="navbar-brand text-light" to="/#">NewsMonkey</Link>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/features">Features</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu bg-dark">
                        <li><Link className="dropdown-item text-light" to="/sports">Sports</Link></li>
                        <li><Link className="dropdown-item text-light" to="/health">Health</Link></li>
                        <li><Link className="dropdown-item text-light" to="/general">General</Link></li>
                        <li><Link className="dropdown-item text-light" to="/science">Science</Link></li>
                        <li><Link className="dropdown-item text-light" to="/technology">Technology</Link></li>
                        <li><Link className="dropdown-item text-light" to="/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item text-light" to="/business">Business</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Source
                    </a>
                    <ul className="dropdown-menu bg-dark">
                        <li><a className="dropdown-item text-light" href="#">BBC News</a></li>
                        <li><a className="dropdown-item text-light" href="#">CNN</a></li>
                        <li><a className="dropdown-item text-light" href="#">Fox News</a></li>
                        <li><a className="dropdown-item text-light" href="#">Google News</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
