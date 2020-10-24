import styled from 'styled-components'


export const Container =styled.div`
 width:100vw;
 height:70vh;
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
 height:80vh;
 display:flex;

 `

export const RowBox =styled.div`

 height:40vh;
 padding:0;
 display:flex;
 flex-direction:row;
`

export const Product =styled.div`
 width:20vw;
 height:60vh;
 margin-right:3rem;
 margin-top:2rem;
 &:hover{
 box-shadow:2px 2px 4px gray;
 }


  &:hover {
    box-shadow: 2px 2px 4px gray;
  }
`

export const Image = styled.div`
  width: 100%;
  height: 70%;
  background-color: lawngreen;
  padding: 0;
  margin: 0;
`

export const Title = styled.div`
  padding: 0;
  margin: 0;
  width: 100.4%;
  height: 30%;
  background-color: lightgoldenrodyellow;
`
