import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import Styled from "styled-components";
import InputField from "./components/InputField";
import IAPIResponse from "./interfaces/IAPIResponse";
import { FETCH_POST } from "./services/FETCH_API";

//! FIXME: Style and organize these components
const Button = Styled.button``;
const Paragraph = Styled.p``;
const Form = Styled.form``;

// A structure of registration form
interface IRegistrationForm {
  username: string;
  email: string;
  password: string;
  key?: string;
}

// An optional auth header
interface IHeader {
  Authorization?: string;
}

// What registration response will look like
interface IRegistrationResponse {
  // A return data about user
  data: {
    uuid: string;
    username: string;
  };
  // The tokens we want to store locally
  tokens: {
    token: string;
    refresh_token: string;
  };
}

function App(): JSX.Element {
  //? TODO: combine all states and functions into reducer state
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect((): void => {
    !token && setToken(window.localStorage.getItem("token") || "");
  }, [token]);

  useEffect((): void => {
    token && window.localStorage.setItem("token", token);
  }, [token]);

  // handle function that will perform registration
  const handleFetchAction = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    await FETCH_POST<IRegistrationForm, IHeader, any>(
      "users",
      { username, email, password, key },
      {},
      undefined
    )
      .then((response: IAPIResponse<IRegistrationResponse>): void =>
        setToken(response.tokens ? response.tokens.token : "")
      )
      .catch((e: Error): void => console.error(e))
      .finally((): void => setIsLoading(false));
  }, [email, username, password, key]);

  // handle function that will submit form request
  const onSubmitRegister = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      // prevent default submit actions
      e.preventDefault();
      // call handleFetchAction
      handleFetchAction();
    },
    [handleFetchAction]
  );

  return (
    <div className="">
      {/* TODO: Style these loading indicator properly */}
      {isLoading && <Paragraph children="is loading...." />}
      {/* FIXME: Remove these temporary debugging component */}
      {token && <Paragraph children={token} />}
      {/* TODO: organize these components for easier readability */}
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
