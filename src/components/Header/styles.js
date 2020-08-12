import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 570px) {
    justify-content: center;
    flex-direction: column;
    border-bottom: none;
  }
`

export const Logo = styled.span`
  margin: 20px 0;
  a {
    font-size: 28px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: #099;
  }
`

export const Menu = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  align-items: "center";
  padding: 10px 0;

  li {
    margin: 0 6px;
  }

  a {
    text-decoration: none;
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
  }
`
