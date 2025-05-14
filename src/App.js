import './App.css'
import ProductList from './components/ProductList';
import { useState } from 'react';
import { Products } from './data/Product';
import ProductCreate from './components/ProductCreate';


function App ()  {

    const [products, setProducts] = useState(Products);

    const onEditProduct = (id, data) => {
        const updatedProducts = products.map((prod) => {
            if (prod.id === id) {
                return {...prod, ...data};
            }  
            return prod    
        });
        setProducts(updatedProducts);
    };

    const onCreateProduct = (product) => {
        setProducts([...products, {...product, id: products.length + 1}]);
    }

    const onDeleteProduct = (id) => {
        const updatedProducts = products.filter((prod) => {
            return prod.id  != id
        })
        setProducts(updatedProducts);
    }
    return(
    <>
    <div className='app-title'>Product List kendaraan</div>
    <ProductCreate onCreateProduct={onCreateProduct} />
    <ProductList products={products} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct}/> 
    </>
    )
}

export default App;