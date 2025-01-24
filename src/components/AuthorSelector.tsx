import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { authors } from "../data/authors";
import { Author } from "./GameGrid";

interface Props {
  onSelectAuthor: (author: Author) => void;
  selectedAuthor: Author | null;
}

const AuthorSelector = ({ onSelectAuthor, selectedAuthor }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {selectedAuthor?.name || "Authors"}
      </MenuButton>
      <MenuList>
        {authors.map((author) => (
          <MenuItem key={author.id} onClick={() => onSelectAuthor(author)}>
            {author.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AuthorSelector;
