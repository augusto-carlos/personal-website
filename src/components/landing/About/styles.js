import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  min-height: 100vh;
`

export const Bio = styled.div`
  max-width: 700px;
  h3 {
    font-family: "Ubuntu", sans-serif;
    font-size: 40px;
    margin: 25px 0;
    color: #aaa;
  }
  p {
    margin: 10px 0;
  }

  svg {
    margin: 10px;
  }
`
