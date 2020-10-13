import React, { ReactElement } from 'react'
import InputFieldType from './InputField'
import Styled from 'styled-components'

const Input = Styled.input`
   width: 80%;
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 0s;
  border-bottom: 1px solid #aaa;
  margin-bottom:1rem;

`

function InputField({
  type,
  name,
  value,
  onChange,
  required
}: InputFieldType): ReactElement {
  return required ? (
    <Input type={type} name={name} value={value} onChange={onChange} required />
  ) : (
    <Input type={type} name={name} value={value} onChange={onChange} />
  )
}

export default InputField
