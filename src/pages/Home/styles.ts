import styled from 'styled-components'
import{colors}from "../../styles/GlobalStyle"

export const Section = styled.section`
  display: flex;
  position: absolute;
  max-width: 1090px;
  margin: auto;
  align-items: center;
  justify-content: space-around;

  p { 

    font-size: 30px;
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${colors.third};

  }


`