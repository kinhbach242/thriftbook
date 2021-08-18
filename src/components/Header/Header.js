import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
const Header = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  const [catalogs, setCatalogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/catalog")
      .then((res) => res.json())
      .then((data) => {
        setCatalogs(data);
      });
  }, []);
  return (
    <div>
      <div className="container header">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo/tblogo-green.svg" alt="" className="" />{" "}
          </Link>
        </div>
        <div className="header-boxSearch">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, tác giả hay loại"
          />
        </div>
        <button className="btn_search">
          <i className="fas fa-search"></i>
        </button>
        <div className="header-login">
          <Link to="/login/">Đăng nhập</Link>
        </div>
        <div className="header-line"></div>
        <div className="header-right">
          <i
            className="fad fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          ></i>
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
      <div className=" header-menu container">
        <div className="header-menu-dropdown">
          <Link className="title" to="/sanpham/">
            Tất cả
          </Link>
          {catalogs.map((cat) => (
            <Link className="title" key={cat.id} to={`/theloai/${cat.id}`}>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
