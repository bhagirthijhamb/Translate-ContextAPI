import React from 'react';

// Create the context object
// Loading a value into the context
// export default React.createContext({ color: 'red' }); // object
// export default React.createContext([1, 2, 3]); // array
// export default React.createContext('dutch'); // pass a string to the context

const context = React.createContext('english');
console.log(context); // context object
// context object we created has a Provider property on it.
// Provider property is a React component
// Consumer property

export default context;

// Application loads up in the browser
// We create a context object with a default value of 'english'

// Repeats every time we change the language and update teh state
// App component gets rendered, creates a Provider that wraps UserCreate
// Provider updates the value of the context object to 'this.state.language'
// Button and Field reach into context object, see the value from 'this.state.language'
// Button and Field render approprite text the screen

