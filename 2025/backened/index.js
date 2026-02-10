const express = require('express');

const app = express();

const mobiles = [
  {
    id: 101,
    brand: "Apple",
    model: "iPhone 15",
    price: 79999,
    storage: "128GB",
    color: "Black",
    inStock: true
  },
  {
    id: 102,
    brand: "Samsung",
    model: "Galaxy S23",
    price: 74999,
    storage: "256GB",
    color: "Cream",
    inStock: true
  },
  {
    id: 103,
    brand: "OnePlus",
    model: "OnePlus 11",
    price: 56999,
    storage: "128GB",
    color: "Green",
    inStock: false
  },
  {
    id:104,
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    price: 23999,
    storage: "256GB",
    color: "Blue",
    inStock: true
  },
  {
    id: 105,
    brand: "Realme",
    model: "Realme GT 5",
    price: 29999,
    storage: "512GB",
    color: "Silver",
    inStock: true
  }
];

app.get('/product',(req,res)=>{
    res.send(mobiles);
})
app.get("/product/:productId",(req,res)=>{
   const prodId = req.params.productId;
//    res.send(proId);
//    res.send(mobiles[0]);
//    res.send(mobiles[0].id);
//    res.send(mobiles[0].brand);
    const result = mobiles.find((mob)=> { 
        return mob.id == prodId
    });
    res.send(result);
})





const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})