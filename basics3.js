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

// Math 4
function create_dummy_array(n) {
  let dummyArray = [];
  for (let i = 0; i < n; i++) {
    dummyArray.push(Math.floor(Math.random() * 10));
  }
  return dummyArray;
}
console.log("Start of create_dummy_array Tests");
console.log(create_dummy_array(0)); // empty array
console.log(create_dummy_array(1)); // array length 1
console.log(create_dummy_array(2)); // array length 2
console.log(create_dummy_array(3)); // array length 3
console.log(create_dummy_array(4)); // array length 4
console.log(create_dummy_array(5)); // array length 5
console.log();

// Math 5
function random_choice(array) {
  if (array.length === 0)
    return "Array is Empty";
  
  if (array.constructor === Array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    //console.log("Index Of Array to Return: " + randomNumber);
    return array[randomNumber];
  }
  return "Not a valid datatype. You passed in the type " + array.constructor + ". Only Arrays are allowed.";
}
console.log("Start of random_choice Tests");
console.log(random_choice([])); // Array is Empty
console.log(random_choice(1)); // Not a valid type
console.log(random_choice("string")); // Not a valid type
console.log(random_choice([1])); // array length 1
console.log(random_choice([-1,1])); // array length 2
console.log(random_choice([-1,0,1])); // array length 3
console.log(random_choice([0,1,2,3,4,5])); // array length 6
