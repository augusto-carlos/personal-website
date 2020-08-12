import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
 * {
     padding: 0;
     margin: 0;
 }
 
  body {
  transition: background-color .2s;
  background: ${({ theme }) => theme.background} ;
  background-repeat: no-repeat;
  background-size: 100%;
  color:  ${({ theme }) => theme.color} ;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 32px;
  }  
  
  [data-sal]{
    transition: .5s;
}
  
  a, button {
  color: ${({ theme }) => theme.color} ;
  }
  
  .start-wave {
    position: relative;
    bottom: -10px;
  }
`
