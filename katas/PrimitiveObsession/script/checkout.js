function Checkout() {
    this.scan = function(item) {
        console.log('I have scanned: ' + item);
    },
	this.total = function() {
		return 0;
	}
}