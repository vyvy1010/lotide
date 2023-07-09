const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {
//   if (actual.length === expected.length) {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         return `❌ Assertion failed: ${actual}!=== ${expected}`;
//       }
//     }
//     return `😃 Assertion passed: ${actual} === ${expected}`;
//   }
//   else {
//     return `❌ Assertion failed: ${actual}!=== ${expected}`;

//   }
// };
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;

