import { ReactNode } from "react";
import { MyNavbar } from "../components/Navbar";
import { Alert, AlertIcon, AlertTitle, Box } from "@chakra-ui/react";

interface BaseProps {
  children: ReactNode;
}

export const Base = ({ children }: BaseProps) => {
  return (
    <Box bg={"#FCFCFC"} h={"100vh"}>
      <MyNavbar />
      <Box px={"10"} py={"5"} mx={"auto"} maxWidth={"1280px"} width={"100%"}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>
            ICCEPM2024 has concluded. Thank you for your participation.
          </AlertTitle>
        </Alert>
        <main>{children}</main>
      </Box>
    </Box>
  );
};
