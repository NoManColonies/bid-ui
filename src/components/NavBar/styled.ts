import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NotificationButtonPropsType } from './NavBar'

export const Container = styled.div`
  width: 100vw;
  height: 14vh;
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
  margin-top: 1rem;
  height: 4vh;
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
  justify-content: flex-end;
  align-items: center;
  width: 64vw;
  margin-top: 0.8rem;

`

export const Action = styled.li`
  padding: 0 1rem;
  font-size: 0.8rem;
  position: relative;
  border: none;
  display: flex;
  flex-direction: row-reverse;
  &:hover {
    color: #e8ffc1;



  }

`

export const Line = styled.div`
  width:128px;
  height:3px;
  color: #fff;
`

export const BellIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size:1rem;
  padding-left:.5rem;
  border: none;
  cursor: pointer;

`

export const NotificationButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

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

export const ManuBar = styled.div`
  display: flex;

  align-items: center;
`
export const DropDownContent = styled.div`
  color:black;
  position: absolute;
  background-color: white;
  border-radius:10px;
  padding:0.5rem;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  bottom:-250%;

  div+div{
    padding-top:0.5rem;
  }


`

export const DropDown = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50px;
   background-color: grey;
   background-image: url(${({url}: {url: string}): string => url});
   background-size: cover;
   background-position: top;
`


