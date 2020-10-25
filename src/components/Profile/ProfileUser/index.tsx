import React ,{FormEvent, ReactElement, useCallback, useState,ChangeEvent} from 'react'
import {
  Container,
  UserWrapper,
  UserFormWrapper,
  Image,
  Card,
  Form,
  Form2,
  Button,
  IdCardWrapper,
  IdImage,
  Status,
  Icon,
  IconWrapper,
  TitleWrapper,
  Title,
  Value,
  IdImageWrapper,
  FormStatus
} from './styled'
import withHelmet from '../../../utils/withHelmet'
import withNavbar from '../../../utils/withNavbar'
import InputUser from '../InputUser/index'
import InputIdCard from '../InputStatus/index'
import ImageCard from '../../../assets/backgraund/card.svg'
import { faTrophy, faGamepad,faBoxes, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'



function ProfileUser (): ReactElement{
  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [lastname,setLastname]=useState("")

  const [building,setBuilding]=useState("")
  const [road,setRoad]=useState("")
  const [city,setCity]=useState("")
  const [subCity,setSubCity]=useState("")
  const [province,setProvince]=useState("")
  const [postal,setPostal]=useState("")
  const [tellephone,setTelephone]=useState("")

  const [disciption,setDisciption]=useState("")
  const [idCard,setIdCrad]=useState("")

  const [click,setClick]=useState(false)



  const onSubmit =useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault()

    },
    []
  )


  return(
   <Container>
     <h1>YOUR PROFILE</h1>
     <UserWrapper>
       <UserFormWrapper>


         <Form onSubmit={onSubmit} click={click}>
         <Image>
         </Image>
         <InputUser  type="text"
                name="username"
                value={username}
                disabled={true}
                placeholder=""

              />
           <InputUser  type="text"
                name="name"
                placeholder="enter your name"
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setName(event.target.value)
                }
              />
               <InputUser  type="text"
                name="lastname"
                placeholder="enter your lestname"
                value={lastname}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setLastname(event.target.value)
                }
              />
               <InputUser  type="text"
                name="emali"
                value={email}
                disabled={true}
                placeholder=""

              />

              <InputUser  type="tellephone"
                name="tellephone"
                value={tellephone}
                placeholder="tellephone"
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setTelephone(event.target.value)
                }

              />


               <Button type="submit"
               onClick={(): void=>setClick(!click)}
              >next</Button>
         </Form>


         <Form2 onSubmit={onSubmit} click={click}>

         <InputUser  type="text"
                name="road"
                placeholder="road"
                value={road}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setRoad(event.target.value)
                }

              />
           <InputUser  type="text"
                name="building"
                placeholder="building"
                value={building}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setBuilding(event.target.value)
                }
              />

            <InputUser  type="text"
                name="subCity"
                placeholder="subCity"
                value={subCity}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setSubCity(event.target.value)
                }
              />
                  <InputUser  type="text"
                name="subCity"
                placeholder="subCity"
                value={subCity}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setSubCity(event.target.value)
                }
              />

              <InputUser  type="text"
                name="city"
                placeholder="city"
                value={city}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setCity(event.target.value)
                }
              />
                 <InputUser  type="province"
                name="province"
                placeholder="province"
                value={province}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setProvince(event.target.value)
                }
              />
                 <InputUser  type="postal"
                name="postal"
                placeholder="postal"
                value={postal}
                onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                  setPostal(event.target.value)
                }
              />


              <Button type="submit"
               onClick={(): void=>setClick(!click)}
              >save</Button>
         </Form2>

       </UserFormWrapper>

       <Card>
         <IdCardWrapper>
           <IdImageWrapper>
           <IdImage>
             <img src={ImageCard}/>
             <h2>ADD ID CARD</h2>
           </IdImage>
           </IdImageWrapper>

           </IdCardWrapper>

           <Status>
             <h2>disciption</h2>
           <FormStatus>
           <InputIdCard
                name="disciption"
                value={disciption}
                placeholder="enter your disciption"
                onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
                  setDisciption(event.target.value)
                }

              />
           </FormStatus>
           </Status>

           <IconWrapper>
             <TitleWrapper>
             <Title>Winning</Title>
            <Icon icon={faTrophy}></Icon>
            <Value>2</Value>
           </TitleWrapper>

           <TitleWrapper>
          <Title>Amount</Title>
          <Icon icon={faGamepad}></Icon>
          <Value>27</Value>
        </TitleWrapper>

        <TitleWrapper>
          <Title>Product</Title>
          <Icon icon={faBoxes}></Icon>
          <Value>123</Value>
        </TitleWrapper>

        <TitleWrapper>
          <Title>Ratting</Title>
          <Icon icon={faStarHalfAlt}></Icon>
          <Value>20</Value>
        </TitleWrapper>
      </IconWrapper>
       </Card>
       </UserWrapper>
   </Container>
  )
}

export default withHelmet('BIDRS | Profile')(withNavbar(ProfileUser))
