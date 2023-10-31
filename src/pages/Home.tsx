import React from "react";
import { Base } from "./Base";
import {
  Grid,
  GridItem,
  Image,
  Heading,
  Hide,
  Text,
  Center,
  VStack,
  HStack,
  Link,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import conferenceHall from "../assets/images/conferenceHall.jpg";
import CustomIcon from "../icons/CustomIcon";

export const Home: React.FC = () => {
  return (
    <>
      <Base>
        <Grid
          templateColumns={"repeat(1, 1fr)"}
          templateRows={"repeat(2, 1fr)"}
          gap={4}
          h={{
            base: "150vh",
            sm: "100vh",
          }}
        >
          <GridItem p={2} mb={5}>
            <Grid
              templateColumns={"repeat(2, 1fr)"}
              gap={2}
              height={"100%"}
              h={{
                base: "85vh",
                sm: "50vh",
              }}
            >
              <GridItem
                colSpan={{
                  base: 2,
                  lg: 1,
                }}
                p={"2"}
                my={"auto"}
                maxWidth={"768px"}
              >
                <VStack>
                  <Heading as="h1" size="xl" mb={5} textAlign={"center"}>
                    ICCEPM 2024
                  </Heading>
                  <Text
                    as="h2"
                    size="lg"
                    mb={5}
                    textAlign={"center"}
                    color={"gray.800"}
                  >
                    The 10<Text as={"sup"}>th</Text> International Conference on
                    Construction Engineering and Project Management
                  </Text>
                  <br />
                  <HStack textAlign={"center"}>
                    <CustomIcon icon={"calendar"} />
                    <Text fontSize="2xl" mb={3} as={"b"}>
                      Jul 29th - Aug 1st 2024
                    </Text>
                  </HStack>
                  <HStack textAlign={"center"}>
                    <CustomIcon icon={"location"} />
                    <Text fontSize="md" mb={3} as={"u"}>
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
                  </HStack>
                  <HStack textAlign={"center"}>
                    <CustomIcon icon={"organization"} />
                    <Text fontSize="md" mb={3}>
                      Joint consortium
                    </Text>
                  </HStack>
                  <HStack textAlign={"center"}>
                    <Button
                      as="a"
                      href={
                        "https://drive.google.com/file/d/1VotjG2xZ2xmqwihz_mYCiHtvE9HpuJ9r/view?usp=sharing"
                      }
                      target={"_blank"}
                      colorScheme={"red"}
                    >
                      Page Update
                    </Button>
                  </HStack>
                </VStack>
              </GridItem>
              <Hide below={"lg"}>
                <GridItem colSpan={1}>
                  <Center height={"100%"}>
                    <Image
                      src={conferenceHall}
                      alt={"conference hole"}
                      rounded={"lg"}
                      width={"100%"}
                      boxShadow={"2xl"}
                    />
                  </Center>
                </GridItem>
              </Hide>
            </Grid>
          </GridItem>
          <GridItem p={"2"}>
            <Card rounded={"xl"} shadow={"xl"} bg={"white"}>
              <CardHeader>
                <Heading as={"h2"} fontSize="xl" mb={3} textAlign={"center"}>
                  Theme: How innovative technology shapes sustainable built
                  environment beyond limits for research and industry
                </Heading>
              </CardHeader>

              <CardBody>
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
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Base>
    </>
  );
};
