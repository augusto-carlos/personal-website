import styled from "styled-components"

export const Wrapper = styled.div`
  width: 21rem;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--constrast);
  justify-content: space-between;
  border-right: 1px solid var(--borderAside);

  @media (max-width: 1120px) {
    display: none;
  }
`

export const Avatar = styled.div`
  margin-bottom: 20px;

  img {
    margin-top: 20px;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
  }
`

export const Name = styled.span`
  margin: 20px 0;
  a {
    font-size: 28px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    text-decoration: none;
    color: #c74c31;
  }
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  li {
    margin: 6px;
  }

  a {
    text-decoration: none;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1125px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;

  a {
    padding: 10px;
    transition: 0.2s;
  }

  a:hover {
    filter: brightness(01%);
  }
`

export const MobileHeader = styled.header`
  text-align: center;
  min-height: 4rem;
  width: 100%;
  background: var(--constrast);
  border-bottom: 1px solid var(--borderAside);
  position: fixed;
  display: none;
  overflow: hidden;
  padding-top: 20px;

  @media (max-width: 1120px) {
    display: block;
  }
  li a {
    font-size: 14px;
  }
`
