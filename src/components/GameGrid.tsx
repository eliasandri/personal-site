import { SimpleGrid } from "@chakra-ui/react";
import { books } from "../data/books";
import GameCard from "./GameCard";

export interface Book {
  id: number;
  name: string;
  description: string;
  background_image?: string;
}

const GameGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={10}
    >
      {books.map((book) => (
        <GameCard key={book.id} book={book}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
