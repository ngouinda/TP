 class GetCartTotal {
    constructor(storage) {
        this.storage = storage;
    }

    execute() {
        return this.storage.getTotalPrice();
    }
}

module.exports = {GetCartTotal};