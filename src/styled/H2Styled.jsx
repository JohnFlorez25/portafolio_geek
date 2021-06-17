import React from 'react'
import styled from 'styled-components';

const StyleH2 = styled.h2 `
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 8px;
    margin: 1em 0 0 0;
    color: #448AFF;
`

const H2Styled = ( { name } ) => <StyleH2> { name } </StyleH2>

export default H2Styled
