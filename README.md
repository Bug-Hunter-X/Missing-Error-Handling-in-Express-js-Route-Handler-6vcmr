# Missing Error Handling in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid input.  Specifically, the `/users/:id` route does not handle cases where `:id` is not a valid user ID.  This can lead to application crashes or unexpected behavior.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version with proper error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`. 
4. Send a GET request to `/users/invalidId` or similar (using tools like Postman or curl).

You'll see the application crash or behave unexpectedly without proper error handling, whereas `bugSolution.js` demonstrates how to handle this gracefully.