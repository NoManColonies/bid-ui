import React, { ReactElement } from 'react'
import InputFieldType from './InputField'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputStyle = styled.div`
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

const InputIcon = styled(FontAwesomeIcon)`
  color: #333;
  height: 100%;
  margin: auto;
  display: flex;
  opacity: 0.6;
  grid-column: 1;
  padding:0 0.5rem 0 0.5rem;
`

const Input = styled.input`
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

  &&::-webkit-input-placeholder {
    color: gray;
    font-weight: 600;
    font-size: 0.9rem;
    font-family: 'Josefin Sans', sans-serif;
  }
`

function InputField({
  type,
  name,
  value,
  icon,
  onChange,
  placeholder,
  required
}: InputFieldType): ReactElement {
  return required ? (
    <InputStyle>
      {icon && <InputIcon icon={icon} />}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </InputStyle>
  ) : (
    <InputStyle>
      {icon && <InputIcon icon={icon} />}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputStyle>
  )
}

export default InputField
