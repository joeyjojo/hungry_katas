describe('Primitive Obsession', function() {
    var checkout

    beforeEach(function() {
        checkout = new Checkout()
    })

    it('do nothing new', function() {
        checkout.scan('an item')
        expect(1).not.toBe(2)
    })
})