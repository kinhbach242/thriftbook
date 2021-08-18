import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import NumberFormat from "react-number-format";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Sản phẩm trong giỏ</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div style={{ fontWeight: "bold" }}>Tổng tiền</div>
            <div style={{ marginLeft: 5, fontWeight: "bold" }}>
              <NumberFormat
                value={cartItems.reduce(
                  (amount, item) => item.newPrice + amount,
                  0
                )}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"đ"} // <--- Don't forget this!
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
