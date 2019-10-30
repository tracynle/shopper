class Cart {
    /* this.items

    {
        "apple": CartItem --> "apple" product, quantity,
        "18-large-eggs": CartItem --> "18-large-eggs" product, quantity
    }
    */
    constructor() {
        this.items = {};
    }

    addCartItem(product, quantity) {
        this.items[product.name] = new CartItem(product, quantity);
    }

    removeCartItem(product) {
        delete this.items[product.name];
    }

    reduceQuantity(product, deductBy) {
        const cartItem = this.items[product.name];

        if (cartItem) {
            cartItem.reduceQuantity(deductBy);

            // If quantity is 0 after deducting, then just remove from cart.
            if (cartItem.getQuantity() === 0) {
                this.removeCartItem(product);
            }
        }
    }

    // TODO: write function to increase quantity of a cart item
    
    emptyCart() {
        this.items = {};
    }
}


// create a new instance of a Cart
let tracyCart = new Cart();
tracyCart.addCartItem(meat, 1);