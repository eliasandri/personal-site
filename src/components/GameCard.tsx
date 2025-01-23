import React from "react";
import { Book } from "./GameGrid";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import Grade from "./Grade";

interface Props {
  book: Book;
}

const GameCard = ({ book }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={book.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{book.name}</Heading>
        <HStack my={3}>
          <Spacer></Spacer>
          <Grade grade={book.grade}></Grade>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
