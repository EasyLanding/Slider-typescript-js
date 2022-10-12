import { Box } from '@chakra-ui/react'

import Slide from './Slide'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SlidesList(props: any) {
  return (
    <Box
      display="flex"
      height="100%"
      width="100%"
      transition="0.5s ease-in-out"
      style={{ transform: `translateX(-${props.slideNumber * 100}%)` }}
    >
      {props.itemsPrp.map((slide: { url: string }, index: number) => {
        return <Slide key={index} data={slide} />
      })}
    </Box>
  )
}
