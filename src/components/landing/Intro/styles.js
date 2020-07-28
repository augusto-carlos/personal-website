import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 24px;
    line-height: 37px;
  }
`

export const MyImage = styled.div`
  img {
    padding: 5px;
    border: 2px dashed #099;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
  }
`
