import React from 'react';
import './Footer.scss';
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container'>
            <p className='footer__container__text'>
                Copyright &copy; 2022 All Rights Reserved 
            </p>
            <ul className='footer__container__list'>
                <li className='footer__container__list__social'>
                    <a href='https://www.linkedin.com/in/nahomiconde/' className='footer__container__list__social--icon'>
                        <AiOutlineGithub />
                    </a>
                </li>
                <li className='footer__container__list__social'>
                    <a href='https://github.com/nahyoomi' className='footer__container__list__social--icon'>
                        <TiSocialLinkedin />
                    </a>
                </li>
            </ul>
        </div>    
    </footer>
  )
}
