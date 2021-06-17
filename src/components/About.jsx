//Componente de tipo función Stateless
import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align : center;
`

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid blue;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0, 0.6);
`

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
      <div className="About-name">
        <h2>John Faber Florez Vasco</h2>
      </div>
      <div className="About-profession">
        <p>Consultor / Instructor de Software</p>
      </div>
      <div className="About-description">
          <p>Formando futuros desarrolladores y creando software</p>
      </div>
      <div className="About-location">
            <p>Medellin, Colombia</p>
      </div>
      <div className="About-social">
        Social
      </div>
    </div>
  </AboutStyle>
);

export default About;
