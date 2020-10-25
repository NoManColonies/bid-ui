import styled from 'styled-components'


export const InputStyle = styled.div`

  width: 20vw;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 40px;
  border-radius: 55px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  box-sizing: border-box;
  position: relative;
`
export const Input = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  position: relative;
  padding:0.5rem;
  font-family: 'Josefin Sans', sans-serif;

  &::-webkit-input-placeholder {
    color: gray;
    font-weight: 600;
    font-size: 0.9rem;
    font-family: 'Josefin Sans', sans-serif;
  }
`
