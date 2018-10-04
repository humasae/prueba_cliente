import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
      return (
        <div className="Header">
          <header className="Header-header">
            <p>
            <Link to='/'>podcaster</Link>
            </p>
            <hr/>
          </header>
        </div>
      );
    }
  }
  
  export default Header;