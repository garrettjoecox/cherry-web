import type { NextPage } from "next";
import {
  Heading,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import React from "react";

const Terms: NextPage = () => {
    return (
      <Container minH="100vh" maxW="container.lg" py="4" display="flex">
        <Box
        flex="1"
          bgColor="white"
          borderColor="red.400"
          borderWidth="6px"
          py="10"
          borderRadius="md"
        >
          <Box mx="5">  
            <Heading fontSize="4xl">
              Terms of Service
            </Heading>
            <Text>
              TODO....
            </Text>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default Terms;
  