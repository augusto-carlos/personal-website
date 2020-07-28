// createGlobalStyle shouldnt be here
import styled, { createGlobalStyle } from "styled-components"

// shouldnt be here
export const Global = createGlobalStyle`
  body {
  transition: background-color .2s;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#131217")};
  color: ${({ theme }) => (theme === "light" ? "#444" : "#999")};
  font-family: "Muli", sans-serif;
  }  
  
  a {
  color: ${({ theme }) => (theme === "light" ? "#444" : "#099")};
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #aaa;
  margin-bottom: 40px;

  @media (max-width: 425px) {
    justify-content: center;
    flex-direction: column;
    border-bottom: none;
  }
`

export const Logo = styled.span`
  a {
    font-size: 28px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    text-decoration: none;
  }
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: "center";

  li {
    margin: 2px 8px;

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`
