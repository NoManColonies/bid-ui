import React, {
  FormEvent,
  ReactElement,
  useCallback,
  useState,
  ChangeEvent,
  useEffect
} from 'react'
import {
  Container,
  UserWrapper,
  UserFormWrapper,
  Image,
  Card,
  Form,
  Form2,
  Button,
  IdCardWrapper,
  IdImage,
  Status,
  Icon,
  IconWrapper,
  TitleWrapper,
  Title,
  Value,
  IdImageWrapper,
  FormStatus,
  ImageBg,
  ImageBg2,
  HiddenFileInput,
  Back
} from './styled'
import withHelmet from '../../../utils/withHelmet'
import withNavbar from '../../../utils/withNavbar'
import InputUser from '../InputUser/index'
import InputIdCard from '../InputStatus/index'
import ImageCard from '../../../assets/backgraund/card.svg'
import ImageCardbg from '../../../assets/backgraund/fishing.svg'
import ImageCardbg2 from '../../../assets/backgraund/beacs.svg'
import {
  faTrophy,
  faGamepad,
  faBoxes,
  faStarHalfAlt,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  AUTH_CHECK,
  FETCH_GET,
  FETCH_POST,
  FETCH_UPDATE,
  FETCH_FILE_UPLOAD
} from '../../../services/FetchAPI'
import { useToken } from '../../../utils/useToken'
import { AuthorizationHeaderType } from '../../../contexts/AuthContext/AuthContext'
import APIResponse from '../../../interfaces/APIResponse'
import { AxiosError, AxiosResponse } from 'axios'

