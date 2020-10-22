export type PAYLOAD_TYPE =
  | 'NEW_TOKEN'
  | 'ABORT_ALL'
  | 'NEW_ALERT'
  | 'ADD_ALERT'
  | 'EDIT_ALERT'
  | 'REMOVE_ALERT'

export type USE_TOKEN_RETURN_TYPE = [
  CredentialType,
  {
    handleFetchToken: () => void;
    handleFetchLogin: ({ username, password }: LoginFormType) => void;
    handleFetchLogout: () => void;
    handleFetchRegister: ({
      username,
      email,
      password,
      key
    }: RegistrationFormType) => void;
    handleFetchAlerts: () => void;
    handleFetchNewAlerts: (alertUuids: string[]) => void;
    handleAddAlert: (alert: AlertType) => void;
    handleRemoveAlert: (alert: AlertType) => void;
    handleEditAlert: (alert: AlertType) => void;
  }
]

// A structure of registration form
export interface RegistrationFormType {
  username: string;
  email: string;
  password: string;
  key?: string;
}

// A structure of login form
export interface LoginFormType {
  username: string;
  password: string;
}

// A structure of refresh token form
export interface RefreshTokenFormType {
  refreshToken: string;
}

// What registration response will look like
export interface RegistrationResponseType {
  // A return data about user
  status: number;
  data: {
    uuid: string;
    username: string;
  };
  // The tokens we want to store locally
  tokens: {
    token: string;
    refreshToken: string;
    uuid: string;
  };
}

// What refresh token response will look like
export interface RefreshTokenResponseType {
  status: number;
  tokens: {
    token: string;
    refreshToken: string;
    uuid: string;
  };
}

export interface AuthContextType<T> {
  credential?: ReducerState<T>;
  credentialDispatch?: Dispatch<ReducerAction<T>>;
  children?: ReactElement;
}

export interface AuthorizationHeaderType {
  Authorization: string;
}
