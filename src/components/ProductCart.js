import React from "react";

const ProductCart = (props) => {
    return (
        <div className="card">
                <img className="image" src={props.imageURL} />
                <div className="container">
                    <h4><b>{props.nama}</b></h4> 
                    <p>{props.deskripsi}</p> 
                    <p>{props.harga}</p>
                </div>
        </div>
        
    );
};

export default ProductCart;