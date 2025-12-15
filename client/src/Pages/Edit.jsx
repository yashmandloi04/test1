import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
<<<<<<< HEAD
import { API_PATH, API_URL } from '../Helpers/Path';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import EditValidation from '../Schema/EditValidation';
=======
import { API_URL } from '../Helpers/Path';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import AddProductValidation from '../Schema/ProductValidation';
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd

const Edit = () => {
  useEffect(() => {
    fetchProduct();
  }, []);
  const params = useParams();
  let [proDetail, setProDetail] = useState({});
  let imgField = useRef("");
  const fetchProduct = async () => {
    let response = await axios.get(`${API_URL}/product/${params.id}`);
<<<<<<< HEAD
    setProDetail(response.data[0]);
  }
  const EditProductFrm = useFormik({
    validationSchema: EditValidation,
    initialValues: {
      name: proDetail.name || "",
      description: proDetail.description || "",
      price: proDetail.price || "",
      quantity: proDetail.quantity || "",
      image: proDetail.image || null,
    },
    onSubmit: async (frmData) => {
      let image = imgField.current.files[0];
      let form = new FormData();
      if(image){
        form.append('image', image);
      }else{
        form.append('image', proDetail.image);
      }
=======
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
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
      form.append('name', frmData.name);
      form.append('description', frmData.description);
      form.append('quantity', frmData.quantity);
      form.append('price', frmData.price);
      let response = await axios.put(`${API_URL}/product/${params.id}`, form);
<<<<<<< HEAD
=======
      console.log(response.data);
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
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
<<<<<<< HEAD
          <div><img src={`${API_PATH}/${proDetail.image}`} alt="" style={{width: '50px'}} /></div>
          <input type='file' name='image' ref={imgField}
           onChange={(event)=>{
            EditProductFrm.setFieldValue("image", event.target.files[0]);
           }}
           onBlur={()=>{EditProductFrm.setFieldTouched("image", true)}} />
=======
          <input type='file' name='image' ref={imgField}
           onChange={EditProductFrm.handleChange} />
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
           {EditProductFrm.errors.image && EditProductFrm.touched.image && <small className='err1'>{EditProductFrm.errors.image}</small>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Edit