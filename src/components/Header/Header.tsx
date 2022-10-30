import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { HiDocumentText } from "react-icons/hi";

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img  className='header__container--img' src={logo} alt='valores-digital-logo'/>
        </Link>
        <Link to='/about'>
          <div className='header__container--about'>
            <HiDocumentText className='header__container--about-icon' />
            <span>About</span>
          </div> 
        </Link>
      </div>
    </header>
  );
};
