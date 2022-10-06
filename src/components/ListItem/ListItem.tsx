import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "../App";
import { useContext } from "react";
import { useMemo } from "react";

const BoxStyle = {
  width: "80%",
  position: "absolute",
  left: "20%",
  top: 200,
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-end",
};

const CardStyle = {
  minWidth: 240,
  minHeight: 116,
  margin: 2,
  boxShadow: "none",
  border: 1,
  borderRadius: 2,
  borderColor: "grey.500",
};

const TypographyStyle = {
  color: "black",
  mb: 1.5,
};

export const ListItem = () => {
  const { notes, setNotes, search } = useContext(AppContext);

  const filteredNotes = useMemo(() => {
    return notes.filter((item) => {
      return item.value.toUpperCase().includes(search.toUpperCase());
    });
  }, [search, notes]);

  const handleClickDelete = (id: number | string) => {
    setNotes(
      notes.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <Box sx={BoxStyle}>
      {filteredNotes.map((item) => {
        return (
          <Card key={item.id} sx={CardStyle}>
            <CardContent>
              <Typography sx={TypographyStyle}>{item.value}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleClickDelete(item.id)}>
                x
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};
