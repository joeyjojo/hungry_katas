Avoiding Conditionals Kata
======================

Definition
======================

Using if...else and switch statements can be hard to maintain. if...else statements can change frequently and become tiering.
switch statements aren't open to change in a similar way

http://designpepper.com/blog/drips/using-duck-typing-to-avoid-conditionals-in-javascript
http://designpepper.com/blog/drips/using-dispatch-tables-to-avoid-conditionals-in-javascript


Kata
======================

1. Try and extract if statements to functions on a prototype (Duck Typing)
        When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.
2. Change switch statements into json objects full of functions (Dispatch Tables)
3. Extract parameters which are optional to a new prototype

Other conditionals which should either be avoided or replaced with the above
    undefined as falsy
    ==============================
    if(somethingWhichCouldBeUndefined)

    conditional expression
    ==============================
    somethingWhichCouldBeUndefined || doThisAsDefault
    somethingWhichCouldBeUndefined && doThisAlso

    ternary expression (elvis operator ?:)
    ==============================
    someBooleanExpression ? ternaryTrue : ternaryFalse

    The Not Not Checks
    ==============================
    if(!!somethingWhichCouldBeUndefined)

    this one is a funny example which is a poor solution

    consider the following

    function hit(hasNotHit) {
        if(hasNotHit === false)
            console.log('missed')
        else
            console.log('hit')
    }

    hit(false) -> missed
    hit(true) -> hit
    hit(undefined) -> hit
    hit() -> hit
    hit('') -> hit
    hit(null) -> hit

    unless we redefine undefined to be true then this is an issue

    we could fix this however

    function hit(hasNotHit) {
        if(!!hasNotHit === false)
            console.log('missed')
        else
            console.log('hit')
    }

    it(false) -> missed
    hit(true) -> hit
    hit(undefined) -> missed
    hit() -> missed
    hit('') -> missed
    hit(null) -> missed
    hit(0) -> missed

    HURRAY.... wait a second

    hit(666) -> hit
    hit('charmander fell over and started crying') -> hit

    OK lets try again

    function hit(hasNotHit) {
        if(!!hasNotHit === false)
            console.log('missed')
        else if(hasNotHit === true)
            console.log('hit')
        else
            console.log('error')
    }

    it(false) -> missed
    hit(true) -> hit
    hit(undefined) -> missed
    hit() -> missed
    hit('') -> missed
    hit(null) -> missed
    hit(0) -> missed
    hit(666) -> error
    hit('charmander fell over and started crying') -> error

    AWESOME.... well at least it won't break v_v

    (if you ever see this happen outside of the kata you have permission to beat someone about the head with a herring)