import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

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
  font-family: "Inter", sans-serif;
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
    --main: #29927d;
    --constrast:  #202028;
  }
  
  body.light{
    --primary: #f5f5f5;
    --secondary: #444;
    --main: #aaa;
    --constrast:  #f7f7f7;
  }
`
