//import { Product } from "../Entities/Product";
const { Product } = require('../Entities/Product');

class InMemoryStorage {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

module.exports = { InMemoryStorage };
