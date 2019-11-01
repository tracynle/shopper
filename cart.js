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

    increaseQuantity(product, increaseBy) {
        const cartItem = this.items[product.name];

        if (cartItem) {
            cartItem.increaseQuantity(increaseBy);
        }
    }
    
    emptyCart() {
        this.items = {};
    }
}

/*
// This is an example of "delegation"; delegating some action to something that should perform the actual action
class Family {
    constructor() {
        this.dad = new Person();
        this.mom = new Person();
        this.son = new Person();
    }

    eatDinner() {
        this.dad.eatDinner();
        this.mom.eatDinner();
        this.son.eatDinner();
    }
}

family.eatDinner()
family.dad.eatDinner();
*/