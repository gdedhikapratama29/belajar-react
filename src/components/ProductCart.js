import React from "react";
import { useState } from "react";

const ProductCart = (props) => {
    const [jumlahProduct, setJumlahProduct] = useState(0);
    const kurangProduct = () => {
        setJumlahProduct(jumlahProduct - 1);
    }

    const tambahProduct = () => {
        setJumlahProduct(jumlahProduct + 1);
    }
    return (
        <div className="card">
                <img className="image" src={props.imageURL} />
                <div className="container">
                    <h4><b>{props.nama}</b></h4> 
                    <p>{props.deskripsi}</p> 
                    <p>{props.harga}</p>
                </div>
            <div className={`card-keranjang ${jumlahProduct > 0 ? 'jumlah-product' : 'show-keranjang'}`}>
               {jumlahProduct > 0 ? <>
                <button className="button" onClick={kurangProduct}>-</button>
                {jumlahProduct}
                <button className="button" onClick={tambahProduct}>+</button>
               </>: <div className="keranjang" onClick={tambahProduct}>+ keranjang</div>}
            </div>
        </div>
        
    );
};

export default ProductCart;