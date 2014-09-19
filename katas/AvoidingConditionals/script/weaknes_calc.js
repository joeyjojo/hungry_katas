var fire = {
    water: 2
}

var ground = {
    grass: 2
}

var rock = {
    grass: 2,
    normal: 0.5,
    fire: 0.5
}

var steel = {
    normal: 0.5,
    fire: 2
}

var normal = {
    fighting: 2
}

var grass = {
    flying: 2
}

function Pokemon() {
    var types = []
    for (var t in arguments)
        types.push(arguments[t])

    this.attacked = function(attack) {
        var weakness = 1
        for (var t in types)
            weakness = weakness * attack.multiplier(types[t])
        return weakness
    }
}

function Attack() {
    var types = []
    for (var t in arguments)
        types.push(arguments[t])

    this.multiplier = function(type) {
        function deriveMultiplier(type, attackType) {
            return type[attackType] || 1
        }

        var multiplier = 1
        for (var t in types)
            multiplier = multiplier * deriveMultiplier(type, types[t])
        return multiplier
    }

}

function weakness(attack, defend) {
    return defend.attacked(attack)
}