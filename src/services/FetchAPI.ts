import axios, { AxiosResponse } from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VERSION = 'api/v1'
const JSON_HEADER = { 'Content-Type': 'application/json' }

export async function HEALTH_CHECK(): Promise<void> {
  return axios({
    method: 'get',
    url: API_ENDPOINT,
    headers: JSON_HEADER
  }).then(() => console.log('Health check passed.'))
}

export async function AUTH_CHECK(token: string): Promise<void> {
  return HEALTH_CHECK().then(() =>
    axios({
      method: 'get',
      url: `${API_ENDPOINT}/${API_VERSION}/check`,
      headers: { ...JSON_HEADER, Authorization: `Bearer ${token}` }
    }).then(() => console.log('Auth check passed.'))
  )
}

export async function VALIDATION_CHECK(token: string): Promise<void> {
  return AUTH_CHECK(token).then(() =>
    axios({
      method: 'get',
      url: `${API_ENDPOINT}/${API_VERSION}/validation`,
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => console.log('Validation check passed.'))
  )
}

export async function FETCH_GET<K, V, Return>(
  section: string,
  headers: K,
  param?: string,
  query?: V
): Promise<Return> {
  return axios({
    method: 'get',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}${param ? `/${param}` : ''}`,
    headers: { ...JSON_HEADER, ...headers },
    params: query
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_POST<K, V, T, Return>(
  section: string,
  data: K,
  headers: V,
  param?: string,
  query?: T
): Promise<Return> {
  return axios({
    method: 'post',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}${param ? `/${param}` : ''}`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params: query
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_UPDATE<K, V, T, Return>(
  section: string,
  data: K,
  headers: V,
  param?: string,
  query?: T
): Promise<Return> {
  return axios({
    method: 'patch',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}${param ? `/${param}` : ''}`,
    data,
    headers: { ...JSON_HEADER, ...headers },
    params: query
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_DELETE<T, Return>(
  section: string,
  headers: T,
  param: string
): Promise<Return> {
  return axios({
    method: 'delete',
    url: `${API_ENDPOINT}/${API_VERSION}/${section}${param ? `/${param}` : ''}`,
    headers: { ...JSON_HEADER, ...headers }
  }).then(({ data }: AxiosResponse): Promise<Return> => data)
}

export async function FETCH_FILE_UPLOAD<T, Return>(
  // ? TODO: implement file upload feature
  section: string,
  fileName: string,
  file: File,
  headers: T,
  param?: string
): Promise<Return> {
  const fd = new FormData()

  // ! FIXME: Resolve string | Blob issue
  fd.append(fileName, file)
  return axios
    .post(
      `${API_ENDPOINT}/${API_VERSION}/${section}${param ? `/${param}` : ''}`,
      fd,
      {
        headers: { ...headers, 'Content-Type': 'multipart/form-data' }
      }
    )
    .then(({ data }: AxiosResponse) => data)
}
