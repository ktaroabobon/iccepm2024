import { Member, MembersTable } from "./Members";
import React from "react";

const CONSORTIUMMEMBERS: Member[] = [
  { name: "Ando Masao", affiliation: "Chiba University" },
  { name: "Furusaka Shuzo", affiliation: "Ritsumeikan University" },
  { name: "Kaneta Takashi", affiliation: "Kyoto University" },
  { name: "Nishino Sayaka", affiliation: "Kyoto University" },
  { name: "Gondo Tomoyuki", affiliation: "Tokyo University" },
  { name: "Ishida Kousei", affiliation: "Waseda University" },
  {
    name: "Kanisawa Hirotake",
    affiliation: "Shibaura Institute of Technology",
  },
  { name: "Shide Kazuya", affiliation: "Shibaura Institute of Technology" },
  { name: "Ogasawara Masatoyo", affiliation: "Tokyo Denki University" },
  { name: "Tazawa Shuhei", affiliation: "Toyo University" },
  { name: "Han Tian", affiliation: "Ritsumeikan University" },
  { name: "Sasaki Rumiko", affiliation: "Tokyo University" },
  { name: "Iwamatsu Jun", affiliation: "Research Institute on Building Cost" },
  { name: "Tamura Atsushi", affiliation: "Building Research Institute" },
  {
    name: "Sumino Koichiro",
    affiliation: "Pacific Century Premium Developments (PCPD)",
  },
  { name: "Nagumo Yosuke", affiliation: "Hopkins Architects" },
  { name: "Nishino Kanako", affiliation: "IIBH" },
  { name: "Katada Kazunori", affiliation: "Ritsumeikan University" },
  { name: "Shibata Nao", affiliation: "West England University" },
  { name: "Tanaka Koji", affiliation: "Circle Field Associates Limited" },
];

export const ConsortiumMembersTable: React.FC = () => {
  return (
    <>
      <MembersTable membersList={CONSORTIUMMEMBERS} />
    </>
  );
};
