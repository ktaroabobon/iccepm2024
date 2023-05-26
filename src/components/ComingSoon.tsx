import React from "react";
import { Box, Divider, Text, VStack } from "@chakra-ui/react";

export const ComingSoon = () => {
  return (
    <>
      <Box height={"80vh"} display={"flex"}>
        <VStack
          h={"400px"}
          w={"1080px"}
          maxWidth={"100%"}
          maxHeight={"100%"}
          mx={"auto"}
          my={"auto"}
          spacing={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize="6xl" as={"b"}>
            Coming Soon...
          </Text>
          <Divider
            orientation={"horizontal"}
            borderWidth={"3px"}
            borderColor={"cyan.200"}
            w={"80%"}
          />
          <Text fontSize={"4xl"} as={"h2"}>
            This page is under construction.
          </Text>
        </VStack>
      </Box>
    </>
  );
};
