import { Book } from "../components/GameGrid";
import useGameQueryStore from "../store";

export function filterBooksByQuery(books: Book[]): Book[] {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
    return books.filter((book) => {
      const genreMatch = gameQuery.genre
        ? book.genres.includes(gameQuery.genre?.name)
        : true;
  
      const authorMatch = gameQuery.author
        ? book.author === gameQuery.author?.name
        : true;
  
      return genreMatch && authorMatch;
    });
  }