class Product {
    constructor(name, category, sku, price, tags) {
        this.name = name;
        this.category = category;
        this.sku = sku;
        this.price = price;
        this.tags = tags;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}
