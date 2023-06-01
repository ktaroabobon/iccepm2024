import { Member, MembersTable } from "./Members";
import React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";

const ADVISINGCOMMITTEE: Member[] = [
  { name: "Ando Masao", affiliation: "Chiba University" },
  { name: "Furusaka Shuzo", affiliation: "Ritsumeikan University" },
  { name: "Kaneta Takashi", affiliation: "Kyoto University" },
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
      <Box my={3}>
        <Text size={"md"}>Advisory Committee</Text>
        <MembersTable membersList={ADVISINGCOMMITTEE} />
      </Box>
      <Divider />
      <Box my={3}>
        <Text size={"md"}>Key Note Speech Committee</Text>
        <MembersTable membersList={KEYNOTESPEECHCOMMITTEE} />
      </Box>
      <Divider />
      <Box my={3}>
        <Text size={"md"}>Academic Paper and Best Paper Award Committee</Text>
        <MembersTable membersList={AWARDSCOMMITTEE} />
      </Box>
      <Divider />
      <Box my={3}>
        <Text size={"md"}>Business Seminar and Workshop Committee</Text>
        <MembersTable membersList={WORKSOPCOMMITTEE} />
      </Box>
      <Divider />
      <Box my={3}>
        <Text size={"md"}>Secretariat and Administration Committee</Text>
        <MembersTable membersList={ADMINISTRATIONCOMMITTEE} />
      </Box>
    </>
  );
};
