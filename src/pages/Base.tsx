import React, { ReactNode } from "react";
import { MyNavbar } from "../components/Navbar";
import { Box } from "@chakra-ui/react";

interface BaseProps {
  children: ReactNode;
}

export const Base = ({ children }: BaseProps) => {
  return (
    <div>
      <MyNavbar />

      <Box px={"10"} py={"5"} mx={"auto"} maxWidth={"1280px"} width={"100%"}>
        <main>{children}</main>
      </Box>
    </div>
  );
};
