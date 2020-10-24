import styled from 'styled-components'

export const Container =styled.div`
 width:100vw;
 height:70vh;
 background-color:#f7f7f7;
 h1{
  font-weight:800;
  font-size:1.2rem;
  text-transform: uppercase;
  margin-left:8rem;
  padding-top:3rem;
  margin-bottom:2.5rem;

 }
`
export const Row =styled.div`

  display: flex;
  align-items: center;
  justify-content:center;
  width:100vw;
  height:70;


  `
export const Content =styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
  height:35vh;
  margin-left:10rem;
  margin-right:10rem;

  `

export const Box =styled.div`
  width:15vw;
  height:35vh;
  margin-left:2.5rem;
  margin-right:2.5rem;
  background-color:white;
  text-align: center;
  overflow: hidden;
  position: relative;

 &:hover{
 box-shadow:2px 2px 4px gray;
 }

`
export const SocialIcon =styled.div`
  width: 100%;
  height:1.5rem;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  display:flex;
  flex-direction:row;


  i{
  margin-top:1rem;
  padding-bottom:0;
  display: block;
  padding: 10px;
  font-size: 17px;
  color: #0278ae;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  flex:1;
  }

`
export const Picture =styled.div`
 display: inline-block;
  margin-bottom:1rem;
  z-index: 1;
  position: relative;
  padding-top:0.5rem;
  `
export const TeamContent =styled.div`
`
