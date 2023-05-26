import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Registration } from "./pages/Registration";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { FourOhFour } from "./pages/404";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/registration"} element={<Registration />} />
            <Route path={"*"} element={<FourOhFour />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
