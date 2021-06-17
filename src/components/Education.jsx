import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";
const Education = () => {
  return (
    <div className="Education">
      <H2Styled name="Estudios" />
      <div className="Education-container">
        <div className="Education-item">
          <H3Styled>
            PCJIC - <span>2016</span>
          </H3Styled>
          <PStyled name="Ingeniero Informático" />
        </div>
        <div className="Education-item">
          <H3Styled>
            EAFIT - <span>2020</span>
          </H3Styled>
          <PStyled name="Magister en Ingeniería de Software" />
        </div>
      </div>
    </div>
  );
};

export default Education;
