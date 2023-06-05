import { Member, MembersTable } from "./Members";
import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

const ADVISINGCOMMITTEE: Member[] = [
  { name: "Ando Masao", affiliation: "Chiba University" },
  { name: "Furusaka Shuzo", affiliation: "Ritsumeikan University" },
];
const KEYNOTESPEECHCOMMITTEE: Member[] = [
  { name: "Nishino Sayaka", affiliation: "Kyoto University" },
  { name: "Gondo Tomoyuki", affiliation: "Tokyo University" },
  { name: "Ishida Kousei", affiliation: "Waseda University" },
];
const AWARDSCOMMITTEE: Member[] = [
  { name: "Han Tian", affiliation: "Ritsumeikan University" },
  { name: "Tamura Atsushi", affiliation: "Building Research Institute" },
  { name: "Nagumo Yosuke", affiliation: "Hopkins Architects" },
  {
    name: "Kanisawa Hirotake",
    affiliation: "Shibaura Institute of Technology",
  },
  { name: "Shide Kazuya", affiliation: "Shibaura Institute of Technology" },
  { name: "Tazawa Shuhei", affiliation: "Toyo University" },
  { name: "Sasaki Rumiko", affiliation: "Tokyo University" },
  { name: "Iwamatsu Jun", affiliation: "Research Institute on Building Cost" },
];
const WORKSOPCOMMITTEE: Member[] = [
  { name: "Ogasawara Masatoyo", affiliation: "Tokyo Denki University" },
  {
    name: "Sumino Koichiro",
    affiliation: "Pacific Century Premium Developments (PCPD)",
  },
  { name: "Shibata Nao", affiliation: "West England University" },
];
const ADMINISTRATIONCOMMITTEE: Member[] = [
  { name: "Nishino Kanako", affiliation: "IIBH" },
  { name: "Katada Kazunori", affiliation: "Ritsumeikan University" },
  { name: "Tanaka Koji", affiliation: "Circle Field Associates Limited" },
];

export const TechnicalCommitteeMembersTable: React.FC = () => {
  return (
    <>
      <Stack divider={<br />} width={"100%"}>
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
            Advisory Committee
          </Text>
          <MembersTable membersList={ADVISINGCOMMITTEE} />
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
            Key Note Speech Committee
          </Text>
          <MembersTable membersList={KEYNOTESPEECHCOMMITTEE} />
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
            Academic Paper and Best Paper Award Committee
          </Text>
          <MembersTable membersList={AWARDSCOMMITTEE} />
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
            Business Seminar and Workshop Committee
          </Text>
          <MembersTable membersList={WORKSOPCOMMITTEE} />
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
            Secretariat and Administration Committee
          </Text>
          <MembersTable membersList={ADMINISTRATIONCOMMITTEE} />
        </Box>
      </Stack>
    </>
  );
};
