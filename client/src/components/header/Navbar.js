import React, { useContext } from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account.carts.length);
  // const cart = account.carts.length;

  // const cart = 2

  return (
    <header>
      <nav>
        <div className="left">
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
            {
              account ? (
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
          {
            account ? (
                 <Avatar className="avtar2" >{account.fname[0].toUpperCase()}</Avatar>
            ) : ( <Avatar className="avatar" ></Avatar>)
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
