// Creating objects
// using curly braces
var obj = {};

var task = {
    title: 'My Title',
    description: 'My Description'
}

task.toString = function() {
    return this.title + ' ' + this.description;
}

console.log('task: ' + task);
console.log('task1 stringify: ' + JSON.stringify(task));
const json = JSON.stringify(task);
const task2 = JSON.parse(json);
console.log('task2: ' + task2);
console.log('task2 stringify: ' + JSON.stringify(task2));

// Using object.create
var nextObj = Object.create(Object.prototype);

// Using the new keyword
var lastObj = new Object();

//// Reading and Writing attributes
// Using dot notation
var obj1 = {};
obj1.param = 'new value';
console.log('obj1[param]: ' + obj1.param); // new value

// square bracket notation
var obj2 = {};
obj2['param'] = 'new value';
console.log('obj2[param]: ' + obj2['param']);

// Defining properties
Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false, // to avoid overriding value
    enumerable: true, // to avoid showing it in logs
    configurable: true // to redefine property via Object
});

console.log(task.toString());
console.log('object keys: ' + Object.keys(task));