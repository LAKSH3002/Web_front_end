// create a variable named repl.
const repl = require("repl");

// replserver = repl.start (prompt: Node,js REPL>)
const replServer = repl.start({
    prompt: "Node.js REPL>",
});

// you can define custom commands or functions here
replServer.context.greet = () =>{
    console.log("Hello World")
}

console.log('Welcome to the Node.js REPL. Type "greet()" to test a custom command"');