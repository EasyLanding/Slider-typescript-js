import { Box } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dot = (props: any) => {
  return (
    <Box
      cursor="pointer"
      backgroundColor={
        props.slideNumber === props.number ? 'rgba(255, 255, 255, 0)' : 'white'
      }
      borderRadius="5px"
      height="10px"
      margin="5px"
      width="10px"
      border={props.slideNumber === props.number ? '2px solid white' : 'none'}
      onClick={() => props.goToSlide(props.number)}
    ></Box>
  )
}
export default Dot
