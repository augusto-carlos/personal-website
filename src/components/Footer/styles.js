import styled from "styled-components"

export const Wrapper = styled.footer`
  background-color: rgba(0, 0, 0, 0.02);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const SocialIcons = styled.div`
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
