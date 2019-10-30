class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    reduceQuantity(deductBy) {
        console.log("Changing quantity for " + this.product.name + " by " + deductBy);

        // TODO: check if quantity is sufficient to deduct

        this.quantity = this.quantity - deductBy;
        console.log("Changed quantity for " + this.product.name + " to " + this.quantity);
    }

    getQuantity() {
        return this.quantity;
    }

    increaseQuantity(increaseBy) {
        // TODO: Fill in logic here
    }
}