import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Registration } from "./pages/Registration";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box bg={"#FCFCFC"}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/registration"} element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
