import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import { slidesBlogPage } from '../../../assets/mock/fake-slides'
import ArrowItem from '../Controls/ArrowItem'
import Dots from '../Controls/Dots'

import SlidesList from './SlidesList'

const Slider = (SettingsSwiper: {
  autoPlay: boolean
  autoPlayTime: number | undefined
}) => {
  const [items, setItems] = useState([])
  const [slide, setSlide] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const images: any = slidesBlogPage

  useEffect(() => {
    const loadData = () => {
      setItems(images)
    }
    console.log(items)
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeSlide = (direction = 1) => {
    let slideNumber = 0

    if (slide + direction < 0) {
      slideNumber = items.length - 1
    } else {
      slideNumber = (slide + direction) % items.length
    }
    setSlide(slideNumber)
  }

  const goToSlide = (number: number) => {
    setSlide(number % items.length)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX

    setTouchPosition(touchDown)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTouchMove = (e: any) => {
    if (touchPosition === null) {
      return
    }

    const currentPosition = e.touches[0].clientX
    const direction = touchPosition - currentPosition

    if (direction > 10) {
      changeSlide(1)
    }

    if (direction < -10) {
      changeSlide(-1)
    }

    setTouchPosition(null)
  }

  useEffect(() => {
    if (!SettingsSwiper.autoPlay) return

    const interval = setInterval(() => {
      changeSlide(1)
    }, SettingsSwiper.autoPlayTime)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, slide]) // when images uploaded or slide changed manually we start timer

  return (
    <Box
      overflow="hidden"
      position="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <ArrowItem changeSlide={changeSlide} />
      <SlidesList itemsPrp={items} slideNumber={slide} />
      <Box position="relative" bottom="50px">
        <Dots
          goToSlide={goToSlide}
          slidesCount={items.length}
          slideNumber={slide}
        />
      </Box>
    </Box>
  )
}
export default Slider
