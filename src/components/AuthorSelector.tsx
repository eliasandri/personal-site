import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { authors } from "../data/authors";
import useGameQueryStore from "../store";

const AuthorSelector = () => {
  const selectedAuthor = useGameQueryStore((s) => s.gameQuery.author);
  const setSelectedAuthor = useGameQueryStore((s) => s.setAuthor);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {selectedAuthor?.name || "Authors"}
      </MenuButton>
      <MenuList>
        {authors.map((author) => (
          <MenuItem key={author.id} onClick={() => setSelectedAuthor(author)}>
            {author.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AuthorSelector;
