import React, { ReactElement } from 'react'
import InputFieldType from './InputField'
import {InputStyle,InputIcon,Input} from './styled'




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
