import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #f7f7f7;

  h1 {
    font-weight: 800;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-left: 7.6rem;
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
`

export const ProductBox = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
`

export const RowBox = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
  height: 40vh;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Product = styled.div`
  width: 16vw;
  height: 50vh;
  margin-left: 2rem;
  margin-right: 2rem;

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
