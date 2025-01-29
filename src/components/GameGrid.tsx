import { SimpleGrid } from "@chakra-ui/react";
import { books as allBooks } from "../data/books";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { sortBooks } from "../utils/sortBooks";
import { searchBooks } from "../utils/searchBooks";
import { filterBooksByQuery } from "../utils/filterBooksByQuery";

export interface Book {
  id: number;
  name: string;
  description: string;
  background_image?: string;
  grade: number;
  genres: string[];
  author: string;
  release_date: Date;
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
  // Only get books that are included in a searchInput. Default is all books
  const searchedBooks = searchBooks(allBooks, gameQuery.searchText);
  /*const searchedBooks = gameQuery.searchText
    ? allBooks.filter(
        (book) =>
          book.name
            .toLowerCase()
            .includes(gameQuery.searchText.toLowerCase()) ||
          book.author.toLowerCase().includes(gameQuery.searchText.toLowerCase())
      )
    : allBooks;*/

  // Code for sorting books based on three filters
  const sorter: keyof Book = (gameQuery.sortOrder ?? "name") as keyof Book;
  const sortedBooks = sortBooks(searchedBooks, sorter);
  /*const sortedBooks = searchedBooks.sort((a, b) => {
    const valueA = a[sorter];
    const valueB = b[sorter];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB);
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      return valueB - valueA;
    } else if (valueA instanceof Date && valueB instanceof Date) {
      return valueB.getTime() - valueA.getTime(); // For ascending orderelse {
    } else {
      return 0;
    }
  });*/

  // Filter books based on selectedGenre and selectedAuthor
  const books = filterBooksByQuery(sortedBooks, gameQuery);
  /*const books = sortedBooks.filter((book) => {
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
  });*/

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
