import {
  useState,
  ChangeEvent,
  useCallback,
  useEffect,
  FormEvent,
  Dispatch,
  SetStateAction,
  useMemo
} from 'react'
import {
  VALIDATION_CHECK,
  FETCH_GET,
  FETCH_POST,
  FETCH_FILE_UPLOAD
} from '../services/FetchAPI'
import { useSpecification } from '../contexts/ProductSpecificationContext'
import { useToken } from '../utils/useToken'
import { AuthorizationHeaderType } from '../contexts/AuthContext/AuthContext'
import APIResponse from '../interfaces/APIResponse'
import { useHistory } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import { AxiosResponse, AxiosError } from 'axios'
// import { SpecificationsType } from '../contexts/ProductSpecificationContext/ProductSpecificationContext'

interface ProductResponseType {
  uuid: string;
}

interface UseAddNewProductInterface {
  images: (ArrayBuffer | string | null)[];
  endDate: Date;
  tagList: string[];
  currentTag: string;
  setEndDate: Dispatch<SetStateAction<Date>>;
  setName: Dispatch<SetStateAction<string>>;
  setOriginalPrice: Dispatch<SetStateAction<number>>;
  setStartingPrice: Dispatch<SetStateAction<number>>;
  setIncrementalPrice: Dispatch<SetStateAction<number>>;
  specifications: any;
  filteredRecommendedTags: string[];
  handleChangeTagInput: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitTag: (e: FormEvent<HTMLFormElement>) => void;
  handleOnClickAddTag: (tagToAdd: string) => void;
  handleOnClickRemoveTag: (unwantedTag: string) => void;
  handleAddSpecification: (name: string) => void;
  handleChangeSpecification: (key: string, name: string) => void;
  isUndefined: (value: string | undefined) => boolean;
  isString: (value: string | undefined) => boolean;
  handleFileChange: (files: FileList) => void;
  handleUploadProcess: (e: FormEvent<HTMLFormElement>) => void;
}