function ProfileUser(): ReactElement {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [lastname, setLastname] = useState('')
  const [building, setBuilding] = useState('')
  const [road, setRoad] = useState('')
  const [city, setCity] = useState('')
  const [subCity, setSubCity] = useState('')
  const [province, setProvince] = useState('')
  const [postal, setPostal] = useState('')
  const [telephone, setTelephone] = useState('')
  const [customerUuid, setCustomerUuid] = useState('')
  const [description, setDescription] = useState('')
  const [idCardStream, setIdCardStream] = useState<
    ArrayBuffer | string | null
  >()
  const [idCard, setIdCard] = useState<File>()
  const [validatedIdCard, setValidatedIdCard] = useState<string>('')
  const [profileStream, setProfileStream] = useState<
    ArrayBuffer | string | null
  >()
  const [profileImage, setProfileImage] = useState<File>()
  const [addressUuid, setAddressUuid] = useState<string>('')
  const [click, setClick] = useState(false)
  const [{ token }, { handleFetchToken }] = useToken()

  const handleUpdateUser = useCallback(
    () =>
      FETCH_UPDATE<
        { description: string },
        AuthorizationHeaderType,
        undefined,
        APIResponse<any>
      >(
        'users',
        { description },
        { Authorization: `Bearer ${token.token}` },
        token.uuid
      ),
    [token.token, description, token.uuid]
  )

  const handleUpdateProfile = useCallback(
    () =>
      handleUpdateUser().then(() =>
        FETCH_UPDATE<
          { first_name: string; last_name: string },
          AuthorizationHeaderType,
          undefined,
          APIResponse<any>
        >(
          'customers',
          // eslint-disable-next-line
          { first_name: name, last_name: lastname },
          {
            Authorization: `Bearer ${token.token}`
          },
          customerUuid
        )
      ),
    [handleUpdateUser, token.token, customerUuid, name, lastname]
  )

  const handlePostProfile = useCallback(
    () =>
      handleUpdateUser().then(() =>
        FETCH_POST<
          { first_name: string; last_name: string },
          AuthorizationHeaderType,
          undefined,
          APIResponse<any>
        >(
          'customers',
          // eslint-disable-next-line
          { first_name: name, last_name: lastname },
          {
            Authorization: `Bearer ${token.token}`
          }
        )
      ),
    [token.token, name, lastname, handleUpdateUser]
  )

  const handleUpdateAddress = useCallback(
    () =>
      FETCH_UPDATE<
        {
          building: string;
          road: string;
          city: string;
          sub_city: string;
          province: string;
          postal_code: string;
          phone: string;
        },
        AuthorizationHeaderType,
        undefined,
        APIResponse<any>
      >(
        'addresses',
        {
          building,
          road,
          city,
          // eslint-disable-next-line
          sub_city: subCity,
          province,
          // eslint-disable-next-line
          postal_code: postal,
          phone: telephone
        },
        { Authorization: `Bearer ${token.token}` },
        addressUuid
      ),
    [
      token.token,
      building,
      road,
      city,
      subCity,
      province,
      postal,
      telephone,
      addressUuid
    ]
  )

  const handleCreateAddress = useCallback(
    // eslint-disable-next-line
    (customer_uuid: string) =>
      FETCH_POST<
        {
          building: string;
          road: string;
          city: string;
          sub_city: string;
          province: string;
          postal_code: string;
          phone: string;
          customer_uuid: string;
        },
        AuthorizationHeaderType,
        undefined,
        APIResponse<any>
      >(
        'addresses',
        {
          building,
          road,
          city,
          // eslint-disable-next-line
          sub_city: subCity,
          province,
          // eslint-disable-next-line
          postal_code: postal,
          phone: telephone,
          // eslint-disable-next-line
          customer_uuid
        },
        { Authorization: `Bearer ${token.token}` }
      ),
    [token.token, building, road, city, subCity, province, postal, telephone]
  )

  const handleUploadImage = useCallback(
    (file: File, section: string) =>
      FETCH_FILE_UPLOAD<AuthorizationHeaderType, AxiosResponse>(
        `upload/${section}`,
        `${section}_image`,
        file,
        { Authorization: `Bearer ${token.token}` }
      ),
    [token.token]
  )

  const handleUploadProcess = useCallback(
    (handleProfile, handleAddress, profileImage, idCard) => {
      handleProfile()
        .then((response: AxiosResponse) => {
          // console.log(response.data)
          return response
        })
        .then(({ data }: AxiosResponse) => {
          handleAddress(data.uuid)
            .then(({ data }: AxiosResponse) => console.log(data))
            .catch((e: AxiosError) => console.error(e))
        })
        .then(async () => {
          if (profileImage) {
            await handleUploadImage(profileImage, 'profile')
              .then(({ data }: AxiosResponse) => console.log(data))
              .catch((e: AxiosError) => console.error(e))
          }
          if (idCard) {
            await handleUploadImage(idCard, 'credential')
              // .then(({ data }: AxiosResponse) => console.log(data))
              .catch((e: AxiosError) => console.error(e))
          }
        })
        .catch((e: AxiosError) => console.error(e))
    },
    [handleUploadImage]
  )

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault()
      AUTH_CHECK(token.token).then(() => {
        handleUploadProcess(
          customerUuid ? handleUpdateProfile : handlePostProfile,
          addressUuid ? handleUpdateAddress : handleCreateAddress,
          profileImage,
          idCard
        )
      })
    },
    [
      token.token,
      customerUuid,
      handleUpdateProfile,
      handlePostProfile,
      handleUpdateAddress,
      handleCreateAddress,
      profileImage,
      idCard,
      addressUuid,
      handleUploadProcess
    ]
  )

  const handleSignImageUrl = useCallback(
    (rawImagePath: string, section: string, setFile) => {
      token.token &&
        AUTH_CHECK(token.token).then(() =>
          FETCH_GET<AuthorizationHeaderType, undefined, APIResponse<any>>(
            `download/${section}/${rawImagePath}`,
            { Authorization: `Bearer ${token.token}` }
          )
            .then(({ data }) => setFile(data))
            .catch((e: AxiosError) => console.error(e))
        )
    },
    [token.token]
  )

  const handleFileChange = useCallback((file: File, setFile, setStream) => {
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      function () {
        setStream(this.result)
      },
      false
    )

    setFile(file)
    reader.readAsDataURL(file)
  }, [])

  useEffect(() => {
    token.token &&
      AUTH_CHECK(token.token)
        .then(() => {
          FETCH_GET<
            AuthorizationHeaderType,
            { references: string },
            APIResponse<any>
          >('users', { Authorization: `Bearer ${token.token}` }, token.uuid, {
            references: 'customer.address'
          })
            .then(({ data }: APIResponse<any>) => {
              console.log(data)
              setUsername(data.username)
              setDescription(data.description)
              if (data.customer) {
                setName(data.customer.first_name)
                setLastname(data.customer.last_name)
                setCustomerUuid(data.customer.uuid)
                if (data.customer.path_to_credential)
                  handleSignImageUrl(
                    data.customer.path_to_credential,
                    'credential',
                    setValidatedIdCard
                  )
                if (data.customer.address) {
                  setAddressUuid(data.customer.address.uuid)
                  setTelephone(data.customer.address.phone)
                  setBuilding(data.customer.address.building)
                  setRoad(data.customer.address.road)
                  setCity(data.customer.address.city)
                  setSubCity(data.customer.address.sub_city)
                  setProvince(data.customer.address.province)
                  setPostal(data.customer.address.postal_code)
                }
              }
              if (data.profile_path)
                handleSignImageUrl(
                  data.profile_path,
                  'profile',
                  setProfileStream
                )
            })
            .catch((e: AxiosError) => console.error(e))
        })
        .catch(() => handleFetchToken())
  }, [
    token.token,
    token.uuid,
    handleFetchToken,
    setName,
    setUsername,
    setLastname,
    setDescription,
    setCustomerUuid,
    setAddressUuid,
    setTelephone,
    setBuilding,
    setRoad,
    setCity,
    setSubCity,
    setProvince,
    setPostal,
    handleSignImageUrl
  ])

  return (
    <Container>
      <h1>YOUR PROFILE</h1>
      <ImageBg src={ImageCardbg} />
      <ImageBg2 src={ImageCardbg2} />
      <UserWrapper>
        <UserFormWrapper>
          <Form onSubmit={onSubmit} click={click}>
            <Image url={profileStream}>
              <HiddenFileInput
                type="file"
                onChange={({ target }: ChangeEvent<HTMLInputElement>): void => {
                  target.files &&
                    handleFileChange(
                      target.files[0],
                      setProfileImage,
                      setProfileStream
                    )
                }}
              />
            </Image>
            <InputUser
              type="text"
              name="username"
              value={username}
              disabled={true}
              placeholder=""
            />
            <InputUser
              type="text"
              name="name"
              placeholder="enter your name"
              value={name}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setName(event.target.value)
              }
            />
            <InputUser
              type="text"
              name="lastname"
              placeholder="enter your lestname"
              value={lastname}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setLastname(event.target.value)
              }
            />
            <InputUser
              type="email"
              name="email"
              value={email}
              placeholder="enter email address"
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setEmail(event.target.value)
              }
            />
            <InputUser
              type="telephone"
              name="telephone"
              value={telephone}
              placeholder="tellephone"
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setTelephone(event.target.value)
              }
            />
            <Button type="button" onClick={(): void => setClick(!click)}>
              next
            </Button>
          </Form>
          <Form2 onSubmit={onSubmit} click={click}>
            <Back
              icon={faAngleLeft}
              onClick={(): void => setClick(!click)}
            ></Back>
            <InputUser
              type="text"
              name="road"
              placeholder="road"
              value={road}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setRoad(event.target.value)
              }
            />
            <InputUser
              type="text"
              name="building"
              placeholder="building"
              required
              value={building}
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setBuilding(event.target.value)
              }
            />
            <InputUser
              type="text"
              name="subCity"
              placeholder="subCity"
              required
              value={subCity}
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setSubCity(event.target.value)
              }
            />
            <InputUser
              type="text"
              name="subCity"
              placeholder="subCity"
              value={subCity}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setSubCity(event.target.value)
              }
            />
            <InputUser
              type="text"
              name="city"
              placeholder="city"
              value={city}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setCity(event.target.value)
              }
            />
            <InputUser
              type="province"
              name="province"
              placeholder="province"
              value={province}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setProvince(event.target.value)
              }
            />
            <InputUser
              type="postal"
              name="postal"
              placeholder="postal"
              value={postal}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                setPostal(event.target.value)
              }
            />
            <Button type="submit" onClick={(): void => setClick(!click)}>
              save
            </Button>
          </Form2>
        </UserFormWrapper>
        <Card>
          <IdCardWrapper>
            <IdImageWrapper
              url={validatedIdCard ? validatedIdCard : idCardStream}
            >
              <IdImage isSet={!!idCardStream || !!validatedIdCard}>
                <img src={ImageCard} alt="" />
                <h2>ADD ID CARD</h2>
              </IdImage>
            </IdImageWrapper>
            <HiddenFileInput
              type="file"
              required
              disabled={!!validatedIdCard}
              onChange={({ target }: ChangeEvent<HTMLInputElement>): void => {
                target.files &&
                  handleFileChange(target.files[0], setIdCard, setIdCardStream)
              }}
            />
          </IdCardWrapper>
          <Status>
            <h2>Description</h2>
            <FormStatus>
              <InputIdCard
                name="Description"
                value={description}
                placeholder="enter your description."
                onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
                  setDescription(event.target.value)
                }
              />
            </FormStatus>
          </Status>
          <IconWrapper>
            <TitleWrapper>
              <Title>Winning</Title>
              <Icon icon={faTrophy}></Icon>
              <Value>2</Value>
            </TitleWrapper>
            <TitleWrapper>
              <Title>Amount</Title>
              <Icon icon={faGamepad}></Icon>
              <Value>27</Value>
            </TitleWrapper>
            <TitleWrapper>
              <Title>Product</Title>
              <Icon icon={faBoxes}></Icon>
              <Value>123</Value>
            </TitleWrapper>
            <TitleWrapper>
              <Title>Ratting</Title>
              <Icon icon={faStarHalfAlt}></Icon>
              <Value>20</Value>
            </TitleWrapper>
          </IconWrapper>
        </Card>
      </UserWrapper>
    </Container>
  )
}

export default withHelmet('BIDRS | Profile')(withNavbar(ProfileUser))
