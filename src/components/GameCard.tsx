import React from "react";
import { Book } from "./GameGrid";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  book: Book;
}

const GameCard = ({ book }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={book.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{book.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
