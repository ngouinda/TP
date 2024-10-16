const { AddProductToCart } = require('../UseCases/AddProductToCart')
const { GetCartTotal } = require('../UseCases/GetCartTotal')
const { Product } = require('../Entities/Product')

class CartController {
    constructor(storage) {
        this.storage = storage;
    }

    addProduct(req, res) {
        const { name, price } = req.body;
        const product = new Product(name, price);
        const addProductUseCase = new AddProductToCart(this.storage);
        addProductUseCase.execute(product);
        res.status(200).send('Product added to cart');
    }

    getTotal(req, res) {
        const getTotalUseCase = new GetCartTotal(this.storage);
        const total = getTotalUseCase.execute();
        res.status(200).json({ total });
    }
}

module.exports = {CartController}