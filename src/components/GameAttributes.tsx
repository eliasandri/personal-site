import { SimpleGrid, Text } from "@chakra-ui/react";
import { Book } from "../entities/Book";
import DefinitionItem from "./DefinitionItem";
import Grade from "./Grade";

interface Props {
  book: Book;
}

const GameAttributes = ({ book }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Author">
        <Text>{book!.author}</Text>
      </DefinitionItem>
      <DefinitionItem term="Grade">
        <Grade grade={book!.grade}></Grade>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {book!.genres.map((genre) => (
          <Text key={genre}>{genre}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
