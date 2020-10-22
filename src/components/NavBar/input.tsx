import React, { useState,ReactElement,FormEvent,ChangeEvent } from "react";

function Input({ onSubmit = (value: string): void => console.log(value) }): ReactElement {
  const [value, setValue] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        value={value}
        onChange={handleInputChange}
        placeholder=""
      />
    </form>
  );
}

export default Input;
