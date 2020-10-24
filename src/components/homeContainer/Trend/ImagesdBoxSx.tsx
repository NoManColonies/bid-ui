import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface BackgroundBlockType {
   src: string;
   height?: string;
   column: string;
}
interface BackgroundBlockPropsType{
  src: string;
   height: string;
   column: string;
  }

const Image = styled.div`
  height: ${(props: BackgroundBlockPropsType): string => props.height};
  width: 100%;
  background-image: url(${(props: BackgroundBlockPropsType): string => props.src});
  background-repeat: no-repeat;
  background-size:cover;
  background-position:top;
  position: relative;
  grid-row:2;
  grid-column:${(props: BackgroundBlockPropsType): string =>props.column};
`

function ImagesdBoxSx ({ src, height = "100%" ,column}: BackgroundBlockType): ReactElement {
  return (
       <Image src={src} height={height} column={column}>
       </Image>
  )
}
export default ImagesdBoxSx
