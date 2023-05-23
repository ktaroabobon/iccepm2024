import React from "react";
import { Base } from "./Base";
import { Grid, GridItem } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <>
      <Base>
        <Grid h={"80vh"} templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={1} bg="red" />
          <GridItem colSpan={1} bg="blue" />
        </Grid>
      </Base>
    </>
  );
};
