Avoiding Conditionals Kata
======================

Definition
======================

Using if...else and switch statements can be hard to maintain. if...else statements can change frequently and become tiering.
switch statements aren't open to change in a similar way


Kata
======================

1. Try and extract if statements to functions on a prototype (Duck Typing)
2. Change switch statements into json objects full of functions (Dispatch Tables)
3. Extract parameters which are optional to a new prototype

some other conditionals which should be avoided if(something) , ternary should be avoided and so should something || defaultValue
if(something) when checking if is undefined is pretty rubbish, this should only be reserved for if(somethingThatCouldBeFalse)
because if something is false it sin't undefined but this statement is valid for both giving false false and sometimes false negatives
also if(!!something) which is just confusing
this can be changed to if(thing.hasOwnProperty(something)) or if(thing === undefined)
something || defaultValue might seem OK but if something is false then similar argument
ternary are thought to be hard to read, but sometimes they really are OK (this is so rare that it is probably best avoided anyway)