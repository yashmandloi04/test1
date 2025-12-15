const router = require('express').Router();
const Product = require("../Models/ProductModel");
const random = require('random-string-generator')
const path = require('path');

<<<<<<< HEAD
router.get('/', async (req, res) => {
=======
router.get('/', async(req, res)=>{
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
  try {
    let data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

<<<<<<< HEAD
router.get('/:id', async (req, res) => {
  try {
    let data = await Product.find({ _id: req.params.id });
=======
router.get('/:id', async(req, res)=>{
  try {
    let data = await Product.find({_id: req.params.id});
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

<<<<<<< HEAD
router.post('/', async (req, res) => {
=======
router.post('/', async(req, res)=>{
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
  try {
    // console.log(req.body);
    let image = req.files.image;
    let temp = image.name.split('.');
<<<<<<< HEAD
    let newName = random('alphanumeric') + '.' + temp[(temp.length - 1)];
    let imgPath = path.resolve() + '/assets/product-images/' + newName;
    req.body.image = newName;
    await image.mv(imgPath, (err) => {
      if (err) {
=======
    let newName = random('alphanumeric')+'.'+temp[(temp.length - 1)];
    let imgPath = path.resolve()+'/assets/product-images/'+newName;
    req.body.image = newName;
    await image.mv(imgPath, (err)=>{
      if(err){
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
        console.log(err);
      }
    })
    let data = await Product.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

<<<<<<< HEAD
router.put('/:id', async (req, res) => {
  try {
    if (req.files) {
      let image = req.files.image;
      let temp = image.name.split('.');
      let newName = random('alphanumeric') + '.' + temp[(temp.length - 1)];
      let imgPath = path.resolve() + '/assets/product-images/' + newName;
      req.body.image = newName;
      image.mv(imgPath, (err) => {
        if (err) {
          console.log(err);
        }
      })
    }
    let data = await Product.updateMany({ _id: req.params.id }, req.body);
=======
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
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

<<<<<<< HEAD
router.delete('/:id', async (req, res) => {
=======
router.delete('/:id', async(req, res)=>{
>>>>>>> e9bf1036112f1e058d0b4049045e15f6c331d5cd
  try {
    let data = await Product.deleteMany({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;