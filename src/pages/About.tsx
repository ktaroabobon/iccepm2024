import React from "react";
import { Base } from "./Base";
import ContentHeader from "../components/ContentHeader";
import {
  Box,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SponsorsTable } from "../components/Sponsors";
import { SupportingOrganizationsTable } from "../components/SupportingOrganizations";

const ConferenceOrganizers: React.FC = () => {
  return (
    <>
      <Box overflow={"auto"} w={"100%"} py={5}>
        <Text as={"b"} fontSize="3xl">
          Conference Organizers
        </Text>
        <Text fontSize={"md"}>Conference chairs to be announced soon.</Text>
      </Box>
    </>
  );
};

const TechnicalCommittee: React.FC = () => {
  return (
    <>
      <Box overflow={"auto"} w={"100%"} py={5}>
        <Text as={"b"} fontSize="3xl">
          Technical Committee
        </Text>
        <Text fontSize={"md"}>
          Technical committee chairs to be announced soon.
        </Text>
      </Box>
    </>
  );
};

const PaperReviewers: React.FC = () => {
  return (
    <>
      <Stack divider={<br />} width={"100%"}>
        <Box overflow={"auto"} w={"100%"} py={5}>
          <Stack divider={<br />} width={"100%"}>
            <Text as={"b"} fontSize="3xl">
              List of Academic Paper Reviewers
            </Text>
            <Text fontSize="md">
              Total 80 number of prominent academics and scholars worldwide to
              be announced soon.
            </Text>
          </Stack>
        </Box>

        <Box
          overflow={"auto"}
          w={"100%"}
          bgColor={"white"}
          borderRadius={"lg"}
          borderColor={"gray.300"}
          borderWidth={"1px"}
          boxShadow={"md"}
          p={5}
        >
          <Text as={"b"} size="lg" textTransform={"uppercase"}>
            Sponsors
          </Text>
          <SponsorsTable />
        </Box>
        <Box
          overflow={"auto"}
          w={"100%"}
          bgColor={"white"}
          borderRadius={"lg"}
          borderColor={"gray.300"}
          borderWidth={"1px"}
          boxShadow={"md"}
          p={5}
        >
          <Text as={"b"} size="lg" textTransform={"uppercase"}>
            Supporting Organizations
          </Text>
          <SupportingOrganizationsTable />
        </Box>
      </Stack>
    </>
  );
};

export const About: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} align={"center"}>
          <ContentHeader props={{ title: "about" }} />

          <Stack maxWidth={"768px"} width={"100%"} height={"100%"}>
            <VStack divider={<br />}>
              <Box overflow={"auto"} w={"100%"} p={5}>
                <Stack divider={<br />} py={5}>
                  <Text as={"b"} fontSize="3xl">
                    What is ICCEPM2024?
                  </Text>
                  <Text fontSize="md">
                    We are excited to announce that 10th International
                    Conference on Construction Engineering and Project
                    Management (ICCEPM) is hosted in Sapporo from July 29th to
                    August 1st 2024.
                  </Text>
                  <Text fontSize="md">
                    We would like to invite you to attend and participate in
                    various conference activities including academic paper
                    presentations, business seminars and workshops, networking,
                    music performance, dinner banquet, and post-conference
                    excursion. These conference activities will be highly
                    educational, practical and enjoyable for students, academics
                    and practitioners.
                  </Text>
                  <Text fontSize="md">
                    The 2024 ICCEPM theme is “How innovative technology shapes
                    sustainable built environment beyond limits for research and
                    industry”. Under this theme, the conference will provide
                    inspiring and thought-provoking opportunities through
                    engagement with internationally renowned scholars and
                    industry leaders known for their innovation.
                  </Text>
                  <Text fontSize="md">
                    Unlike traditional academic conferences, this ICCEPM
                    conference is uniquely designed to blend creative ideas from
                    academia and innovative practices from industry. Conference
                    participants will experience the powerful synergy between
                    academia and industry that will guide the future direction
                    of the construction industry.
                  </Text>
                </Stack>
                <Stack divider={<br />} py={5}>
                  <Text as={"b"} fontSize="3xl">
                    ICCEPM Consortium
                  </Text>
                  <Text fontSize="md">
                    The International Consortium of Construction Engineering and
                    Project Management (ICCEPM) has been reformulated in 2021 on
                    the basis of continued collaborative efforts for ICCEPM
                    conferences since 2005.
                  </Text>
                  <Text fontSize="md">
                    ICCEPM is a global academic society committed to promoting
                    advancement in the area of construction engineering and
                    project management. ICCEPM aims to establish a knowledge
                    base for the area, accurately forecast future technology
                    demands, improve industry practices, and facilitate
                    knowledge transfer in the field of construction management
                    through international collaboration.
                  </Text>
                  <Text fontSize="md">
                    The co-presidents of ICCEPM, professor Youngsoo Jung of
                    Myongji University and professor Heng Li of Hong Kong
                    Polytechnic University, are honored and grateful to have
                    Japan as our host for 2024!
                  </Text>
                  <Text fontSize="md">
                    Please visit{" "}
                    <Link
                      href={"https://www.iccepm.org/"}
                      color={"cyan.500"}
                      isExternal
                    >
                      our website
                    </Link>{" "}
                    for further information about the consortium.
                  </Text>
                </Stack>
              </Box>

              <Box overflow={"auto"} w={"100%"} py={5}>
                <Tabs variant="enclosed" colorScheme="cyan" size={"lg"}>
                  <TabList justifyContent={"center"} alignItems={"center"}>
                    <Tab>
                      <Text as={"b"}>Conference Organizers</Text>
                    </Tab>
                    <Tab>
                      <Text as={"b"}>Technical Committee</Text>
                    </Tab>
                    <Tab>
                      <Text as={"b"}>Paper Reviewers</Text>
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <ConferenceOrganizers />
                    </TabPanel>
                    <TabPanel>
                      <TechnicalCommittee />
                    </TabPanel>
                    <TabPanel>
                      <PaperReviewers />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </Base>
  );
};
