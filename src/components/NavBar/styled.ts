import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NotificationButtonPropsType } from './NavBar'

export const Container = styled.div`
  padding: 0.5rem;
  width: 100vw;
  height: 15vh;
  z-index: 10000;
  background-color: #0278ae;
  color: white;
  transition: background-color 0.5;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  margin-left: 2rem;
`
export const BoxLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }
`
export const Join = styled.div`
  margin-right: 2rem;
  align-items: center;
  display: flex;
  width: 10vw;
  flex-direction: row;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ActionContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Action = styled.li`
  padding: 0 1rem;
  font-size: 0.8rem;
  position: relative;

  &:hover {
    color: #e8ffc1;
    font-size: 0.9rem;
  }
`

export const BellIcon = styled(FontAwesomeIcon)`
  color: #fff;
`

export const NotificationButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: ${({ unread }: NotificationButtonPropsType): string =>
      unread ? '#f73838' : 'transparent'};
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`
