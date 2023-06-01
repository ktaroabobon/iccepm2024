import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export interface Member {
  name: string;
  affiliation: string;
}

export const MembersTable = ({ membersList }: { membersList: Member[] }) => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" mt={3}>
          <Thead>
            <Tr>
              <Th textAlign={"center"}>Name</Th>
              <Th textAlign={"center"}>Affiliation</Th>
            </Tr>
          </Thead>
          <Tbody>
            {membersList.map((member) => (
              <Tr key={member.name}>
                <Td textAlign={"center"}>{member.name}</Td>
                <Td textAlign={"center"}>{member.affiliation}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
