import { Heading, Text } from "@chakra-ui/react";
import { books } from "../data/books";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const { name } = useParams();
  // Function to get a book by name
  const getBookByName = books.find((book) => book.name === name);

  return (
    <>
      <Heading>{getBookByName?.name}</Heading>
      <Text>{getBookByName?.description}</Text>
    </>
  );
};

export default BookDetailPage;
