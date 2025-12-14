import React, { useRef } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../Helpers/Path'
import AddProductValidation from '../Schema/ProductValidation'
const Add = () => {
  let imgField = useRef("");
  const AddProductForm = useFormik({
    validationSchema: AddProductValidation,
    initialValues: {
      name: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
    },
    onSubmit: async (frmData) => {
      let image = imgField.current.files[0];
      let form = new FormData();
      form.append('image', image);
      form.append('name', frmData.name);
      form.append('description', frmData.description);
      form.append('quantity', frmData.quantity);
      form.append('price', frmData.price);
      console.log(form)
      let response = await axios.post(`${API_URL}/product`, form);
      console.log(response)
    }
  })
  return (
    <>
      <form className="form" onSubmit={AddProductForm.handleSubmit}>
        <h2>Add Form</h2>

        <div>
          <label >Name</label>
          <input onChange={AddProductForm.handleChange} name='name'
            type='text' placeholder='Enter name' />
          {AddProductForm.errors.name && AddProductForm.touched.name && <small className='err1'>{AddProductForm.errors.name}</small>}
        </div>

        <div>
          <label >Description</label>
          <textarea onChange={AddProductForm.handleChange} name='description'
            placeholder='Enter Bio' ></textarea>
          {AddProductForm.errors.description && AddProductForm.touched.description && <small className='err1'>{AddProductForm.errors.description}</small>}
        </div>

        <div>
          <label >Quantity</label>
          <input onChange={AddProductForm.handleChange} name='quantity'
            type='number' placeholder='Enter quantity' />
          {AddProductForm.errors.quantity && AddProductForm.touched.quantity && <small className='err1'>{AddProductForm.errors.quantity}</small>}
        </div>

        <div>
          <label >price</label>
          <input onChange={AddProductForm.handleChange} name='price'
            type='number' placeholder='Enter price' />
          {AddProductForm.errors.price && AddProductForm.touched.price && <small className='err1'>{AddProductForm.errors.price}</small>}
        </div>


        <div>
          <label>Image</label>
          <input onChange={AddProductForm.handleChange} name='image' ref={imgField}
            type='file' />
          {AddProductForm.errors.image && AddProductForm.touched.image && <small className='err1'>{AddProductForm.errors.image}</small>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Add