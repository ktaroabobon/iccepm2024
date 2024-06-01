import React from "react";
import { Base } from "./Base";
import ContentHeader from "../components/ContentHeader";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import CustomIcon from "../icons/CustomIcon";

interface Event {
  name: string;
  date: string;
}

const OPTION1EVENTS: Event[] = [
  {
    name: "Abstract Submission",
    date: "December 13, 2023",
  },
  {
    name: "Full Paper Submission",
    date: "March 15, 2024",
  },
  {
    name: "Notification of Full Paper Acceptance",
    date: "April 1, 2024",
  },
  {
    name: "Registration and Payment",
    date: "April 20, 2024",
  },
  {
    name: "Camera-ready Submission",
    date: "June 1, 2024",
  },
];

const OPTION2EVENTS: Event[] = [
  {
    name: "Abstract Submission",
    date: "March 15, 2024",
  },
  {
    name: "Notification of Full Paper Acceptance",
    date: "April 1, 2024",
  },
  {
    name: "Registration and Payment",
    date: "April 20, 2024",
  },
  {
    name: "Camera-ready Submission",
    date: "June 1, 2024",
  },
];

const Optional1DeadLineAlert = () => {
  return (
    <Alert status="info" maxWidth={"768px"} width={"100%"}>
      <AlertIcon />
      <Box>
        <AlertTitle>Submission Deadlines Extended!</AlertTitle>
        <AlertDescription>
          The submission deadlines for Full Papers (Option1) and Abstracts
          (Option2) have been extended to March 15, 2024. Please make a note of
          the new deadline.
        </AlertDescription>
      </Box>
    </Alert>
  );
};

