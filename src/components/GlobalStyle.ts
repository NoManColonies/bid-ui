import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const Globalstyle = createGlobalStyle`
  ${reset}

  html,body, #root {
    height:100vh;
    width:100vw;

    font-family:'Kanit',sans-serif;
    font-size:20px;
    list-style:none;

    scroll-behavior:smooth;
  }

  a {
    text-decoration:none;
    color:inherit;

    &:visited{
      color:inherit;
    }
  }
`

export default Globalstyle
