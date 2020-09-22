import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
 * {
     padding: 0;
     margin: 0;
 }
 
  body {
  transition: background-color .2s;
  background: var(--primary);
  background-repeat: no-repeat;
  background-size: 100%;
  color:  var(--secondary);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 32px;
  }  
  
  [data-sal]{
    transition: .5s;
}
  
  a, button {
  color: var(--color);
  }
  
  body.dark{
    --primary: #191921;
    --secondary: #e5e3e3;
    --borderAside: #c74c31;
    --constrast:  #202028;
  }
  
  body.light{
    --primary: #f5f5f5;
    --secondary: #444;
    --borderAside: #b9b9b9;
    --constrast:  #dfdfdf;
  }
`
