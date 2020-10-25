import React, { ReactElement, ChangeEvent } from 'react'
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
  SpecificationTagField,
  TagInputFormWrapper,
  TagsWrapper,
  TagInputLabel,
  TagColumnWrapper
} from './styled'
import FloatBuffer from '../'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useAddNewProduct } from '../../../utils/useAddNewProduct'

function NewProductBuffer(): ReactElement {
  const {
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
    handleOnClickAddTag,
    handleOnClickRemoveTag,
    handleAddSpecification,
    handleChangeSpecification,
    handleSubmitTag,
    isUndefined,
    isString,
    handleFileChange,
    handleUploadProcess
  } = useAddNewProduct()

  return (
    <FloatBuffer width={'1440px'}>
      <Wrapper>
        <form onSubmit={handleUploadProcess}>
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
            {images.map((image, index) => (
              <ImagePreview key={index} url={image} />
            ))}
          </InputFormWrapper>
          <InputFormWrapper>
            <FormHeader>Product specification</FormHeader>
            <SpecificationActionWrapper>
              {Object.keys(specifications).map(
                (key: string) =>
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
                (key: string) =>
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
        </form>
        <TagColumnWrapper>
          <TagInputFormWrapper onSubmit={handleSubmitTag}>
            <TagInputLabel>
              Find or create new tag
              <FormInputField
                type="text"
                onChange={handleChangeTagInput}
                value={currentTag}
              />
              <TagsWrapper>
                {tagList.map((tag: string, index: number) => (
                  <SpecificationTag
                    key={index}
                    onClick={(): void => handleOnClickRemoveTag(tag)}
                  >
                    #{tag}
                  </SpecificationTag>
                ))}
              </TagsWrapper>
            </TagInputLabel>
          </TagInputFormWrapper>
          <TagInputFormWrapper>
            <TagInputLabel>
              Trending tags
              <TagsWrapper>
                {filteredRecommendedTags.map((tag: string) => (
                  <SpecificationTag
                    key={tag}
                    onClick={(): void => handleOnClickAddTag(tag)}
                  >
                    #{tag}
                  </SpecificationTag>
                ))}
              </TagsWrapper>
            </TagInputLabel>
          </TagInputFormWrapper>
        </TagColumnWrapper>
      </Wrapper>
    </FloatBuffer>
  )
}

export default NewProductBuffer
