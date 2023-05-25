import React from "react";
import {Base} from "./Base";
import {Text, Heading, Box, VStack, Divider} from "@chakra-ui/react";

export const Contact: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} justifyContent={'center'} alignItems={'center'}>
          <Heading as="h1" size="3xl" textAlign={'center'}>CONTACT</Heading>
          <Divider/>
          <Heading as="h2" size="lg" textAlign={'center'}>ICCEPM2024 Secretariat and Administration Committee</Heading>
          <Text size={'md'} textAlign={'center'}>Email: ICCEPM2024@gmail.com</Text>
          <Heading as="h2" size="lg" textAlign={'center'}>Conference Hall - Hokkaido University</Heading>
          <Text size={'md'} textAlign={'center'}>5-chome-8-1, Kita 8 Jonishi, Kita Ward, Sapporo, Hokkaido, Japan</Text>
        </VStack>
      </Box>
    </Base>
  );
};
