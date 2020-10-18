import styled from 'styled-components'


export const Container = styled.div`
  padding:0.5rem 0.5rem 0.5rem 0.5rem;

  width: 100vw;
  height:15vh;
  z-index: 10000;
  background-color:#0278AE;
  color:white;
  transition:background-color 0.5;

`

export const Box = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  padding-top:0.5rem;
  margin-left:2rem;


`
export const BoxLogo = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;


  p{
    padding-top:0.5rem;
    padding-left:0.5rem
  }


`
export const Join = styled.div`
 margin-right:2rem;
 align-items: center;
 display: flex;
 width:10vw;
 flex-direction:row;
 justify-content:center;


`

export const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;


`

export const ActionContainer = styled.ul`

  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`
export const Action = styled.li`
  padding: 0 1rem;
  font-size:0.8rem;

  &:hover{
    color:#E8FFC1;
    font-size:0.9rem;
  }
`
