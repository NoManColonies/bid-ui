import styled from 'styled-components'

interface ImageListInterface {
  url: string;
}

interface FocusedImageInterface {
  url: string;
  focused: boolean;
}

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 540px 1fr;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 126px 1fr;
  grid-column-gap: 2%;
  grid-column: 1;
  height: 100%;
  width: 100%;
`

export const ImageTab = styled.div`
  display: flex;
  grid-column: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const ImageList = styled.span`
  background-image: url(${({ url }: ImageListInterface): string => url});
  background-position: center;
  background-size: cover;
  background-color: #333;
  width: 100%;
  height: 126px;

  & + span {
    margin-top: 0.5rem;
  }
`

export const FocusedImageWrapper = styled.div`
  position: relative;
  grid-column: 2;
`

export const FocusedImage = styled.span`
  background-image: url(${({ url }: FocusedImageInterface): string => url});
  background-position: center;
  background-size: cover;
  background-color: #333;
  width: 100%;
  height: 100%;
  display: ${({ focused }: FocusedImageInterface): string =>
    focused ? 'block' : 'none'};
  position: absolute;
`

export const DetailWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
`

export const BidAmountWrapper = styled.div`
  border-radius: 10px;
  background-color: #d2f5eb;
  padding: 1.2rem 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;

  & > p {
    color: #0278ae;
    font-size: 1.9rem;
  }
`

export const ProductNameHeader = styled.div`
  margin: 1rem 0;
  font-size: 3rem;
  color: #001;
`

export const BidUserWrapper = styled.div`
  overflow-y: auto;
  height: 300px;
`

export const BidUserList = styled.span`
  background-color: #e1e1e1;
  display: flex;
  border-radius: 10px;
  padding: 0.7rem;
  justify-content: space-between;
  margin-right: 0.3rem;

  & + span {
    margin-top: 0.7rem;
  }
`

export const BidFormWrapper = styled.form`
  display: flex;
  margin: 2rem 0;
`

export const BidInputFieldWrapper = styled.label`
  background-color: #f3f3f3;
  color: #51adcf;
  display: flex;
  padding: 1rem;
  font-size: 1.8rem;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const BidInputField = styled.input`
  background-color: #f3f3f3;
  border: none;
  color: #51adcf;
  font-size: 1.8rem;
  width: 80%;
`

export const BidAction = styled.button`
  border: none;
  background-color: #62b4d4;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: #fff;
  font-size: 1.8rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ease 100ms;

  &:hover {
    opacity: 0.7;
  }
`

export const MerchantWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  grid-column: 1;
  grid-row: 2;
`

export const MerchantProfilePicture = styled.div`
  background-image: url(${({ url }: ImageListInterface): string => url});
  background-position: center;
  background-size: cover;
  background-color: #333;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const MerchantProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
`
