import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import { Button } from '@chakra-ui/react'
import { Heading,Container,Text,Box} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)
const boxStyle={
  color:"blue"
 
}
  return (
  <>
  <Container as="section" maxWidth="4xl">
  <Heading my="20px" p="10px">Hello from Sachin</Heading>
  <Text color="red" fontWeight="bolder">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat!</Text>
  </Container>
  <Box my="5px" bg="orange" p="25px" mx="6%">
    <Text ml="3%" color="blue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam.
    </Text>
  </Box>
<Box sx={boxStyle}>
  dhoni
</Box>
    </>
  )
}

export default App
