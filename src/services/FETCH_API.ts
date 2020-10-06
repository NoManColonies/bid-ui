import axios, { AxiosResponse } from "axios";
// import fs from "fs";

const API_ENDPOINT = "http://localhost:3333";
const API_VERSION = "api/v1";
const JSON_HEADER = { "Content-Type": "application/json" };

export async function HEALTH_CHECK(): Promise<AxiosResponse["data"]> {
  return axios({
    method: "get",
    url: API_ENDPOINT,
    headers: JSON_HEADER,
  }).then((response: AxiosResponse) => response.data);
}

export async function FETCH_GET<K = any, V = any>(
  section: string,
  headers: K,
  params: V
): Promise<AxiosResponse["data"]> {
  return axios({
    method: "get",
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    headers: { ...JSON_HEADER, ...headers },
    params,
  }).then((response: AxiosResponse) => response.data);
}

export async function FETCH_POST<K = any, V = any, T = any>(
  section: string,
  data: K,
  headers: V,
  params: T
): Promise<AxiosResponse["data"]> {
  return axios({
    method: "post",
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params,
  }).then((response: AxiosResponse) => response.data);
}

export async function FETCH_UPDATE<K = any, V = any, T = any>(
  section: string,
  data: K,
  headers: V,
  params: T
): Promise<AxiosResponse["data"]> {
  return axios({
    method: "patch",
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params,
  }).then((response: AxiosResponse) => response.data);
}

export async function FETCH_DELETE<K = any, V = any>(
  section: string,
  headers: K,
  params: V
): Promise<AxiosResponse["data"]> {
  return axios({
    method: "delete",
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    headers: { ...JSON_HEADER, ...headers },
    params,
  }).then((response: AxiosResponse) => response.data);
}

//? TODO: implement file upload feature
export async function FETCH_FILE_UPLOAD(
  section: string
  // fileName: string,
  // file: fs.PathLike
) {
  const fd = new FormData();

  //! FIXME: Resolve string | Blob issue
  // fd.append(fileName, fs.createReadStream(file));
  axios.post(`${API_ENDPOINT}/${API_VERSION}/${section}`, fd, {
    //! FIXME: Resolve form data headers
    // headers: fd.getHeaders(),
  });
}
