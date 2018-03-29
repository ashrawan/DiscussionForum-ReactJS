import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../logo.svg';

class navigation extends Component {
    render() {
        return (
<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/"><img src={logo} className="user-img rounded-circle img-fluid" alt="userImage"/></Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home
                        <span className="sr-only">(current)</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/forum">Forum</NavLink>
                </li>
                <li className="nav-item pull-right">
                    <Link className="nav-link"  to={"/user"}>Users</Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
               
            </ul>
        </div>
    </nav>
    {this.props.children}
</div>
        );
    }
}

export default navigation;