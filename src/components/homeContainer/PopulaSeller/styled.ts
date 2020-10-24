import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export const Row = styled.div`
  display: flex;
  width:100vw;
  height:70vh;


  `
export const Content =styled.div`
  display:flex;
  flex-direction:row;

  width:100%;
  height:35vh;
`

export const Box =styled.div`
  width:15vw;
  height:35vh;
  margin-right:3rem;
  margin-top:2rem;
  background-color:white;
  text-align: center;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 2px 2px 4px gray;
  }
`
export const SocialIconWrapper =styled.div`
 width: 100%;
  height:1.5rem;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  display:flex;
  flex-direction:row;

  `

export const SocialIcon =styled(FontAwesomeIcon)`
   margin-top:1rem;
  padding-bottom:0;
  display: block;
  padding: 10px;
  font-size: 17px;
  color: #0278ae;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  flex:1;

`

export const Picture = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
  z-index: 1;
  position: relative;
  padding-top: 0.5rem;
`

export const TeamContent = styled.div``
