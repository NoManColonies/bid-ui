import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import Styled, { StyledComponentBase } from "styled-components";
import axios from "axios";
import InputField from "./components/InputField";
import IAPIResponse from "./interfaces/IAPIResponse";

const Button: String &
  StyledComponentBase<"button", any, {}, never> = Styled.button``;
const Paragraph: String & StyledComponentBase<"p", any, {}, never> = Styled.p``;
const Form: String &
  StyledComponentBase<"form", any, {}, never> = Styled.form``;

function App(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect((): void => {
    setToken(window.localStorage.getItem("token") || "");
  }, []);

  useEffect((): void => {
    token && window.localStorage.setItem("token", token);
  }, [token]);

  const handleFetchData = useCallback(async (): Promise<IAPIResponse> => {
    return axios({
      method: "post",
      url: "http://localhost:3333/api/v1/users",
      data: {
        username,
        password,
        email,
        key,
      },
      headers: { "Content-Type": "application/json" },
    });
  }, [email, key, password, username]);

  const handleFetchAction = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    await handleFetchData()
      .then((response: IAPIResponse): void =>
        setToken(response.data.tokens ? response.data.tokens.token : "")
      )
      .catch((e: Error): void => console.error(e))
      .finally((): void => setIsLoading(false));
  }, [handleFetchData]);

  const onSubmitRegister = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      handleFetchAction();
    },
    [handleFetchAction]
  );

  return (
    <div className="">
      {isLoading && <Paragraph children="is loading...." />}
      {token && <Paragraph children={token} />}
      <Form onSubmit={onSubmitRegister}>
        <InputField
          type="text"
          name="username"
          value={username}
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {
            setUsername(event.target.value);
          }}
        ></InputField>
        <InputField
          type="email"
          name="email"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {
            setEmail(event.target.value);
          }}
        ></InputField>
        <InputField
          type="password"
          name="password"
          value={password}
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {
            setPassword(event.target.value);
          }}
        ></InputField>
        <InputField
          type="text"
          name="key"
          value={key}
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {
            setKey(event.target.value);
          }}
        ></InputField>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default App;
