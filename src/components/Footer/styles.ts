import styled from 'styled-components'

export const Container = styled.div`
   margin: 0;
   padding: 0;
   width: 100vw;
   height: 40vh;
   background-color: #51adcf;
   color: aliceblue;
   display: flex;flex-direction: column;
   align-items: center;
   font-family: 'Josefin Sans', sans-serif;
`
export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 30vh;
   font-family: 'Josefin Sans', sans-serif;

`
export const Title = styled.div`
   display: flex;
   padding-left: 4rem;
   color: white;
   font-family: 'Josefin Sans', sans-serif;
   flex: 1;
   width: 100%;
   height: 30vh;
`

export const Box = styled.div`
   width: 25vw;
   height: 30vh;
   font-family: 'Josefin Sans', sans-serif;
   padding-right:5rem;

  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
  p {
    width: 25vw;
    height: 20vh;
    font-size: 0.8rem;
    line-height: 1.6;
    font-family: 'Josefin Sans', sans-serif;
  }
`
export const Menu = styled.div`
   width: 10vw;
   height: 30vh;

   display: flex;
   flex-direction: column;
   padding-right:3rem;
   font-family: 'Josefin Sans', sans-serif;

  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
`
export const ActionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 0.7rem;

`
export const Action = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`
export const Address = styled.div`
  margin-bottom: 0.5rem;
  width: 25vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  padding-right:4rem;

  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
  p {
    width: 25vw;
    height: 20vh;
    font-size: 0.8rem;
    line-height: 1.6;
    font-family: 'Josefin Sans', sans-serif;
  }
`
export const Contact = styled.div`
   margin-bottom: 0.5rem;
   font-size: 1rem;
   width: 15vw;
   height: 30vh;
   display: flex;
   flex-direction: column;
   padding-right:2rem;
   font-family: 'Josefin Sans', sans-serif;
  h3 {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
    font-style: oblique;
    font-family: 'Josefin Sans', sans-serif;
  }
  p {

    line-height: 1.6;
    font-size: 0.8rem;
    font-family: 'Josefin Sans', sans-serif;
    padding-left:0.5rem
   }
`

export const User1 = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom:0.5rem;
`
export const User2 = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom:0.5rem;
`
export const Email = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom:0.5rem;
`
export const Tel = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom:0.5rem;
`

export const Social = styled.div`
 i{
   width:50px;
   height:50px;
 }
`
