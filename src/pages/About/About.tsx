import React from 'react';
import './About.scss';

export const About = () => {
    return(
       <div className='about'>
        <span className='about__subtitle'>About this project</span>
        <section className='about__section section--one'>
            <span>Objective</span>
            <p>Put into practice programming principle and reorganized the code, to obtain a cleaner scalable code.</p>
        </section>
        <span className='about__subtitle'>Stack</span>
        <section className='about__section about__sectiontwo'>
            <a href='https://es.reactjs.org/'>React.js</a>
            <a href='https://www.typescriptlang.org/'>Typescript</a>
            <a href='https://sass-lang.com/'>SASS</a>
            <a href='https://reactrouter.com/en/main'>React Router DOM</a>
            <a href='https://react-icons.github.io/react-icons'>React Icons</a>
            <a href='https://mockapi.io/docs'>Mock API</a>
            <a href='https://uiball.com/'>Loaders</a>
            <a href='https://github.com/'>GitHub</a>
        </section>
        <span className='about__subtitle'>Goal</span>
        <section className='about__section section--three'>
            <p>
                Valores Digital provides a snippet of code that retrieves a list of users who have been active the last week.
            </p>
            <ul>
                <li>Reorganize the code following programming principles and good practices.</li>
                <li>Display them in a list of items on the browser.</li>
                <li>Creation of fake <a href='https://635da2bf07076ac24f407a88.mockapi.io/api/v1/users'>API</a> .</li>
            </ul>
        </section>
       </div>
    )
}