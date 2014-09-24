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

//ran out of time but should be able to extract pokemon and attack as they are the same name except that funky is not
function Pokemon() {
    var types = createTypes(arguments)
    var myAttack
    this.attacked = function(attack) {
        myAttack = attack
        return ultimateMultiplier(types, funky)
    }

    var funky = function(type) {
        return myAttack.multiplier(type)
    }
}

function Attack() {
    var types = createTypes(arguments)
    var myAttackType
    this.multiplier = function(attackType) {
        myAttackType = attackType
        return ultimateMultiplier(types, funky)
    }

    var funky = function(type) {
        return myAttackType[type] || 1
    }

}

function weakness(attack, defend) {
    return defend.attacked(attack)
}