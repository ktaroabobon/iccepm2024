import React from "react";
import { Base } from "./Base";
import ContentHeader from "../components/ContentHeader";
import { Box, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { GoogleMap } from "../components/GoogleMap";
import hokkaidoUniversityConferenceHall from "../assets/images/hokkaidoUniversityConferenceHall.jpg";

export const Venue: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} align={"center"}>
          <ContentHeader props={{ title: "Venue" }} />

          <Stack maxWidth={"768px"} width={"100%"} height={"100%"}>
            <Box overflow={"auto"} w={"100%"} p={5}>
              <VStack spacing={2}>
                <Text fontSize="md" as={"u"}>
                  <Link
                    href={
                      "https://www.global.hokudai.ac.jp/about/facilities/event-and-seminar-spaces/conference-hall/"
                    }
                    isExternal
                  >
                    Hokkaido University Conference Hall, Sapporo, Hokkaido,
                    Japan
                  </Link>
                </Text>
                <Image
                  src={hokkaidoUniversityConferenceHall}
                  alt={"conference hole"}
                  rounded={"lg"}
                  width={"100%"}
                />

                <br />

                <Text fontSize="md">
                  Hokkaido University Conference Hall is 3 minutes-walk from
                  Sapporo Railway Station North Exit (which is 40 minutes by
                  train from Airport).
                </Text>
                <GoogleMap />
              </VStack>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Base>
  );
};
