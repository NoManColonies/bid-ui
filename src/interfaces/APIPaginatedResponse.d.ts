export default interface APIPaginatedResponseType<T> {
  status: number;
  error?: string;
  pages: any;
  data?: T[];
}
