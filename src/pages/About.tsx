import React from "react";
import { Base } from "./Base";
import ContentHeader from "../components/ContentHeader";
import { Box, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { ConsortiumMembersTable } from "../components/MemberList/ConsortiumMembers";
import { TechnicalCommitteeMembersTable } from "../components/MemberList/TechnicalCommiteeMembers";
import { SponsorsTable } from "../components/Sponsors";
import { SupportingOrganizationsTable } from "../components/SupportingOrganizations";

export const About: React.FC = () => {
  return (
    <Base>
      <Box p={5}>
        <VStack spacing={5} align={"center"}>
          <ContentHeader props={{ title: "about" }} />

          <Stack maxWidth={"768px"} width={"100%"} height={"100%"}>
            <VStack divider={<br />}>
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
                <VStack p={"4"} divider={<br />}>
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
                </VStack>
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
                <Text as={"b"} size="lg" textTransform={"uppercase"}>
                  Consortium Members
                </Text>
                <ConsortiumMembersTable />
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
                <Text as={"b"} size="lg" textTransform={"uppercase"}>
                  Technical Committee
                </Text>
                <TechnicalCommitteeMembersTable />
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
                <Stack divider={<br />}>
                  <Text as={"b"} size="lg" textTransform={"uppercase"}>
                    Sponsors and Supporting Organizations
                  </Text>
                  <Text fontSize="md">
                    The International Conference on Construction Engineering and
                    Project Management (ICCEPM) 20224 is delighted to invite you
                    to support the 10th International Conference on Construction
                    Engineering and Project Management (ICCEPM) to be held in
                    Sapporo, Hokkaido, from July 29th to August 1st, 2024, as a
                    sponsor and supporter.
                  </Text>
                  <Text fontSize="md">
                    Unlike traditional academic conferences, this ICCEPM
                    conference is uniquely designed to blend creative ideas from
                    academia and innovative practices from industry. Conference
                    participants will experience the powerful synergy between
                    academia and industry that will guide the future direction
                    of the construction industry.
                  </Text>
                  <Text fontSize="md">
                    We invite you to support the ICCEPM 2022 conference.
                  </Text>
                  <Text fontSize="md">
                    For details, please contact Secretariat and Administration
                    committee at <Link href={"/contact"}>Contact Page</Link>.
                  </Text>
                  <br />
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
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </Base>
  );
};
