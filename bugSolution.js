function foo(a, b) {
  //Explicit type conversion using Number()
  return a + Number(b);
}

console.log(foo(1, '1')); // Output: 2 (addition)

function bar(a,b){
    // Using parseInt() for integer conversion
    return parseInt(a) + parseInt(b);
}
console.log(bar(1,'1')); // Output: 2

function baz(a,b){
    // Using parseFloat() for floating point conversion
    return parseFloat(a) + parseFloat(b);
}
console.log(baz(1.1,'1.1')); // Output: 2.2