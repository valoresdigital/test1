import React from 'react';
import './Footer.scss';
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className='footer'>
        <p className='footer__text'>
            Copyright &copy; 2022 All Rights Reserved 
        </p>
        <ul className='footer__list'>
            <li className='footer__list__social'>
                <a href='https://www.linkedin.com/in/nahomiconde/' className='footer__list__social--icon'>
                <AiOutlineGithub></AiOutlineGithub>
                </a>
            </li>
            <li className='footer__list__social'>
                <a href='https://github.com/nahyoomi' className='footer__list__social--icon'>
                    <TiSocialLinkedin></TiSocialLinkedin>
                </a>
            </li>
        </ul>
    </footer>
  )
}
