import styled from 'styled-components'


export const Container =styled.div`
    padding-top:1rem;
    display:flex;
    width:31.5vw;
    justify-content:flex-end;
`


export const Form =styled.form`

      width: 200px;
      height: 40px;
      border-radius:10px 10px 10px 10px;
      border:none;
      font-family: 'Josefin Sans', sans-serif;

`

export const SearchInput=styled.input`
     width: 200px;
     height: 25px;
     border-radius:10px 10px 10px 10px;
     border:none;
     background: white;
     outline: none;
     padding-left:0.5rem;
     font-family: 'Josefin Sans', sans-serif;

     &::placeholder{
       padding-left:0.5rem;
       font-family: 'Josefin Sans', sans-serif;
     }

`


