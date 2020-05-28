
//Dependencies
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const itemsController = require('./controllers/items.js')

//Port
const PORT = process.env.PORT || 3000;

//Database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
//Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });

//EandSmessages
db.on('error', (err) => console.log(err.message + 'no Mongod'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open' , ()=>{});

//Middleware
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Controllers 
app.use('/items', itemsController);


// Routes
app.get('/' , (req, res) => {
  // res.send('Hello World!');
  res.render('Home')
});

//Event Listener

app.listen(PORT, () => console.log( 'Listening on port:', PORT));