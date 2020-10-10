import React, { ReactElement } from 'react'
// import InputField from '../InputField'
import FormInputType from './FormInput'
import styled from 'styled-components'

const Form = styled.form``

function FormInput({ onSubmit }: FormInputType): ReactElement {
  return <Form onSubmit={onSubmit}></Form>
}

export default FormInput
