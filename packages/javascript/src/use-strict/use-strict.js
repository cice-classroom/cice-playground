// Run in browser
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict'

// Assignment to a non-writable global
var undefined = 5 // throws a TypeError
var Infinity = 5 // throws a TypeError

// Assignment to a non-writable property
var obj1 = {}
Object.defineProperty(obj1, 'x', { value: 42, writable: false })
obj1.x = 9 // throws a TypeError

// Assignment to a getter-only property
var obj2 = {
  get x() {
    return 17
  }
}
obj2.x = 5 // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {}
Object.preventExtensions(fixed)
fixed.newProp = 'ohai' // throws a TypeError

delete Object.prototype // throws a TypeError

function sum(a, a, c) {
  // !!! syntax error
  'use strict'
  return a + a + c // wrong if this code ran
}
