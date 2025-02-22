import React from 'react'

function Product(props) {
  return (
    <div>
       <div className='grid md:grid-cols-4 sm:grid-cols-1 w-[80%] gap-[60px]  p-3  m-auto'>
   {
    props.products.map( product => (

    
      <div className='w-56 border border-2 border-gray-300 rounded-sm text-start py-3  hover:text-black'>
        <img src={product.image} className='h-[200px]   rounded-2xl m-auto mt-3'  />
        <p className='opacity-60 text-xl ms-3'>{product.title}</p>
        <p className='font-bold text-3xl ms-3'>₹{product.price} </p>
        <p className='opacity-60 mb-4 ms-3'>Free delivery</p>
        <button className='rounded-3xl  bg-green-400 hover:bg-green-500 text-white font-bold text-xl ms-3 px-3 py-1 '>{product.rating.rate}*</button> <span>{product.rating.count}Reviews </span>
      </div>
      
      

    )
  )}


  </div>
    </div>
  )
}

export default Product
