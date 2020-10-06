import React from "react";
import IInputField from "./IInputField";
import Styled, { StyledComponentBase } from "styled-components";

const Input: String &
  StyledComponentBase<"input", any, {}, never> = Styled.input``;

function InputField({ type, name, value, onChange, required }: IInputField) {
  return required ? (
    <Input type={type} name={name} value={value} onChange={onChange} required />
  ) : (
    <Input type={type} name={name} value={value} onChange={onChange} />
  );
}

export default InputField;
