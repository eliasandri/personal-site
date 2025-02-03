import { Heading, Text } from "@chakra-ui/react";
import { books } from "../data/books";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";

const BookDetailPage = () => {
  const { name } = useParams();
  // Function to get a book by name
  const getBookByName = books.find((book) => book.name === name);

  return (
    <>
      <Heading>{getBookByName!.name}</Heading>
      <ExpandableText>{getBookByName!.description}</ExpandableText>
    </>
  );
};

export default BookDetailPage;
