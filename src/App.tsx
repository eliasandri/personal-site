import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import AuthorSelector from "./components/AuthorSelector";
import BookHeading from "./components/BookHeading";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";

function App() {
  /*const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);*/

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
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
}

export default App;
