import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const Globalstyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100vh;
    width: 100vw;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    list-style: none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }


  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }

  * {
  scrollbar-width: thin;
  scrollbar-color: #51adcf #E8FFC1;
  }
  *::-webkit-scrollbar {
  width: 10px;

  }
  *::-webkit-scrollbar-track {
  background: #51adcf;
  }
  *::-webkit-scrollbar-thumb {
  background-color: #E8FFC1;
  border-radius: 20px;
  border: none;
  }
`

export default Globalstyle
