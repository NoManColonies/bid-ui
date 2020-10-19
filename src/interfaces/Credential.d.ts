export interface AlertType {
  uuid: string;
  is_read: boolean;
  title: string;
  type: string;
  content: string;
  reference: string;
  accept: string;
  decline: string;
}

export interface TokensType {
  token: string;
  refreshToken: string;
  uuid: string;
}

export interface CredentialType {
  token: TokensType;
  alerts: AlertType[];
}
