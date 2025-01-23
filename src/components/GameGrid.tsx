import { SimpleGrid } from "@chakra-ui/react";
import { books } from "../data/books";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

export interface Book {
  id: number;
  name: string;
  description: string;
  background_image?: string;
  grade: number;
}

export interface Genre {
  id: number;
  name: string;
  image_background?: string;
}

const GameGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {books.map((book) => (
        <GameCardContainer>
          <GameCard key={book.id} book={book}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
