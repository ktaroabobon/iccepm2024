import React, { useState } from "react";
import CustomIcon from "../icons/CustomIcon";
import { Button, Text } from "@chakra-ui/react";
const MyDownloadButton = ({ url }: { url: string }) => {
  // ボタンがクリックされたかどうかを追跡するための状態
  const [isClicked, setIsClicked] = useState(false);

  // ボタンがクリックされたときに呼び出されるハンドラ
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Button
      variant="solid"
      w={"50%"}
      as="a"
      href={url} // 引数から受け取ったURL
      download
      onClick={handleClick}
      isDisabled={isClicked} // 状態に基づいてボタンを無効にする
    >
      <CustomIcon icon={"download"} />
      <Text ml={1}>Download</Text>
    </Button>
  );
};

export default MyDownloadButton;
