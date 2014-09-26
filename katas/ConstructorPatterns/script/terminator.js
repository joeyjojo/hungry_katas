Status = {
    alive: 'alive',
    dead: 'dead'
}

function Terminator(name) {
    this.name = name

    var status = Status.alive

    this.die = function() {
        status = Status.dead
    }

    this.isDead = function() {
        return status === Status.dead
    }

    this.kill = function(target) {
        if (!this.isDead())
            target.die()
    }
}

NoOne = {
    name: 'no one',
    isDead: function() {
        return true
    },
    die: function() {}
}

function Human(name) {
    this.name = name
    var status = Status.alive
    var defender = NoOne

    this.isDead = function() {
        return status === Status.dead
    }

    this.die = function() {
        defender.die()
        status = Status.dead
    }

    this.cowerBehind = function(terminator) {
        defender = terminator
    }
}

TerminatorAPI = {
    kill: function(terminator, target) {
        terminator.kill(target)
        return this
    },
    defend: function(terminator, target) {
        target.cowerBehind(terminator)
        return this
    }
}