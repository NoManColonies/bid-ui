import axios, { AxiosResponse } from 'axios'
// import fs from "fs";

const API_ENDPOINT = 'http://localhost:3333'
const API_VERSION = 'api/v1'
const JSON_HEADER = { 'Content-Type': 'application/json' }

export async function HEALTH_CHECK (): Promise<boolean> {
  return axios({
    method: 'get',
    url: API_ENDPOINT,
    headers: JSON_HEADER
  })
    .then(() => true)
    .catch(() => false)
}

export async function FETCH_GET<K, V, Return> (
  section: string,
  headers: K,
  params: V
): Promise<Return> {
  return axios({
    method: 'get',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then((response: AxiosResponse): Promise<Return> => response.data)
}

export async function FETCH_POST<K, V, T, Return> (
  section: string,
  data: K,
  headers: V,
  params: T
): Promise<Return> {
  return axios({
    method: 'post',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then((response: AxiosResponse): Promise<Return> => response.data)
}

export async function FETCH_UPDATE<K, V, T, Return> (
  section: string,
  data: K,
  headers: V,
  params: T
): Promise<Return> {
  return axios({
    method: 'patch',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then((response: AxiosResponse): Promise<Return> => response.data)
}

export async function FETCH_DELETE<K, V, Return> (
  section: string,
  headers: K,
  params: V
): Promise<Return> {
  return axios({
    method: 'delete',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then((response: AxiosResponse): Promise<Return> => response.data)
}

// export async function FETCH_FILE_UPLOAD (
// TODO: implement file upload feature
// section: string
// fileName: string,
// file: fs.PathLike
// ) {
// const fd = new FormData()

//! FIXME: Resolve string | Blob issue
// fd.append(fileName, fs.createReadStream(file));
// axios.post(`${API_ENDPOINT}/${API_VERSION}/${section}`, fd, {
//! FIXME: Resolve form data headers
// headers: fd.getHeaders(),
// })
// }
