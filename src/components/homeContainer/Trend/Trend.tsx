
import React, { ReactElement } from 'react'
import
{Container,
  BoxXL,
  BoxL,
  BoxM,
  BoxS,
  BoxSx
} from './styled'



function Trend(): ReactElement{
  return(
   <div>
     <Container>
       <BoxXL>
         <BoxL>
         <BoxM/>
         <BoxM>
           <BoxS>
           </BoxS>
           <BoxS>
           <BoxSx/>
           <BoxSx/>
           </BoxS>
         </BoxM>
         </BoxL>
       </BoxXL>

     </Container>
   </div>

  )
}

export default Trend
