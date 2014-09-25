Checkout Kata JavaScript
========================

A training example to highlight good practices with JavaScript

The example is a checkout service

You can scan items
The checkout needs to have the correct balance when requested
Some items have discounts
Currency is gold doubloons (or gold for short, aka pirate money)

| Item Name | Price | Discount            |
|-----------|------:|---------------------|
| Apple     | 10    | 3 for 25            |
| Banana    | 15    | buy on get one free |
| Orange    | 18    | does not have any   |

If you spend over 100 gold you get 10 percent discount rounded up to nearest gold

Optional Extra For Quick People
===============================

Optional (for people who finish the above quickly)
1 Gold = 12 Silver
If you spend over 100 gold you get 10 percent discount rounded up to nearest silver

| Item Name | Price  | Type   | Discount                                               |
|-----------|-------:|--------|--------------------------------------------------------|
| Apple     | 10     | fruit  | 3 for 25                                               |
| Banana    | 15     | fruit  | buy on get one free                                    |
| Orange    | 18     | fruit  | does not have any                                      |
| Sword     | 20G 2S | weapon | all fruit prices are slashed in half (before discount) |

Notes
======================

For the person who is running the session I find that it is sometimes good to make it a competition

Everyone starts at 10 points and for every string/double that isn't sensibly added to a constructor knock off 5 points
For every json object which hasn't been extracted to a prototype knock off 10 points
For every instance someone can evidence doing one of the 3 things from the README.md add 5 points

Don't forget to put aside some time to let teams talk about how they can apply this to their code currently or how they feel about the techniques
