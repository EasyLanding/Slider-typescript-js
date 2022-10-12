import React, { useContext } from 'react'
import { SliderContext } from '../SlideComponent/Slider'
import { Box } from '@chakra-ui/react'
import Dot from './Dot'

import '../styles.scss'

export default function Dots() {
  const { slidesCount } = useContext(SliderContext)

  const renderDots = () => {
    const dots = []
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />)
    }

    return dots
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      padding="20px 0"
      position="relative"
      zIndex="2"
    >
      {renderDots()}
    </Box>
  )
}
