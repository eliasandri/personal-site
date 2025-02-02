import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { genres } from "../data/genres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);
  const setSelectedGenre = useGameQueryStore((s) => s.setGenre);
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={genre.image_background}
              ></Image>
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={
                  genre.name === selectedGenre?.name ? "bold" : "normal"
                }
                onClick={() => setSelectedGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
