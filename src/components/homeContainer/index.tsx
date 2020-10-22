import React, { ReactElement } from 'react'
import styled from 'styled-components'
import PopulaSeller from './PopulaSeller'
import HotProduct from './HotProduct'
import RecommendedItems from './RecommendedItems'
import Trend from './Trend'

const Container = styled.div`
  background-color: white;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height:auto;
`

function homeContainer(): ReactElement {
  return (
    <Container>
      <HotProduct />
      <RecommendedItems />
      <Trend />
      <PopulaSeller />
    </Container>
  )
}
export default homeContainer
