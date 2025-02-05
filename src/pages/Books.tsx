import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import AuthorSelector from "../components/AuthorSelector";
import BookHeading from "../components/BookHeading";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <BookHeading></BookHeading>
          <HStack spacing={5} marginBottom={5}>
            <AuthorSelector></AuthorSelector>
            <SortSelector></SortSelector>
          </HStack>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
