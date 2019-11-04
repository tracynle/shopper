// create an OrderItem class
// with starter properties: name, quantity, category
// assume payment is only with credit card

class OrderItem {
    constructor(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }

    getName() {
        return this.name;
    }

    getQuantity() {
        return this.quantity;
    }

    getCategory() {
        return this.category;
    }

    setName(name) {
        this.name = name;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }


}