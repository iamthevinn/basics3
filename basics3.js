// Name: Vince Carini

// Math 1
function zero_negativity(array) {
  for (let i = 0; i < array.length; i++)
    if (array[i] < 0)
      return false;
      
  return true;
}

console.log("Start of zero_negativity Tests");
console.log(zero_negativity([-1])); // false
console.log(zero_negativity([])); // true
console.log(zero_negativity([0])); // true
console.log(zero_negativity([1])); // true
console.log(zero_negativity([1,2])); // true
console.log(zero_negativity([-1,2])); // false
console.log();

// Math 2
function is_even(number) {
  if (number % 2 === 0)
    return true;
  else
    return false;
}
console.log("Start of is_even Tests");
console.log(is_even()); // false
console.log(is_even(0)); // true
console.log(is_even(2)); // true
console.log(is_even(1)); // false
console.log(is_even(-1)); // false
console.log(is_even(-2)); // true
console.log();

// Math 3
function how_many_even(array) {
  let evenTotal = 0;
  for (let i = 0; i < array.length; i++) {
    if (is_even(array[i]))
      evenTotal++;
  }
  return evenTotal;
}
console.log("Start of how_many_even Tests");
console.log(how_many_even([2,4,6])); // 3
console.log(how_many_even([2,3,6])); // 2
console.log(how_many_even([2,4,5])); // 2
console.log(how_many_even([1,4,6])); // 2
console.log(how_many_even([2,3,5])); // 1
console.log(how_many_even([2,4,-6])); // 3
console.log();


