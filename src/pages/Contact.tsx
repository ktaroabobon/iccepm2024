import React from "react";
import { Base } from "./Base";
import { Text, Box, VStack } from "@chakra-ui/react";
import ContentHeader from "../components/ContentHeader";

export const Contact: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5}>
          <ContentHeader props={{ title: "CONTACT" }} />
          <Text as={"b"} fontSize="lg" textAlign={"center"}>
            ICCEPM2024 Secretariat and Administration Committee
          </Text>
          <Text fontSize={"md"} textAlign={"center"}>
            Email: ICCEPM2024@gmail.com
          </Text>
          <Text as={"b"} fontSize={"xl"} textAlign={"center"}>
            Conference Hall - Hokkaido University
          </Text>
          <Text fontSize={"md"} textAlign={"center"}>
            5-chome-8-1, Kita 8 Jonishi, Kita Ward, Sapporo, Hokkaido, Japan
          </Text>
        </VStack>
      </Box>
    </Base>
  );
};
