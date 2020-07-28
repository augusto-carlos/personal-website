import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  body {
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#444")};
  color: ${({ theme }) => (theme === "light" ? "#444" : "#eee")};
  font-family: "Roboto";
  }  
  
  a {
  color: ${({ theme }) => (theme === "light" ? "#444" : "#eee")};
  }
`
