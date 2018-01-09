// Name: Vince Carini

// Math 1
function zero_negativity(array) {
  for (let i = 0; i < array.length; i++)
    if (array[i] < 0)
      return false;
      
  return true;
}

console.log(zero_negativity([-1]));
console.log(zero_negativity([]));
console.log(zero_negativity([0]));
console.log(zero_negativity([1]));
console.log(zero_negativity([1,2]));
console.log(zero_negativity([-1,2]));

// Math 2
