import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface BackgroundBlockType {
   src: string;
   height?: string;

}
interface BackgroundBlockPropsType{
  src: string;
   height: string;
}

const BackgroundImage = styled.div`
  height: ${(props: BackgroundBlockPropsType): string => props.height}vh;
  width: 6rem;
  background-image: url(${(props: BackgroundBlockPropsType): string => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius:50%;
  position: relative;
`

function ImagesSeller ({ src, height = "15" }: BackgroundBlockType): ReactElement {
  return (
    <div>
      <BackgroundImage src={src} height={height}>

      </BackgroundImage>
    </div>
  )
}
export default ImagesSeller
