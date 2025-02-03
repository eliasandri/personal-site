import { Book } from "../entities/Book";

export function searchBooks(allBooks: Book[], searchText: string | undefined): Book[] {
    if (!searchText) {
      return allBooks;
    }
  
    const lowercasedSearchText = searchText.toLowerCase();
  
    return allBooks.filter(
      (book) =>
        book.name.toLowerCase().includes(lowercasedSearchText) ||
        book.author.toLowerCase().includes(lowercasedSearchText)
    );
  }