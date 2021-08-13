import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`

export const Bio = styled.div`
  .badge {
    padding: 2px 8px;
    display: inline-block;
    background: #42ad8021;
    border-radius: 4px;  
  }

  max-width: 700px;
  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    margin: 25px 0;
    color: #aaa;
  }
  p {
    margin: 10px 0;
  }

  svg {
    margin: 10px;
    color: var(--main)
  }
`
