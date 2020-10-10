import React, {
  ReactElement,
  createContext,
  useReducer,
  useContext,
  useCallback,
  useMemo
} from 'react'
import Payload from '../../interfaces/Payload'
import {
  PAYLOAD_TYPE,
  USE_REGISTRATION_RETURN_TYPE,
  RegistrationFormType,
  RegistrationContextType
} from './RegistrationContext'

const INITIAL_STATE: RegistrationFormType = {
  username: '',
  email: '',
  password: '',
  key: '',
  loading: false
}

const RegistrationContext = createContext<
  RegistrationContextType<RegistrationFormType>
>({})

function registrationReducer(
  state: RegistrationFormType,
  action: Payload<PAYLOAD_TYPE>
): RegistrationFormType {
  switch (action.type) {
    case 'USERNAME':
      return { ...state, username: action.payload }
    case 'EMAIL':
      return { ...state, email: action.payload }
    case 'PASSWORD':
      return { ...state, password: action.payload }
    case 'KEY':
      return { ...state, key: action.payload }
    case 'LOADING':
      return { ...state, loading: action.payload === 'true' }
    case 'RESET':
      return INITIAL_STATE
    default:
      return state
  }
}

function RegisterContext({
  children
}: RegistrationContextType<RegistrationFormType>): ReactElement {
  const [registrationForm, registrationFormDispatch] = useReducer(
    registrationReducer,
    INITIAL_STATE
  )

  return (
    <RegistrationContext.Provider
      value={{ registrationForm, registrationFormDispatch }}
    >
      {children}
    </RegistrationContext.Provider>
  )
}

export default RegisterContext

export function useRegistration(): USE_REGISTRATION_RETURN_TYPE {
  const { registrationForm, registrationFormDispatch } = useContext(
    RegistrationContext
  )

  const handleChangeUsername = useCallback(
    (username: string) =>
      registrationFormDispatch({
        type: 'USERNAME',
        payload: username
      }),
    [registrationFormDispatch]
  )

  const handleChangeEmail = useCallback(
    (email: string) =>
      registrationFormDispatch({
        type: 'EMAIL',
        payload: email
      }),
    [registrationFormDispatch]
  )

  const handleChangePassword = useCallback(
    (password: string) =>
      registrationFormDispatch({
        type: 'PASSWORD',
        payload: password
      }),
    [registrationFormDispatch]
  )

  const handleChangeKey = useCallback(
    (key: string) =>
      registrationFormDispatch({
        type: 'KEY',
        payload: key
      }),
    [registrationFormDispatch]
  )

  const handleChangeLoading = useCallback(
    (loading: boolean) =>
      registrationFormDispatch({
        type: 'KEY',
        payload: loading ? 'true' : 'false'
      }),
    [registrationFormDispatch]
  )

  const handleChangeReset = useCallback(
    () => registrationFormDispatch({ type: 'RESET', payload: '' }),
    [registrationFormDispatch]
  )

  const registrationFormData = useMemo(
    () => ({
      username: registrationForm.username,
      email: registrationForm.email,
      password: registrationForm.password,
      key: registrationForm.key,
      loading: registrationForm.loading
    }),
    [registrationForm]
  )

  const handleFunctions = useMemo(
    () => ({
      handleChangeUsername,
      handleChangeEmail,
      handleChangePassword,
      handleChangeKey,
      handleChangeLoading,
      handleChangeReset
    }),
    [
      handleChangeUsername,
      handleChangeEmail,
      handleChangePassword,
      handleChangeKey,
      handleChangeLoading,
      handleChangeReset
    ]
  )

  return [registrationFormData, handleFunctions]
}
