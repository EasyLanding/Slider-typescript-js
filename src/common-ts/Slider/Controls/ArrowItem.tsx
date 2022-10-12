import { Box } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowItem = (props: any) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        color="black"
        display="flex"
        fontSize="30px"
        justifyContent="space-between"
        position="absolute"
        top="40%"
        width="60%"
        zIndex="1"
      >
        <Box
          _hover={{ cursor: 'pointer' }}
          bgRepeat="no-repeat"
          bgSize="contain"
          marginLeft="5px"
          transform="rotate(180deg)"
          zIndex="10"
          onClick={() => props.changeSlide(-1)}
        >
          <ChevronRightIcon w={24} h={24} />
        </Box>
        <Box
          _hover={{ cursor: 'pointer' }}
          bgRepeat="no-repeat"
          bgSize="contain"
          marginLeft="5px"
          zIndex="10"
          onClick={() => props.changeSlide(1)}
        >
          <ChevronRightIcon w={24} h={24} />
        </Box>
      </Box>
    </Box>
  )
}
export default ArrowItem
