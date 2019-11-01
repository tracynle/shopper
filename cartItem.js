class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    reduceQuantity(deductBy) {
        console.log("Changing quantity for " + this.product.name + " by " + deductBy);

        if (deductBy > this.quantity) { // guarantees quantity will not be negative
            this.quantity = 0;
        }
        else {
            this.quantity -= deductBy;
        }

        console.log("Changed quantity for " + this.product.name + " to " + this.quantity);
    }

    getQuantity() {
        return this.quantity;
    }

    increaseQuantity(increaseBy) {
        this.quantity += increaseBy;
        console.log("Quantity increased for: " + this.product.name + "to" + this.quantity);

    }
}
