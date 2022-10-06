import * as React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { AppContext } from "../../App";
import { InputAdornment, TextField  } from "@mui/material";

const BoxStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  height: "55px",
  width: "50%",
  outline: "none",
  border: "none",
  display: "flex",
  justifyContent: "left",
};

const SearchIconStyle = {
  marginLeft: "12px",
};

const TextFieldStyle = {
  width: "100%",
  height: '100%',
  outline: "none",
  border: 'none',
  margin: 0
}

export const Search = () => {
  const { search, setSearch } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }} style={BoxStyle}>
      <TextField
        sx={TextFieldStyle}
        size="small"
        placeholder="   Поиск"
        id="input-with-icon-adornment"
        value={search}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={SearchIconStyle}/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
};
