import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component{
    render(){
        return(
            <ul className="top-nav-container">
                <Link to={`/dashboard/:userId`} className="nav-link"><li>Dashboard</li></Link>
                <Link to={`/inventory/:userId`} className="nav-link"><li>Inventory</li></Link>
                <Link to={`/trades`} className="nav-link"><li>Trades</li></Link>
                <Link to={`/teams`} className="nav-link"><li>Team Board</li></Link>
            </ul>
        );
    }
}