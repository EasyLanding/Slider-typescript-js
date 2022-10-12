import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import '../styles.scss'

const SlideImage = ({ src }) => {
  return (
    <Box
      width="50%"
      height="600px"
      margin="0 auto"
      display="flex"
      justifyContent="center"
    >
      <Image src={src} alt="" />
    </Box>
  )
}
export default SlideImage
