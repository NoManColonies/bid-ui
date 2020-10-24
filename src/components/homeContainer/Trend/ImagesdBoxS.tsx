import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface BackgroundBlockType {
   src: string;
   height?: string;
   hoverSrc: string;

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

function ImagesdBoxS ({ src, height = "100%",hoverSrc }: BackgroundBlockType): ReactElement {

  const [imageSrc, setImageSrc] = React.useState<string>(src);

  const mouseOver = React.useCallback(() => {
    setImageSrc(hoverSrc);
  }, []);

  const mouseOut = React.useCallback(() => {
    setImageSrc(src);
  }, [])
  return (

       <Image
       src={imageSrc}
       height={height}
       onMouseEnter={mouseOver}
       onMouseLeave={mouseOut}>
       </Image>
  )

}
export default ImagesdBoxS
