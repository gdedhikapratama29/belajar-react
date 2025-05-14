import React, { useState } from 'react'

const ProductCreate = ({onCreateProduct}) => {

    const initialState = {
        nama: '',
        deskripsi: '',
        imageURL: '',
    }
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const {nama, deskripsi, imageURL} = formData;

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateProduct(formData);
        setFormData(initialState);
    }

    const handleShow = () => {
        setShowForm(!showForm);
    }
  return (
    <div className='product-create'>
    <div className='toggle-add'>
        <button onClick={handleShow} className='edit-input-submit add-toggle'>
            {showForm ? 'Close' : 'Add Product'}
        </button>
    </div>
       {showForm && (<form onSubmit={handleSubmit} className='form'>
            <div className='form-add-title'>Add Product</div>
            <div className='form-group'>
                <input type='text' className='add-input-text' placeholder='nama product'  name='nama' value={nama} onChange={handleChange}  />
            </div>
            <div className='form-group'>
                <input type='text'  className='add-input-text' placeholder='deskripsi product'  name='deskripsi' value={deskripsi} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <input type='text' className='add-input-text' placeholder='image product'  name='imageURL' value={imageURL} onChange={handleChange} />
            </div>
            <input type='submit' className='edit-input-submit' />
        </form>)
       }
    </div>
  )
}

export default ProductCreate
