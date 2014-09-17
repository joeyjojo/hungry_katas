var checkoutMatchers = {
	toBeSameGold: function(util, customEqualityTesters) {
		return {
			compare: function(actual, expected) {
				var result = {};
				result.pass = util.equals(actual.quantity, expected.quantity, customEqualityTesters);
				if (!result.pass)
					result.message = "Expected Money with quantity: " + expected.quantity + " but got Money with quantity: " + actual.quantity
				return result;
			}
		};
	}
};

describe('Primitive Obsession', function() {

	describe('Scanning at the checkout', function() {
		var checkout
		beforeEach(function() {
			jasmine.addMatchers(checkoutMatchers);
			checkout = new Checkout()
		})

		it('single item are at the correct price', function() {
			checkout.scan(Items.apple)
			appleGold = new Gold(10)
			appleGold === new Gold(10)
			expect(checkout.getTotal()).toBeSameGold(appleGold)
		})

		it('multiple items are accumulated correctly', function() {
			checkout.scan(Items.apple);
			checkout.scan(Items.banana);
			bananaAndAppleGold = new Gold(25);
			expect(checkout.getTotal()).toBeSameGold(bananaAndAppleGold)
		})

		it('applies any discount', function() {
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			discountedApple = new Gold(25);
			expect(checkout.getTotal()).toBeSameGold(discountedApple)
		})

		it('applies discount on top of non discounted things', function() {
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			discountedAppleOnTopOfNonDiscounted = new Gold(35);
			expect(checkout.getTotal()).toBeSameGold(discountedAppleOnTopOfNonDiscounted)
		})

		it('applies multiple discounts', function() {
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.banana);
			checkout.scan(Items.banana);
			discountedAppleAndBanana = new Gold(40);
			expect(checkout.getTotal()).toBeSameGold(discountedAppleAndBanana)
		})

		it('accumulates discount for multiple discounts of the same item', function() {
			checkout.scan(Items.banana);
			checkout.scan(Items.banana);
			checkout.scan(Items.banana);
			checkout.scan(Items.banana);
			discountedTwoLotsOfBananas = new Gold(30);
			expect(checkout.getTotal()).toBeSameGold(discountedTwoLotsOfBananas)
		})

		it('applies a ten percent discount after total is 100 gold', function() {
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			checkout.scan(Items.apple);
			discountedTwoLotsOfBananas = new Gold(30);
			expect(checkout.getTotal()).toBeSameGold(discountedTwoLotsOfBananas)
		})



	})
})