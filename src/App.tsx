import Swiper from './common-ts/Slider/SlideComponent/Swiper'
import Slider from './common-ts/SliderBlogPage/SlideComponent/Slider'
import SwiperJs from './common/Slider/SlideComponent/Slider'
import SliderJs from './common/SliderBlogPage/SlideComponent/Slider'
import { Box, Text } from '@chakra-ui/react'

export default function App() {
  return (
    <Box>
      <Box>
        <Text
          fontWeight="bold"
          fontSize="36px"
          display="flex"
          justifyContent="center"
        >
          TypeScript
        </Text>
        <Box marginBottom="100px" marginTop="100px">
          <Swiper autoPlay={false} autoPlayTime={5000} />
        </Box>
        <Box>
          <Slider autoPlay={false} autoPlayTime={5000} />
        </Box>
      </Box>

      <Box>
        <Text
          fontWeight="bold"
          fontSize="36px"
          display="flex"
          justifyContent="center"
        >
          JavaScript
        </Text>
        <Box marginBottom="100px" marginTop="100px">
          <SwiperJs autoPlay={false} autoPlayTime={5000} />
        </Box>
        <Box>
          <SliderJs autoPlay={false} autoPlayTime={5000} />
        </Box>
      </Box>
    </Box>
  )
}
