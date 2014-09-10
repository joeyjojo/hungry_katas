function Gold(quantity) {
    this.quantity = quantity;

}

Gold.ZERO = new Gold(0);

function Checkout() {
    this.scan = function(item) {
        this.total = new Gold(item.cost);
    },

	this.total = Gold.ZERO;
}

function Item(cost){
	 this.cost = cost;
}

var Items = {
    apple: new Item(10),
	banana: new Item(15)

}
