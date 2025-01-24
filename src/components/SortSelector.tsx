import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Grade</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
