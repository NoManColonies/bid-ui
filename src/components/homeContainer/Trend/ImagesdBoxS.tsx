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

const Image = styled.div`
  height: ${(props: BackgroundBlockPropsType): string => props.height};
  width:100%;
  background-image: url(${(props: BackgroundBlockPropsType): string => props.src});
  background-repeat: no-repeat;
  background-size:cover;
  background-position:center;
  position: relative;
  background-color:green;
  grid-column:3/span 2;
  grid-row:1;
`

function ImagesdBoxS ({ src, height = "100%" }: BackgroundBlockType): ReactElement {
  return (
       <Image src={src} height={height}>
       </Image>
  )
}
export default ImagesdBoxS
