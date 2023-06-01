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

export interface SupportingOrganization {
  name: string;
}

const SUPPORTINGORGANIZATIONS: SupportingOrganization[] = [
  {
    name: "Korea Institute of Construction Engineering and Management (KR)",
  },
];

export const SupportingOrganizationsTable: React.FC = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" mt={3}>
          <Thead>
            <Tr>
              <Th textAlign={"center"}>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {SUPPORTINGORGANIZATIONS.map((org) => (
              <Tr key={org.name}>
                <Td textAlign={"center"}>{org.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
