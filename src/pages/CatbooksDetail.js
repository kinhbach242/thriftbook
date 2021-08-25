import React, { useEffect, useState } from "react";
import Item from "../components/item/Item";
const CatbooksDetail = ({ match }) => {
  const [cat, setCat] = useState({});
  const [listBooks, setListBooks] = useState([]);
  const url = "http://localhost:3000/";
  const { id } = match.params;
  useEffect(() => {
    const getListBook = async () => {
      try {
        const res = await fetch(`${url}books`);
        const data = await res.json();
        let result = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].idCat === parseInt(id)) {
            result.push(data[i]);
          }
        }
        setListBooks(result);
      } catch (error) {
        console.log(error);
      }
    };
    getListBook();
    const getCat = async () => {
      try {
        const res = await fetch(`${url}catalog/${id}`);
        const data = await res.json();
        setCat(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCat();
  }, [id]);
  if (!listBooks.length) {
    return (
      <div className="page-products container">
        <div className="page-products-titlePage">Thể loại: {cat.name}</div>
        <div className="none">
          <h3>Không có kết quả</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="page-products container">
      <div className="page-products-titlePage">Thể loại: {cat.name}</div>
      <div className="page-products-items">
        {listBooks.map((book, key) => {
          return <Item book={book} key={key} />;
        })}
      </div>
    </div>
  );
};

export default CatbooksDetail;
