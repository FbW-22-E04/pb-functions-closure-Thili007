// Exercise 01
console.log("  -----------------------------------");
console.log("   ++++++++++ 01 Exercise ++++++++++");

const whatIsClosure =
  " A closure is when an outer function returns an inner func tion, the inner function is then executed in a different scope and the inner function continues to maintain access to the outer function's variables even though the outer function no longer exists.";

console.log(whatIsClosure);

// Exercise 02
console.log("  -----------------------------------");
console.log("   ++++++++++ 02 Exercise ++++++++++");

console.log("   ++++++++++ 02 Exercise A ++++++++++");
const twoA =
  'Because the inner function is referencing the "name" parameter that is in the outer function';

console.log(twoA);

console.log("   ++++++++++ 02 Exercise B ++++++++++");

const twoB =
  'always same outer function "personalDice()"  could change number which rendering';

console.log(twoB);

console.log("   ++++++++++ 02 Exercise C ++++++++++");

const twoC =
  "Which is that a function can access a variable that was defined outside of that function";
console.log(twoC);

// Exercise 03
console.log("  -----------------------------------");
console.log("   ++++++++++ 03 Exercise ++++++++++");

// const addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(val) {
  return function (val2) {
    console.log(val + val2);
  };
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
