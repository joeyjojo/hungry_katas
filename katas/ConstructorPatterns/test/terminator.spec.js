var terminatorMatchers = {
    toBeDead: function(util, customEqualityTesters) {
        return {
            compare: function(target, expected) {
                var result = {};
                result.pass = target.isDead()
                if (!result.pass)
                    result.message = 'Expected ' + target.name + ' to be dead'
                else
                    result.message = 'Expected ' + target.name + ' NOT to be dead'
                return result;
            }
        };
    }
};

describe('Constructor Patterns', function() {

    var api, arnie, kyle, sarah

    beforeEach(function() {
        jasmine.addMatchers(terminatorMatchers);

        api = TerminatorAPI
        arnie = new Terminator('arnie')
        cop = new Terminator('cop')
        kyle = new Human('kyle')
        sarah = new Human('sarah')
    })

    describe('Killing', function() {
        it('terminators can kill a single human', function() {
            api.kill(arnie, kyle)
            expect(kyle).toBeDead()
        })

        it('can chain kill multiple people', function() {
            api
                .kill(arnie, kyle)
                .kill(arnie, sarah)

            expect(kyle).toBeDead()
            expect(sarah).toBeDead()
        })

        it('terminators can not kill if they are dead', function() {
            api
                .kill(cop, arnie)
                .kill(arnie, sarah)
            expect(sarah).not.toBeDead()
        })
    })

    describe('Defending', function() {
        it('if a terminator attacks someone who is being defended then they kill the defender also', function() {
            api
                .defend(arnie, sarah)
                .kill(cop, sarah)

            expect(arnie).toBeDead()
            expect(sarah).toBeDead()
        })
    })

})