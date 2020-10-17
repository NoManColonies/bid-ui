import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface BackgroundBlockType {
  src: string;
  height?: string;
  children?: ReactElement[] | ReactElement;
}
interface BackgroundBlockPropsType {
  src: string;
  height: string;
}

const BackgroundImage = styled.div`
  height: ${(props: BackgroundBlockPropsType): string => props.height}vh;
  width: 100vw;
  background-image: url(${(props: BackgroundBlockPropsType): string =>
    props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  position: relative;
`
const BackgroundOverylay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function BackgroundBlock({
  src,
  height = '100',
  children
}: BackgroundBlockType): ReactElement {
  return (
    <div>
      <BackgroundImage src={src} height={height}>
        <BackgroundOverylay>{children}</BackgroundOverylay>
      </BackgroundImage>
    </div>
  )
}
export default BackgroundBlock
