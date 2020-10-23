import React, { useState,ReactElement,FormEvent,ChangeEvent } from "react";
import {Container,Form,SearchInput} from './styled'



function Input({ onSubmit = (value: string): void => console.log(value) }): ReactElement {
  const [value, setValue] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

  return (
    <Container>
    <Form onSubmit={handleSubmit} className="input-container">
      <SearchInput
        value={value}
        onChange={handleInputChange}
        placeholder="search.."
      >
          </SearchInput>

      </Form>
    </Container>
  );
}

export default Input;
