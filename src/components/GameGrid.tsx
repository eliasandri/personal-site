import { filter, SimpleGrid } from "@chakra-ui/react";
import { books as allBooks } from "../data/books";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

export interface Book {
  id: number;
  name: string;
  description: string;
  background_image?: string;
  grade: number;
  genres: string[];
  author: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background?: string;
}

export interface Author {
  id: number;
  name: string;
}
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  // Filter books if selectedGenre is not null
  /*const books = selectedGenre
    ? allBooks.filter((book) => book.genres.includes(selectedGenre.name))
    : allBooks;*/

  // Filter books based on selectedGenre and selectedAuthor
  const books = allBooks.filter((book) => {
    // Check if the book matches the selected genre (if selectedGenre is not null)
    const genreMatch = gameQuery.genre
      ? book.genres.includes(gameQuery.genre.name)
      : true;

    // Check if the book matches the selected author (if selectedAuthor is not null)
    const authorMatch = gameQuery.author
      ? book.author === gameQuery.author.name
      : true;

    // Return true only if both conditions (genre and author) match
    return genreMatch && authorMatch;
  });

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
