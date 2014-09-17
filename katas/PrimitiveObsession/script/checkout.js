function Gold(quantity) {
    this.quantity = quantity;

    this.add = function(gold) {
        return new Gold(this.quantity + gold.quantity);
    }

    this.subtract = function(gold) {
        return new Gold(this.quantity - gold.quantity);
    }
}

Gold.ZERO = new Gold(0);

function Cart() {
    var items = {}

    this.addItem = function(item) {
        items[item.id] = items.hasOwnProperty(item.id) ? items[item.id] + 1 : 1
    }

    this.getItemCount = function(item) {
        return items.hasOwnProperty(item.id) ? items[item.id] : 0
    }
}

function Checkout() {
    var cart = new Cart()

    this.total = Gold.ZERO

    this.getTotal = function() {
        return this.total
    }

    this.scan = function(item) {
        cart.addItem(item)

        var itemCount = cart.getItemCount(item)
        if (item.hasDiscount === true && item.shouldApplyDiscount(itemCount))
            this.total = this.total.subtract(item.discount)

        this.total = this.total.add(item.cost)
    }
}

function Item(id, cost) {
    this.id = id
    this.cost = cost
    this.hasDiscount = false
}

function DiscountedItem(id, cost, numberForDiscount, discount) {
    this.id = id
    this.cost = cost
    this.hasDiscount = true
    this.shouldApplyDiscount = function(quantity) {
        return (quantity % numberForDiscount) === 0
    }
    this.discount = discount || Gold.ZERO
}

var Items = {
    apple: new DiscountedItem('apple', new Gold(10), 3, new Gold(5)),
    banana: new DiscountedItem('banana', new Gold(15), 2, new Gold(15)),
    orange: new Item('orange', new Gold(18))
}