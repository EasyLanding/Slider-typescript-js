import React from 'react'
import SlideItem from './SlideItem'

import '../styles.scss'

export default function Slide({ data: { url } }) {
  return (
    <div className="slide">
      <SlideItem src={url} />
    </div>
  )
}
