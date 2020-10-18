import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface ImageBlockType {
   src: string;
   height?: string;

}
interface ImageBlockPropsType{
  src: string;
   height: string;
}

const Image = styled.div`
  height: ${(props: ImageBlockPropsType): string => props.height}vh;
  width:auto;
  background-image: url(${(props: ImageBlockPropsType): string => props.src});

  background-size: cover;
  background-position: center;

  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
  position: relative;
`

function ImageLogin ({ src, height = "40" }: ImageBlockType): ReactElement {
  return (
    <div>
      <Image src={src} height={height}>

      </Image>
    </div>
  )
}
export default ImageLogin
