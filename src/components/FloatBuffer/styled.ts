import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ContainerPropsType {
  width: string;
  height?: string;
}

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`

export const Filter = styled.span`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  opacity: 0.6;
`

export const Container = styled.div`
  position: absolute;
  width: ${({ width }: ContainerPropsType): string => width};
  ${({ height }: ContainerPropsType): string =>
    height ? `height: ${height};` : ''}
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 1rem;
  box-sizing: border-box;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  color: #333;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 96.4%;
    height: 96%;
    border-radius: 50%;
  }
`

export const CloseIcon = styled(FontAwesomeIcon)`
  position: relative;
  z-index: 100;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: opacity ease 100ms;
  }
`
