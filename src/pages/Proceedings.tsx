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

interface ProceedingsProps {
  date: string;
  ampm: string;
  content: {
    room1?: string;
    room2?: string;
    room3?: string;
    room4?: string;
  };
}

const PROCEEDINGS: ProceedingsProps[] = [
  {
    date: "Day1 - July 29, 2024",
    ampm: "PM",
    content: { room1: "TBC", room2: "TBC", room3: "TBC", room4: "TBC" },
  },
  {
    date: "Day2 - July 30, 2024",
    ampm: "AM",
    content: {
      room1: "Industrialized and Modular Construction",
      room2: "Advanced Project Delivery and Contracting",
      room3: "Sensing and Data Analytics for Construction (AI & Data Science)",
      room4:
        "Sustainable Construction and Resilient Infrastructure/Cities/Communities",
    },
  },
  {
    date: "Day2 - July 30, 2024",
    ampm: "PM",
    content: {
      room1: "Automation in Construction (Robotics)",
      room2:
        "Advanced Project Management & Control (Scheduling, Estimating, QA/QC, Risk/Safety Management)",
      room3:
        "Visualization, Information Modelling, and Simulation (Digital Twin, AR/VR, BIM)",
      room4:
        "Construction in Extreme Environments (Future of Space Exploration)",
    },
  },
  {
    date: "Day3 - July 31, 2024",
    ampm: "AM",
    content: {
      room1: "Industry Case Studies",
      room2: "Lean Design and Construction",
      room3: "Building Science (Energy Modelling, Facility Management)",
      room4: "Education, Diversity, Inclusion and Heritage in Construction",
    },
  },
  {
    date: "Day3 - July 31, 2024",
    ampm: "PM",
    content: {
      room1: "TBC",
      room2: "TBC",
      room3: "TBC",
      room4: "TBC",
    },
  },
];

export const Proceedings: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} align={"center"}>
          <ContentHeader props={{ title: "proceedings" }} />

          <Stack maxWidth={"1280px"} width={"100%"} height={"100%"}>
            <VStack divider={<br />}>
              {PROCEEDINGS.map((proceeding) => (
                <>
                  <Text as={"b"} fontSize="2xl" textTransform="uppercase">
                    {proceeding.date} ({proceeding.ampm})
                  </Text>
                  <br />
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
                              Room Number
                            </Th>
                            <Th textAlign={"center"}>Contents</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr key={"room1"}>
                            <Td textAlign={"center"}>Room 1</Td>
                            <Td textAlign={"center"}>
                              {proceeding.content.room1}
                            </Td>
                          </Tr>
                          <Tr key={"room2"}>
                            <Td textAlign={"center"}>Room 2</Td>
                            <Td textAlign={"center"}>
                              {proceeding.content.room2}
                            </Td>
                          </Tr>
                          <Tr key={"room3"}>
                            <Td textAlign={"center"}>Room 3</Td>
                            <Td textAlign={"center"}>
                              {proceeding.content.room3}
                            </Td>
                          </Tr>
                          <Tr key={"room4"}>
                            <Td textAlign={"center"}>Room 4</Td>
                            <Td textAlign={"center"}>
                              {proceeding.content.room4}
                            </Td>
                          </Tr>
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
