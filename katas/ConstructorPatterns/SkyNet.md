Sky Net
======================

Need to build an api which is for defense

We have these things called terminators which are robots which kill people we tell them to

Terminators have multiple inputs but we need a simlpe API to be able to tell the robots what to do

a suggested api is:

Terminator.kill(target)
Terminator.defend(target)

where target is a person, people, an item, items or a place

Each terminator must also be callable
 i.e. we can't just say Terminator.kill(johnConnor) and expect all of them to try and kill this random name we just made up
 we would need somehting like terminator1.kill(sarahConnot) also a name we just made up...
 and it would be great if we could chain some of these together e.g.
 arnie.kill(sarahConnor).kill(johnConnor)

 or

 arnie.kill(ladyTerminator).defend(johnConnor)

There is also the chance, however small, that a person is able to defend themselves
    e.g. john.defendWith(plasticExplosives)
    which means that the terminator will fail until the defending persons weapon has been destroyed