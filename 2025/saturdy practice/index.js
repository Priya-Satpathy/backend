const express = require('express');
const router = require('./routers/testRouter');
const app = express();
// const colors = require('colors');
// const morgan = require('morgan');
// const dotenv = require('dotenv');

// dotenv.config();

// const desktops = [
//   {
//     id: 1,
//     brand: "HP",
//     name: "Pavilion 24 All-in-One",
//     price: 52999,
//     specs: ["Intel i5 11th Gen", "8GB RAM", "512GB SSD"],
//     color: "Black",
//     category: "All-in-One",
//     inStock: true
//   },
//   {
//     id: 2,
//     brand: "Dell",
//     name: "Inspiron Tower 3910",
//     price: 47999,
//     specs: ["Intel i3 12th Gen", "8GB RAM", "1TB HDD"],
//     color: "Grey",
//     category: "Tower PC",
//     inStock: false
//   },
//   {
//     id: 3,
//     brand: "Lenovo",
//     name: "ThinkCentre M70t",
//     price: 68999,
//     specs: ["Intel i7 10th Gen", "16GB RAM", "512GB SSD"],
//     color: "Black",
//     category: "Business",
//     inStock: true
//   },
//   {
//     id: 4,
//     brand: "Acer",
//     name: "Aspire TC-1760",
//     price: 55999,
//     specs: ["Intel i5 12th Gen", "8GB RAM", "512GB SSD"],
//     color: "Black",
//     category: "Home",
//     inStock: true
//   },
//   {
//     id: 5,
//     brand: "Asus",
//     name: "ROG Strix G15",
//     price: 129999,
//     specs: ["Ryzen 7", "16GB RAM", "1TB SSD", "RTX 3060"],
//     color: "Black/Red",
//     category: "Gaming",
//     inStock: true
//   },
//   {
//     id: 6,
//     brand: "Apple",
//     name: "iMac 24-inch",
//     price: 119999,
//     specs: ["Apple M1", "8GB RAM", "256GB SSD"],
//     color: "Blue",
//     category: "All-in-One",
//     inStock: false
//   },
//   {
//     id: 7,
//     brand: "MSI",
//     name: "Aegis SE Desktop",
//     price: 99999,
//     specs: ["Intel i5", "16GB RAM", "512GB SSD", "GTX 1660 Super"],
//     color: "Black",
//     category: "Gaming",
//     inStock: true
//   },
//   {
//     id: 8,
//     brand: "HP",
//     name: "EliteDesk 800 G6",
//     price: 74999,
//     specs: ["Intel i5 10th Gen", "8GB RAM", "512GB SSD"],
//     color: "Silver",
//     category: "Business",
//     inStock: true
//   },
//   {
//     id: 9,
//     brand: "Dell",
//     name: "OptiPlex 7090 Ultra",
//     price: 85999,
//     specs: ["Intel i7 11th Gen", "16GB RAM", "512GB SSD"],
//     color: "Black",
//     category: "Ultracompact",
//     inStock: false
//   },
//   {
//     id: 10,
//     brand: "Acer",
//     name: "Predator Orion 3000",
//     price: 159999,
//     specs: ["Intel i7", "16GB RAM", "1TB SSD", "RTX 3070"],
//     color: "Black/Blue",
//     category: "Gaming",
//     inStock: true
//   }
// ];


// app.get('/product',(req,res)=>{
//     res.send(desktops);
// })
// app.get("/product/:id",(req,res)=>{
//     const proId = req.params.id;
//     // res.send(proId);

//     // res.send(desktops[0]);
//     // res.send(desktops[0].inStock);
//     const result = desktops.find((desktop)=>{
//         return desktop.id  == proId;
//     })
//     res.send(result);
// })

// app.use(express.json());
// app.use(morgan('dev'));

app.use('/api/v1',router);

// app.get('/register',(req,res)=>{
//     // console.log(req.query);
//     res.send("Register page");
// })
// app.post('/signup',(req,res)=>{
//     // console.log(req.body.userName);
//     res.send("Signup page");
// })

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is started at port ${PORT}`);
})