export function useAddNewProduct(): UseAddNewProductInterface {
  const history = useHistory()
  const [files, setFiles] = useState<File[]>([])
  const [images, setImages] = useState<(ArrayBuffer | string | null)[]>([])
  const [endDate, setEndDate] = useState<Date>(
    new Date(new Date().setDate(new Date().getDate() + 1))
  )
  const [name, setName] = useState<string>('')
  const [originalPrice, setOriginalPrice] = useState<number>(0)
  const [startingPrice, setStartingPrice] = useState<number>(0)
  const [incrementalPrice, setIncrementalPrice] = useState<number>(0)
  const [tagList, setTagList] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState<string>('')
  const [recommendedTags, setRecommendedTags] = useState<string[]>([])
  const [filteredRecommendedTags, setFilteredRecommendedTags] = useState<
    string[]
  >([])
  const [
    specifications,
    {
      handleSetSpecification,
      handleUnsetSpecification,
      handleClearAllSpecification
    }
  ] = useSpecification()
  const [{ token }, { handleFetchToken }] = useToken()

  const handleChangeTagInput = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setCurrentTag(target.value)
      if (target.value.length > 0) {
        setFilteredRecommendedTags(
          recommendedTags.filter((tag) => tag.includes(target.value))
        )
      } else {
        setFilteredRecommendedTags(recommendedTags)
      }
    },
    [setCurrentTag, setFilteredRecommendedTags, recommendedTags]
  )

  const handleSubmitTag = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (currentTag.length && !tagList.find((tag) => tag === currentTag))
        setTagList([...tagList, currentTag])
      setCurrentTag('')
      setFilteredRecommendedTags(recommendedTags)
    },
    [
      setTagList,
      tagList,
      currentTag,
      setCurrentTag,
      setFilteredRecommendedTags,
      recommendedTags
    ]
  )

  const handleOnClickRemoveTag = useCallback(
    (unwantedTag: string) => {
      console.log(unwantedTag)
      setTagList(tagList.filter((tag) => tag !== unwantedTag))
    },
    [setTagList, tagList]
  )
  const handleOnClickAddTag = useCallback(
    (tagToAdd: string) => {
      if (!tagList.find((tag) => tag === tagToAdd))
        setTagList([...tagList, tagToAdd])
    },
    [setTagList, tagList]
  )

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

  const handleUploadImage = useCallback(
    (file: File, uuid: string): Promise<APIResponse<void>> =>
      FETCH_FILE_UPLOAD<AuthorizationHeaderType, APIResponse<void>>(
        'upload/product',
        'product_image',
        file,
        { Authorization: `Bearer ${token.token}` },
        uuid
      ),
    [token.token]
  )

  const handleUploadTag = useCallback(
    // eslint-disable-next-line
    (tag_name: string, uuid: string, references: string = '') =>
      FETCH_POST<
        { tag_name: string },
        AuthorizationHeaderType,
        { references: string },
        AxiosResponse
      >(
        'products/tags',
        // eslint-disable-next-line
        { tag_name },
        { Authorization: `Bearer ${token.token}` },
        uuid,
        { references }
      )
        .then(({ data }: AxiosResponse) => data)
        .catch((e: AxiosError) => console.error(e)),
    [token.token]
  )

  const handleUploadImagesProcess = useCallback(
    (uuid: string) => {
      if (files.length > 1) {
        const file = files.pop()
        file &&
          handleUploadImage(file, uuid).then(() =>
            handleUploadImagesProcess(uuid)
          )
      } else {
        const file = files.pop()
        return file && handleUploadImage(file, uuid)
      }
    },
    [files, handleUploadImage]
  )

  const handleUploadSpecification = useCallback(
    (type: string, name: string, uuid: string) =>
      FETCH_POST(
        'products/specifications',
        { type, name },
        { Authorization: `Bearer ${token.token}` },
        uuid
      ),
    [token.token]
  )

  const handleUploadProductDetail = useCallback(
    (uuid: string) =>
      FETCH_POST<
        {
          uuid: string;
          product_price: number;
          product_bid_start: number;
          product_bid_increment: number;
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
          product_bid_increment: incrementalPrice
        },
        { Authorization: `Bearer ${token.token}` }
      ),
    [token.token, originalPrice, startingPrice, incrementalPrice]
  )

  const handleUploadProcess = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      token.token &&
        VALIDATION_CHECK(token.token)
          .then(() => {
            handleUploadProduct()
              .then(async ({ data }: APIResponse<ProductResponseType>) => {
                if (data) {
                  await handleUploadImagesProcess(data.uuid)
                  const tagPromises = tagList.map((tag) =>
                    handleUploadTag(tag, data.uuid)
                  )
                  await Promise.all(tagPromises)
                  const specificationPromises = Object.keys(specifications)
                    .filter((tag) => specifications[tag] !== undefined)
                    .map((key) =>
                      handleUploadSpecification(
                        key,
                        specifications[key],
                        data.uuid
                      )
                    )
                  await Promise.all(specificationPromises)
                  handleUploadProductDetail(data.uuid).then(() =>
                    history.goBack()
                  )
                }
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
      handleUploadImagesProcess,
      tagList,
      handleUploadTag,
      handleUploadSpecification,
      specifications
    ]
  )

  const handleDownloadTags = useCallback(
    () =>
      FETCH_GET<undefined, undefined, APIResponse<any>>(
        'tags/sort',
        undefined
      ).then(({ data }: APIResponse<any>) => {
        setRecommendedTags(data)
        setFilteredRecommendedTags(data)
      }),
    [setRecommendedTags, setFilteredRecommendedTags]
  )

  useEffect(() => {
    handleDownloadTags()
  }, [handleDownloadTags])

  const memorizedReturn = useMemo(
    () => ({
      images,
      tagList,
      currentTag,
      endDate,
      setEndDate,
      setName,
      setOriginalPrice,
      setStartingPrice,
      setIncrementalPrice,
      specifications,
      filteredRecommendedTags,
      handleChangeTagInput,
      handleSubmitTag,
      handleOnClickAddTag,
      handleOnClickRemoveTag,
      handleAddSpecification,
      handleChangeSpecification,
      isUndefined,
      isString,
      handleFileChange,
      handleUploadProcess
    }),
    [
      images,
      tagList,
      currentTag,
      endDate,
      setEndDate,
      setName,
      setOriginalPrice,
      setStartingPrice,
      setIncrementalPrice,
      specifications,
      filteredRecommendedTags,
      handleChangeTagInput,
      handleSubmitTag,
      handleOnClickAddTag,
      handleOnClickRemoveTag,
      handleAddSpecification,
      handleChangeSpecification,
      isUndefined,
      isString,
      handleFileChange,
      handleUploadProcess
    ]
  )

  return memorizedReturn
}
