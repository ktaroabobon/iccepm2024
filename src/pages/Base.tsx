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

      <Box px={"2"} py={"1"}>
        <main>{children}</main>
      </Box>
    </div>
  );
};
