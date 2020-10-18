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
  width: 100vw;
  background-image: url(${(props: BackgroundBlockPropsType): string => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`

function BackgroundBlock ({ src, height = "100" }: BackgroundBlockType): ReactElement {
  return (
    <div>
      <BackgroundImage src={src} height={height}>

      </BackgroundImage>
    </div>
  )
}
export default BackgroundBlock
