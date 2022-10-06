import React, { Dispatch, SetStateAction, useState, useMemo } from "react";
import { Header } from "./Header/Header";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar/Sidebar";
import Workspace from "./Workspace/Workspace";
import { ListItem } from "./ListItem/ListItem";

const fakedatabase = [
  { id: 1, value: "asd" },
  { id: 2, value: "as" },
];

type Note = {
  id: string | number;
  value: string;
};
type AppContextType = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
  newNote: string;
  setNewNote: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

const App = () => {
  const [notes, setNotes] = useState<Note[]>(fakedatabase);
  const [newNote, setNewNote] = useState("");
  const [search, setSearch] = useState("");

  const BoxStyle = {
    display: "flex",
    width: "100%",
    minHeight: "100%",
    boxSizing: "border-box",
  };

  const value = useMemo<AppContextType>(() => {
    return {
      notes,
      setNotes,
      newNote,
      setNewNote,
      search,
      setSearch,
    };
  }, [notes, setNotes, newNote, setNewNote, search, setSearch]);

  return (
    <AppContext.Provider value={value}>
      <Box sx={{ BoxStyle }}>
        <Header />
        <Box sx={{ BoxStyle }}>
          <Sidebar />
          <Workspace />
        </Box>
        <ListItem />
      </Box>
    </AppContext.Provider>
  );
};

export default App;
