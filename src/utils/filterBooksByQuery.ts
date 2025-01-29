import { GameQuery } from "../App";
import { Book } from "../components/GameGrid";

export function filterBooksByQuery(books: Book[], gameQuery: GameQuery): Book[] {
    return books.filter((book) => {
      const genreMatch = gameQuery.genre
        ? book.genres.includes(gameQuery.genre.name)
        : true;
  
      const authorMatch = gameQuery.author
        ? book.author === gameQuery.author.name
        : true;
  
      return genreMatch && authorMatch;
    });
  }