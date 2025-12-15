import * as YUP from 'yup';

let EditValidation = YUP.object({
  name: YUP.string().required("Name of product is required"),
  description:  YUP.string().required("Description of product is required"),
  quantity:  YUP.number().required("Quantity of product is required"),
  price:  YUP.number().required("Price of product is required"),
  image:  YUP.mixed()
})

export default EditValidation