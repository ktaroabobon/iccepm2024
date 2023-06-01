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

export interface Sponsor {
  name: string;
}

const SPONSORS: Sponsor[] = [
  {
    name: "Pacific Century Prime Developments (HK)",
  },
  {
    name: "Circle Field Associates Limited (UK)",
  },
];

export const SponsorsTable: React.FC = () => {
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
            {SPONSORS.map((sponsor) => (
              <Tr key={sponsor.name}>
                <Td textAlign={"center"}>{sponsor.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
