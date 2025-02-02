import { Heading } from "@chakra-ui/react";
import useGameQueryStore, { GameQuery } from "../store";

const BookHeading = () => {
  const genre = useGameQueryStore((s) => s.gameQuery.genre);
  console.log(genre?.name);
  const author = useGameQueryStore((s) => s.gameQuery.author);
  console.log(author);
  const heading = `${author?.name || ""} ${genre?.name || ""} Books`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default BookHeading;
