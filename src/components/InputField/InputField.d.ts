export default interface InputFieldType {
  type: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
