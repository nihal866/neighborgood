import React from 'react'
import { Box, Container, Text } from "@chakra-ui/react";
import Form from './Form';


const Homepage = () => {
  return (
    <Container maxW="3xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text textAlign="center" fontSize="4xl" fontFamily="work sans">
          Neighborgood Interest Form
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Form />
      </Box>
    </Container>
  );
}

export default Homepage