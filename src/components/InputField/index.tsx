import React, { ReactElement } from 'react'
import InputFieldType from './InputField'
import Styled from 'styled-components'

const InputStyle= Styled.div`
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
`
const Input = Styled.input`
max-width: 380px;
  width:200vh;
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  &&::-webkit-input-placeholder{
    color: #aaa;
    font-weight:500;
    font-size: 1rem;
  }
`


function InputField({
  type,
  name,
  value,
  onChange,
  placeholder,
  required
}: InputFieldType): ReactElement {
  return required ? (

    <InputStyle> <Input type={type} name={name} value={value} onChange={onChange} required placeholder={placeholder}/></InputStyle>
  ) : (
    <InputStyle><Input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} /></InputStyle>
  )


}

export default InputField
