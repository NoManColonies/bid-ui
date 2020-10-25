import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface BackgroundBlockType {
   src: string;
   height?: string;
   column: string;
   hoverSrc: string;
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

function ImagesdBoxSx ({ src, height = "100%" ,column,hoverSrc}: BackgroundBlockType): ReactElement {
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
       column={column}
       onMouseEnter={mouseOver}
       onMouseLeave={mouseOut}>
       </Image>

  )
}
export default ImagesdBoxSx
