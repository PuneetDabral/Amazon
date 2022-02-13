import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src="./amazon_PNG25.png" alt="amazon logo" />
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
            <a href="">signin</a>
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
