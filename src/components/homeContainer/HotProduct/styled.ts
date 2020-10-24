import styled from 'styled-components'

export const Container =styled.div`
width:100vw;
height:155vh;
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

export const ProductBox =styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 margin:0;
 padding:0;
 justify-content:center;

`

export const CulumnBox =styled.div`
 width:100vw;
 display:flex;
 margin:0;
 padding:0;
 flex-direction:column;



`
export const RowBox =styled.div`
 width:100vw;
 padding:0;
 display:flex;
 flex-direction:row;
 margin-top:0;

`

export const Product =styled.div`
 width:29.5vw;
 height:70vh;
 background-color:white;
 margin-right:1rem;
 margin-top:2rem;


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
