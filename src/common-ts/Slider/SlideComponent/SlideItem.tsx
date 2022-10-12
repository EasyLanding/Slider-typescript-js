import { Box, Image } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SlideImage = (props: any) => {
  return (
    <Box
      width="100%"
      height="100%"
      margin="0 auto"
      display="flex"
      justifyContent="center"
    >
      <Image src={props.src} alt="" />
    </Box>
  )
}
export default SlideImage
