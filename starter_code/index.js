/*jshint esversion: 6 */
const Elevator = require('./elevator.js');
const Person = require('./person.js');
let elevator = new Elevator();
const person1 = new Person("Jimena", 2, 5);
const person2 = new Person("Maricarmen",4,6);

elevator.call(person1);
elevator.call(person2);
elevator.start();
