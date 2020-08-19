import styled from "styled-components"

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  section {
    text-align: center;
    max-width: 300px;
  }

  h2 {
    color: #666;
    margin: 10px 0;
  }

  .img-container {
    padding: 24px;
    margin: 0 auto;
    img {
      width: 130px;
    }
  }
`
