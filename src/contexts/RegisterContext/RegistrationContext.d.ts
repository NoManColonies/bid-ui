export type PAYLOAD_TYPE =
  | 'USERNAME'
  | 'EMAIL'
  | 'PASSWORD'
  | 'KEY'
  | 'LOADING'
  | 'RESET'
export type USE_REGISTRATION_RETURN_TYPE = [
  RegistrationFormType,
  {
    handleChangeUsername: (username: string) => void;
    handleChangeEmail: (email: string) => void;
    handleChangePassword: (password: string) => void;
    handleChangeKey: (key: string) => void;
    handleChangeLoading: (loading: boolean) => void;
    handleChangeReset: () => void;
  }
]

export interface RegistrationFormType {
  username: string;
  email: string;
  password: string;
  key: string;
  loading: boolean;
}

export interface RegistrationContextType<T> {
  registrationForm?: ReducerState<T>;
  registrationFormDispatch?: Dispatch<ReducerAction<T>>;
  children?: ReactElement;
}
