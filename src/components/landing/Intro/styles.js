import styled from "styled-components"
import GridImg from "../../../assets/grid-img.png"

export const Wrapper = styled.div`
  background: url(${GridImg}) no-repeat right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;

  .mouse {
    position: relative;
    border-radius: 4px;
    animation-name: mouse;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    cursor: pointer;
  }

  @keyframes mouse {
    from {
      top: 0px;
    }
    to {
      top: 10px;
    }
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    background: none;
  }
`

export const MyImage = styled.div`
  margin: 0 80px;

  @media (max-width: 570px) {
    margin: 0;
  }

  img {
    padding: 10px;
    border: 2px dashed #099;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
  }
`

export const Bio = styled.section`
  max-width: 500px;
  padding: 30px;

  h1 {
    font-size: 30px;
    margin: 23px 0px 27px;
  }

  p {
    font-size: 18px;
  }

  button {
    background: none;
    padding: 10px 20px;
    margin: 20px 24px 0px 0px;
    border: 1px solid #888;
    font-weight: bold;
    background: #3c3b44;
    color: #fff;
  }

  @media (max-width: 570px) {
    text-align: justify;
  }
`
