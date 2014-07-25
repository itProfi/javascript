// bad
var item1 = new Object();

// good
var item2 = {};


// Don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61)


// bad
var superman1 = {
    default: {clark: 'kent'},
    private: true
};

// good
var superman2 = {
    defaults: {clark: 'kent'},
    hidden: true
};


// bad
var items1 = new Array();

// good
var items2 = [];


// If you don't know array length use Array#push.


var someStack = [];


// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');


// When you need to copy an array use Array#slice. [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7)


var len1 = items.length;
var itemsCopy1 = [];
var i0;

// bad
for (i0 = 0; i0 < len; i0++) {
    itemsCopy[i0] = items[i0];
}

// good
itemsCopy = items.slice();



// Use single quotes ' for strings


// bad
var name1 = "Bob Parr";

// good
var name2 = 'Bob Parr';

// bad
var fullName1 = "Bob " + this.lastName;

// good
var fullName2 = 'Bob ' + this.lastName;

// Strings longer than 80 characters should be written across multiple lines using string concatenation.
// Note: If overused, long strings with concatenation could impact performance. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40)


// bad
var errorMessage1 = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// bad
var errorMessage2 = 'This is a super long error that \
    was thrown because of Batman. \
    When you stop to think about \
    how Batman had anything to do \
    with this, you would get nowhere \
    fast.';


// good
var errorMessage3 = 'This is a super long error that ' +
    'was thrown because of Batman. ' +
    'When you stop to think about ' +
    'how Batman had anything to do ' +
    'with this, you would get nowhere ' +
    'fast.';


// When programatically building up a string, use Array#join instead of string concatenation. Mostly for IE: [jsPerf](http://jsperf.com/string-vs-array-concat/2).

var items3;
var messages;
var length2;
var i2;

messages = [{
    state: 'success',
    message: 'This one worked.'
}, {
    state: 'success',
    message: 'This one worked as well.'
}, {
    state: 'error',
    message: 'This one did not work.'
}];

length = messages.length;

// bad
function inbox1(messages) {
    items = '<ul>';

    for (i = 0; i < length; i++) {
        items += '<li>' + messages[i].message + '</li>';
    }

    return items + '</ul>';
}

// good
function inbox2(messages) {
    items = [];

    for (i = 0; i < length; i++) {
        items[i] = messages[i].message;
    }

    return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
}




// anonymous function expression, space between function and parantheses
// bad
var anonymous1 = function() {
    return true;
};

// good
var anonymous2 = function () {
    return true;
};

// named function expression, no space between function name and parantheses
// bad
var named1 = function named () {
    return true;
};
// good
function named2() {
    return true;
};



// immediately-invoked function expression (IIFE)
(function () {
    console.log('Welcome to the Internet. Please follow me.');
})();


// Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.
// Crockford: If a function literal is anonymous, there should be one space between the word function and the ( (left parenthesis). If the space is omited, then it can appear that the function's name is function, which is an incorrect reading.
//  - **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).


// bad
if (currentUser) {
    function test() {
        console.log('Nope.');
    }
}

// good
var test;
if (currentUser) {
    test = function test() {
        console.log('Yup.');
    };
}


// Never name a parameter `arguments`, this will take precedence over the `arguments` object that is given to every function scope.


// bad
function nope(name, options, arguments) {
    doStuff();
}

// good
function yup(name, options, args) {
    doStuff();
}



// if possible Use dot notation when accessing properties.


var luke1 = {
    jedi: true,
    age: 28
};

// good - no problems with minimizers/obfuscators
var isJedi1 = luke1['jedi'];

// ok - take care with minimizers/obfuscators!
var isJedi2 = luke1.jedi;

// good
var prop = 'jedi';
var isJedi3 = like[prop];

// Use subscript notation `[]` when accessing properties with a variable.

var luke2 = {
    jedi: true,
    age: 28
};

function getProp(prop) {
    return luke[prop];
}

var isJedi3 = getProp('jedi');





// Always use `var` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.


// bad
superPower1 = new SuperPower();

// good
var superPower2 = new SuperPower();


// Use one `var` declaration for each variable and declare each variable on a newline.


// bad
var items4 = getItems(),
    goSportsTeam1 = true,
    dragonball1 = 'z';

// better
var items5 = getItems();
var goSportsTeam2 = true;
var dragonball2 = 'z';



