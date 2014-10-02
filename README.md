Hungery Kata
===========

This is a place to store Katas
They are in JavaScript currently but there is no reason they can't be in other languages

My assumption on a Kata is that it is an example exercise where there are rules to follow to learn techniques
Hence in the katas folders there is a readme which tells you about the idea and then a second md file which has the exercise

I intend to create simple slides which go through code starting from problematic code and then replacing it with possible solution
These are all written using impress.js and there is a package which you can run so people can follow along

Grunt, Jasmine and Impress
==========================

Once you have checked the code out you will want to run the following

npm install
grunt jasmine

the second will run the jasmine tests from the command line and will create a _SpecRunner.html so you can open the tests in the browser

grunt impress KataName

ie

grunt impress avoidingconditionals


Kata Contents
=============

Primitive Obsession
===================

Aim is to avoid primitives which can be a nightmare to understand and become horrible to maintain
www.github.com/katas/PrimitiveObsession

Avoiding Conditionals
=====================

Aim to to remove all if statements and switch statements because most of the time they aren't needed and can be confusin
www.github.com/katas/AcoidingConditonals

Constructor Patterns
====================

Constructors are two fold problem
one is to be able to create awesome API's 
the other is to create simple objects which hold data
www.github.com/katas/AcoidingConditonals

Future Katas
====================

One would be to do jasmine tests which is really here to help you get through the katas and to learn TDD