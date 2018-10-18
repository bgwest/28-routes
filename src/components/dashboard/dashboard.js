import "@babel/polyfill";
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return (

          <nav className="sidenav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/newnote">New Note</Link></li>
              <li><Link to="/managenotes">Manage Notes</Link></li>
              {/* <li><Link to="/deletenote"> Delete Note </Link></li> */}
            </ul>
          </nav>

    );
  }
}

export default Dashboard;
