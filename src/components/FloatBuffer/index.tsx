import React, { ReactElement } from 'react'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Wrapper, Filter, Container, CloseButton, CloseIcon } from './styled'
import { useHistory } from 'react-router-dom'

interface FloatBufferType {
  width: string;
  height?: string;
  children?: ReactElement | ReactElement[];
}

function FloatBuffer({
  width,
  height,
  children
}: FloatBufferType): ReactElement {
  const history = useHistory()

  return (
    <Wrapper>
      <Filter />
      <Container width={width} height={height}>
        <CloseButton>
          <CloseIcon
            icon={faTimesCircle}
            size="3x"
            onClick={(): void => history.goBack()}
          />
        </CloseButton>
        {children}
      </Container>
    </Wrapper>
  )
}

export default FloatBuffer
