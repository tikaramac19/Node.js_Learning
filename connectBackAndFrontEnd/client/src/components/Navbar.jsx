import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Header = styled(AppBar)`
  background: #333;
`;
const Tabs = styled(Link)`
  margin-right: 1.3rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Tabs to="/">CRUD Application</Tabs>
          <Tabs to="all-users">All Users</Tabs>
          <Tabs to="add-user">Add User</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default Navbar;
