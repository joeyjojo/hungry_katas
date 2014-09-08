describe ('Primitive Obsession', function () {
	var checkout

	beforeEach (function () {
		checkout = new Checkout ()
	});

	it ('do nothing new', function () {
		checkout.scan ('an item');
		expect (1).not.toBe (2)
	});

	it ('scans an apple at the correct price', function (){
		checkout.scan('apple');
		expect(checkout.total).toBe(30);
	});
})