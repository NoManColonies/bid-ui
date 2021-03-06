import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -20%;
    right: 48%;
    transform: translateY(-10%);

    transition: 1.8s ease-in-out;
    border-radius: 30%;
    z-index: 6;
  }
`

export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const SigninSignup = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
`

export const Signin = styled.div`
  z-index: 2;
`

export const Title = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

export const PanelsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
`

export const LeftPanel = styled.div`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;

  h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 2;
`

export const Button = styled.button`
  width: 150px;
  background-color: #0278ae;
  border: 1px solid #fff;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #e8ffc1;
    color: #0278ae;
    border: none;
  }
`

export const Paragraph = styled.p``

export const Content = styled.div`
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
`
