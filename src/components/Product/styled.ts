import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  width: 100vw;
  background-color: #f7f7f7;
  padding-left: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    border: 1px solid black;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;

    &:hover {
      background-color: #e8ffc1;
    }
  }

  span + span {
    margin-left: 0.5rem;
  }
`

export const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 24vh;
  width: 16vw;
  border-radius: 50%;
`

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const BoxColor = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid gray;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 50%;
  background-color: ${(props: any): string => props.color};

  &:hover {
    border: 2px solid black;
  }
`

export const Filter = styled.div`
  width: 18vw;
  height: 100vh;
  margin: 0;
  top: 0;
  position: sticky;

  h2 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`

export const ProductBox = styled.div`
  width: 80vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-auto-rows: 500px;
  grid-gap: 2%;
  padding: 0 3rem;
  box-sizing: border-box;
`

export const Box = styled.div`
  width: 420px;
  height: 500px;
  background-color: white;
  margin: auto;

  &:hover {
    box-shadow: 2px 2px 4px gray;
  }
`

export const Image = styled.div`
  width: 100%;
  height: 70%;
  padding: 0;
  margin: 0;
  background-color: #51adcf;
`

export const Title = styled.div`
  padding: 0.5rem;
  margin: 0;
  width: 100.4%;
  height: 30%;
  box-sizing: border-box;
`

export const TitleHeader = styled.h1`
  color: #fc9520;
  font-size: 1.2rem;
`

export const StyledIcon = styled(FontAwesomeIcon)`
  display: block;
`

export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  padding-right: 3rem;
  top: auto;
  color: #fff;
  flex: 1;
  /* text-align: center; */
`

export const Line = styled.div`
  border: 10px solid black;
`
