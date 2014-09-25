var terminatorMatchers = {
    toBeDead: function(util, customEqualityTesters) {
        return {
            compare: function(target, expected) {
                var result = {};
                result.pass = util.equals(target.status, Status.dead, customEqualityTesters);
                if (!result.pass && target.name)
                    result.message = "Expected person " + target.name + ' to be dead but is not'
                if (!result.pass && target.id)
                    result.message = "Expected " + target.id + ' to be dead but is not'
                return result;
            }
        };
    },

    toBeAlive: function(util, customEqualityTesters) {
        return {
            compare: function(target, expected) {
                var result = {};
                result.pass = util.equals(target.status, Status.alive, customEqualityTesters);
                if (!result.pass && target.name)
                    result.message = "Expected " + target.name + ' to be dead but is not'
                if (!result.pass && target.id)
                    result.message = "Expected " + target.id + ' to be dead but is not'
                return result;
            }
        };
    }
};

describe('Constructor Patterns', function() {
    describe('Killing People', function() {

        var arnie, cop, john, sarah;

        beforeEach(function(){
            jasmine.addMatchers(terminatorMatchers);
            arnie = new Terminator('arnie')
            cop = new Terminator('cop')
            john = new Person('john')
            sarah = new Person('sarah')            
        })

        it('can kill john connor', function() {
            arnie.kill(john)
            expect(john).toBeDead()
        })

        it('can kill multiple people', function(){
            cop.kill(john).kill(sarah)
            expect(john).toBeDead()
            expect(sarah).toBeDead()
        })

        it('if a person is being defended and a terminator kills them they also have to kill the terminator', function(){
            arnie.defend(john)
            cop.kill(john)
            expect(arnie).toBeDead()
            expect(john).toBeDead()
        })

        it('if you are dead you can not kill', function(){
            cop.kill(arnie)
            arnie.kill(cop)
            expect(cop).toBeAlive()
        })
    })
})