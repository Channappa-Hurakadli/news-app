import React, { Component } from 'react'
import News from './News'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
 
  constructor(){
    super();
    this.state = {
      categoryHead:'Categories'
    }
    this.changeContent = this.changeContent.bind(this);
  }
  

  changeContent=(evt)=>{
    this.setState({categoryHead:evt.target.text})
  }
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
                        {this.state.categoryHead}
                    </a>
                    <ul className="dropdown-menu bg-dark">
                        <li><Link className="dropdown-item text-light" onClick={this.changeContent} to="/sports">Sports</Link></li>
                        <li><Link className="dropdown-item text-light" onClick={this.changeContent} to="/health">Health</Link></li>
                        <li><Link className="dropdown-item text-light" onClick={this.changeContent} to="/general">General</Link></li>
                        <li><Link className="dropdown-item text-light" onClick={this.changeContent} to="/science">Science</Link></li>
                        <li><Link className="dropdown-item text-light" onClick={this.changeContent} to="/technology">Technology</Link></li>
                        <li><Link className="dropdown-item text-light" onClick={this.changeContent} to="/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item text-light" onClick={this.changeContent} to="/business">Business</Link></li>
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
