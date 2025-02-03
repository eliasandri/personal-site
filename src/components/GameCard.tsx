import { Book } from "./GameGrid";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import Grade from "./Grade";
import Release_Date from "./Release_date";
import { Link } from "react-router-dom";

interface Props {
  book: Book;
}

const GameCard = ({ book }: Props) => {
  return (
    <Card>
      <Image src={book.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={"/books/" + book.name}>{book.name}</Link>
        </Heading>
        <HStack my={3}>
          <Spacer></Spacer>
          <Grade grade={book.grade}></Grade>
        </HStack>
        <Flex justifyContent="flex-end">
          <Release_Date release_date={book.release_date}></Release_Date>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
