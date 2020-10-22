import React, { useState,ReactElement,FormEvent,ChangeEvent } from "react";
import styled from 'styled-components'


const Container =styled.div`
    padding-top:1rem;
    display:flex;
    width:34vw;
    justify-content:flex-end;

`


const Form =styled.form`

      width: 200px;
      height: 40px;
      border-radius:10px 10px 10px 10px;
      border:none;
      font-family: 'Josefin Sans', sans-serif;




`

const SearchInput=styled.input`
      width: 200px;
      height: 25px;
     border-radius:10px 10px 10px 10px;
     border:none;
     background: white;
     outline: none;
     padding-left:0.5rem;
     font-family: 'Josefin Sans', sans-serif;

     &::placeholder{
       padding-left:0.5rem;
       font-family: 'Josefin Sans', sans-serif;
     }

`



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
