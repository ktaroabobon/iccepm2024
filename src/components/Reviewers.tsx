import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import {
  TechnicalCommitteeMembers,
  OrganizingMembers,
} from "../data/Reviewers";

export const TechnicalCommitteeMembersTable: React.FC = () => {
  return (
    <Table variant="striped" mt={3}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Affiliation</Th>
        </Tr>
      </Thead>
      <Tbody>
        {TechnicalCommitteeMembers.map((member, index) => (
          <Tr key={index}>
            <Td>{member.name}</Td>
            <Td>{member.affiliation}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export const OrganizingMembersTable: React.FC = () => {
  return (
    <Table variant="striped" mt={3}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Affiliation</Th>
        </Tr>
      </Thead>
      <Tbody>
        {OrganizingMembers.map((member, index) => (
          <Tr key={index}>
            <Td>{member.name}</Td>
            <Td>{member.affiliation}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
