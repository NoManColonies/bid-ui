import React, { createContext, useReducer } from "react";
import ICredential from "../../interfaces/ICredential";
import IAuthContext from "./IAuthContext";
import IPayload from "../../interfaces/IPayload";

const CredentialContext = createContext<IAuthContext<ICredential>>({});

const INITIAL_STATE: ICredential = {
  token: "",
};

function authReducer(state: ICredential, action: IPayload): ICredential {
  return state;
}

function AuthContext({ children }: IAuthContext<ICredential>): JSX.Element {
  const [credential, credentialDispatch] = useReducer(
    authReducer,
    INITIAL_STATE
  );

  return (
    <CredentialContext.Provider value={{ credential, credentialDispatch }}>
      {children}
    </CredentialContext.Provider>
  );
}

export default AuthContext;
