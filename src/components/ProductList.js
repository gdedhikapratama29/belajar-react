import React from 'react'
import ProductCart from '../components/ProductCart';
import { Products } from '../data/Products';
import { useState } from 'react';

const ProductList = () => {
  

  return (
    <div>
      <div className='cards'>
            {Products.map((product) => {
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
