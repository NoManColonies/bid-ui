import styled from 'styled-components'
import {
  AlertWrapperInterface,
  AlertThumbnailInterface,
  AlertActionInterface
} from './Notification'

export const NotificationWrapper = styled.div`
  background-color: #fff;
  right: -50%;
  top: 130%;
  border-radius: 20px;
  width: 17rem;
  box-shadow: 5px 5px 10px 1px #e1e1e1;
  position: absolute;
  padding: 0.35rem;
  z-index: 110;
`

export const EmptyTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  min-height: 100px;
  width: 100%;
`

export const AlertWrapper = styled.div`
  background-color: #e1e1e1;
  border-radius: 15px;
  width: 100%;
  display: ${(props: AlertWrapperInterface): string =>
    props.type === 'order' ||
    props.type === 'bid' ||
    props.type === 'verification'
      ? 'grid'
      : 'block'};
  ${(props: AlertWrapperInterface): string =>
    props.type === 'bid' ||
    props.type === 'order' ||
    props.type === 'verification'
      ? 'grid-template-columns: 30% 1fr;'
      : ''}

  & + div {
    margin-top: 0.5rem;
  }
`

export const AlertThumbnail = styled.div`
  background-image: url(${(props: AlertThumbnailInterface): string =>
    props.url});
  background-size: cover;
  background-position: center;
  background-color: #333;
  grid-column: 1;
  border-radius: 20px 0 0 20px;
`

export const AlertContentWrapper = styled.div`
  ${(props: AlertWrapperInterface): string =>
    props.type === 'order' ||
    props.type === 'bid' ||
    props.type === 'verification'
      ? 'grid-column: 2;'
      : ''}
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.35rem;
  box-sizing: border-box;
`

export const AlertContent = styled.div`
  color: #333;
  flex: 1;
  text-align: center;

  & > h2,
  p {
    margin-bottom: 0.5rem;
  }
`

export const AlertContentActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AlertContentAction = styled.button`
  border: none;
  background-color: ${(props: AlertActionInterface): string =>
    props.actionType === 'accept'
      ? '#59c73e'
      : props.actionType === 'decline'
      ? '#f73838'
      : '#3f5ab9'};
  color: #fff;
  border-radius: 10px;
  width: fit-content;
  padding: 0.3rem 1rem;
  cursor: pointer;

  & + button {
    margin-left: 0.4rem;
  }
`
