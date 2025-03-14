import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { books as allBooks } from "../data/books";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { sortBooks } from "../utils/sortBooks";
import { searchBooks } from "../utils/searchBooks";
import { filterBooksByQuery } from "../utils/filterBooksByQuery";
import { useState } from "react";
import useGameQueryStore, { GameQuery } from "../store";
import { Book } from "../entities/Book";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const [visibleCount, setVisibleCount] = useState(4); // State to manage the number of visible books

  // Only get books that are included in a searchInput. Default is all books
  const searchedBooks = searchBooks(allBooks, gameQuery.searchText);

  // Code for sorting books based on three filters
  const sorter: keyof Book = (gameQuery.sortOrder ?? "name") as keyof Book;
  const sortedBooks = sortBooks(searchedBooks, sorter);

  // Filter books based on selectedGenre and selectedAuthor
  const filteredBooks = filterBooksByQuery(sortedBooks);

  // Get the books to display based on the current visible count
  const booksToDisplay = filteredBooks.slice(0, visibleCount);

  // Function to load more books
  const loadMoreBooks = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {booksToDisplay.map((book) => (
          <GameCardContainer key={book.id}>
            <GameCard book={book}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {visibleCount < filteredBooks.length && (
        <Box textAlign="left" marginTop="20px">
          <Button onClick={loadMoreBooks}>Load More</Button>
        </Box>
      )}
    </Box>
  );
};

export default GameGrid;
