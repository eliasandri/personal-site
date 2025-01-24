import { filter, SimpleGrid } from "@chakra-ui/react";
import { books as allBooks } from "../data/books";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

export interface Book {
  id: number;
  name: string;
  description: string;
  background_image?: string;
  grade: number;
  genres: string[];
}

export interface Genre {
  id: number;
  name: string;
  image_background?: string;
}
interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  // Filter books if selectedGenre is not null
  const books = selectedGenre
    ? allBooks.filter((book) => book.genres.includes(selectedGenre.name))
    : allBooks;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {books.map((book) => (
        <GameCardContainer key={book.id}>
          <GameCard book={book}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
