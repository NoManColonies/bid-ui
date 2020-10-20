import axios, { AxiosResponse } from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VERSION = 'api/v1'
const JSON_HEADER = { 'Content-Type': 'application/json' }

export async function HEALTH_CHECK(): Promise<boolean> {
  return axios({
    method: 'get',
    url: API_ENDPOINT,
    headers: JSON_HEADER
  })
    .then(() => true)
    .catch((e: Error) => {
      console.error(e)
      return false
    })
}

export async function FETCH_GET<K, V, Return>(
  section: string,
  headers: K,
  params: V,
  query?: string
): Promise<Return> {
  return axios({
    method: 'get',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}${
      query ? `/?${query}` : ''
    }`,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_POST<K, V, T, Return>(
  section: string,
  data: K,
  headers: V,
  params: T,
  query?: string
): Promise<Return> {
  return axios({
    method: 'post',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}${
      query ? `/?${query}` : ''
    }`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_UPDATE<K, V, T, Return>(
  section: string,
  data: K,
  headers: V,
  params: T,
  query?: string
): Promise<Return> {
  return axios({
    method: 'patch',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}${
      query ? `/?${query}` : ''
    }`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_DELETE<K, V, Return>(
  section: string,
  headers: K,
  params: V
): Promise<Return> {
  return axios({
    method: 'delete',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}`,
    headers: { ...JSON_HEADER, ...headers },
    params
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_FILE_UPLOAD(
  // ? TODO: implement file upload feature
  section: string,
  fileName: string,
  file: Blob
): Promise<void> {
  const fd = new FormData()

  // ! FIXME: Resolve string | Blob issue
  fd.append(fileName, file)
  axios.post(`${API_ENDPOINT}/${API_VERSION}/${section}`, fd, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
