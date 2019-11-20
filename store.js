// create a Store class that will keep track of its inventory


class Store {
    constructor() {
        this.inventory = {};
        this.productsByTags = {};
    }

    addToInventory(product, quantity) {
        this.inventory[product.name] = new InventoryItem(product, quantity);

        const tags = product.tags;
        
        // loop through the tags array and push into the productsByTags map
        for (let i = 0; i < tags.length; i ++) {
            const tag = tags[i];
            this.productsByTags[tag];
        };
    }

    getInventory() {
        return this.inventory;
    }

    findProduct(keyword) {
        //...
    }




}