import React from 'react'
import Getdata from './Getdata'
import $ from 'jquery'

function Filter(props) {
    async function filtered() {
        const data =await Getdata('https://fakestoreapi.com/products');
        let startprice = $('#startprice').val();
        let endprice = $('#endprice').val();
        let categorys = $('#category').val();
        const filterdata = data.filter((product) => {
            if(categorys != '') {
                return (parseInt(product.price) >= parseInt(startprice) && parseInt(product.price) <= parseInt(endprice)) && product.category == categorys
            } else {
                return (parseInt(product.price) >= parseInt(startprice) && parseInt(product.price) <= parseInt(endprice))
            }
        })
        props.updatefunction(filterdata);
    }
  return (
    <div>
      <div className='w-[20%] m-auto'>
      <div>
        <span>Category's</span>
        <select  id="category" onChange={filtered}>
        <option value=''>all</option>

        {
            props.updatecategorys.map((cat) => (
                <option value={cat}>{cat}</option>
            ))
        }
        </select>
   
   
    <div className=''>
        <span>From Price</span>
        <select  id="startprice" onChange={filtered}>
        <option value="0">$0</option>
          <option value="100">$100</option>
          <option value="200">$200</option>
          <option value="300">$300</option>
          <option value="400">$400</option>
          <option value="500">$500</option>
          <option value="600">$600</option>
        </select>
    </div>
    <div>
        <span>To Price:</span>
        <select  id="endprice" onChange={filtered}>
        <option value="99999">Any Price</option>
          <option value="100">$100</option>
          <option value="200">$200</option>
          <option value="300">$300</option>
          <option value="400">$400</option>
          <option value="500">$500</option>
          <option value="600">$600</option>
        </select>
    </div>
    </div>
    
      </div>
    </div>
  )
}

export default Filter
