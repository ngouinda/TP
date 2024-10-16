const express = require('express');
// const { InMemoryStorage } = require('../Repositories/InMemoryStorage');
const {InMemoryStorage} = require("../Back/src/Repositories/InMemoryStorage")
const { CartController } = require("../Back/src/Controllers/CartController");

const app = express();
app.use(express.json());

const storage = new InMemoryStorage(); 
const cartController = new CartController(storage);

app.post('/cart/products', (req, res) => cartController.addProduct(req, res));
app.get('/cart/total', (req, res) => cartController.getTotal(req, res));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
