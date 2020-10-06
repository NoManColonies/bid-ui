export default interface IInputField {
  type: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
