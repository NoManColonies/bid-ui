export default interface InputFieldType {
  type: string;
  name: string;
  value: string;
  icon?: any;
  required?: boolean;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
