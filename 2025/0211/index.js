const express = require('express');
const app = express();

const shoes = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Max 270",
    price: 12999,
    size: [7, 8, 9, 10, 11],
    color: "Black/White",
    category: "Sports",
    inStock: true
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Ultraboost 22",
    price: 14999,
    size: [6, 7, 8, 9],
    color: "Grey",
    category: "Running",
    inStock: false
  },
  {
    id: 3,
    brand: "Puma",
    name: "RS-X",
    price: 8999,
    size: [8, 9, 10],
    color: "White/Blue",
    category: "Casual",
    inStock: true
  },
  {
    id: 4, 
    brand: "Reebok",
    name: "Flexagon Energy",
    price: 5999,
    size: [7, 8, 9, 10],
    color: "Black",
    category: "Training",
    inStock: true
  },
  {
    id: 5,
    brand: "Woodland",
    name: "Outdoor Leather Boots",
    price: 7499,
    size: [8, 9, 10, 11],
    color: "Brown",
    category: "Boots",
    inStock: true
  }
];

app.get('/product',(req,res)=>{
    res.send(shoes);
})

app.get('/product/:id',(req,res)=>{
    const proId = req.params.id;
    // res.send(proId);

    // res.send(shoes[3]);
    //   res.send(shoes[3].id);
    //   res.send(shoes[3].brand);

    const result = shoes.find((shoe)=>{
        return shoe.id  == proId;
    })

    res.send(result);
    
})





const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
