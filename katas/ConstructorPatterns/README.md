Constructor Patterns Kata
=========================

Definition
==========

JavaScript has multiple ways to make objects and no OO way of scoping variable
These patterns are nice constructors, they should help avoid things like getters and setters and help create awesome api's
http://www.samselikoff.com/blog/2013/11/14/some-Javascript-constructor-patterns/

This article highlights four ways to create constructors

Prototypes
==========

``
function Person(firstName, LastName) {
    var firstName = firstName
    var lastName = lastName
    this.fullName = function(){
        return firstName + ' ' + lastName
    }
}
``

this is pretty simple constructor which set things to private variables and an alternative form would be

``
function Person(firstName, LastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.firstName = function() {
    return this.firstName + ' ' + this.lastName
}
``

How this works:
when you call new in JavaScript it will execute the function
    in version 1 it will set all the variables and create the function fullName
    in version 2 it will set the names but it will not set the function fullName until someone calls fullName
        it will then assign it to map prototype after it's first call
Choose version 2 if you have a function which is complex in particular

If simplicity is what you are aiming for then version 1 is the best as version 2 now let's people get access to firstName and lastName
A convention is to change the variables to _firstName/_lastName and this indicates that they are 'private' however they aren't and it really encourages hacks and bad code
(Hence neither constructor is ideal)


Closures
========

I can't remember it is complex I know that
And it is also the same as the first way... so i must have it wrong

``
function Person(firstName, lastName) {
  var _firstName = firstName,
      _lastName = lastName;

  var my = {
    firstName: _firstName,
    lastName: _lastName
  };

  my.fullName = function() {
    return _firstName + ' ' + _lastName;
  };

  my.firstName = function(value) {
    if (!arguments.length) return _firstName;
    _firstName = value;

    return my;
  };

  my.lastName = function(value) {
    if (!arguments.length) return _lastName;
    _lastName = value;

    return my;
  };

  return my;
}
``

which can be turned into the following

``
function Person(firstName, lastName) {
  return {
    fullName: function() {
      return firstName + ' ' + lastName;
    },

    lastName: function(value) {
      if (!arguments.length) return lastName; //if there are no arguements do one thing
      lastName = value; //otherwise do something else and return this

      return this;
    },

    firstName: function(value) {
      if (!arguments.length) return firstName;
      firstName = value;

      return this;
    }
  }
}
``
pros you can in the first one, have truly private variables
pros amazing public api, ideal adapters and ideal for builders

cons it is a lot os leg work to do something very simple
cons things like lastName has 2 behaviors (probably fixable)

People('luke', 'preston').middleName('john').fullName()


Custom Constructors
===================

Person = Ember.Object.extend({
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }
});

var tim = Person.create({
  firstName: "Tim",
  lastName: "Tebow"
});

That is from Ember.js but Backbone.js and class.js is similar

This can be pretty powerful but it isn't the fastest way to do this
and you can't have privates

Becuase it requires a library we won't use this


Object Literals
===============

var sam = {
    firstName: "Sam",
    lastName: "Selikoff",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

not much to say, if you don't need something complex this is probably best thing ever
very much like a decision table, see Avoiding Conditionals Kata

Kata
======================

1. Any object which holds simply holds data should use a simple prototype
2. Any object which holds only values (like static values) should use object literals
2. Anything which is user interfacing (part of a library) but use option closures