const express = require('express');
const router = require('./routes/testRoute');
// const colors = require('colors')
// const morgan = require('morgan');
// const dotenv = require('dotenv')


const app = express();
app.use('/api/v1',router)
// dotenv.config();
// app.use(express.json())
// app.use(morgan('dev'))

// app.get('/', (req, res) => {
//   res.send('GET working');
// });

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('POST working');
// });

// app.post('/register', (req, res) => {
//   console.log(req.body.name);
// //   console.log(req.body.password);
//   res.send('REGISTER working');
// });

const PORT = process.env.PORT||8000;
app.listen(8000, () => {
  console.log('Server is running at 8000');
});
