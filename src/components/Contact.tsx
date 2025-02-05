import type React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <Box id="contact" py={16}>
      <Container maxW="container.md">
        <VStack spacing={8} alignItems="flex-start">
          <Heading as="h2" size="xl">
            Contact Me
          </Heading>
          <Box as="form" onSubmit={handleSubmit} width="100%">
            <VStack spacing={4} alignItems="flex-start">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="your@email.com" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message here..." />
              </FormControl>
              <Button type="submit" colorScheme="primary">
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
