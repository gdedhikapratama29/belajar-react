import React from 'react'
import ProductCart from '../components/ProductCart';

const ProductList = ({products, onDeleteProduct, onEditProduct}) => {
  

  return (
    <div>
      <div className='cards'>
            {products.map((product) => {
                return (
                    <ProductCart
                        key={product.id}
                        product={product}
                        onDeleteProduct = {onDeleteProduct}
                        onEditProduct = {onEditProduct}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default ProductList;
