const router = require('express').Router();
const Product = require("../Models/ProductModel");
const random = require('random-string-generator')
const path = require('path');

router.get('/', async(req, res)=>{
  try {
    let data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async(req, res)=>{
  try {
    let data = await Product.find({_id: req.params.id});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async(req, res)=>{
  try {
    // console.log(req.body);
    let image = req.files.image;
    let temp = image.name.split('.');
    let newName = random('alphanumeric')+'.'+temp[(temp.length - 1)];
    let imgPath = path.resolve()+'/assets/product-images/'+newName;
    req.body.image = newName;
    await image.mv(imgPath, (err)=>{
      if(err){
        console.log(err);
      }
    })
    let data = await Product.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async(req, res)=>{
  try {
    let image = req.files.image;
    let temp = image.name.split('.');
    let newName = random('alphanumeric')+'.'+temp[(temp.length - 1)];
    let imgPath = path.resolve()+'/assets/product-images/'+newName;
    req.body.image = newName;
    image.mv(imgPath, (err)=>{
      if(err){
        console.log(err);
      }
    })
    let data = await Product.findByIdAndUpdate({_id: req.params.id}, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async(req, res)=>{
  try {
    let data = await Product.deleteMany({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;