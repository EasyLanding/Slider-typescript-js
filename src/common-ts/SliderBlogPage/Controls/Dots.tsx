import { Box } from '@chakra-ui/react'

import Dot from './Dot'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dots = (props: any) => {
  const renderDots = () => {
    const dots = []
    for (let i = 0; i < props.slidesCount; i++) {
      dots.push(
        <Dot
          key={`dot-${i}`}
          number={i}
          slideNumber={props.slideNumber}
          goToSlide={props.goToSlide}
        />
      )
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
export default Dots
