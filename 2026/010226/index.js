const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to home page");
});

app.get('/about', (req, res) => {
    res.send("Welcome to about page");
});

const mobiles = [
  {
    productId: 101,
    brand: "Apple",
    name: "iPhone 15",
    price: 79999,
    storage: ["128GB", "256GB", "512GB"],
    color: "Black",
    category: "Smartphone",
    inStock: true
  },
  {
    productId: 102,
    brand: "Samsung",
    name: "Galaxy S24",
    price: 74999,
    storage: ["128GB", "256GB"],
    color: "Grey",
    category: "Smartphone",
    inStock: true
  },
  {
    productId: 103,
    brand: "OnePlus",
    name: "OnePlus 12",
    price: 69999,
    storage: ["256GB", "512GB"],
    color: "Green",
    category: "Flagship",
    inStock: false
  },
  {
    productId: 104,
    brand: "Google",
    name: "Pixel 8",
    price: 59999,
    storage: ["128GB", "256GB"],
    color: "White",
    category: "Camera Phone",
    inStock: true
  },
  {
    productId: 105,
    brand: "Xiaomi",
    name: "Redmi Note 13",
    price: 19999,
    storage: ["128GB", "256GB"],
    color: "Blue",
    category: "Budget",
    inStock: true
  }
];

app.get("/productId", (req, res) => {
    res.send(mobiles);
});

app.get("/product/:productId", (req, res) => {
    const proId = parseInt(req.params.productId);

    const result = mobiles.find((mob) => {
        return mob.productId === proId;
    });

    res.send(result);
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
