describe('Constructor Patterns', function() {
    describe('Killing People', function() {

        var arnie, cop, john, sarah;

        beforeEach(function(){
            arnie = new Terminator('arnie')
            cop = new Terminator('cop')
            john = new Person('john')
            sarah = new Person('sarah')            
        })

        it('can kill john connor', function() {
            arnie.kill(john)
            expect(john.status).toBe(Status.dead)
        })

        it('can kill multiple people', function(){
            arnie.kill(john).kill(sarah)
            expect(john.status).toBe(Status.dead)  
            expect(sarah.status).toBe(Status.dead)  
        })

        it('if a person is being defended and a terminator kills them they also have to kill the terminator', function(){
            arnie.defend(john)
            cop.kill(john)
            expect(arnie.status).toBe(Status.dead)
            expect(john.status).toBe(Status.dead)
        })

        it('if you are dead you can not kill', function(){
            cop.kill(arnie)
            arnie.kill(cop)
            expect(cop.status).toBe(Status.alive)
        })

    })
})