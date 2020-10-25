import React ,{ReactElement} from 'react'
import {InputStyle,Input} from './styled'
interface InputIdCardType {

  name: string;
  value: string;

  required?: boolean;
  placeholder?: string;

  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function InputStatus({

  name,
  value,

  onChange,
  placeholder,
  required,
}: InputIdCardType): ReactElement {
  return required ?  (
    <InputStyle>

      <Input

        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </InputStyle>
  ) : (
    <InputStyle>

      <Input

        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputStyle>
  )
}

export default InputStatus
