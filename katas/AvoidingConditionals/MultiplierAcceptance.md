Pokemon Battle API

                                                    DEFENSE
| ATTACK   | Nor | Fir | Wat | Ele | Gra | Ice | Fig | Poi | Gro | Fly | Psy | Bug | Roc | Gho | Dra | Dar | Ste | Fai |
|----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Normal   |     |     |     |     |     |     |     |     |     |     |     |     | 0.5 | 0   |     |     | 0.5 |     |
| Fire     |     | 0.5 | 0.5 |     | 2   | 2   |     |     |     |     |     | 2   | 0.5 |     | 0.5 |     | 2   |     |
| Water    |     | 2   | 0.5 |     | 0.5 |     |     |     | 2   |     |     |     | 2   |     | 0.5 |     |     |     |
| Electric |     |     | 2   | 0.5 | 0.5 |     |     |     | 0   | 2   |     |     |     |     | 0.5 |     |     |     |
| Grass    |     | 0.5 | 2   |     | 0.5 |     |     | 0.5 | 2   | 0.5 |     | 0.5 | 2   |     | 0.5 |     | 0.5 |     |
| Ice      |     | 0.5 | 0.5 |     | 2   | 0.5 |     |     | 2   | 2   |     |     |     |     | 2   |     | 0.5 |     |
| Fighting | 2   |     |     |     |     | 2   |     | 0.5 |     | 0.5 | 0.5 | 0.5 | 2   | 0   |     | 2   | 2   | 0.5 |
| Poison   |     |     |     |     | 2   |     |     | 0.5 | 0.5 |     |     |     | 0.5 | 0.5 |     |     | 0   | 2   |
| Ground   |     | 2   |     | 2   | 0.5 |     |     | 2   |     | 0   |     | 0.5 | 2   |     |     |     | 2   |     |
| Flying   |     |     |     | 0.5 | 2   |     | 2   |     |     |     |     | 2   | 0.5 |     |     |     | 0.5 |     |
| Psychic  |     |     |     |     |     |     | 2   | 2   |     |     | 0.5 |     |     |     |     | 0   | 0.5 |     |
| Bug      | 0.5 |     |     |     | 2   |     | 0.5 | 0.5 |     | 0.5 | 2   |     |     | 0.5 |     | 2   | 0.5 | 0.5 |
| Rock     |     | 2   |     |     |     | 2   | 0.5 |     | 0.5 | 2   |     | 2   |     |     |     |     | 0.5 |     |
| Ghost    | 0   |     |     |     |     |     |     |     |     |     | 2   |     |     | 2   |     | 0.5 |     |     |
| Dragon   |     |     |     |     |     |     |     |     |     |     |     |     |     |     | 2   |     | 0.5 | 0   |
| Dark     |     |     |     |     |     |     | 0.5 |     |     |     | 2   |     |     | 2   |     | 0.5 |     | 0.5 |
| Steel    |     | 0.5 | 0.5 | 0.5 |     | 2   |     |     |     |     |     |     | 2   |     |     |     | 0.5 | 2   |
| Fairy    |     | 0.5 |     |     |     |     | 2   | 0.5 |     |     |     |     |     |     | 2   | 2   | 0.5 |     |


//chuck in some other moves maybe and some other pokemon

                                        MOVES
| Name          | Type            | Effect                                                                       | Damage | Accuracy |
|---------------|-----------------|------------------------------------------------------------------------------|--------|----------|
| Double Edge   | Normal          | damages the user equal to 30% damage dealt                                   | 120    | 80%      |
| Slash         | Normal          | increase chance of landing a critical hit from 1/3 to 2/3                    | 70     | 100%     |
| Flame Thrower | Fire            | 1/3 chance of causing burn, also if user is frozen thaws the user            | 90     | 100%     |
| Bubble Beam   | Water           | Has a 1/3 chance of reducing the targets speed by one stage                  | 60     | 100%     |
| Vine Whip     | Grass           | n/a                                                                          | 70     | 100%     |
| Ice Beam      | Ice             | has a 1/3 chance of freezing target                                          | 90     | 100%     |
| Flying Press  | Fighting/Flying | n/a                                                                          | 80     | 100%     |
| Sunny Day     | Fire            | Causes weather to change to sunlight, doubles fire moves and halves water    | n/a    | n/a      |
| Earthquake    | Ground          | Can damage multiple at once, pokemon who have used dig receive double damage | 100    | 100%     |
| Shadow Sneak  | Ghost           | Always goes first irrespective of pokemon speed stat                         | 40     | 100%     |
| Thunder       | Electric        | has a 1/3 chance of causing paraasis unless pokemon is electric              | 100    | 80%      |

                                        POKEMON
| Name       | Type         | Ability Name | Ability Description                                  |
|------------|--------------|--------------|------------------------------------------------------|
| Charmander | Fire         | fire break   | increase fire damage by 30% when health is below 30% |
| Geodude    | Rock/Ground  | Levitate     | immune to ground moves unless has landed             |
| Steelix    | Steel/Gorund | Something    |                                                      |
| Aron       | Steel/Rock   | Something    |                                                      |
| Deerling   | Grass/Normal | Something    |                                                      |

Objective: To create a battle api for Pokemon

Pokemon is a complex game with simple rules
A Pokemon has one or more types and they have a maximum of 4 moves each
Each player can have up to 6 Pokemon in their party
In battle Pokemon take it in turns and the fastest Pokemon attacks first until the player is out of Pokemon

There are a couple of different types of battles but for this Kata there will only be 2
    Single, one v one
    Doubles, two v two

Depending on how fast you work depends on how much of the API is completed
But the following is a numbered list of a suggested order the API should be completed, so as to get the most out of the API

1. Weakness multiplication calculator
    e.g. if charmander is attacked by bubble beam then bubble beam deals 2x damage
         if geodude is attacked by vine whip or bubble bean it deals 4x damage
         if deeling is attacked by flying press it does 4x damage
         if steelix is attacked by slash or double edge then that deals 1/2x damage
         if aron is attacked by slash or double edge then that deals 1/4x damage
         if deerling is attacked by Shadow Sneak no damage is applied
         else if the pokemon has no weaknesses or resistances then the damage is not scaled

2. Battle effects
    This could be as simple as returning strings/console.log() but certain moves do certain damage so that would needed to be returned also
    e.g. if flame thrower then roll 3 sided die, if roll === 1 then pokemon has the burn status
         if sunny day then the weather changes from (nothing/rain/hail/sandstorm) and there is no damage applied

3. Pokemon abilities
    Some pokemon have abilities which activate when certain criteria are met
    e.g. if charmander has less than 30% health points (HP) then all fire damage moves are increases by 30%
         if aron uses a moves which has recoil damage, e.g. double edge then there is no recoil damage
         if it is sunny and deeling is in play then deerling speed is doubled

4. Battle simulation
    This is implementing a battle, who goes when, what moves they use and how much damage as well as if a pokemon faints (pokemon don't die)
    If you are doing this then you will also need to apply an increase if the move used is the same type as the pokemon
    e.g. if charmander uses flame thrower will do (90 * 1.5) and if it is sunny then flame thrower does (90 * 1.5) * 1.5
    All moves have a 1/3 chances of landing a critical hit
    All moves have an accuracy

On average, if practicing TDD and pairing then most people will be able to finish part 1
However the above list can be done in any order, it is up to the preference of the people doing the kata

