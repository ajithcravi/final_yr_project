const express = require('express'); // Importing package
const path = require('path');
require('dotenv').config() // Requiring environment file

const app = express(); // Initializing express
const port = process.env.FRONTEND_PORT || 3000; // Getting port

app.use(express.static("public"));

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/home.html')));
app.get('/about-us', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/about-us.html')));
app.get('/all-items', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/all-items.html')));
app.get('/cold-drinks', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/cold-drinks.html')));
app.get('/hot-drinks', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/hot-drinks.html')));
app.get('/quick-bites', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/quick-bites.html')));
app.get('/cart', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/cart.html')));
app.get('/sign-in', (req, res) => res.sendFile(path.join(__dirname, './public/foodapp_frontend/sign-in.html')));

// Starting express server
app.listen(port, () => console.log(`I am up and running in port ${port}`));
