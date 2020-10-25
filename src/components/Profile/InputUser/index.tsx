import React ,{ReactElement} from 'react'
import {InputStyle,Input} from './styled'
interface InputUserType {
  type: string;
  name: string;
  value: string;

  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function InputUser({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled
}: InputUserType): ReactElement {
  return required ?  (
    <InputStyle>

      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        placeholder={placeholder}
      />
    </InputStyle>
  ) : (
    <InputStyle>

      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </InputStyle>
  )
}

export default InputUser
