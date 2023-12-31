const express = require('express');
const app = express();
const http = require('http');
require('./connection')
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);

server.listen(3000, () => {
  console.log('Server running at port 3000');
});


//const express = require('express');
//const app = express();
//const http = require('http');
//require('dotenv').config();
//const stripe = require('stripe')(process.env.STRIPE_SECRET);
//require('./connection')
//const cors = require('cors');
//const server = http.createServer(app);
//const {Server} = require('socket.io');

//const io = new Server(server, {
//  cors: '*',
//  methods: '*'
//})

//const User = require('./models/User');
//const userRoutes = require('./routes/userRoutes');
//const productRoutes = require('./routes/productRoutes');
//const orderRoutes = require('./routes/orderRoutes');
//const imageRoutes = require('./routes/imageRoutes');

//app.use(cors());
//app.use(express.urlencoded({extended: true}));
//app.use(express.json());
//app.use('/users',userRoutes);
//app.use('/orders', orderRoutes);
//app.use('/products', productRoutes);

//app.use('/images', imageRoutes);


//app.post('/create-payment', async(req, res)=> {
//  const {amount} = req.body;
//  console.log(amount);
//  try {
//    const paymentIntent = await stripe.paymentIntents.create({
//      amount,
//      currency: 'usd',
//      payment_method_types: ['card']
//    });
//    res.status(200).json(paymentIntent)
//  } catch (e) {
//    console.log(e.message);
//    res.status(400).json(e.message);
//   }
//})



//server.listen(8080, ()=> {
//    console.log('server running at port', 8080)
//  })
////  server.listen(3006, () => {
////    console.log('Server running at port', 3006);
////});