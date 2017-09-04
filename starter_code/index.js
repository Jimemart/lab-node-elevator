/*jshint esversion: 6 */
const Elevator = require('./elevator.js');
const Person = require('./person.js');
let elevator = new Elevator();
const person1 = new Person("Jimena", 2, 5);

elevator.call(person1);
elevator.start();
