import React from 'react'
import styled from 'styled-components';

const StyleP = styled.p `
    color: #757575;
    font-weight: 300;
    margin: .5em 0 1.2em 0;
`

const PStyled = ( { name } ) => <StyleP> { name } </StyleP>

export default PStyled
