import React from "react";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";


const ProductCart = ({product, onDeleteProduct, onEditProduct}) => {

    const {id, imageURL, nama, deskripsi, harga} = product

    const [jumlahProduct, setJumlahProduct] = useState(0);
    const [showEdit, setShowEdit] = useState(false);
    const kurangProduct = () => {
        setJumlahProduct(jumlahProduct - 1);
    }

    const tambahProduct = () => {
        setJumlahProduct(jumlahProduct + 1);
    }

    const handleDelete = () => {
        onDeleteProduct(id);
    }

    const handleSubmit = (id, data) => {
        setShowEdit(false);
        onEditProduct(id, data);
    }

    const handleShow = () => {
        setShowEdit(!showEdit);
    }

    const cancelEdit = () => {
        setShowEdit(false);
    }
    return (
        <div className="card">
        {showEdit ? <ProductEdit product={product} onEditProduct={handleSubmit} cancelEdit={cancelEdit} /> : (
            <>
            <div className="edit-delete">
            <MdOutlineDeleteOutline onClick={handleDelete} className="icon-delete"/>
            <AiFillEdit className="icon-edit" onClick={handleShow}/>
        </div>
                <img className="image" src={imageURL} />
                <div className="container">
                    <h4><b>{nama}</b></h4> 
                    <p>{deskripsi}</p> 
                    <p>{harga}</p>
                </div>
            <div className={`card-keranjang ${jumlahProduct > 0 ? 'jumlah-product' : 'show-keranjang'}`}>
               {jumlahProduct > 0 ? <>
                <button className="button" onClick={kurangProduct}>-</button>
                {jumlahProduct}
                <button className="button" onClick={tambahProduct}>+</button>
               </>: <div className="keranjang" onClick={tambahProduct}>+ keranjang</div>}
            </div>
            </>
        )}
       
        </div>
        
    );
};

export default ProductCart;