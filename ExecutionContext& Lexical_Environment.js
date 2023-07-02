// 1. EXECUTION CONTEXT

// An Execution Context represents the EncodedVideoChunk. in which JS code is executed.
//  It consists of 3 main components

// a). VARIABLE ENVIRONMENT: This stores the variables and their values, funct. declarations , func arguments. 
// Basically it acts as a container for variables and functions define within the current scope.


// b). LEXICAL ENVIRONMENT: It is a subset of variable env. It holds variables and functions define lexically,
//  based on the code position with the source code. It is created at the time of function creation and remains 
// unchanged throughout the function's lifetime. It tells what all variables & functions the func can access.

// c). THIS VALUE: The "this" value refers to the object to which a func. belongs.
//  or the object that is currently being operated upon .It's Value is determined based on how a function is invoked.

// The execution context is created whenever a function is called, and it keeps track of the variables , func and the current 
// this value within particular function execution. JS maintains a stack of execution contexts called the "Call Stack."

// Example:
function func1() {
    var x = 10;
  
    function func2() {
      var y = 20;
      console.log(x + y);
    }
  
    func2();
  }
  
  func1();

//   When the func1 function is called, a new execution context is created for that function.
// The execution context consists of a variable environment, which holds the variables, function declarations,
//  and function arguments for the func1 function. In this case, the variable environment would contain x as a 
// variable with the value of 10.
// The execution context also has a lexical environment, which stores the lexical environment of the parent scope.
//  Since the func1 function is the outermost scope in this example, its lexical environment would be null.
// When the func2 function is called within the outer function, a new execution context is created for the func2 function.
// The execution context for the func2 function has its own variable environment, which contains the variable y with the value of 20.
// The lexical environment of the func2 function's execution context points to the lexical environment of its parent scope,
//  which is the execution context of the fun1 function. This allows the inner function to access the variable x 
// defined in the func1 function's variable environment.


// 2. LEXICAL ENVIRONMENT

// The lexical environment represents the environment in which variables and functions are defined based on their lexical scope.
// It holds scope and scope chain. It consists of two main parts:

// a). ENVIRONMENT RECORD: It is a record of all variables and functions defined within the current scope. 
// It stores variables as properties and their corresponding values. The environment record can be accessed 
// and modified during runtime.

// b). OUTER ENVIRONMENT REFERENCE: It refers to the lexical environment (environment record) of the outer or parent scope. 
// It allows access to variables and functions defined in the outer scope.

// The lexical environment is created at the time of function creation and remains intact even after the 
// function has finished executing. It helps determine the scope and access of variables within a function
//  based on its surrounding code.

// In summary, the execution context represents the overall environment in which JavaScript code is executed,
//  including the variable environment, lexical environment, and the current "this" value. On the other hand, 
// the lexical environment is a part of the execution context that specifically handles the definition, scoping, 
// and access of variables and functions based on their lexical scope.