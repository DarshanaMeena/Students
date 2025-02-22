import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Getdata from './component/Getdata'
import Filter from './component/Filter'
import Product from './component/Product'

function App() {
  const[product, setProduct] = useState([]);
  const[productcategory,setProductcategory] = useState([]);

  async function fetchdata(url) {
    const products =await Getdata(url);
    setProduct(products);
    const categories = await Getdata('https://fakestoreapi.com/products/categories');
    setProductcategory(categories);
  }
  console.log("hy");
  useEffect(() => {
    fetchdata('https://fakestoreapi.com/products');
  },[]);
  
  return (
    <>
      <div className='flex'>
      <Filter updatefunction={setProduct} updatecategorys = {productcategory}/>
      <Product products={product}/>
      </div>
        
     
    </>
  )
}

export default App