// Declare unassigned variables last. This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.


// bad
var i1, len1, dragonball1;
var items6 = getItems();
var goSportsTeam1 = true;

// bad
var i2;
var items7 = getItems();
var dragonball2;
var goSportsTeam2 = true;
var len2;

// good
var items8 = getItems();
var goSportsTeam3 = true;
var dragonball3;
var length;
var i3;



// Use `===` and `!==` over `==` and `!=`.
// Conditional expressions are evaluated using coercion with the `ToBoolean` method and always follow these simple rules:


// Use shortcuts.


// bad
if (name !== '') {
    doStuff();
}

// good
if (name) {
    doStuff();
}

// bad
if (collection.length > 0) {
    doStuff();
}

// good
if (collection.length) {
    doStuff();
}


// Use correct indentation


// bad
if (name !== '') {
    doStuff();
}
else if (name === 'moo') {
    doStuff();
}
else
{
    doStuff();
}

// good
if (name) {
    doStuff();
} else if (name === 'moo') {
    doStuff();
} else {
    doStuff();
}

// For more information see [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll


// Use braces with all multi-line blocks - use multi-line blocks with all braces




function testFunction(test) {

    // bad
    if (test)
        return false;

    // good
    if (test) return false;

    // good
    if (test) {
        return false;
    }
}


// bad
function example() { return false; }

// good
function example() {
    return false;
}




// Use `/** ... */` for multiline comments. Include a description, specify types and values for all parameters and return values.


// bad
// make() returns a new element
// based on the passed in tag name
//
// @param <String> tag
// @return <Element> element
function make(tag) {

    doStuff();

    return element;
}

// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param <String> tag
 * @return <Element> element
 */
function make(tag) {

    doStuff();

    return element;
}


// Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment.


// bad
var active = true;  // is current tab

// good
// is current tab
var active = true;

// bad
function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    var type = this._type || 'no type';

    return type;
}

// good
function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    var type = this._type || 'no type';

    return type;
}








// Use soft tabs set to 4 spaces

// bad
function testFunction1() {
  var name;
}

// bad
function testFunction2() {
 var name;
}

// good
function testFunction3() {
    var name;
}


// Place 1 space before the leading brace.


// bad
function test(){
    console.log('test');
}

// good
function test() {
    console.log('test');
}

// bad
dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog'
});

// good
dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog'
});


// Set off operators with spaces.

    
// bad
var x=y+5;

// good
var x = y + 5;





//  Use indentation when making long method chains.


// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// good
$('#items')
    .find('.selected')
    .highlight()
    .end()
    .find('.open')
    .updateCount();

