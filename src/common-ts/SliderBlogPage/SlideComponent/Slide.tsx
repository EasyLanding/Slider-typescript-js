import { Box } from '@chakra-ui/react'

import SlideItem from './SlideItem'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slide = (props: any) => {
  return (
    <Box flexGrow="1" flexShrink="0" flexBasis="100%" position="relative">
      <SlideItem
        src={props.data.url}
        text={props.data.text}
        title={props.data.title}
      />
    </Box>
  )
}
export default Slide
