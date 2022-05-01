import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account.carts.length);
  // const cart = account.carts.length;
  const history = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const [dropen, setDropen] = useState(false);
  const [text, setText] = useState("");

  console.log(text)
  const [liopen, setLiopen] = useState(true);
  const {products} = useSelector(state=>state.getproductsdata);

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

  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status !== 201) {
      console.log("first login");
    } else {
      console.log("cart add ho gya hain");
      setAccount(false);
      // alert('log out ho gya hai')
      toast.success("Logout Successfully done 😃!", {
        position: "top-center",
      });
      history("/");
    }
  };

  // for drawer

  const handelopen = () => {
    setDropen(true);
  };

  const handleClosedr = () => {
    setDropen(false);
  };

  //get the value of input
  const getText = (text) => {
    setText(text);
    setLiopen(false);
  };

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
            <input type="text" placeholder="Search" onChange={(e)=>getText(e.target.value)} />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
            {/* search filter */}
            {
              text  && <List className="extrasearch" hidden={liopen}>
              {
                products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                  <ListItem key={product.id}>
                    <NavLink to={`getproductsone/${product.id}`}>{product.title.longTitle}</NavLink>
                  </ListItem>
                ))
              }

              </List>
            }
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
            <ToastContainer />

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
            {account ? (
              <MenuItem onClick={handleClose} onClick={logoutuser}>
                <LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />
                Logout
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
