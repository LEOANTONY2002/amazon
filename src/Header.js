import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://www.clipartkey.com/mpngs/b/147-1478728_amazon-clipart.png"
          alt="AMAZON LOGO"
        />
      </Link>
      <div className="search">
        <input className="input" type="text" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="opt">
            <span className="line1">Hello {!user ? "Guest" : user.email}</span>
            <span className="line2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="opt">
            <span className="line1">Returns</span>
            <span className="line2">& Orders</span>
          </div>
        </Link>
        <div className="opt">
          <span className="line1">Your</span>
          <span className="line2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="basket">
            <ShoppingCartIcon />
            <span className="line2 count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
