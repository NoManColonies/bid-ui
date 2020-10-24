
import React, { ReactElement } from 'react'
import
{Container,
  BoxXL,
  BoxL,
} from './styled'
import ImagesTrendM from './ImagesdBoxM'
import ImagesTrendS from './ImagesdBoxS'
import ImagesTrendSx from './ImagesdBoxSx'
import ImageM from '../../../assets/Trend/T.jpg'
import ImageS from '../../../assets/Trend/T8.jpg'
import ImageSx from '../../../assets/Trend/T6.jpg'
import ImageSx2 from '../../../assets/Trend/T4.jpg'


function Trend(): ReactElement{
  return(
     <Container>
       <h1>Trend 2020</h1>
       <BoxXL>
         <BoxL>
           <ImagesTrendM src={ImageM}/>
           <ImagesTrendS src={ImageS}/>
           <ImagesTrendSx column={'3'} src={ImageSx}/>
           <ImagesTrendSx column={'4'} src={ImageSx2}/>
        </BoxL>
       </BoxXL>

     </Container>

  )
}

export default Trend
