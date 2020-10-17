import styled from 'styled-components'

interface Container{

}

export const Container = styled.div`
  width: 100vw;
  position:fixed;
  z-index: 10000;
  background-color: ${props => (props.isScroll ? '#fff' : 'transparent')};
  color:${props => (props.isScroll ? '#000' : '#fff')};
  transition:background-color 0.5;
`

export const Logo = styled.div``

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
`

export const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`
export const Action = styled.li`
  padding: 0 1rem;
`
