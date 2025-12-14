import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { API_URL } from '../Helpers/Path';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import AddProductValidation from '../Schema/ProductValidation';

const Edit = () => {
  useEffect(() => {
    fetchProduct();
  }, []);
  const params = useParams();
  let [proDetail, setProDetail] = useState({});
  let imgField = useRef("");
  const fetchProduct = async () => {
    let response = await axios.get(`${API_URL}/product/${params.id}`);
    console.log(response.data[0]);
    setProDetail(response.data[0]);
  }
  const EditProductFrm = useFormik({
    validationSchema: AddProductValidation,
    initialValues: proDetail,
    onSubmit: async (frmData) => {
      let image = imgField.current.files[0];
        let form = new FormData();
      form.append('image', image);
      form.append('name', frmData.name);
      form.append('description', frmData.description);
      form.append('quantity', frmData.quantity);
      form.append('price', frmData.price);
      let response = await axios.put(`${API_URL}/product/${params.id}`, form);
      console.log(response.data);
    },
    enableReinitialize: true  
  })
  return (
    <>
      <form className="form" onSubmit={EditProductFrm.handleSubmit}>
        <h2>Edit Form</h2>

        <div>
          <label >Name</label>
          <input type='text' name='name'
          value={EditProductFrm.values.name} onChange={EditProductFrm.handleChange} placeholder='Enter name' />
          {EditProductFrm.errors.name && EditProductFrm.touched.name && <small className='err1'>{EditProductFrm.errors.name}</small>}
        </div>


        <div>
          <label >Description</label>
          <textarea placeholder='Enter Bio'
          value={EditProductFrm.values.description} onChange={EditProductFrm.handleChange} name='description' ></textarea>
          {EditProductFrm.errors.description && EditProductFrm.touched.description && <small className='err1'>{EditProductFrm.errors.description}</small>}
        </div>

        <div>
          <label >Quantity</label>
          <input type='number' name='quantity'
           value={EditProductFrm.values.quantity} onChange={EditProductFrm.handleChange} placeholder='Enter quantity' />
           {EditProductFrm.errors.quantity && EditProductFrm.touched.quantity && <small className='err1'>{EditProductFrm.errors.quantity}</small>}
        </div>

        <div>
          <label >price</label>
          <input type='number' name='price'
           value={EditProductFrm.values.price} onChange={EditProductFrm.handleChange} placeholder='Enter price' />
           {EditProductFrm.errors.price && EditProductFrm.touched.price && <small className='err1'>{EditProductFrm.errors.price}</small>}
        </div>

        <div>
          <label>Image</label>
          <input type='file' name='image' ref={imgField}
           onChange={EditProductFrm.handleChange} />
           {EditProductFrm.errors.image && EditProductFrm.touched.image && <small className='err1'>{EditProductFrm.errors.image}</small>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Edit