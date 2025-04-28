import './App.css'
import ProductCart from './components/ProductCart'



function App() {
    return (
       <div className='cards'>
           <ProductCart nama="folda" deskripsi="Mobil toyota memiliki interior dan body yang kokoh" harga="Rp. 200.000.000" imageURL="https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"/>
           <ProductCart nama="mustang" deskripsi="Mobil toyota memiliki interior dan body yang kokoh" harga="Rp. 500.000.000" imageURL="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzE1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"/>
           <ProductCart nama="toyota" deskripsi="Mobil toyota memiliki interior dan body yang kokoh" harga="Rp. 700.000.000" imageURL="https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"/>
       </div>
    )
}

export default App;