export interface NotificationInterface {
  alerts: AlertType[];
}

export interface AlertWrapperInterface {
  type: string;
}

export interface AlertThumbnailInterface {
  url: string;
}

export interface AlertActionInterface {
  actionType: string;
}
