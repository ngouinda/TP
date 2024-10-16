 class LocalStorage {
    constructor() {
        this.storageKey = 'cart';
    }

    addProduct(product) {
        const products = this.getProducts();
        products.push(product);
        localStorage.setItem(this.storageKey, JSON.stringify(products));
    }

    getProducts() {
        const storedProducts = localStorage.getItem(this.storageKey);
        return storedProducts ? JSON.parse(storedProducts) : [];
    }

    getTotalPrice() {
        return this.getProducts().reduce((total, product) => total + product.price, 0);
    }
}

module.exports = {LocalStorage};