class Product {
    constructor(name, category, sku, price) {
        this.name = name;
        this.category = category;
        this.sku = sku;
        this.price = price;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}
