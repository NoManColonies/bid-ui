import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NotificationButtonPropsType } from './NavBar'

export const NavBarContainer = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 100;
  background-color: #51adcf;
`

export const NavBarWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1.5rem;
  height: 3.5rem;
  align-items: center;
`

export const Logo = styled.div`
  color: #fff;
`

export const ActionWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const LinkWrapper = styled.li`
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  position: relative;
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
