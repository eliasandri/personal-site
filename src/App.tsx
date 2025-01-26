import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid, { Author, Genre } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import AuthorSelector from "./components/AuthorSelector";
import SortSelector from "./components/SortSelector";
import BookHeading from "./components/BookHeading";

export interface GameQuery {
  genre: Genre | null;
  author: Author | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <BookHeading gameQuery={gameQuery}></BookHeading>
          <HStack spacing={5} marginBottom={5}>
            <AuthorSelector
              selectedAuthor={gameQuery.author}
              onSelectAuthor={(author) =>
                setGameQuery({ ...gameQuery, author })
              }
            ></AuthorSelector>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
