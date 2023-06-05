import React from "react";
import { Base } from "./Base";
import ContentHeader from "../components/ContentHeader";
import {
  Box,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

interface ProgramContentProps {
  startTime: string;
  content: string;
  place?: string;
}

interface ProgramItemProps {
  date: string;
  contents: ProgramContentProps[];
}

const PROGRAM: ProgramItemProps[] = [
  {
    date: "Day1 - July 29, 2024",
    contents: [
      {
        startTime: "13:00",
        content: "Opening",
      },
      {
        startTime: "13:30",
        content: "Keynote speech",
      },
      {
        startTime: "14:00",
        content: "Academic Paper proceedings",
      },
      {
        startTime: "14:00",
        content: "Business Seminars and Workshops",
      },
      {
        startTime: "17:30",
        content: "ICCEPM Board Meeting",
      },
    ],
  },
  {
    date: "Day2 - July 30, 2024",
    contents: [
      {
        startTime: "9:00",
        content: "Opening",
      },
      {
        startTime: "9:30",
        content: "Keynote speech",
      },
      {
        startTime: "10:00",
        content: "Academic Paper proceedings",
      },
      {
        startTime: "10:00",
        content: "Business Seminars and Workshops",
      },
    ],
  },
  {
    date: "Day3 - July 31, 2024",
    contents: [
      {
        startTime: "9:00",
        content: "Opening",
      },
      {
        startTime: "9:30",
        content: "Keynote speech",
      },
      {
        startTime: "10:00",
        content: "Academic Paper proceedings",
      },
      {
        startTime: "10:00",
        content: "Business Seminars and Workshops",
      },
      {
        startTime: "17:30",
        content: "Awards & Dinner banquet",
        place: "Hotel Mystays Sapporo Aspen",
      },
    ],
  },
  {
    date: "Day4 - August 1, 2024",
    contents: [
      {
        startTime: "9:00",
        content: "Excursion to Niseko",
      },
      {
        startTime: "12:00",
        content: "Tea at Niseko",
        place: "Park Hyatt Niseko Hanazono",
      },
    ],
  },
];

export const Program: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} align={"center"}>
          <ContentHeader props={{ title: "program" }} />

          <Stack maxWidth={"768px"} width={"100%"} height={"100%"}>
            <VStack divider={<br />}>
              {PROGRAM.map((item, index) => (
                <>
                  <Text as={"b"} fontSize="2xl" textTransform="uppercase">
                    {item.date}
                  </Text>
                  <br />
                  {index === 0 && (
                    <Text fontSize="lg">Registration and networking</Text>
                  )}
                  <Box
                    overflow={"auto"}
                    w={"100%"}
                    bgColor={"white"}
                    borderRadius={"lg"}
                    borderColor={"gray.300"}
                    borderWidth={"1px"}
                    p={5}
                  >
                    <TableContainer width={"100%"}>
                      <Table variant="striped" mt={3} colorScheme={"cyan"}>
                        <Thead>
                          <Tr>
                            <Th textAlign={"center"} width={"20%"}>
                              Contents
                            </Th>
                            <Th textAlign={"center"}>Time</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {item.contents.map((detail) => (
                            <Tr key={"room1"}>
                              <Td textAlign={"center"}>
                                {detail.content}
                                {detail.place && (
                                  <>
                                    <br />
                                    <Text fontSize={"sm"}>
                                      (at {detail.place})
                                    </Text>
                                  </>
                                )}
                              </Td>
                              <Td textAlign={"center"}>{detail.startTime}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Box>
                </>
              ))}
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </Base>
  );
};
