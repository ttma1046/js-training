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
Special number: Not a Number
Result of undefined or erroneous operations
Toxic: any arithmetic operation with NaN as an input will have NaN as a result
NaN is not equal to angything, including NaN.
NaN === NaN is false
NaN !== NaN is true
*/

/* Boolean
true
false
*/

/* String
* A sequence of 0 or more 16-bit Unicode characters
  - UCS-2, not quite UTF-16
  - No awareness of surrogate pairs
* No separate character type
  - Characters are represented as strings with length of 1
* Strings are immutable
* Similar strings are equal (===)
* String literals can use single or double quotes
with \ escapement.
*/

/*
Multiline string literals (Dont use them)
*/

var long_line_1 = "This is a \
long line"; // ok

/*
var long_line_2 = "This is a \ 
long line"; // syntax error
*/

/* Convert a number to a string
 * Use number method (toString)
 * Use string function
 */

 str = num.toString();
 str = String(num);

 /* Convert a string to a number
  * Use the Number function.
  * Use the + prefix operator.
  * Use the parseInt function.
  */

  num = Numer(str);
  num = +str;

  /* parseInt function */
     parseInt(str, 10)
  
  /* 
  * Converts the value into a number.
  * It stops at the first non-digit character.
    - parseInt("12em") === 12
  * The radix(10) should always be used.
  */
 parseInt("08") === 0
 parseInt("08", 10) === 8

 /* String length
 * string.length
 * The `length` property determins the number of 16-bit characters in a string.
 * Extended characters are counted as 2.
 */

 /* String methods
  * charAt
  * charCodeAt
  * compareLocale
  * concat
  * indexOf
  * lastIndexOf
  * localeCompare
  * match
  * replace
  * search
  * slice
  * split
  * substring
  * toLocaleLowerCase
  * toLocaleUpperCase
  * toLowerCase
  * toString
  * toUpperCase
  * trim
  * valueOf
  */

  /* trim */
  if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
      return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/,
      "$1");
    };
  }

  /* supplant */
  var template = '<table border="{border}">' +
  '<tr><th>Last</th><td>{last}</td></tr>' +
  '<tr><th>First</th><td>{first}</td></tr>' +
  '</table>s';

  var data = {
    first: "Carl",
    last: "Hollywood",
    border: 2
  };
 mydiv.innerHTML = template.supplant(data);

 if (typeof String.prototype.supplant !== 'function') {
   String.prototype.supplant = function(o) {
     return this.replace(/{{[^{}]*}})/g,
      function (a, b) {
        var r = o[b];
        return typeof r === 'string' ? r : a;
      });
   };
 }

 /* Array */
 /* Javascript doesnt have array */
 /*
  * Array inherits from Object.
  * Indexes are converted to strings and used as names for retrieving values.
  * Very efficient for sparse arrays.
  * Not very efficient in most other cases.
  * One advantage: No need to provide a length or type when creating an array.
  */
 /* length */
 /* Arrays, unlike objects, have a special `length` property.
  * It is always 1 larger than the highest integer subscript.
  * It allows use of the tranditional for statement.
  */
 for (i = 0; i < a.length; i += 1) {
   // ...
 }
/*
 * Do not use `for in` with arrays
 */

/* Array Literals
* An array literal uses []
* It can contain any number of expressions,
separated by commas
*/
myList = ['oats', 'peas', 'beans'];
/*
* New items can be appended
*/
myList[myList.length] = 'barley';
/*
* The dot notation should not be used with arrays.
*/

/* Array methods */
/*
* concat
* reduce
* every
* reduceRight
* filter
* reverse
* forEach
* shift
* indexOf
* slice
* join
* some
* lastIndexOf
* splice
* map
* toLocaleString
* pop
* toString
* push
* unshift
* sort
*/
  
/* sort */
var n = [4, 8, 15, 16, 23, 42];
n.sort();
// n is [15, 16, 23, 4, 42, 8];


n.sort((a, b) => a - b);
console.log(n);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/* Deleting Elements
 * delete array[number]
 * Removes the element, but leaves a hole in the numbering.
 */
Array.splice(number, 1);
/* Removes the element and renumbers all the following elements. */

/* Deleting Elements */
myArray = ['a', 'b', 'c', 'd'];
delete myArray[1];

// ['a', undefined, 'c', 'd']
myArray.splice(1, 1);

// ['a', 'c', 'd']

/* Arrays vs Objects
 * Use objects when the names are arbitrary strings.
 * Use arrays when the names are sequential integers.
 * Don't get confused by the term Associative Array.
 */

 /* Date
  * The `Date` function is based on Java's Data class.
  * It was not Y2K ready.
  */

/* RegExp */   

/* Function */

/* All values are objects */

/* Except `null` and `undefined` */

/* All values are objects
 * Except `null` and `undefined`.
 */

/* null
 * A value that isn't anything.
 */

/* undefined
 * A value that isn't even that.
 * The default value for variables and parameters.
 * The value of missing members in objects.
 */

 /* typeof
 The typeof prefix operator returns a string identifying the type of a value.
 |type|tyoeof|
 |----|------|
 |object|'object'|
 |function|'function'|
 |array|'object'|
 |number|'number'|
 |string|'string'|
 |boolean|'boolean'|
 |null|'object'|
 |undefined|'undefined'|
*/
/* Array.isArray */
alert(Array.isArray([]));
if (typeof Array.isArray !== 'function') {
  Array.isArray = function (value) {
    return Array.prototype.toString.apply(value) === '[Object Array]';
  };
}

/* Falsy values */
/*
 * false
 * null
 * undefined
 * "" (empty string)
 * 0
 * NaN
 * All other values (including all objects) are truthy.
 * "0" "false"
 */

/* Loosely Typed
 * Any of these types can be stored in an variable, or passed as a parameter to any function.
 * The language is not "untyped".
 */

/* Reference
 * Objects can be passed as arguments to functions, and can be passed as arguments to functions, and can be returned by functions.
 * - Objects are passed by reference.
 * - Objects are not passed by value.
 * The `===` operator compares object references, not values.
 * - `true` only if both operands are the same object.
 */

/* C
 * Javascript is syntactically a C family language
 * It differs from C mainly in its type system, which allows functions to be values.
 */

/* Identifiers
 * Starts with a letter or _ or $
 * Followed by zero or more letters, digits, _ or $
 * By convention, all variables, parameters, members, and function names start with lower case.
 * Except for constructor functions which start with upper case.
 * Initial _ should be reserved for implementations.
 * $ should be reserved for machines.
 */

 /* Comments
 // slashslash line comment
 /* 
    slashstar
    block
    comment
*/

/* Operators
  Arithmetic
  + - * / %
  Comparision
  == != < > <= >=
  Logical
  && || !
  Bitwise
  & | ^ >> >>> <<
  Ternary
  ?:
*/

  /* +
  * Addition and concatenation
  * If both operands are numbers,
  * then 
  *   add them.
  * else
  *   convert them both to strings.
  * concatenate them
  * '$' + 3 + 4 = '$34'
  */

  /* +
   * Unary operator can convert strings to numbers
   * +"42" = 42;
   * Also
   *   Number("42") = 42;
   * Also
   *   parseInt("42", 10) = 42
   *   +"3" + (+"4") = 7
   */
