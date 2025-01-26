import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const BookHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.author?.name || ""} ${
    gameQuery.genre?.name || ""
  } Books`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default BookHeading;
