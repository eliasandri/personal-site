import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <Box>
      <Header />
      <About />
      <Contact />
    </Box>
  );
};

export default Main;
