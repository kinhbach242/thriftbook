import React, { useEffect, useState } from "react";
import Item from "../item/Item";
function ListItem() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  });
  const showList = () => {
    let html = (
      <div className="page-products-items">
        {items.map((book) => {
          return <Item key={book.id} book={book} />;
        })}
      </div>
    );
    return html;
  };
  return showList();
}

export default ListItem;
