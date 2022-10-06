import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Search } from "./SearchBlock/Search";
import { Menu } from "./MenuBlock/Menu";
import Account from './AccountBlock/Account'

export const Header = () => {
  const AppBarStyle = {
    width: "100%",
    height: '64px',
    backgroundColor: "white",
    margin: '0px',
  };

  const ToolbarStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent : 'space-between',
    margin: '0px',
    padding: '8px 8px'
  }

  return (
    <AppBar sx={AppBarStyle}>
      <Toolbar sx={ToolbarStyle}>
        <Menu />
        <Search />
        <Account />
      </Toolbar>
    </AppBar>
  );
};
