function outer() {
  let outerVar = "I'm in outer";
  
  function inner() {
    let innerVar = "I'm in inner";
    console.log(innerVar);   // ✓ Can access inner scope
    console.log(outerVar);   // ✓ Can access outer scope
    console.log(globalVar);  // ✓ Can access global scope
  }
  
  inner();
  console.log(innerVar);  // ✗ ERROR - cannot access inner scope
}

outer();


function outer() {
return
  
  function inner() {
    let innerVar = "I'm in inner";
    console.log(innerVar);   // ✓ Can access inner scope
    console.log(outerVar);   // ✓ Can access outer scope
    console.log(globalVar);  // ✓ Can access global scope
  }
  
  inner();
  console.log(innerVar);  // ✗ ERROR - cannot access inner scope
}

outer();


