import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { authors } from "../data/authors";

const AuthorSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Authors
      </MenuButton>
      <MenuList>
        {authors.map((author) => (
          <MenuItem key={author.id}>{author.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AuthorSelector;
