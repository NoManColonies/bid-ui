export default interface IAPIPaginatedResponse<T> {
  status: number;
  error?: string;
  pages: any;
  data?: T[];
}
