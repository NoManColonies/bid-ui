import React from "react";
import InputField from "../InputField";
import IFormInput from "./IFormInput";
import Styled, { StyledComponentBase } from "styled-components";

const Form: String &
  StyledComponentBase<"form", any, {}, never> = Styled.form``;

function FormInput({ onSubmit }: IFormInput): JSX.Element {
  return <Form onSubmit={onSubmit}></Form>;
}

export default FormInput;
