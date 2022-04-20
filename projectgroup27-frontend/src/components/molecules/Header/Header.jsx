import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button/Button';
import image from "../../images/kinotekaLogo.JPG";
import {FaUser} from "react-icons/fa";

import './header.css';
import {Link} from "react-router-dom";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className="m-header">
    <div className="wrapper">
      <div className="nav-left">
        <img src={image} style={{width: "150px"}}/>
        <a href={'/all-movies'}>All movies</a>
        <a>Categories</a>
        <a href={'/favorites'}>Favorites</a>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <FaUser/>
            <span className="welcome">
              {user.name}
            </span>
            <Link to={'/'}>
              <Button color="black" onClick={onLogout} label="Log out" />
            </Link>
          </>
        ) : (
          <>
            <Link to={'/'}>
              <Button color='black' onClick={onLogin} label="Log in" />

            </Link>
            <Link to={'/register'}>
              <Button color='black' onClick={onCreateAccount} label="Sign up" />
            </Link>
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
