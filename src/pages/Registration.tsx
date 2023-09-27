import React from "react";
import { Base } from "./Base";
import {
  Box,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
  Button,
  VStack,
  TableContainer,
  Td,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Flex,
} from "@chakra-ui/react";
import ContentHeader from "../components/ContentHeader";
import { HotelTable } from "../components/HotelTable";

export const Registration: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} align={"center"}>
          <ContentHeader props={{ title: "REGISTRATION" }} />

          <Stack maxWidth={"768px"} width={"100%"} height={"100%"}>
            <TableContainer width={"100%"} maxWidth={"500px"}>
              <Text as={"b"} fontSize={"xl"} align={"start"}>
                Registration Fee
              </Text>
              <Table variant="striped" mt={3} colorScheme={"cyan"}>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"}>Category</Th>
                    <Th textAlign={"center"}>Fee(yen)</Th>
                    <Th textAlign={"center"}>Detail</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign={"center"}>Regular</Td>
                    <Td textAlign={"center"}>
                      <Text px={2}>80,000</Text>
                    </Td>
                    <Td textAlign={"center"}>Payment after April 20, 2024</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"}>Early Bird</Td>
                    <Td textAlign={"center"}>
                      <Text px={2}>60,000</Text>
                    </Td>
                    <Td textAlign={"center"}>Payment by April 20, 2024</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign={"center"}>Student</Td>
                    <Td textAlign={"center"}>
                      <Text px={2}>50,000</Text>
                    </Td>
                    <Td textAlign={"center"}>Payment by April 20, 2024</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Box
              overflow={"auto"}
              w={"100%"}
              bgColor={"white"}
              borderRadius={"lg"}
              borderWidth={"1px"}
              p={5}
              bg={"red.50"}
            >
              <Text as={"b"} fontSize="md" textTransform="uppercase">
                Note
              </Text>
              <Text fontSize="sm" my={3}>
                We have updated the registration fee as above, which now
                includes the dinner banquet, package lunch and post-conference
                excursion. Early registration is strongly recommended as some of
                the activities may be limited to capacity.
              </Text>
              <br />
              <Text fontSize="sm" my={3}>
                ICCEPM Standard Fee is 600 USD, which is converted to 80,000 Yen
                (Regular), 60,000 Yen (Early Bird), and 50,000 Yen (Student) for
                ICCEPM2024.
              </Text>
            </Box>

            <br />

            <Text as={"b"} fontSize="xl" align={"start"}>
              Information
            </Text>

            <VStack spacing={3} alignItems={"start"}>
              <Box
                overflow={"auto"}
                w={"100%"}
                bgColor={"white"}
                borderRadius={"lg"}
                borderColor={"gray.300"}
                borderWidth={"1px"}
                p={5}
              >
                <Text as={"b"} size="md" textTransform="uppercase">
                  Details
                </Text>
                <UnorderedList spacing={3} my={3}>
                  <ListItem>
                    <Text color={"red.500"}>
                      Deadline is <Text as={"u"}>Apr 20 2024</Text>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      Access to all academic paper presentations and business
                      seminars & workshops
                      <Text color={"red.500"} pl={1}>
                        is included
                      </Text>
                      .
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      Dinner banquet on the 3rd day{" "}
                      <Text color={"red.500"} pl={1}>
                        is included, subject to capacity
                      </Text>
                      .
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      Post-conference excursion on the 4th day
                      <Text color={"red.500"} pl={1}>
                        is included, subject to capacity
                      </Text>
                      .
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      Lunch fee
                      <Text color={"red.500"} pl={1}>
                        is included
                      </Text>
                      .
                    </Flex>
                    <UnorderedList ml={5} mt={2}>
                      <ListItem>
                        There are also two dining facilities within Hokkaido
                        University.
                      </ListItem>
                      <ListItem>
                        Memorial center: 30 seats, 5 minutes-walk from
                        Conference Hall
                      </ListItem>
                      <ListItem>
                        University main dining hall: 500 seats, 10 minutes-walk
                        from Conference Hall
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      Hotel fee is
                      <Text color={"red.500"} px={1} as="u">
                        not
                      </Text>
                      included.
                    </Flex>
                  </ListItem>
                </UnorderedList>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton border={"none"}>
                        <Box flex="1" textAlign="left">
                          <Text size="md">Please book a nearby hotel.</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <HotelTable />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                overflow={"auto"}
                w={"100%"}
                bgColor={"white"}
                borderRadius={"lg"}
                borderColor={"gray.300"}
                borderWidth={"1px"}
                p={5}
              >
                <Text as={"b"} size="md" textTransform="uppercase">
                  Important Information
                </Text>
                <UnorderedList spacing={3} my={3}>
                  <ListItem fontSize={"md"}>
                    All registrants, including industry practitioners and
                    scholars, should register as regular registrants.
                  </ListItem>
                  <ListItem>
                    To receive the student rate, you must be an active student
                    in Spring 2024. Provide your affiliation information during
                    the registration process.
                  </ListItem>
                  <ListItem>
                    Conference regular (including early bird) registration
                    allows the attendee to have up to 2 papers included in the
                    conference and proceedings, with the exception of student
                    registration, which allows 1 paper to be included.
                  </ListItem>
                  <ListItem>
                    Authors must be registered for the conference by April 20,
                    2024, or their paper will be withdrawn.
                  </ListItem>
                  <ListItem>
                    All accepted papers must be presented at the conference.
                  </ListItem>
                  <ListItem>
                    ICCEPM 2024 will follow applicable local laws and health
                    protocols as necessary.
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box
                overflow={"auto"}
                w={"100%"}
                bgColor={"white"}
                borderRadius={"lg"}
                borderColor={"gray.300"}
                borderWidth={"1px"}
                p={5}
              >
                <Text as={"b"} size="md" textTransform="uppercase">
                  Cancellation Policy
                </Text>
                <UnorderedList spacing={3} my={3}>
                  <ListItem>
                    For cancellation, email (ICCEPM2024 at gmail dot com) by{" "}
                    <Text as="u">20 May, 2024</Text>.
                  </ListItem>
                  <ListItem>
                    10,000 YEN processing fee will be deducted from all refunds.
                  </ListItem>
                  <ListItem>
                    <Text as="u">
                      There are no cancellations after May 21, 2024.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </VStack>
            <VStack display={"flex"} justifyContent={"end"} width={"100%"}>
              <Button
                colorScheme="cyan"
                size="md"
                mt={5}
                as="a"
                href={"https://easychair.org/conferences/?conf=iccepm2024"}
                target={"_blank"}
              >
                REGISTER NOW
              </Button>
              <Text color={"red.500"}>Deadline: Apr 20 2024</Text>
              <Text color={"red.500"}>
                Please click this &quot;REGISTER NOW&quot; button and access to
                EasyChair Conference Management System for registration and
                submitting papers.
              </Text>
              <Text color={"red.500"}>
                Payment instruction and detailed brochure will be
                announced/uploaded next year on the website.
              </Text>
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </Base>
  );
};
