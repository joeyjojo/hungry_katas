Checkout Kata JavaScript
======================

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

If you spend over 100 gold you get 10 percent discount

Optional (for people who finish the above quickly)
1 Gold = 12 Silver

| Item Name | Price  | Type   | Discount                                               |
|-----------|-------:|--------|--------------------------------------------------------|
| Apple     | 10     | fruit  | 3 for 25                                               |
| Banana    | 15     | fruit  | buy on get one free                                    |
| Orange    | 18     | fruit  | does not have any                                      |
| Sword     | 20G 2S | weapon | all fruit prices are slashed in half (before discount) |

The goal is not to rush and meet all requirements but to learn the subject at hand
Hence part of the Kata is to pick the requirements which are most important
Arbitrary example and can change depending on subject

Primitive Obsession
======================

https://github.com/lukejpreston/checkoutKataJavascript/tree/master/katas/PrimitiveObsession

Tools
======================

Jasmine for testing
Grunt for executing things

After cloning
npm install,
grunt jasmine,
you can then open the _SpecRunner.html file in the browser