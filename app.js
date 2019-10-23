let result = Object.defineProperty(object, key, descripor);
Object.defineProperties(object, object_of_descriptors);

Object.getOwnPropertyDescriptor(object, key);
Object.getOwnPropertyDescriptors(object);

Object.keys(object);

var my_object = { foo: bar };
var my_object = Object.defineProperties(
    Object.create(Object.prototype), {
        foo: {
            value: bar,
            writable:  true,
            enumerable: true,
            configurable: true
        }
    }
)

/*
Property
A property is a named collection of attributes.

value: any Javascript value
writeable: boolean
enumerable: boolean
configurable: boolean
get: function() {... return value}
set: function(value) {...}
*/

Object.defineProperty(my_object, 'inch', {
    get: function() {
        return this.mm / 25.4;
    },
    set: function(value) {
        this.mm = value * 25;
    },
    enumerable: true
});

/*
Working with prototypes

Make an object taht you like

Create new instances that inherit from that objet.

Customize the new objects.

Taxonomy and classification are not necessary.

Delegation

Differential Inheritance

Objects have a prototype attribute


prototype: object or null

*/

Object.create(object, properties);
Object.getPrototypeOf(object);
/*
function new(func, arguments) {
    var that = Object.create(func.prototype),
        result = func.apply(that, agruments);
    return (typeof result === 'object' && result) || that;
}
*/

// func.prototype.anything

/*
Javascript didn't get it quite right
* Accidental collisions: Fails when word === 'constructor'
*/

// bad
function bump_count(word) {
  if (word_count[word]) {
    word_count[word] += 1;
  } else {
    word_count[word] = 1;
  }
}

// good
function bump_count(word) {
  if (typeof word_count[word] === 'number') {
    word_count[word] += 1;
  } else {
    word_count[word] = 1;
  }
}

/*
The `for in` problem
* Functions inherited from a prototype are included in the 'for in enumeration.
*/

for (name in object) {
  if (object.hasOwnProperty(name)) {
    // ...
  }
}

// * this fails if an object has a `hasOwnProperty` property.

for (name in object) {
  if (Object.prototype.hasOwnProperty.call(object, name)) {
    // ...
  };
}

/* Solutions in ES5
* Object.create(null) creates an object that does not inherit anything.
* Set the enumerable attribute to `false` when adding methods to prototypes.
That keeps them out of `for in` enumerations.

* `Object.keys` (object) produces an array of strings, the keys of the own (not inherited) properties.

*/

/* Keys must be strings */
function make_sealer() {
  var boxes = [], values = [];
  return {
    sealer: function(value) {
      var box, i = boxes.length;
      box = {};
      boxes[i] = box;
      values[i] = value;
      return box;
    },
    unsealer: function(box) {
      return values[boxes.indexOf(box)]; 
    }
  }
}

/* Objects have an extensible attribute */
/*
 * extensible: boolean
 * Object.isExtensible(object) // check if extensible or not
 * Object.preventExtensions(object) // turn off extenible and never turn on. turn off = object is full, cannot add any new properties to it.
 * Object.seal(object) // does same with preventExtensions, turns off all of the properties and turns off all their configurable bits. cannot be deleted or changed from data to accessor or back.
 * Object.freeze(object) // does the same thing of preventExtensions and seal. also make everything read-only, turns off everybodies writeable bits. immutable.
 */
 
/* 
 * Object and 
 * Number
 * Boolean
 * String
 * Array
 * Date
 * RegExp
 * Function
 */

/*
 * Numbers
 * Only one number type
 * - No integers
 * 64-bit floating point
 * IEEE-754 (aka "Double")
 */

/* Number literals
.01024e4
1.024e+3
10.24E2
102.4E+1
1024.e0
1024.00
1024
10240e-1
*/



/*
Associative Law does not hold
(a +  b) + c === a + (b + c)

* Produces false for some values of a, b, c.
* Integers under 900719925470992 (9 quadrillion) are ok.

9007199254740992 === 9007199254740992 + 1

Decimal fractions are approximate

a = 0.1;
b = 0.2;
c = 0.3;

(a + b) + c === a + (b + c)
false

Number methods

toExponential
toFixed
toLocaleString
toPrecision
toString
valueOf

Number methods
*/

if (!Number.prototype.trunc) {
    Number.prototype.trunc = function trunc(number) {
        return Math[ number >= 0 ? 'floor' : 'ceil'](number);
    }
}

/* 
Numbers are first class objects
A number can be stored in a variable.
A number can be passed as a pararmeter.
A number can be returned from a function.
A number can be stored in an object.
*/

/* Math object
* abs
* acos
* asin
* atan
* atan2
* ceil
* cos
* exp
* floor
* log
* max
* min
* pow
* random
* round
* sin
* sqrt
* tan
*/

/* Math Object
consts

* E
* LN10
* LN2
* LOG10E
* LOG2E
* PI
* SQRT1_2
* SQRT2

*/

function log2(x) {
    return Math.LOG2E * Math.log(x);
}

/*
NaN
*/