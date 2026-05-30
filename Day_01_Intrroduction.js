/**
 * Introduction to JavaScript & Environment Setup
 * Variables, Data Types & Operators
 * Strings & String Methods
 * Control Flow: Conditionals & Loops
 * Arrays & Array Methods
 * Objects & Object Methods
 * Functions -arrow functions
 * DOM Manipulation -shadow DOM
 * EVENTS & EVENT HANDLING
 * ASYNCHRONOUS JAVASCRIPT: CALLBACKS & PROMISES
 * ASYNC/AWAIT & ERROR HANDLING
 * Object-Oriented Programming (OOP)
 * Functional Programming Concepts
 * Working with JSON & APIs,YML-Github action 
 * JAVASCRIPT CODING QUESTIONS
 * 
 * // SECTION 1: WHAT IS JAVASCRIPT?
 * 
 * JavaScript is popular because:

   Runs in every browser 
   No installation needed.
   Supported by Chrome, Edge, Firefox, Safari,webkit etc.
   Frontend + Backend
   Frontend: JavaScript, React, Angular, Vue.
   Backend: Node.js.
   One language for the entire application.
   Huge Ecosystem
   Millions of packages available through npm.
   Large developer community.
   High Demand
   Most web applications use JavaScript.
   Strong job market for JavaScript developers.
   Easy to Start

     Is JavaScript the same as Java?
  ANS: No. They are completely different languages. JavaScript is a scripting
       language for web development; Java is a compiled, object-oriented
       language. The name similarity was a marketing decision.


       JavaScript (JS) is a  interpreted, single-threaded,  dynamic programming language. 

       WHAT DOES "DYNAMIC PROGRAMMING LANGUAGE" MEAN?
  ─────────────────────────────────────────────────
  It means the TYPE of a variable is determined at RUNTIME (while the code
  runs), NOT at compile time. You do NOT declare types — JS figures it out
  automatically.

    Example in JavaScript:
    let x = 42;        // x is a Number
    x = "hello";       // now x is a String — no error!
    x = true;          // now x is a Boolean — still fine!

     What is ECMAScript?
  ANS: ECMAScript (ES) is the official specification/standard for JavaScript,
       maintained by ECMA International. JavaScript is the implementation of
       this specification. var ,let and const


WHAT IS NODE.JS?

  Node.js is a open source RUNTIME ENVIRONMENT that lets JavaScript run OUTSIDE the web browser
  — on your computer, server, or anywhere.

  BEFORE Node.js (pre-2009):
    JS could ONLY run inside a browser. No file access, no servers, no OS access.

  AFTER Node.js (2009+):
    JS became a full-stack language — same language for frontend AND backend.

  HOW IT WORKS:
    Your .js file → Node.js (powered by V8 engine) → Runs on your OS

Developers use Node.js to build:

   Web servers
   APIs
   Real-time apps (chat apps, games)_GENAI agents 
   Streaming services -cloud servies
   Command-line tools
   Backend services for web and mobile apps

SECTION 3: ENVIRONMENT SETUP

STEP 1 — Install Node.js
  ─────────────────────────
  Download from: https://nodejs.org
  - LTS version (Long-Term Support) is recommended for beginners
  - Installing Node.js also installs npm (Node Package Manager)

  Verify installation (open terminal/command prompt):
    node --version        → e.g., v20.11.0
    npm --version         → e.g., 10.2.4

STEP 2 — Install VS Code
  ─────────────────────────
  Download from: https://code.visualstudio.com
  Free, open-source, most popular editor for JS development.

  node filename.js  → runs the JavaScript file using Node.js

    console.log("Hello, JavaScript!");
*/

