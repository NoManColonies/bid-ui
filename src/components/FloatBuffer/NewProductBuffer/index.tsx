import React, {
  ReactElement,
  useState,
  ChangeEvent,
  useCallback,
  useEffect,
  FormEvent
} from 'react'
import {
  Wrapper,
  InputFormWrapper,
  FormHeader,
  FormInputField,
  FormInputLabel,
  FormSubmitAction,
  FormSubmitActionWrapper,
  ImagePreview,
  SpecificationTag,
  SpecificationAction,
  SpecificationActionWrapper,
  SpecificationTagField
} from './styled'
import FloatBuffer from '../'
import DatePicker from 'react-datepicker'
import {
  VALIDATION_CHECK,
  FETCH_POST,
  FETCH_FILE_UPLOAD
} from '../../../services/FetchAPI'
import { useSpecification } from '../../../contexts/ProductSpecificationContext'
import { useToken } from '../../../utils/useToken'
import { AuthorizationHeaderType } from '../../../contexts/AuthContext/AuthContext'
import APIResponse from '../../../interfaces/APIResponse'
import { useHistory } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'

interface ProductResponseType {
  uuid: string;
}

function NewProductBuffer(): ReactElement {
  const history = useHistory()
  const [files, setFiles] = useState<File[]>([])
  const [images, setImages] = useState<(ArrayBuffer | string | null)[]>([])
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  )
  const [name, setName] = useState<string>('')
  const [originalPrice, setOriginalPrice] = useState<number>(0)
  const [startingPrice, setStartingPrice] = useState<number>(0)
  const [incrementalPrice, setIncrementalPrice] = useState<number>(0)
  const [
    specifications,
    {
      handleSetSpecification,
      handleUnsetSpecification,
      handleClearAllSpecification
    }
  ] = useSpecification()
  const [{ token }, { handleFetchToken }] = useToken()

  const handleAddSpecification = useCallback(
    (value: string) => {
      handleSetSpecification({ [value]: '' })
    },
    [handleSetSpecification]
  )

  const handleChangeSpecification = useCallback(
    (key: string, value: string) => {
      handleSetSpecification({ [key]: value })
    },
    [handleSetSpecification]
  )

  const isUndefined = useCallback(
    (value: string | undefined): boolean => typeof value === 'undefined',
    []
  )

  const isString = useCallback(
    (value: string | undefined): boolean => typeof value === 'string',
    []
  )

  const handleFileChange = useCallback(
    (files: FileList) => {
      const arr: (ArrayBuffer | string | null)[] = []
      const fileList: File[] = []

      function readAndPreview(file: File): void {
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          const reader = new FileReader()

          reader.addEventListener(
            'load',
            function () {
              arr.push(this.result)
            },
            false
          )
          fileList.push(file)

          reader.readAsDataURL(file)
        }
      }

      if (files) {
        ;[].forEach.call(files, readAndPreview)
      }

      setImages(arr)
      setFiles(fileList)
    },
    [setImages, setFiles]
  )

  const handleUploadProduct = useCallback(
    () =>
      FETCH_POST<
        { product_name: string; end_date: Date; stock: number },
        AuthorizationHeaderType,
        undefined,
        APIResponse<ProductResponseType>
      >(
        'products',
        // eslint-disable-next-line
        { product_name: name, end_date: endDate, stock: 1 },
        { Authorization: `Bearer ${token.token}` }
      ),
    [token.token, name, endDate]
  )

  const handleUploadImages = useCallback(
    (file: File, uuid: string): Promise<APIResponse<void>> =>
      FETCH_FILE_UPLOAD<AuthorizationHeaderType, APIResponse<void>>(
        'upload',
        'product_image',
        file,
        { Authorization: `Bearer ${token.token}` },
        uuid
      ),
    [token.token]
  )

  const handleUploadImagesProcess = useCallback(
    (uuid: string) => {
      if (files.length > 1) {
        const file = files.pop()
        file &&
          handleUploadImages(file, uuid).then(() =>
            handleUploadImagesProcess(uuid)
          )
      } else {
        const file = files.pop()
        return file && handleUploadImages(file, uuid)
      }
    },
    [files, handleUploadImages]
  )

  const handleUploadProductDetail = useCallback(
    (uuid: string) =>
      FETCH_POST<
        {
          uuid: string;
          product_price: number;
          product_bid_start: number;
          product_bid_increment: number;
          product_description: string;
        },
        AuthorizationHeaderType,
        undefined,
        APIResponse<{}>
      >(
        'productDetails',
        {
          uuid,
          //eslint-disable-next-line
          product_price: originalPrice,
          //eslint-disable-next-line
          product_bid_start: startingPrice,
          //eslint-disable-next-line
          product_bid_increment: incrementalPrice,
          //eslint-disable-next-line
          product_description: JSON.stringify(specifications)
        },
        { Authorization: `Bearer ${token.token}` }
      ),
    [
      token.token,
      originalPrice,
      startingPrice,
      incrementalPrice,
      specifications
    ]
  )

  const handleUploadProcess = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      token.token &&
        VALIDATION_CHECK(token.token)
          .then(() => {
            handleUploadProduct()
              .then(async ({ data }: APIResponse<ProductResponseType>) => {
                data && (await handleUploadImagesProcess(data.uuid))
                handleUploadProductDetail(data ? data.uuid : '').then(() =>
                  history.goBack()
                )
              })
              .catch((e: Error) => console.log(e))
          })
          .catch(() => {
            handleFetchToken()
            console.log('Token validation failed. please try again.')
          })
    },
    [
      token.token,
      handleFetchToken,
      handleUploadProductDetail,
      handleUploadProduct,
      history,
      handleUploadImagesProcess
    ]
  )

  return (
    <FloatBuffer width={'960px'}>
      <Wrapper onSubmit={handleUploadProcess}>
        <InputFormWrapper>
          <FormHeader>Product detail</FormHeader>
          <FormInputLabel>
            Product name:
            <FormInputField
              type="text"
              required
              onChange={({ target }: ChangeEvent<HTMLInputElement>): void =>
                setName(target.value)
              }
            />
          </FormInputLabel>
          <FormInputLabel>
            End date:
            <DatePicker
              selected={endDate}
              showTimeSelect
              onChange={(date: Date): void => setEndDate(date)}
              customInput={<FormInputField />}
              minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </FormInputLabel>
          <FormInputLabel>
            Original price:
            <FormInputField
              type="number"
              min="0"
              required
              onChange={({ target }: ChangeEvent<HTMLInputElement>): void =>
                setOriginalPrice(parseInt(target.value))
              }
            />
          </FormInputLabel>
          <FormInputLabel>
            Bid starting price:
            <FormInputField
              type="number"
              min="0"
              required
              onChange={({ target }: ChangeEvent<HTMLInputElement>): void =>
                setStartingPrice(parseInt(target.value))
              }
            />
          </FormInputLabel>
          <FormInputLabel>
            Bid minimum incremental price:
            <FormInputField
              type="number"
              min="0"
              required
              onChange={({ target }: ChangeEvent<HTMLInputElement>): void =>
                setIncrementalPrice(parseInt(target.value))
              }
            />
          </FormInputLabel>
        </InputFormWrapper>
        <InputFormWrapper>
          <FormHeader>Product Images</FormHeader>
          <FormInputField
            type="file"
            multiple
            required
            onChange={({ target }: ChangeEvent<HTMLInputElement>): void => {
              target.files && handleFileChange(target.files)
            }}
          />
          {images &&
            images.map((image, index) => (
              <ImagePreview key={index} url={image} />
            ))}
        </InputFormWrapper>
        <InputFormWrapper>
          <FormHeader>Product specification</FormHeader>
          <SpecificationActionWrapper>
            {Object.keys(specifications).map(
              (key) =>
                isString(specifications[key]) && (
                  <SpecificationTag key={key}>
                    {key}:{' '}
                    <SpecificationTagField
                      value={specifications[key]}
                      onChange={({
                        target
                      }: ChangeEvent<HTMLInputElement>): void =>
                        handleChangeSpecification(key, target.value)
                      }
                    />
                  </SpecificationTag>
                )
            )}
          </SpecificationActionWrapper>
          <SpecificationActionWrapper>
            {Object.keys(specifications).map(
              (key) =>
                isUndefined(specifications[key]) && (
                  <SpecificationAction
                    key={key}
                    type="button"
                    onClick={(): void => handleAddSpecification(key)}
                  >
                    Add {key}
                  </SpecificationAction>
                )
            )}
          </SpecificationActionWrapper>
        </InputFormWrapper>
        <FormSubmitActionWrapper>
          <FormSubmitAction type="submit">Upload</FormSubmitAction>
        </FormSubmitActionWrapper>
      </Wrapper>
    </FloatBuffer>
  )
}

export default NewProductBuffer
