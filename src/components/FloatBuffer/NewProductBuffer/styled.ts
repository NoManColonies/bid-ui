import styled from 'styled-components'

export const Wrapper = styled.form`
  padding: 1rem;
  box-sizing: border-box;
`

export const InputFormWrapper = styled.div`
  border-radius: 10px;
  background-color: #d2f5eb;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  & + div {
    margin-top: 1rem;
  }
`

export const FormHeader = styled.h3`
  color: #0278ae;
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const FormInputField = styled.input`
  background-color: #abdfe3;
  border: none;
  border-radius: 10px;
  padding: 0.3rem 0.4rem;
  margin: 0.25rem 0.5rem;
`

export const FormInputLabel = styled.label`
  font-size: 1rem;
  color: #3f4a47;
  display: flex;
  align-items: baseline;
  flex-grow: 1;
`

export const FormSubmitActionWrapper = styled.div`
  border-radius: 10px;
  background-color: transparent;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: center;
`

export const FormSubmitAction = styled.button`
  border: none;
  background-color: #59c73e;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 1.5rem;
  transition: opacity ease 100ms;

  &:hover {
    opacity: 0.6;
  }
`

export const ImagePreview = styled.span`
  width: 100px;
  height: 100px;
  background-image: url(${({ url }: { url: any }): any => url});
  background-position: center;
  background-size: cover;
  background-color: #abdfe3;
  border-radius: 10px;

  & + span {
    margin-left: 0.5rem;
  }
`

export const SpecificationTag = styled.div`
  background-color: #dbdbdb;
  border-radius: 10px;
  padding: 0.3rem;
  color: #000;
  height: auto;
  margin-top: 0.3rem;

  & + div {
    margin-left: 0.5rem;
  }
`

export const SpecificationTagField = styled.input`
  border: none;
  background-color: #cfcfcf;
  border-radius: 5px;
  padding: 0.2rem;
  color: #333;
  box-sizing: border-box;
  width: 170px;
`

export const SpecificationActionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`

export const SpecificationAction = styled.button`
  border: none;
  background-color: #62b5d4;
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
  color: #fff;
  transition: opacity ease 100ms;
  cursor: pointer;

  & + button {
    margin-left: 0.3rem;
  }

  &:hover {
    opacity: 0.7;
  }
`
