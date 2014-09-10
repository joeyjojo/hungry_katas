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

describe ('Primitive Obsession', function () {
	var checkout

	beforeEach (function () {
		jasmine.addMatchers(checkoutMatchers);
		checkout = new Checkout ()
	})

	it ('scans an apple at the correct price', function (){
		checkout.scan(Items.apple)
		appleGold = new Gold(10)
		expect(checkout.total).toBeSameGold(appleGold)
	})

	it('scans a banana and an apple at the correct price', function(){
		checkout.scan(Items.apple);
		checkout.scan(Items.banana);
		bananaAndAppleGold = new Gold(25);
		expect(checkout.total).toBeSameGold(bananaAndAppleGold)
	})
})