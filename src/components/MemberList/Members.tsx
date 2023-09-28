import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Grid,
  GridItem,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

export interface Member {
  photo?: string;
  name: string;
  major: string;
  affiliation: string;
}

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <>
      <Card maxW="sm" mx="auto" h="sm">
        <CardBody>
          <Box my="auto">
            <Image src={member.photo} alt={member.name} maxH="150px" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{member.name}</Heading>
              <Text>{member.major}</Text>
              <Text>{member.affiliation}</Text>
            </Stack>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export const MembersGrid = ({
  membersList,
  title,
}: {
  membersList: Member[];
  title: string;
}) => {
  const membersNumber = membersList.length;
  let columnsNumber = 2;
  if (membersNumber === 1) {
    columnsNumber = 1;
  }
  const rowsNumber = Math.ceil(membersNumber / 2);
  console.log(400 * membersNumber);
  console.log(400 * rowsNumber);

  const gridHeight = useBreakpointValue({
    base: 400 * membersNumber,
    lg: 400 * rowsNumber,
  });

  return (
    <>
      <Text fontSize="xl">{title}</Text>
      <Grid
        templateColumns={`repeat(${columnsNumber}, 1fr)`}
        templateRows={`repeat(${rowsNumber}, 1fr)`}
        gap={2}
        w="100%"
        h={gridHeight}
      >
        {membersList.map((member, index) => (
          <GridItem key={index} colSpan={{ base: 2, lg: 1 }} my="2">
            <MemberCard member={member} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
