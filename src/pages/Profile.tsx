import React ,{ReactElement}from 'react'
import styled from 'styled-components'


const Center =styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:100;

  `

const Background =styled.div`
  background-color:black;
  opacity:0.6;
  width:100vw;
  height:100vh;
  position:fixed;
  top:0;
  left:0;

`

const Card =styled.div`
  width: 450px;
  height: 250px;
  background-color: #fff;
  margin-right:1rem;
  border-radius: 5px 5px 5px 5px;



  h1{
    text-align: center;
    font-weight: bold;
  }

`
const Additional =styled.div`
  position: absolute;
  width: 150px;
  height: 100%;
  background:#0278ae;
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
  border-radius: 5px 0px 0px 5px;


  &:hover {
    width: 100%;
    border-radius: 5px 5px 5px 5px;
  }
`
const Infomation =styled.div`
  width: 300px;

  float: left;
  position: absolute;
  left: 150px;
  height: 100%;

  h1{
    color: #fff;
    margin-bottom: 0;
    padding-top:1.5rem;
  }
`

const Coords =styled.div`
   margin: 1rem 0.5rem 0.5rem;

  font-size: 0.8rem;
  color: #fff;
  span+span {
    float: right;
  }
`
const Icon =styled.div`
 font-size: 1rem;
  display: flex;
  position: absolute;
  bottom: 1rem;
  padding-right:1rem;
  top: auto;
  color: #fff;
  flex: 1;
  text-align: center;

  i{
    display: block;
  }
  `

const Title =styled.div`
  font-size: 0.7rem;
  font-weight: 550;
  text-transform: uppercase;
  padding-left:0.5rem;
  margin-bottom:0.3rem;
  flex: 1;
  i{
    display: block;
  }
`
const Value =styled.div`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem;
`

const General =styled.div`
 width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding-right:1rem;
  padding-top: 0;
  h1{
  padding-right:1rem;
  margin-bottom: 1rem;
  padding-top:1.5rem;
  }
`


function Profile (): ReactElement{
  return(
    <>
    <Background></Background>
  <Center>


   <Card>
     <Additional>

        <Infomation>
        <h1>Jane Doe</h1>
        <Coords>
        <span>Group Name</span>
        <span>Joined January 2019</span>
        </Coords>

        <Coords>
        <span>Position/Role</span>
        <span>City, Country</span>
        </Coords>
       <Icon>
        <div>
          <Title>Winning</Title>
          <i className="fa fa-trophy"></i>
          <Value>2</Value>
        </div>
        <div>
          <Title>Amount</Title>
          <i className="fa fa-gamepad"></i>
          <Value>27</Value>
        </div>
        <div>
          <Title>Product</Title>
          <i className="fas fa-boxes"></i>
          <Value>123</Value>
        </div>
        <div>
          <Title>Ratting</Title>
          <i className="fas fa-star-half-alt"></i>
          <Value>20</Value>
        </div>
      </Icon>
    </Infomation>
     </Additional>

     <General>
        <h1>Jane Doe</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris,
           at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>

     </General>
   </Card>

  </Center>
  </>


  )
}
export default Profile
