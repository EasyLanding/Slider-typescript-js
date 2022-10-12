import React, { useContext } from 'react'

import { SliderContext } from '../SlideComponent/Slider'
import '../styles.scss'

const ArrowItem = () => {
  const { changeSlide } = useContext(SliderContext)

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  )
}
export default ArrowItem
