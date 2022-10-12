import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

import '../styles.scss'

const SlideItem = ({ src, title, text }) => {
  const [sl, md, lg] = useMediaQuery([
    '(min-width: 400px)',
    '(max-width: 535px)',
    '(max-width: 890px)'
  ])

  return (
    <Box
      backgroundImage={src}
      width="100%"
      height="600px"
      margin="0 auto"
      display="flex"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justifyContent="center"
    >
      <Box width="100%" height="100%" backgroundColor="rgba(0,0,0,0.4)">
        <Box display="flex" justifyContent="center" marginTop="100px">
          <Box display="block" width="60%" textAlign="center">
            <Text
              fontSize={!lg ? '48px' : !sl ? '28px' : '36px'}
              fontWeight="bold"
              marginBottom={!md ? '100px' : '60px'}
            >
              {title}
            </Text>
            <Box fontSize="16px" textAlign="center">
              {text}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default SlideItem
