# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by the language's loose typing and the behavior of the `+` operator when used with numbers and strings.  The `bug.js` file showcases the issue, where adding a number and a string results in string concatenation instead of numerical addition. The `bugSolution.js` provides a solution to avoid this problem.

## How to Reproduce

1. Clone the repository.
2. Run `bug.js` using a JavaScript engine (e.g., Node.js).
3. Observe the unexpected output.

## Solution

The solution, implemented in `bugSolution.js`, demonstrates how to explicitly convert the string to a number before performing addition to get the expected numerical result.