export const Submission: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} align={"center"}>
          <ContentHeader props={{ title: "submission" }} />

          <Stack maxWidth={"768px"} width={"100%"} height={"100%"}>
            <VStack divider={<br />}>
              <Optional1DeadLineAlert />
              <Text fontSize="md">
                To encourage participation from both academics and industry
                practitioners, the prospective presenters/participants have two
                different options for this conference: (OPTION 1) Paper &
                Presentation (recommended for academic researchers); and (OPTION
                2) Extended Abstract & Presentation (recommended for
                practitioners).
              </Text>
              <Text fontSize="md">
                For the Paper & Presentation option (OPTION 1), once the full
                paper is accepted, the full paper will be published in
                proceedings, and a presentation should be delivered during the
                conference. For the Extended Abstract & Presentation option
                (OPTION 2), there is no need to submit a paper; only an extended
                abstract and a PowerPoint are required.
              </Text>
              <Text fontSize="md">
                It is optional, but it is recommended to submit an abstract for
                both options by the deadline below. It will be peer-reviewed by
                the Technical Committee, who will provide feedback on their
                suitability for the conference.
              </Text>
              <Text fontSize="md">
                Abstract, extended abstract and full paper must be original and
                cannot be simultaneously submitted to another journal or
                conference. All of them should be written in English because the
                official language of the conference is English. For preparing an
                abstract, extended abstract, or full paper, please follow the
                formatting instructions available in the templates, and submit
                it through Easy Chair.
              </Text>
              <Text fontSize="md">
                Highly-rated peer-reviewed papers will be selected and nominated
                to ASCE’s Journal of Management in Engineering (JME). Invited
                papers will need to have at least 50% new content and will
                undergo the standard JME peer-review process.{" "}
              </Text>
              <OrderedList spacing={3} my={3}>
                <ListItem>
                  Proceeding title: Proceeding of the 2024 International
                  Conference on Construction Engineering and Project Management
                </ListItem>
                <ListItem>
                  Publisher: The International Consortium of Construction
                  Engineering and Project Management
                </ListItem>
                <ListItem>
                  Editors: Dr.Han Tian, Dr. Tamura Atsushi, Dr.Nagumo Yosuke{" "}
                </ListItem>
                <ListItem>City: Sapporo, Hokkaido, Japan</ListItem>
                <ListItem>Publication Date: July 31, 2024</ListItem>
                <ListItem>
                  Sample citation: Han,T., Tamura,A.,Nagumo,Y.,(2024).
                  Cutting-edge Technologies to Achieve a Higher Level of Modular
                  Construction – Literature Review, Proceeding of the 2024
                  International Conference on Construction Engineering and
                  Project Management, Sapporo, Hokkaido, Japan, 29-31 July 2024.
                </ListItem>
              </OrderedList>
              <Text fontSize="md">
                Submitted papers will be given the option of publishing their
                full paper on KICEM &apos s official journal, the Korean Journal
                of Construction Engineering and Management (KJCEM). The best
                papers selected from the conference will be given benefits,
                including partial discount of processing charges and fast
                tracking of the publication process. The journal is in the
                process of being indexed on SCOPUS in the near future. Please
                visit{" "}
                <Link
                  href={"https://www.kicem.or.kr/eng/"}
                  color={"cyan.500"}
                  isExternal
                >
                  KICEM site
                </Link>{" "}
                for further information.
              </Text>

              <VStack display={"flex"} justifyContent={"center"} width={"100%"}>
                <Button
                  colorScheme="cyan"
                  size="lg"
                  mt={5}
                  as="a"
                  href={"https://easychair.org/conferences/?conf=iccepm2024"}
                  target={"_blank"}
                >
                  SUBMIT YOUR PAPER
                </Button>
                <Text fontSize="sm" my={3}>
                  Click this &quot;SUBMIT YOUR PAPER&quot; button to access the
                  EasyChair Conference Management System for paper submission.
                </Text>
                <Text fontSize="sm" my={3}>
                  Please refer to the deadlines listed on this page for paper
                  submission. Note that these deadlines may vary depending on
                  the type of submission (full paper, extended abstract, etc.)
                  and review process.
                </Text>
                <Text color={"red.500"}>
                  Remember, all authors/presenters must be registered by April
                  20, 2024, to ensure their papers are included in the
                  conference proceedings.
                </Text>
              </VStack>
            </VStack>

            <br />
            <Divider borderColor={"gray.800"} borderWidth={"1px"} />
            <br />

            <Text as={"b"} fontSize="xl" align={"start"}>
              Details
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
                <Box mb={3}>
                  <Text as={"b"} size="md" textTransform="uppercase">
                    Option 1: Paper & Presentation
                  </Text>
                </Box>
                <Text size={"md"}>
                  This option is recommended for academic researchers and is in
                  a three-step process.
                </Text>
                <UnorderedList spacing={3} my={3}>
                  <ListItem>
                    Step 1 – Abstract Submission (Optional): Abstracts must not
                    exceed 250 words.
                  </ListItem>
                  <ListItem>
                    Step 2 – Full Paper Submission (Required): Full papers must
                    be limited to 8 pages. It must be prepared using the
                    formatting instructions available in the full paper
                    template. All papers will follow a single-blind review
                    process.
                  </ListItem>
                  <ListItem>
                    Step 3 – Presentation (Required): The presentations will be
                    conducted in a lecture format and limited to 13 minutes (10
                    minutes for presentation and 3 minutes for
                    questions/discussion). For presentation slides, you can
                    refer to our template. It is recommended that you use the
                    template, but it is NOT required.
                  </ListItem>
                </UnorderedList>

                <Box my={3}>
                  <TableContainer width={"100%"}>
                    <Text
                      as={"b"}
                      fontSize={"xl"}
                      align={"start"}
                      textTransform={"uppercase"}
                    >
                      Important Dates
                    </Text>
                    <Table variant="striped" mt={3}>
                      <Thead>
                        <Tr>
                          <Th textAlign={"center"}>Event</Th>
                          <Th textAlign={"center"}>Date</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {OPTION1EVENTS.map((event) => (
                          <Tr key={event.name}>
                            <Td textAlign={"center"}>{event.name}</Td>
                            {event.name === "Full Paper Submission" ? (
                              <Td textAlign={"center"}>
                                <Text color={"red"}>{event.date}</Text>
                              </Td>
                            ) : (
                              <Td textAlign={"center"}>{event.date}</Td>
                            )}
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
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
                <Box mb={3}>
                  <Text as={"b"} size="md" textTransform="uppercase">
                    Option 2: Extended Abstract & Presentation
                  </Text>
                </Box>
                <Text size={"md"}>
                  This option is recommended for practitioners and is in a
                  three-step process. For this option, there is no need to
                  submit a paper; only an extended abstract is required.
                </Text>
                <UnorderedList spacing={3} my={3}>
                  <ListItem>
                    Step 1 – Abstract Submission (Optional): Abstracts must not
                    exceed 250 words.
                  </ListItem>
                  <ListItem>
                    Step 2 – Extended Abstract Submission (Required): An
                    extended abstract must be limited to one page. It must be
                    prepared using the formatting instructions available in the
                    extended abstract template. All extended abstracts will
                    follow a single-blind review process.
                  </ListItem>
                  <ListItem>
                    Step 3 – Presentation (Required): The presentations will be
                    conducted in a lecture format and limited to 13 minutes (10
                    minutes for presentation and 3 minutes for
                    questions/discussion). For presentation slides, you can
                    refer to our template. It is recommended that you use the
                    template, but it is NOT required.
                  </ListItem>
                </UnorderedList>

                <Box my={3}>
                  <TableContainer width={"100%"}>
                    <Text
                      as={"b"}
                      fontSize={"xl"}
                      align={"start"}
                      textTransform={"uppercase"}
                    >
                      Important Dates
                    </Text>
                    <Text size={"md"}>
                      Presentation only (recommended for industry speakers)
                    </Text>
                    <Table variant="striped" mt={3}>
                      <Thead>
                        <Tr>
                          <Th textAlign={"center"}>Event</Th>
                          <Th textAlign={"center"}>Date</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {OPTION2EVENTS.map((event) => (
                          <Tr key={event.name}>
                            <Td textAlign={"center"}>{event.name}</Td>
                            {event.name === "Abstract Submission" ? (
                              <Td textAlign={"center"}>
                                <Text color={"red"}>{event.date}</Text>
                              </Td>
                            ) : (
                              <Td textAlign={"center"}>{event.date}</Td>
                            )}
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
              <Box
                overflow={"auto"}
                w={"100%"}
                bgColor={"white"}
                borderRadius={"lg"}
                borderColor={"gray.300"}
                borderWidth={"1px"}
                p={5}
                bg={"blue.100"}
              >
                <Box mb={3}>
                  <Text as={"b"} size="md" textTransform="uppercase">
                    Note
                  </Text>
                </Box>
                <UnorderedList spacing={3} my={3}>
                  <ListItem>
                    All authors/presenters must be registered for the conference
                    by April 20, 2024, or their papers will be withdrawn. (
                    <Link color={"blue.500"} href={"/registration"}>
                      Registration Page
                    </Link>
                    )
                  </ListItem>
                  <ListItem>
                    All accepted papers must be presented at the conference.
                  </ListItem>
                </UnorderedList>
              </Box>
            </VStack>

            <br />
            <Divider borderColor={"gray.800"} borderWidth={"1px"} />
            <br />

            <Text as={"b"} fontSize="xl" align={"start"}>
              Templates
            </Text>
            <VStack spacing={3} alignItems={"center"}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                width={"100%"}
                maxWidth={"500px"}
              >
                <Stack width={"100%"}>
                  <CardBody my={0} py={3}>
                    <Text py="2" align={"center"} mx={"auto"}>
                      <Heading size="md" textTransform={"uppercase"}>
                        Abstract Template (Option1)
                      </Heading>
                    </Text>
                  </CardBody>

                  <CardFooter
                    alignItems={"center"}
                    justifyContent={"center"}
                    pt={0}
                  >
                    <Button
                      variant="solid"
                      w={"50%"}
                      as="a"
                      href={
                        "https://docs.google.com/document/d/1mET_wOj26fIx-UIrvpKpcZPSND3IoPo_/edit?usp=sharing&ouid=116157923055759315952&rtpof=true&sd=true"
                      } // 引数から受け取ったURL
                      target={"_blank"}
                    >
                      <Text mr={1}>Open</Text>
                      <CustomIcon icon={"openNewTab"} />
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                width={"100%"}
                maxWidth={"500px"}
              >
                <Stack width={"100%"}>
                  <CardBody my={0} py={3}>
                    <Text py="2" align={"center"} mx={"auto"}>
                      <Heading size="md" textTransform={"uppercase"}>
                        Full Paper Template (Option1)
                      </Heading>
                    </Text>
                  </CardBody>

                  <CardFooter
                    alignItems={"center"}
                    justifyContent={"center"}
                    pt={0}
                  >
                    <Button
                      variant="solid"
                      w={"50%"}
                      as="a"
                      href={
                        "https://docs.google.com/document/d/1zWAjhskd8R1LnraCF19O9fZqGIpNUoXZ/edit?usp=sharing&ouid=116157923055759315952&rtpof=true&sd=true"
                      } // 引数から受け取ったURL
                      target={"_blank"}
                    >
                      <Text mr={1}>Open</Text>
                      <CustomIcon icon={"openNewTab"} />
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                width={"100%"}
                maxWidth={"500px"}
              >
                <Stack width={"100%"}>
                  <CardBody my={0} py={3}>
                    <Text py="2" align={"center"} mx={"auto"}>
                      <Heading size="md" textTransform={"uppercase"}>
                        Extended Abstract template (Option2)
                      </Heading>
                    </Text>
                  </CardBody>

                  <CardFooter
                    alignItems={"center"}
                    justifyContent={"center"}
                    pt={0}
                  >
                    <Button
                      variant="solid"
                      w={"50%"}
                      as="a"
                      href={
                        "https://docs.google.com/document/d/1vq_sDPeZBA4DwulRd3PguFDhb9DeHE39/edit?usp=sharing&ouid=116157923055759315952&rtpof=true&sd=true"
                      } // 引数から受け取ったURL
                      target={"_blank"}
                    >
                      <Text mr={1}>Open</Text>
                      <CustomIcon icon={"openNewTab"} />
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                width={"100%"}
                maxWidth={"500px"}
              >
                <Stack width={"100%"}>
                  <CardBody my={0} py={3}>
                    <Text py="2" align={"center"} mx={"auto"}>
                      <Heading size="md" textTransform={"uppercase"}>
                        Presentation Slide Template
                      </Heading>
                    </Text>
                  </CardBody>

                  <CardFooter
                    alignItems={"center"}
                    justifyContent={"center"}
                    pt={0}
                  >
                    <Button
                      variant="solid"
                      w={"50%"}
                      as="a"
                      href={
                        "https://docs.google.com/presentation/d/1bhb6OGIwv3kOdh3Ha8JX-yZfwp4D4_kR/edit?usp=sharing&ouid=116157923055759315952&rtpof=true&sd=true"
                      } // 引数から受け取ったURL
                      target={"_blank"}
                    >
                      <Text mr={1}>Open</Text>
                      <CustomIcon icon={"openNewTab"} />
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                width={"100%"}
                maxWidth={"500px"}
              >
                <Stack width={"100%"}>
                  <CardBody my={0} py={3}>
                    <Text py="2" align={"center"} mx={"auto"}>
                      <Heading size="md" textTransform={"uppercase"}>
                        Copyright Transfer Agreement
                      </Heading>
                    </Text>
                  </CardBody>

                  <CardFooter
                    alignItems={"center"}
                    justifyContent={"center"}
                    pt={0}
                  >
                    <Button
                      variant="solid"
                      w={"50%"}
                      as="a"
                      href={
                        "https://docs.google.com/document/d/1EF3QD6GhIEkSVUTwdMVc6fPNQ_8TP4ci/edit?usp=sharing&ouid=116157923055759315952&rtpof=true&sd=true"
                      } // 引数から受け取ったURL
                      target={"_blank"}
                    >
                      <Text mr={1}>Open</Text>
                      <CustomIcon icon={"openNewTab"} />
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </Base>
  );
};
