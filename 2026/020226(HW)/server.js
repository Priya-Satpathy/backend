const express = require('express');

const app = express();

const students = [
  {
    rollno: 1,
    id: 101,
    name: "Amit Kumar",
    age: 20,
    course: "Computer Science"
  },
  {
    rollno: 2,
    id: 102,
    name: "Priya Sharma",
    age: 21,
    course: "Information Technology"
  },
  {
    rollno: 3,
    id: 103,
    name: "Rahul Das",
    age: 19,
    course: "Electronics"
  },
  {
    rollno: 4,
    id: 104,
    name: "Sneha Patra",
    age: 22,
    course: "Mechanical"
  },
  {
    rollno: 5,
    id: 105,
    name: "Rohit Singh",
    age: 20,
    course: "Civil"
  },
  {
    rollno: 6,
    id: 106,
    name: "Anjali Mishra",
    age: 21,
    course: "Electrical"
  }
];


app.get('/students',(req,res)=>{
   
    res.send(students);
})
// app.get('/students/:id',(req,res)=>{
//     //serach as id and roll
//     console.log(req.params);
// //      const stuId = req.params.id;
// //        const stId = req.params.rollno;
// //     res.send(stuId);
// //    
// //     res.send(stId.stId);
//         // res.send(students[3].id);
//         // res.send(students[3].name);
//         res.send(students[3].rollno)
// //
//  })
 app.get('/students/:name',(req,res)=>{
     console.log(req.params.name);
        res.send(students.name)
 })
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})