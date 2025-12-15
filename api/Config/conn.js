require('mongoose')
.connect("mongodb+srv://mandloiyash04official1:tJmfvhLxdv9Zjpuh@cluster0.cka3eel.mongodb.net")
.then(()=>{
  console.log("DB Connected");
})
.catch(()=>{
  console.log("DB Not Connected")
})