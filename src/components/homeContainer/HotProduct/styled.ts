import styled from 'styled-components'

export const Container =styled.div`
width:100vw;
height:100vh;
background-color:#f7f7f7;

h1{
  font-weight:800;
  font-size:1.2rem;
  text-transform: uppercase;
  margin-left:8rem;
  padding-top:3.5rem;

 }

`

export const ProductBox =styled.div`
 width:100vw;
 height:90vh;
 display:flex;

 justify-content:center;
 margin-top:1rem;

`

export const CulumnBox =styled.div`
 width:100vw;
 height:90vh;
 display:flex;
 flex-direction:column;
 justify-content:center;


`
export const RowBox =styled.div`
 width:100vw;
 height:40vh;
 padding:0;
 display:flex;
 flex-direction:row;
 justify-content:center;
 margin-top:0;

`

export const Product =styled.div`
 width:12vw;
 height:30vh;
 background-color:white;
 margin-left:1.9rem;
 margin-right:1.9rem;


 &:hover{
 box-shadow:2px 2px 4px gray;
 }


`

export const Image =styled.div`
 width:100%;
 height:70%;
 padding:0;
 margin:0;
`

export const Title =styled.div`
 padding:0;
 margin:0;
 width:100.4%;
 height:30%;
 background-color:#51ADCF;
`
export const Line =styled.div`
border: 10px solid black;

`
