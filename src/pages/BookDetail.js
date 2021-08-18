import React, { useState, useEffect, useContext } from "react";
import NumberFormat from "react-number-format";
import CartContext from "../context/cart/CartContext";
const BookDetail = ({ match }) => {
  const { addToCart } = useContext(CartContext);
  const [book, setBook] = useState({});
  useEffect(() => {
    const getBookDetail = async () => {
      const res = await fetch(`http://localhost:3000/books/${match.params.id}`);
      const data = await res.json();
      setBook(data);
    };
    getBookDetail();
  }, [match.params.id]);
  return (
    <>
      <div className="container2 detailPage">
        <div className="detailPage-top">
          <div className="detailPage-top-img">
            <img src={book.img} alt="" />
          </div>
          <div className="detailPage-top-detail">
            <span className="nameBookDT">{book.name}</span>
            <br />
            <span className="author">{book.author}</span>
            <br />
            <span className="newPrice">
              <NumberFormat
                value={book.newPrice}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"đ"} // <--- Don't forget this!
              />
            </span>
            <br />
            <span className="title">
              Tiết kiệm: <span className="colorOrange">13,500đ</span>
            </span>
            <br />
            <span className="title">
              Giá thị trường:{" "}
              <NumberFormat
                value={book.oldPrice}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"đ"} // <--- Don't forget this!
              />
            </span>
            <br />
            <span className="title">
              Tình trạng: <span className="colorOrange">Còn hàng</span>
            </span>{" "}
            <br />
            <button className="add-to-cart" onClick={() => addToCart(book)}>
              Thêm vào giỏ hàng
            </button>
            <p>
              Gọi đặt hàng <span className="colorOrange">(028) 3820 7153</span>{" "}
              hoặc <span className="colorOrange">0933 109 009</span>
            </p>
            <p className="ttkm">Thông tin khuyến mãi</p>
            <span>Đổi trả hàng trong vòng 7 ngày</span>
            <br />
            <span>
              Sử dụng mỗi <span className="colorOrange">3.000BBxu</span> để được
              giảm 10,000đ.
            </span>
          </div>
        </div>
        <div className="detailPage-bottom">
          <p className="title">Mô tả</p>
          <p className="desc">{book.desc}</p>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