// -------------------------------------------------------
//  INTERVIEW QUESTIONS — Environment Setup
// -------------------------------------------------------
/*
  Q1. What is npm?
  ANS: npm (Node Package Manager) is the default package manager for Node.js.
       It allows you to install, share, and manage JavaScript packages/libraries.
       It also comes with npm registry (npmjs.com) hosting millions of packages.

Q2. What is the difference between npm install and npx?

  ANS: 'npm install' downloads and saves a package to your project/globally.
       'npx' runs a package directly without permanently installing it.
       e.g., 'npx playwright test' runs Playwright without global install.

       If Playwright is already installed locally, npx uses that local version.

      If not installed, npx can temporarily download and execute it.


What is package.json?
  ANS: package.json is the configuration file for a Node.js project.
       It stores: project name, version, dependencies, devDependencies,
       scripts, and metadata. Created with 'npm init'.


       {
  "name": "samplecode",
  "version": "1.0.0",
  "description": "A sample JavaScript project",
  "main": "Day_01_Intrroduction.js",
  "scripts": {
    "start": "node Day_01_Intrroduction.js",
    "test": "echo \"No tests yet\""
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {}
}

// The most basic JavaScript statement — print to the console
console.log("Hello, World!");

// You can print any data type
console.log(42);              // Number
console.log(true);            // Boolean
console.log("JavaScript");    // String
console.log(null);            // null
console.log(undefined);       // undefined

// console has multiple methods:
console.log("This is a normal log");
console.warn("This is a WARNING");
console.error("This is an ERROR");
console.info("This is INFO");
// console.time() - measure how long code takes
console.time("myTimer");


SECTION 1: VARIABLES — var, let, const

var ,let and const are used to declare variables in JavaScript.


 * 
 */


// --- VAR (Old way — avoid in modern JS) ---
// var city = "Mumbai";
// var city = "Pune";       // ✅ Re-declaration allowed (causes bugs!)
// city = "Delhi";          // ✅ Re-assignment allowed
// console.log("var city:", city);  // Delhi

// --- LET (Modern — use for values that change) ---
let score = 100;
//let score = 200;      // ❌ SyntaxError: Cannot re-declare 'score'
// score = 200;             // ✅ Re-assignment is fine
// console.log("let score:", score);  // 200`

// let is BLOCK scoped
// if (true) {
//   let blockVar = "I am let";
//   console.log(blockVar);   // ✅ Accessible inside block
// }
// // console.log(blockVar);  // ❌ ReferenceError: blockVar is not defined

// if (true) {
//   let blockVar = "I am let 2 ";
//   console.log(blockVar);   // ✅ Accessible inside block
// }

// --- CONST (Modern — use for values that DO NOT change) ---
// const PI = 3.14159;
// PI = 3;               // ❌ TypeError: Assignment to constant variable
// const PI = 3;         // ❌ SyntaxError: Cannot re-declare 'PI'
// console.log("const PI:", PI);


// -------------------------------------------------------
//  INTERVIEW QUESTIONS — Variables
// -------------------------------------------------------
/*
  Q1. What is the difference between var, let, and const?
  ANS: var: function-scoped, hoisted with undefined, can be re-declared and re-assigned.
       let: block-scoped, hoisted but in TDZ (ReferenceError if accessed early),
            can be re-assigned but not re-declared.
       const: block-scoped, hoisted but in TDZ, cannot be re-assigned or re-declared.
*/

// --- HOISTING ---
/*
  Hoisting is JavaScript's behavior of moving DECLARATIONS to the top
  of their scope BEFORE code executes.

  var    → hoisted AND initialized to undefined
  let    → hoisted but NOT initialized (TDZ — throws ReferenceError if accessed early)
  const  → hoisted but NOT initialized (TDZ — throws ReferenceError if accessed early)
  function declarations → fully hoisted (can call before declaration)
*/

// Function hoisting — works perfectly
  // "I am hoisted!" — called BEFORE declaration
//   console.log(hoistedFn());
// function hoistedFn() {
//   return "I am hoisted!";
// }


// console.log("\n--- Hoisting Demo ---");
// console.log(hoistedVar);   // undefined (var hoisted, initialized to undefined)
// var hoistedVar = "Hello";
  // Hello