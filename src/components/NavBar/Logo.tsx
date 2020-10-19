import React, { ReactElement } from 'react'
import styled,{keyframes} from 'styled-components'

interface LogoBlockType {
   src: string;
   height?: string;

}
interface LogoPropsType{
  src: string;
   height: string;
}

const animateLogo=keyframes`
  from{
    tranform:rotateZ(0deg)
  }
  to{
    tranform:rotateZ(360deg)
  }

`
const LogoImage = styled.div`
  height: ${(props: LogoPropsType): string => props.height}vh;
  width:15px;
  background-image: url(${(props: LogoPropsType): string => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  padding:1rem 1rem 1.5rem 1rem;
  transform-origin: center;
  transform-box:fill-box;
  animation:${animateLogo} 5s infinite linear;
`

function Logo ({ src, height = "1" }: LogoBlockType): ReactElement {
  return (
    <div>

      <LogoImage src={src} height={height}>

      </LogoImage>
    </div>
  )
}
export default Logo
