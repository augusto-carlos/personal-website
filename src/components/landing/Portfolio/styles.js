import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 50px 0;

  & > div h2 {
    text-align: center;
    font-family: "Ubuntu", sans-serif;
    font-size: 30px;
  }
`

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > section {
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 60px 0;

    h3 {
      font-family: "Ubuntu", sans-serif;
      font-size: 35px;
      margin: 18px 0;
      color: #aaa;
    }

    .desc {
      max-width: 300px;
      padding: 30px;

      button {
        border: 1px solid #666;
        background: #666;
        color: #fff;
        padding: 10px 20px;
        margin: 20px 24px 0px 0px;
      }
    }

    img {
      max-width: 120px;
    }
  }

  i {
    width: 30%;
    height: 3px;
    background: #f7f7f721;
    border-radius: 7px;
    position: relative;
    bottom: -6px;
  }

  .screen {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #eee;
    border-radius: 20px;
    color: #666;
  }

  .screen-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    min-height: 110px;
  }
`

export const Phone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 370px;
  margin: 20px;
  padding: 10px 6px;
  border-radius: 20px;
  background-color: #4a4758;
  box-shadow: 6px 5px 11px 2px #0000002e;

  .screen span {
    width: 30%;
    height: 10px;
    border-bottom-right-radius: 26px;
    background: #4a4758;
    border-bottom-left-radius: 26px;
    margin-top: -1px;
  }
`

export const Desktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 510px;
  height: 316px;
  margin: 20px;
  cursor: pointer;

  .screen {
    border-radius: 0;
  }

  .display {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4a4758;
    height: 75%;
    width: 80%;
    padding: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .base {
    background-color: #4a4758;
    height: 5%;
    width: 100%;
    box-shadow: 6px 10px 11px 2px #0000002e;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
  }

  @media (max-width: 1120px) {
    display: none;
  }
`
