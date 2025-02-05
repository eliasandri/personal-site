import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Router, Link as RouterLink } from "react-router-dom";

const Header = () => {
  const booksRouting = "books";
  return (
    <Box bg="primary.500" py={4} px={8}>
      <Flex alignItems="center">
        <Heading as="h1" size="lg">
          My personal website
        </Heading>
        <Spacer />
        <Button as="a" href="#about" variant="ghost" mr={2}>
          About
        </Button>
        <Button as={RouterLink} to="/Books" variant="ghost" mr={2}>
          Book recommendations
        </Button>

        <Button as="a" href="#contact" variant="ghost">
          Contact
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
