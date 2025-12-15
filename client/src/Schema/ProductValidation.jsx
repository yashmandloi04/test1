import * as YUP from 'yup'

let AddProductValidation = YUP.object({
  name: YUP.string().required("Name of product is required"),
  description:  YUP.string().required("Description of product is required"),
  quantity:  YUP.number().required("Quantity of product is required"),
  price:  YUP.number().required("Price of product is required"),
<<<<<<< HEAD
  image:  YUP.mixed().required("Image of product is required")
=======
  image:  YUP.string().required("Image of product is required")
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
})

export default AddProductValidation