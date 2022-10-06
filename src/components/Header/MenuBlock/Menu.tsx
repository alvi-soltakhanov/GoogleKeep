import * as React from "react";
import styles from "./Menu.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const BoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "auto",
};

const MenuIconStyle = {
  color: "#5F6368",
  padding: "15px",
};

const ToolbarStyle = {
  color: "#5f6368",
  opacity: "1",
  display: "flex",
  aligIitems: "center",
  fontSize: "22px",
  fontStyle: "normal",
  width: "auto",
  padding: "2px",
};

const ImgStyle = {
  paddingLeft: "15px",
};

export const Menu = () => {
  return (
    <Box sx={BoxStyle}>
      <MenuIcon style={MenuIconStyle} />
      <img
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        alt="Logo"
        style={ImgStyle}
      />
      <Toolbar sx={ToolbarStyle}>Keep</Toolbar>
    </Box>
  );
};
