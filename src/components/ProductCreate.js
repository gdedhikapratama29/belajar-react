import React from 'react'

const ProductCreate = () => {
  return (
    <div className='product-create'>
        <form className='form'>
            <div className='form-add-title'>Add Product</div>
            <div className='form-group'>
                <input type='text' className='add-input-text'  name='nama'  />
            </div>
            <div className='form-group'>
                <input type='text'  className='add-input-text'  name='deskripsi' />
            </div>
            <div className='form-group'>
                <input type='text' className='add-input-text'  name='imageURL' />
            </div>
        </form>
    </div>
  )
}

export default ProductCreate
