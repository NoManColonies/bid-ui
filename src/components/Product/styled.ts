import styled from 'styled-components'

interface ImageInterface {
  url: string;
  thisIndex: number;
  currentIndex: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: #f7f7f7;
  padding-left: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h1 {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    border: 1px solid black;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;

    &:hover {
      background-color: #e8ffc1;
    }
  }

  span + span {
    margin-left: 0.5rem;
  }
`

export const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 24vh;
  width: 16vw;
  border-radius: 50%;
`

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const BoxColor = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid gray;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 50%;
  background-color: ${(props: any): string => props.color};

  &:hover {
    border: 2px solid black;
  }
`

export const Filter = styled.div`
  width: 18vw;
  height: 100vh;
  margin: 0;
  top: 0;
  position: sticky;

  h2 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`

export const ProductBox = styled.div`
  width: 76vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 380px;
  grid-row-gap: 10%;
  grid-column-gap: 1%;
  padding: 0 3rem;
  box-sizing: border-box;
`

export const Box = styled.div`
  width: 320px;
  height: 400px;
  background-color: white;
  margin: auto;
`

export const Image = styled.div`
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 0;
  background-color: #51adcf;
  background-image: url(${({ url }: ImageInterface): string => url});
  background-position: center;
  background-size: cover;
  display: ${({ thisIndex, currentIndex }: ImageInterface): string =>
    thisIndex === currentIndex ? 'static' : 'none'};
`

export const Title = styled.div`
  margin-top: 1rem;
  margin: 0;
  width: 100.4%;
  height: 30%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
`

export const TitleHeader = styled.h1`
  color: #fc9520;
  font-size: 0.1rem;
`
export const AllTitle = styled.div`
  display: flex;
  flex-direction: row;
`
export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 5vh;
`

export const Icon = styled.div`
  width: 10%;
  padding-bottom: 0.1rem;
`
export const Text = styled.div`
  color: black;
  font-size: 1.2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 0.5rem;
  width: 100%;
  height: 10vh;
`
export const SmallImageWrapper = styled.div`
  width: 100%;
  height: 5vh;

  display: ${({ hover }: { hover: boolean }): string =>
    hover ? 'flex' : 'none'};
  flex-direction: row;
  margin-top: 0.5rem;
`

export const SmallImage = styled.div`
  width: 45px;
  height: 5vh;
  background-color: red;
  margin-right: 0.5rem;
  background-image: url(${({ url }: { url: string }): string => url});
  background-position: center;
  background-size: cover;
`
