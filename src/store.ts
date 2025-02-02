import { create } from "zustand";
import { Author, Genre } from "./components/GameGrid";

export interface GameQuery {
  genre?: Genre | undefined;
  author?: Author | undefined;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery,
    setSearchText: (searchText: string) => void;
    setGenre: (genre: Genre) => void;
    setAuthor: (author: Author) => void;
    setSortOrder: (sortOrder: string) => void;    
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText}})),
    setGenre: (genre) => set(store => ({ gameQuery: {...store.gameQuery, genre}})),
    setAuthor: (author) => set(store => ({gameQuery: {...store.gameQuery, author}})),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder}}))
}))

export default useGameQueryStore;