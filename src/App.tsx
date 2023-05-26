import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Registration } from "./pages/Registration";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { FourOhFour } from "./pages/404";
import { Program } from "./pages/Program";
import { Venue } from "./pages/Venue";
import { Proceedings } from "./pages/Proceedings";
import { Submission } from "./pages/Submission";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/program"} element={<Program />} />
            <Route path={"/venue"} element={<Venue />} />
            <Route path={"/proceedings"} element={<Proceedings />} />
            <Route path={"/submission"} element={<Submission />} />
            <Route path={"/registration"} element={<Registration />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"*"} element={<FourOhFour />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
