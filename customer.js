// create a Customer class
// come up with some private properties that a customer has
//     examples: name, instance of Cart, orders
// create functions to allow setting and getting private properties

class Customer {
    constructor(name) {
        this.name = name;
        this.cart = new Cart();
        this.orders = [];
    }

    /**
     * 
     * @param {Order} order YOU MUST CREATE LIKE THIS: new Order(...) and then pass it in
     */
    addOrder(order) { // why is <order> an instance of Order class? because it was created with "new Order(...)" and then passed in here
        this.orders.push(order);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}
