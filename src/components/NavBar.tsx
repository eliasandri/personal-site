import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import mexico from "../assets/ESCUDO_MEXICO-logo-B3E591388D-seeklogo.com.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={mexico} boxSize="60px"></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
