
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
import ImageM2 from '../../../assets/Trend/11.jpg'
import ImageS from '../../../assets/Trend/T8.jpg'
import ImageS2 from '../../../assets/Trend/T7.jpg'

import ImageSx from '../../../assets/Trend/T6.jpg'
import ImageSx1 from '../../../assets/Trend/T9.jpg'
import ImageSx2 from '../../../assets/Trend/T4.jpg'
import ImageSx3 from '../../../assets/Trend/T10.jpg'


function Trend(): ReactElement{
  return(
     <Container>
       <h1>Trend 2020</h1>
       <BoxXL>
         <BoxL>
           <ImagesTrendM src={ImageSx2} hoverSrc={ImageM2}/>
           <ImagesTrendS src={ImageS}  hoverSrc={ImageS2}/>
           <ImagesTrendSx src={ImageSx} hoverSrc={ImageSx1} column={'3'}/>
           <ImagesTrendSx column={'4'} src={ImageM} hoverSrc={ImageSx3}/>
        </BoxL>
       </BoxXL>

     </Container>

  )
}

export default Trend
