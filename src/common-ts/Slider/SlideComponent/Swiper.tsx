import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import { imagesArr } from '../../../assets/mock/fake-swipers-image'

import ArrowItem from '../Controls/ArrowItem'

import SlidesList from './SlidesList'

const Swiper = (SettingsSwiper: {
  autoPlay: boolean
  autoPlayTime: number | undefined
}) => {
  const [items, setItems] = useState([])
  const [slide, setSlide] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)
  const images: any = imagesArr

  useEffect(() => {
    const loadData = () => {
      setItems(images)
    }
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

  // const goToSlide = (number: number) => {
  //   setSlide(number % items.length)
  // }

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX

    setTouchPosition(touchDown)
  }

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
      width="100%"
      height="100%"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <ArrowItem changeSlide={changeSlide} />
      <SlidesList itemsPrp={items} slideNumber={slide} />
    </Box>
  )
}
export default Swiper
