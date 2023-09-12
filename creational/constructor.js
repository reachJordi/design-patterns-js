// constructor function
function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;

    this.toString = function() {
        return this.param1 + ' ' + this.param2;
    }
}

/////

var task = function(name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        console.log('completing task: ' + this.name);
        this.completed = !this.completed;
    }

    this.save = function() {
        console.log('saving Task: ' + this.name);
    }
}

var task1 = new task('create a demo for constructors');
var task2 = new task('create a demo for modules');
var task3 = new task('create a demo for singletons');
var task4 = new task('create a demo for prototypes');

task1.complete();
console.log('task1 completed? : ' + task1.completed);
task2.save();
console.log('task2 completed? : ' + task2.completed);
task3.save();
task4.save();