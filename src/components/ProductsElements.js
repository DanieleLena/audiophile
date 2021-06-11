import React from 'react';
import {useProductsContext} from "../context/product_context";


const ProductsElements = ({category}) => {

    const {products} = useProductsContext();
    
    const productForCategory = products.filter(item=> item.category === category) ;

    return (
        <div>
      {
        productForCategory.map((item)=> {
            return <h2 key={item.id}>{item.name}</h2>
        })
          
      }
        </div>
    )
}

export default ProductsElements;
