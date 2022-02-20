import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
           <NavLink to="/"> <img src="./amazon_PNG25.png" alt="amazon logo" /> </NavLink>
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
            <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon id='icon'/>
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avatar"  />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
