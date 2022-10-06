import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const BoxStyle = {
  marginTop: "70px",
  width: "280px",
};

const ListItemButtonStyle = {
  borderRadius: "15px",
};

const ListItemIconStyle = {
  paddingLeft: "25px",
};

const ListItemstyle = {
  "&:hover": {
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    backgroundColor: "#ffe69d",
  },
};

export default function Sidebar() {
  return (
    <Box sx={BoxStyle}>
      <List>
        {[
          "Заметки",
          "Напоминание",
          "Изменение ярлыков",
          "Архив",
          "Корзина",
        ].map((text, index) => (
          <ListItem sx={ListItemstyle} key={text} disablePadding>
            <ListItemButton sx={ListItemButtonStyle}>
              <ListItemIcon sx={ListItemIconStyle}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
