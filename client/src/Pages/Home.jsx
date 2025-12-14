import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_PATH, API_URL } from '../Helpers/Path';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, [])
  const navigate = useNavigate();
  const fetchProducts = async () => {
    let response = await axios.get(`${API_URL}/product`);
    console.log(response.data)
    setProduct(response.data);
  }
  const deleteProduct = async(proId)=>{
    let response = await axios.get(`${API_URL}/product/${proId}`);
    let text = "Are you sure, want to delete "+response.data[0].name;
    if(confirm(text) == true){
      let response = await axios.delete(`${API_URL}/product/${proId}`);
      if(response.status != 200){
        alert("Product not deleted");
      }
    }
  }
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            product 
            ?
            product.map((item, index) => 
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><img style={{width: "50px"}} src={`${API_PATH}/${item.image}`} /></td>
                <td><a onClick={()=>{
                  navigate(`/edit/${item._id}`)
                  }} className='edit-btn'>Edit</a></td>
                <td><a onClick={()=>deleteProduct(item._id)} className='delete-btn'>Delete</a></td>
              </tr>
            )
            :
            <div>No Product element</div>
          }
        </tbody>

      </table>
    </>
  )
}

export default Home