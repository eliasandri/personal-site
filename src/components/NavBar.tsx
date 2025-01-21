import { HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import mexico from "../assets/ESCUDO_MEXICO-logo-B3E591388D-seeklogo.com.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={mexico} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
