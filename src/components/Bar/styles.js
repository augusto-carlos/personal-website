import styled from "styled-components"

export const Wrapper = styled.div`
  border-left: 1px solid var(--borderAside);
  background: var(--constrast);
  width: 3.75rem;
  height: 100vh;
  right: 0px;
  top: 0px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.8rem 0px;
  transition: background 0.5s ease 0s;

  @media (max-width: 1120px) {
    width: 100%;
    height: 2rem;
    top: auto;
    bottom: 0px;
    left: 0;
    flex-direction: row;
    border-left: none;
    border-top: 1px solid var(--borderAside);
  }
`
