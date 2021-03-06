import React from 'react';
import { NavLink } from 'react-router-dom';

const navBar = (props) => {
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <NavLink className="navbar-brand mainOne" to="/" exact>Phase 2 Pizza Builder</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <NavLink className="navbar-brand" to="/" exact activeClassName="activeLink">Build your pizza</NavLink>
          <NavLink className="navbar-brand" to="/Ingredients" activeClassName="activeLink">Ingredients</NavLink>
          <NavLink className="navbar-brand" to="/checkout" exact activeClassName="activeLink">Check Out</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;
