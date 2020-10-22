export interface NotificationInterface {
  alerts: AlertType[];
  toggleNotification: Function;
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
