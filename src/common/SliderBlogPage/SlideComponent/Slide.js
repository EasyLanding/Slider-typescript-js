import React from 'react'
import SlideItem from './SlideItem'

import '../styles.scss'

export default function Slide({ data: { url, title, text } }) {
  return (
    <div className="slide">
      <SlideItem src={url} text={text} title={title} />
    </div>
  )
}
