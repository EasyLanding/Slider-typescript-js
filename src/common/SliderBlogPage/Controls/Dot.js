import React, { useContext } from 'react'
import { SliderContext } from '../SlideComponent/Slider'
import { Box } from '@chakra-ui/react'

import '../styles.scss'

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext)

  return (
    <Box
      cursor="pointer"
      className={`dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => goToSlide(number)}
    ></Box>
  )
}
