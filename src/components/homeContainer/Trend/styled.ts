import styled from 'styled-components'

export const Container =styled.div`
width:100vw;
height:115vh;
background-color:#f7f7f7;
padding-left:3rem;
padding-top:3rem;

h1{
  font-size:2rem;
  word-spacing:1px;
  text-transform: uppercase;
  font-family: 'Staatliches', cursive;
 }

`
export const BoxXL = styled.div`
 width:100vw;
 height:105vh;
 display:flex;
 margin-right:1rem;
 margin-top:2rem;
`
export const BoxL = styled.div`
 width:91%;
 height:100%;

 display:grid;
 grid-template-columns:repeat(4,25%);
 grid-template-rows:50% 50%;
`
