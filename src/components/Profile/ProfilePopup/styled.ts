import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

export const Background = styled.div`
  background-color: black;
  opacity: 0.6;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

export const Card = styled.div`
  width: 460px;
  height: 250px;
  background-color: #fff;
  margin-right: 1rem;
  border-radius: 5px 5px 5px 5px;

  h1 {
    text-align: center;
    font-weight: bold;
  }
`
export const Additional = styled.div`
  position: absolute;
  width: 150px;
  height: 100%;
  background: #0278ae;
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
  border-radius: 5px 0px 0px 5px;

  &:hover {
    width: 96%;
    border-radius: 5px 5px 5px 5px;
  }
`
export const Infomation = styled.div`
  width: 300px;

  float: left;
  position: absolute;
  left: 150px;
  height: 100%;

  h1 {
    color: #fff;
    margin-bottom: 0;
    padding-top: 1.5rem;
  }
`

export const Coords = styled.div`
  margin: 1rem 0.5rem 0.5rem;
  font-size: 0.8rem;
  color: #fff;

  span + span {
    float: right;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  display: block;
`

export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  padding-right: 3rem;
  top: auto;
  color: #fff;
  flex: 1;
  /* text-align: center; */
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 0.7rem;
  font-weight: 550;
  text-transform: uppercase;
  padding-left: 0.5rem;
  margin-bottom: 0.3rem;
  flex: 1;
`

export const Value = styled.div`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem;
`

export const General = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding-right: 1rem;
  padding-top: 0;

  h1 {
    padding-right: 1rem;
    margin-bottom: 1rem;
    padding-top: 1.5rem;
  }
`
