import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account.carts.length);
  // const cart = account.carts.length;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dropen, setDropen] = useState(false);

  const getdetails = async () => {
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
      console.log("first login");
    } else {
      console.log("cart add ho gya hain");
      setAccount(data);
    }
  };

  useEffect(() => {
    getdetails();
  }, []);

  // for drawer

  const handelopen = () => {
    setDropen(true);
  };

  const handleClosedr = () => {
    setDropen(false);
  };

  // const getText = (text)=>{
  //     setText(text)
  //     setLiopen(false)
  // }

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handelopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handleClosedr}>
            <Rightheader logclose={handleClosedr} />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              {" "}
              <img src="./amazon_PNG25.png" alt="amazon logo" />{" "}
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" placeholder="Search" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">signin</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}

            <p>Cart</p>
          </div>
          {account ? (
            <Avatar
              className="avtar2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              className="avatar"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            ></Avatar>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
           
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {
              account ?   <MenuItem onClick={handleClose}><LogoutIcon style={{fontSize:16,marginRight:3}}/>Logout</MenuItem> : ""
            }
          
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
