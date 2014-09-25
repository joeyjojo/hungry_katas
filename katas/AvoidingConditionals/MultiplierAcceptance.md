Pokemon Battle API
===================
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

            MOVES
| Name          | Type            |
|---------------|-----------------|
| Slash         | Normal          |
| Flame Thrower | Fire            |
| Bubble Beam   | Water           |
| Vine Whip     | Grass           |
| Ice Beam      | Ice             |
| Flying Press  | Fighting/Flying |
| Earthquake    | Ground          |
| Shadow Sneak  | Ghost           |
| Thunder       | Electric        |

            POKEMON
| Name       | Type         |
|------------|--------------|
| Charmander | Fire         |
| Geodude    | Rock/Ground  |
| Steelix    | Steel/Gorund |
| Aron       | Steel/Rock   |
| Deerling   | Grass/Normal |

Welcome to the wonderful world of pokemon

One aspect of Pokemon is typing and the objective of this kata is to implement a weakness calculator api
If a pokemon has a weakness to an element then the damage is multiplied by 2
If it has a resistance then the damage done is halved
These stack, a pokemon with two types, both with a weakness is multiplied by 4 and so on

the api should resemble something like

calculateAttackMultiplier(attack, pokemon)

which for simplicity sake let's say returns a double

some examples which you can use for your tests are:

| Attack       | Pokemon    | Result |
|--------------|------------|--------|
| Slash        | Charmander | 1      |
| Bubble Beam  | Charmander | 2      |
| Vine Whip    | Geodude    | 4      |
| Flying Press | Deerling   | 4      |
| Shadow Sneak | Deeling    | 0      |
| Slash        | Steelix    | 0.5    |
| Slash        | Aron       | 0.25   |

Notes
======================

For the person who is running the session I find that it is sometimes good to make it a competition

Everyone starts at 10 point ands for every switch statement knock off 10 points, for every if statement knock off 5 points
Every time the person(s) can identify either a decision table or duck typing they get 5 points per piece of evidence
Don't forget to bring a prize for the winner

Don't forget to put aside some time to let teams talk about how they can apply this to their code currently or how they feel about the techniques
