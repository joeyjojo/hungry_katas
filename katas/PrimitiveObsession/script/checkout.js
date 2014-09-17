function Gold(quantity) {
    this.value = quantity;
	this.add = function(sumTo) {
		var added = quantity + sumTo;
		return added;
	}

}
function getTotal () {
	return Gold.goldTotal;
}
Gold.goldTotal = 0;

Gold.ZERO = new Gold(0);

function Checkout() {
    this.scan = function(item) {
        this.total.value = new Gold(item.cost).add(this.total.value);

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
