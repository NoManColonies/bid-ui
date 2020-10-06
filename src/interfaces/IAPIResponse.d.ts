export default interface IAPIResponse extends AxiosResponse {
  data: {
    status: number;
    error?: string;
    pages?: { total: string; perPage: string; lastPage?: string; page: string };
    data?: object[] | object;
    tokens?: { token: string; refresh_token?: string };
  };
}
