 class AddProductToCart {
    constructor(storage) {
        this.storage = storage;
    }

    execute(product) {
        this.storage.addProduct(product);
    }
}

module.exports ={AddProductToCart};