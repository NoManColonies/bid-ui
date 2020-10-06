export default interface IAuthContext<T> {
  credential?: ReducerState<T>;
  credentialDispatch?: Dispatch<ReducerAction<T>>;
  children?: JSX.Element;
}
