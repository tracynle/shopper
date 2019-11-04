// create an Order class
// private properties: list of OrderItem instances, subtotal, tax percentage, tax in dollars, total, date of purchase

class Order {
    constructor(subtotal, taxPercentage, taxInDollars, total, dateOfPurchase) {
        this.items = [];
        this.subtotal = subtotal;
        this.taxPercentage = taxPercentage;
        this.taxInDollars = taxInDollars;
        this.total = total;
        this.dateOfPurchase = dateOfPurchase;
    }

    addOrderItem(item) {
        this.items.push(item);
    }

    getSubtotal() {
        return this.subtotal;
    }

    getTaxPercentage() {
        return this.taxPercentage;
    }

    getTaxInDollars() {
        return this.taxInDollars;
    }

    getTotal() {
        return this.total;
    }

    getDateOfPurchase() {
        return this.dateOfPurchase;
    }

    
}