Pokemon Weakness API

to be able to calculate weakness/strengths multiplier

 ----------------------------------------------------------------------
| Type   | Weak Against  | Strong Against | Resist Against | Immune To |
|--------|---------------|----------------|----------------|-----------|
| Normal | Fighting      |                |                | Ghost     |
|--------|---------------|----------------|----------------|-----------|
| Fire   | Water, Rock,  | Grass, Ice,    |                |           |
|        | Ground        | Steel, Bug     |                |           |
|--------|---------------|----------------|----------------|-----------|
| Water  | Fire, Ground, | Fire, Ground   |                |           |
|        | Rock          | Rock           |                |           |
|--------|---------------|----------------|----------------|-----------|
 ----------------------------------------------------------------------

If you are weak against something then it it will do 2 times damage
This is cumulated so If you are Rock + Ground then you have a 4 times weakness to grass
It is the opposite it true when calculating resist against
If you have any immunity then the multiplier is 0
If nothing then multiplier is 1

example methods
attacking(Attack(Types), Defend(Types))
defending(Defned(Types), Attack(Types))