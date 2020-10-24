import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const InputStyle = styled.div`
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 10% 1fr;
  box-sizing: border-box;
  position: relative;
`

export const InputIcon = styled(FontAwesomeIcon)`
  color: #333;
  height: 100%;
  margin: auto;
  display: flex;
  opacity: 0.6;
  grid-column: 1;
  padding: 0 0.5rem 0 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  position: relative;
  grid-column: 2;
  font-family: 'Josefin Sans', sans-serif;

  &::-webkit-input-placeholder {
    color: gray;
    font-weight: 600;
    font-size: 0.9rem;
    font-family: 'Josefin Sans', sans-serif;
  }
`
