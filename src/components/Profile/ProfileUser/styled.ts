import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  h1 {
    font-size: 2rem;
    word-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Staatliches', cursive;
    margin-bottom: 1rem;
    margin-top: -4rem;
  }
`
export const ImageBg = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 2%;
  right: 8%;
`
export const ImageBg2 = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 2%;
  left: 10%;
  z-index: 100;
`

export const UserWrapper = styled.div`
  width: 70vw;
  height: 75vh;
  background-color: white;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 4px gray;
`

export const UserFormWrapper = styled.div`
  width: 50%;
  height: 75vh;
  background-color: #51adcf;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.label`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #dad8d8;
  margin-bottom: 1.5rem;
  background-image: url(${({ url }: { url: any }): any => url});
  background-size: cover;
  background-position: center;
`

export const Card = styled.div`
  width: 50%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  transform: translateX(
    ${(props: { click: boolean }): string => (props.click ? '-100%' : '0')}
  );
  transition: all 500ms ease-in;
`
export const Form2 = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  transform: translateX(100%);
  transform: translateX(
    ${(props: { click: boolean }): string => (props.click ? '0%' : '100%')}
  );
  transition: all 500ms ease-in;
`
export const Back = styled(FontAwesomeIcon)`
  color: white;
  top: -1rem;
  left: 6.5rem;
  padding-bottom: 0.5rem;
  color: white;
  position: absolute;
  z-index: 200;
  width: 30px;
  height: 40px;
  cursor: pointer;
`

export const Button = styled.button`
  width: 150px;
  background-color: #0278ae;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #e8ffc1;
    color: #0278ae;
    border: none;
  }
`

export const IdCardWrapper = styled.label`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const IdImageWrapper = styled.div`
  width: 70%;
  height: 80%;
  background-color: #eaeaf3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-image: url(${({ url }: { url: any }): any => url});
  background-size: cover;
  background-position: center;
`

export const IdImage = styled.div`
  width: 70%;
  height: 80%;

  img {
    width: 90%;
    height: 80%;
    display: ${({ isSet }: { isSet: boolean }): string =>
      isSet ? 'none' : 'static'};
  }

  h2 {
    padding-top: 1rem;
    display: ${({ isSet }: { isSet: boolean }): string =>
      isSet ? 'none' : 'static'};
  }
`

export const HiddenFileInput = styled.input`
  display: none;
`

export const Status = styled.div`
  width: 100%;
  height: 30%;

  h2 {
    font-size: 0.8rem;
    word-spacing: 1px;
    text-transform: uppercase;
    margin-left: 4rem;
    margin-bottom: 0.5rem;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  display: block;
  color: #51adcf;
  padding-left: 1rem;
`
export const IconWrapper = styled.div`
  display: flex;
  top: auto;
  color: #fff;
  flex: 1;
  color: #51adcf;
  /* text-align: center; */
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  padding-left: 1rem;
  bottom: 0;
`
export const Value = styled.div`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem;
  padding-left: 1rem;
`
export const FormStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
