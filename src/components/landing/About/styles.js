import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 60px 0;
`

export const Bio = styled.div`
  max-width: 500px;
  h2 {
    font-family: "Ubuntu", sans-serif;
    font-size: 50px;
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
export const Image = styled.div`
  border: 2px dashed #099;
  img {
    position: relative;
    left: 20px;
    top: 20px;
    width: 250px;
  }
`
