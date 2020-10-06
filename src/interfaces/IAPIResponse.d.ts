export default interface IAPIResponse<T> {
  status: number;
  error?: string;
  data?: T;
  tokens?: { token: string; refresh_token?: string };
}
