//Componente de tipo función Stateless
import React from 'react';
import Social from './Social';
import {     
    AboutStyle,
    AboutAvatar,
    AboutImg,
    AboutName,
    AboutH2,
    AboutProfession,
    AboutBio,
    AboutLocation } from '../styled/AboutStyles';

const About = () => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg 
            src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" 
            alt="Mi avatar" 
          />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>John Faber Florez Vasco</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>
            Consultor / Instructor de Software
        </AboutProfession>
      </div>
      <div className="About-description">
          <AboutBio>
             Formando futuros desarrolladores y creando software
         </AboutBio>
      </div>
      <div className="About-location">
            <AboutLocation>
                Medellin, Colombia
            </AboutLocation>
      </div>
      <div className="About-social">
       <Social />
      </div>
    </div>
  </AboutStyle>
);

export default About;
