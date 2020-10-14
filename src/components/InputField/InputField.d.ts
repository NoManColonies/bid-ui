export default interface InputFieldType {
  type: string;
  name: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
