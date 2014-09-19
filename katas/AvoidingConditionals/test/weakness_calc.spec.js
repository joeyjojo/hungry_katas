describe('Avoiding Conditionals', function() {
    describe('Weakness Multipliers', function() {
        var charmander = new Pokemon(fire)

        var geodude = new Pokemon(rock, ground)

        var steelix = new Pokemon(ground, steel)
        
        var aron = new Pokemon(steel, rock)

        var deerling = new Pokemon(normal, grass)
        
        var bubble = new Attack('water')

        var vineWhip = new Attack('grass')

        var slash = new Attack('normal')

        var doubleEdge = new Attack('normal')

        var flyingPress = new Attack('flying', 'fighting')
        
        var flameThrower = new Attack('fire')

        it('a single weakness has a two times effectiveness', function() {
            expect(weakness(bubble, charmander)).toBe(2)
        })

        it('a multi weakness increases weakness correctly', function() {
            expect(weakness(vineWhip, geodude)).toBe(4)
        })

        it('a single resistance halves damage', function() {
            expect(weakness(slash, steelix)).toBe(0.5)
        })

        it('a multi resistance reduces damage correctly', function() {
            expect(weakness(doubleEdge, aron)).toBe(0.25)
        })

        it('a weakness and a resistance negate each other', function() {
            expect(weakness(flameThrower, aron)).toBe(1)
        })

        it('an attack of multiple types apply appropriatly', function(){
            expect(weakness(flyingPress, deerling)).toBe(4)
        })
    })
})