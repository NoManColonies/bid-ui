import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 135vh;

  background-color: #f7f7f7;
  h1 {
    font-weight: 800;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-left: 8rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export const BoxXL = styled.div`
  width: 100vw;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxL = styled.div`
  width: 80vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 50% 50%;
`
