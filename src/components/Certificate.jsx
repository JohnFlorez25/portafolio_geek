import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificate = () =>(
    <div className="Certificates">
        <H2Styled name="Certificaciones" />
        <div className="Certificates-container">
            <div className="Certificates-item">
                <H3Styled>Google Cloud Platform</H3Styled>
                <PStyled> Associate Cloud Engineer</PStyled>
            </div>
        </div>
    </div>
);

export default Certificate;