export type PAYLOAD_TYPE = 'SET_PROPERTIES' | 'UNSET_PROPERTY' | 'CLEAR_ALL'

export type USE_SPECIFICATION_RETURN_TYPE = [
  SpecificationType,
  {
    handleSetSpecification: (properties: SpecificationsType) => void;
    handleUnsetSpecification: (property: string) => void;
    handleClearAllSpecification: () => void;
  }
]

export interface ProductSpecificationContextPropsType {
  children: ReactElement | ReactElement[];
}

export interface SpecificationsType {
  color?: string;
  size?: string;
  width?: string;
  height?: string;
  volumn?: string;
  weight?: string;
  brand?: string;
  model?: string;
}

export interface SpecificationContextType<T> {
  specifications?: ReducerState<T>;
  dispatchSpecification?: Dispatch<ReducerAction<T>>;
}
