function Gold(quantity) {
    this.quantity = quantity
}

Gold.ZERO = new Gold(0)

function Checkout() {
    this.scan = function(item) {
        this.total = new Gold(10)
    },

	this.total = Gold.ZERO
}

function Item(){ 
}

var Items = {
    apple: new Item()
}