// bad
var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
    .attr('width',  (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// good
var leds = stage.selectAll('.led')
    .data(data)
    .enter().append('svg:svg')
    .class('led', true)
    .attr('width',  (radius + margin) * 2)
    .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);





// Leading commas: **Nope.**


// bad
var once1
    , upon1
    , aTime1;

// good
var once2,
    upon2,
    aTime2;

// bad
var hero1 = {
    firstName: 'Bob'
    , lastName: 'Parr'
    , heroName: 'Mr. Incredible'
    , superPower: 'strength'
};

// good
var hero2 = {
    firstName: 'Bob',
    lastName: 'Parr',
    heroName: 'Mr. Incredible',
    superPower: 'strength'
};


// Additional trailing comma: **Nope.** This can cause problems with IE6/7 and IE9 if it's in quirksmode. Also, in some implementations of ES3 would add length to an array if it had an additional trailing comma. This was clarified in ES5 ([source](http://es5.github.io/#D)):

// Edition 5 clarifies the fact that a trailing comma at the end of an ArrayInitialiser does not add to the length of the array. This is not a semantic change from Edition 3 but some implementations may have previously misinterpreted this.

// You may use trailing comma in server-side (Node.js) scripts


// bad (ok in nodejs)
var hero3 = {
    firstName: 'Kevin',
    lastName: 'Flynn',
};

var heroes1 = [
    'Batman',
    'Superman',
];

// good
var hero4 = {
    firstName: 'Kevin',
    lastName: 'Flynn'
};

var heroes2 = [
    'Batman',
    'Superman'
];




// use semicolons


    // bad
(function () {
    var name = 'Skywalker'
    return name
})()

    // good
(function () {
    var name = 'Skywalker';
    return name;
})();

// good
;(function () {
    var name = 'Skywalker';
    return name;
})();





// <a name='type-coercion'>Type Casting & Coercion</a>

// Perform type coercion at the beginning of the statement.
// Strings:


//  => this.reviewScore = 9;

// bad
var totalScore = this.reviewScore + '';

// good
var totalScore = '' + this.reviewScore;

// bad
var totalScore = '' + this.reviewScore + ' total score';

// good
var totalScore = this.reviewScore + ' total score';


// Use `parseInt` for Numbers and always with a radix for type casting.


var inputValue = '4';

// bad
var val = new Number(inputValue);

// bad
var val = +inputValue;

// bad
var val = inputValue >> 0;

// bad
var val = parseInt(inputValue);

// good
var val = Number(inputValue);

// good
var val = parseInt(inputValue, 10);


// If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](http://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.
// **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](http://es5.github.io/#x4.3.19), but Bitshift operations always return a 32-bit integer ([source](http://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109)


// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
var val = inputValue >> 0;


// Booleans:


var age = 0;

// bad
var hasAge = new Boolean(age);

// good
var hasAge = Boolean(age);

// good
var hasAge = !!age;





// Naming Conventions

// Avoid single letter names. Be descriptive with your naming.


// bad
function q() {
    doStuff();
}

// good
function query() {
    // ..stuff..
}


// Use camelCase when naming objects, functions, and instances


// bad
var OBJEcttsssss = {};
var this_is_my_object = {};
function c() {};
var u = new user({
    name: 'Bob Parr'
});

// good
var thisIsMyObject = {};
function thisIsMyFunction() {};
var user = new User({
    name: 'Bob Parr'
});


// Use PascalCase when naming constructors or classes


// bad
function user(options) {
    this.name = options.name;
}

var bad = new user({
    name: 'nope'
});

// good
function User(options) {
    this.name = options.name;
}

var good = new User({
    name: 'yup'
});




// Name your functions. This is helpful for stack traces.


// ok
var log = function (msg) {
    console.log(msg);
};

// better
var log = function log(msg) {
    console.log(msg);
};







// Accessor functions for properties are not required
// If you do make accessor functions use getVal() and setVal('hello')


// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);


// If the property is a boolean, use isVal() or hasVal()



function testFunction() {

    // bad
    if (!dragon.age()) {
        return false;
    }

    // good
    if (!dragon.hasAge()) {
        return false;
    }

}


// It's okay to create get() and set() functions, but be consistent.


function Jedi(options) {
    options || (options = {});
    var lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
}

Jedi.prototype.set = function (key, val) {
    this[key] = val;
};

Jedi.prototype.get = function (key) {
    return this[key];
};





// Constructors

// Assign methods to the prototype object, instead of overwriting the prototype with a new object. Overwriting the prototype makes inheritance impossible: by resetting the prototype you'll overwrite the base!


function Jedi() {
    console.log('new jedi');
}

// bad
Jedi.prototype = {
    fight: function fight() {
        console.log('fighting');
    },

    block: function block() {
        console.log('blocking');
    }
};

// good
Jedi.prototype.fight = function fight() {
    console.log('fighting');
};

Jedi.prototype.block = function block() {
    console.log('blocking');
};


// Methods can return `this` to help with method chaining.


// bad
Jedi.prototype.jump = function () {
    this.jumping = true;
    return true;
};

Jedi.prototype.setHeight = function (height) {
    this.height = height;
};

var luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20) // => undefined

// good
Jedi.prototype.jump = function () {
    this.jumping = true;
    return this;
};

Jedi.prototype.setHeight = function (height) {
    this.height = height;
    return this;
};

var luke = new Jedi();

luke.jump()
    .setHeight(20);



// It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.


function Jedi(options) {
    options || (options = {});
    this.name = options.name || 'no name';
}

Jedi.prototype.getName = function getName() {
    return this.name;
};

Jedi.prototype.toString = function toString() {
    return 'Jedi - ' + this.getName();
};





// Events

//  When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:


// bad
$(this).trigger('listingUpdated', listing.id);



$(this).on('listingUpdated', function (e, listingId) {
    // do something with listingId
});


// prefer:


// good
$(this).trigger('listingUpdated', {listingId: listing.id});


$(this).on('listingUpdated', function (e, data) {
    // do something with data.listingId
});




