import React, { useState, useContext } from "react";
import NumberFormat from "react-number-format";
import CartContext from "../../context/cart/CartContext";
import { Link } from "react-router-dom";
const Item = ({ book }) => {
  const { addToCart } = useContext(CartContext);
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  const changeBackground = () => {
    if (like) return { backgroundColor: "#4292FF", color: "#fff" };
  };
  return (
    <div className="page-products-items-item">
      <img src={book.img} alt="" />
      <div className="page-products-items-item-info">
        <div className="nameBook">
          <Link className="nameBook" to={`/sanpham/${book.id}`}>
            {book.name}
          </Link>
        </div>

        <p className="author">{book.author}</p>
        <div className="price">
          <span className="newPrice">
            <NumberFormat
              value={book.newPrice}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"đ"} // <--- Don't forget this!
            />
          </span>
          <span className="oldPrice">
            <NumberFormat
              value={book.oldPrice}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"đ"} // <--- Don't forget this!
            />
          </span>
        </div>
        <div className="action">
          <button
            className="btn-like"
            style={changeBackground()}
            onClick={handleLike}
          >
            <i className="fal fa-thumbs-up"></i>
          </button>
          <button className="btn-add" onClick={() => addToCart(book)}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
