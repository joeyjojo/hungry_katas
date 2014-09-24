var Status = {
    dead: 'dead',
    alive: 'alive',
    none: 'none'
}

function NoOne() {
    this.status = Status.none
    this.isDead = function() {
        return true
    }
}

function Person(name) {
    this.name = name
    var _defender = NoOne
    this.defneder = function(target) {
        if (!arguments.length)
            return _defender
        _defender = target
        return this
    }
    this.status = Status.alive
    this.die = function() {
        this.status = Status.dead
    }
    this.isDead = function() {
        this.status !== Status.alive
    }
}

function Terminator(id) {
    var _id = id

    var terminator = {
        id: _id
    }

    terminator.kill = function(target) {
        if (terminator.isDead())
            return terminator
        if (!target.defneder().isDead())
            terminator.kill(target.defneder())
        target.die()
        return terminator
    }

    terminator.defend = function(target) {
        target.defneder(terminator)
        return terminator
    }

    var _defender = NoOne
    terminator.defneder = function(target) {
        if (!arguments.length)
            return _defender
        _defender = target
        return terminator
    }

    terminator.status = Status.alive
    terminator.die = function() {
        terminator.status = Status.dead
    }
    terminator.isDead = function() {
        terminator.status !== Status.alive
    }

    return terminator
}