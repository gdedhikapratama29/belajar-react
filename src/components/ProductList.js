import React from 'react'
import ProductCart from '../components/ProductCart';

const ProductList = ({products}) => {
  

  return (
    <div>
      <div className='cards'>
            {products.map((product) => {
                return (
                    <ProductCart
                        key={product.id}
                        nama={product.nama}
                        deskripsi={product.deskripsi}
                        harga={product.harga}
                        imageURL={product.imageURL}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default ProductList;
