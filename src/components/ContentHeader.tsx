import React from "react";
import { Divider, Heading } from "@chakra-ui/react";

interface contentHeaderProps {
  title: string;
}

const ContentHeader = ({ props }: { props: contentHeaderProps }) => {
  return (
    <>
      <Heading
        as={"h1"}
        size="2xl"
        alignSelf={"center"}
        textTransform={"uppercase"}
      >
        {props.title}
      </Heading>
      <Divider />
    </>
  );
};

export default ContentHeader;
