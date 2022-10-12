import React, { useContext } from 'react'

import { SliderContext } from '../SlideComponent/Slider'
import '../styles.scss'
import { Box } from '@chakra-ui/react'

const ArrowItem = () => {
  const { changeSlide } = useContext(SliderContext)

  return (
    <Box display="flex" justifyContent="center">
      <Box className="arrows">
        <Box className="arrow left" onClick={() => changeSlide(-1)} />
        <Box className="arrow right" onClick={() => changeSlide(1)} />
      </Box>
    </Box>
  )
}
export default ArrowItem
