import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import { books } from "../data/books";

const BookDetailPage = () => {
  const { name } = useParams();
  // Function to get a book by name
  const getBookByName = books.find((book) => book.name === name);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{getBookByName!.name}</Heading>
        <ExpandableText>{getBookByName!.description}</ExpandableText>
        <GameAttributes book={getBookByName!}></GameAttributes>
      </GridItem>
      <GridItem>
        <Text></Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default BookDetailPage;
