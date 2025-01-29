import { Book } from "../components/GameGrid";

export function sortBooks(books: Book[], sorter: keyof Book): Book[] {
    return books.sort((a, b) => {
      const valueA = a[sorter];
      const valueB = b[sorter];
  
      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return valueB - valueA;
      } else if (valueA instanceof Date && valueB instanceof Date) {
        return valueB.getTime() - valueA.getTime();
      } else {
        return 0;
      }
    });
  }