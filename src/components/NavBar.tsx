import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import mexico from "../assets/ESCUDO_MEXICO-logo-B3E591388D-seeklogo.com.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={mexico} boxSize="60px" objectFit="cover"></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
