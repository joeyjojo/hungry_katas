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

function Pokemon() {
    var types = []
    for (var t in arguments)
        types.push(arguments[t])

    this.attacked = function(attack) {
        return ultimateMultiplier(types, function(type){
            return attack.multiplier(type)
        })
    }
}

function Attack() {
    var types = []
    for (var t in arguments)
        types.push(arguments[t])

    this.multiplier = function(attackType) {
        function deriveMultiplier(attackType, type) {
            return attackType[type] || 1
        }

        return ultimateMultiplier(types, function(type) {
            return deriveMultiplier(attackType, type)
        })
    }

}

function weakness(attack, defend) {
    return defend.attacked(attack)
}