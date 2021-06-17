import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = () => (
    <div className="Experience">
        <H2Styled name="Experiencia" />
        <div className="Experiencie-container">
            <div className="Experience-item">
                <H3Styled>Coordinador Geek</H3Styled>
                <PStyled name="Desarrollando Personas en Geek Academy" />
            </div>
        </div>
    </div>
);

export default Experience;