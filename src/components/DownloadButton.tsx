import React from "react";
import CustomIcon from "../icons/CustomIcon";
import { Button, Text } from "@chakra-ui/react";

type MyDownloadButtonProps = {
  url: string;
};

const MyDownloadButton: React.FC<MyDownloadButtonProps> = ({ url }) => {
  // ボタンがクリックされたかどうかを追跡するための状態
  return (
    <Button
      variant="solid"
      w={"50%"}
      as="a"
      href={url} // 引数から受け取ったURL
      download
    >
      <CustomIcon icon={"download"} />
      <Text ml={1}>Download</Text>
    </Button>
  );
};

export default MyDownloadButton;
