import React, {
  createContext,
  ReactElement,
  useReducer,
  useContext,
  useCallback,
  useMemo
} from 'react'
import {
  ProductSpecificationContextPropsType,
  SpecificationsType,
  SpecificationContextType,
  PAYLOAD_TYPE,
  USE_SPECIFICATION_RETURN_TYPE
} from './ProductSpecificationContext'
import Payload from '../../interfaces/Payload'

const SpecificationContext = createContext<
  SpecificationContextType<SpecificationsType>
>({})

const INITIAL_STATE: SpecificationsType = {
  color: undefined,
  size: undefined,
  width: undefined,
  height: undefined,
  volumn: undefined,
  weight: undefined,
  brand: undefined,
  model: undefined
}

function specificationsReducer(
  state: SpecificationsType,
  action: Payload<PAYLOAD_TYPE>
): SpecificationsType {
  switch (action.type) {
    case 'SET_PROPERTIES': {
      const payload = JSON.parse(action.payload)

      return { ...state, ...payload }
    }
    case 'UNSET_PROPERTY': {
      const payload = JSON.parse(action.payload)

      return { ...state, [payload.key]: undefined }
    }
    case 'CLEAR_ALL': {
      return INITIAL_STATE
    }
    default:
      return state
  }
}

function ProductSpecificationContext({
  children
}: ProductSpecificationContextPropsType): ReactElement {
  const [specifications, dispatchSpecification] = useReducer(
    specificationsReducer,
    INITIAL_STATE
  )

  return (
    <SpecificationContext.Provider
      value={{ specifications, dispatchSpecification }}
    >
      {children}
    </SpecificationContext.Provider>
  )
}

export function useSpecification(): USE_SPECIFICATION_RETURN_TYPE {
  const { specifications, dispatchSpecification } = useContext(
    SpecificationContext
  )

  const handleSetSpecification = useCallback(
    (properties) => {
      dispatchSpecification({
        type: 'SET_PROPERTIES',
        payload: JSON.stringify(properties)
      })
    },
    [dispatchSpecification]
  )

  const handleUnsetSpecification = useCallback(
    (property: string) => {
      dispatchSpecification({
        type: 'UNSET_PROPERTY',
        payload: JSON.stringify({ key: property })
      })
    },
    [dispatchSpecification]
  )

  const handleClearAllSpecification = useCallback(() => {
    dispatchSpecification({ type: 'CLEAR_ALL', payload: '' })
  }, [dispatchSpecification])

  const handleFunctions = useMemo(
    () => ({
      handleSetSpecification,
      handleUnsetSpecification,
      handleClearAllSpecification
    }),
    [
      handleSetSpecification,
      handleUnsetSpecification,
      handleClearAllSpecification
    ]
  )

  return [specifications, handleFunctions]
}

export default ProductSpecificationContext
