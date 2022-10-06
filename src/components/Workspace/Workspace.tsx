import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { AppContext } from "../App";
import { useContext } from "react";

export default function Workspace() {
  const { newNote, setNewNote, setNotes } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value);
  };

  const handleClick = () => {
    setNotes((prevState) => [...prevState, { id: Date.now(), value: newNote }]);
    setNewNote("");
  };

  const BoxStyle = {
    "& .MuiTextField-root": {
      m: 1,
    },
  };

  const TextFieldStyle = {
    width: 598,
    height: 30,
    position: "absolute",
    left: "40%",
    top: 120,
    letteSpacing: ".01428571em",
    fonFamily: "Roboto",
    fonSize: ".875rem",
    fontWeight: 400,
    borderRadius: "10px",
    color: "#202124",
  };

  const StackStyle = {
    position: "absolute",
    left: "68%",
    top: 127,
  };

  return (
    <Box component="form" sx={{ BoxStyle }} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-flexible"
        label="Заметка..."
        multiline
        sx={TextFieldStyle}
        maxRows={4}
        value={newNote}
        onChange={handleChange}
      />
      <Stack direction="row" spacing={1} sx={StackStyle}>
        <IconButton
          aria-label="fingerprint"
          color="success"
          onClick={handleClick}
        >
          <Fingerprint />
        </IconButton>
      </Stack>
    </Box>
  );
}
