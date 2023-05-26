import React from "react";
import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import { Base } from "./Base";

export const FourOhFour: React.FC = () => {
  return (
    <>
      <Base>
        <Box height={"80vh"} display={"flex"}>
          <HStack
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
              404
            </Text>
            <Divider
              orientation={"vertical"}
              borderWidth={"3px"}
              borderColor={"cyan.200"}
              height={"80%"}
            />
            <Text fontSize={"4xl"} as={"h2"}>
              This page could not be found.
            </Text>
          </HStack>
        </Box>
      </Base>
    </>
  );
};
