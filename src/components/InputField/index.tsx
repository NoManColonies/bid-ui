import React, { ReactElement } from 'react'
import InputFieldType from './InputField'
import Styled from 'styled-components'

const Input = Styled.input``

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
