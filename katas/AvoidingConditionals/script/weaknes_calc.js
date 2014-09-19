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

function ultimateMultiplier(types, getMultiplier) {
    var multiplier = 1
    types.forEach(function(type) {
        multiplier = multiplier * getMultiplier(type)
    })
    return multiplier
}

function createTypes(arguments) {
    var types = []
    for (var t in arguments)
        types.push(arguments[t])
    return types;
}

function Pokemon() {
    var types = createTypes(arguments)

    this.attacked = function(attack) {
        return ultimateMultiplier(types, function(type) {
            return attack.multiplier(type)
        })
    }
}

function Attack() {
    var types = createTypes(arguments)

    this.multiplier = function(attackType) {
        return ultimateMultiplier(types, function(type) {
            return attackType[type] || 1
        })
    }

}

function weakness(attack, defend) {
    return defend.attacked(attack)
}