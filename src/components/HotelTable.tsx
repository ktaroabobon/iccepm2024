import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

interface Hotel {
  name: string;
  starRating: number;
  location: string;
}

const HOTELS: Hotel[] = [
  {
    name: "Keio Prelia Hotel",
    starRating: 3,
    location: "walking distance and reasonable price",
  },
  {
    name: "Hotel Mystay Sapporo Aspen",
    starRating: 4,
    location: "walking distance and reasonable price",
  },
  {
    name: "Mitsui Garden Hotel",
    starRating: 3,
    location: "Sapporo city center",
  },
  {
    name: "Daiwa Roynet Hotel",
    starRating: 4,
    location: "Sapporo city center",
  },
  {
    name: "Keio Plaza Hotel",
    starRating: 5,
    location: "Sapporo city center",
  },
  {
    name: "Sapporo Grand Hotel",
    starRating: 5,
    location: "Sapporo city center",
  },
  {
    name: "Sapporo Park Hotel",
    starRating: 5,
    location: "Sapporo city center",
  },
];
export const HotelTable = () => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" mt={5}>
          <Thead>
            <Tr>
              <Th textAlign={"center"}>Hotel Name</Th>
              <Th textAlign={"center"}>Star Rating</Th>
              <Th textAlign={"center"}>Location</Th>
            </Tr>
          </Thead>
          <Tbody>
            {HOTELS.map((hotel) => (
              <Tr key={hotel.name}>
                <Td textAlign={"center"}>{hotel.name}</Td>
                <Td textAlign={"center"}>{hotel.starRating}</Td>
                <Td textAlign={"center"}>{hotel.location}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
