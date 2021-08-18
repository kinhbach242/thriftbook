import React from 'react';
import ListItem from '../components/listItem/listItem';
import { arrBooks } from '../data/data';
const Products = ()=> {
    return (
        <div className="page-products container">
            <div className="page-products-titlePage">
                Tất cả sách
            </div>
            <ListItem listBook={arrBooks}/>
        </div>
    );
}

export default Products;