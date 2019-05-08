// mobx-demo.ts
import {observable, autorun, configure, action } from 'mobx';

// changes to observable can be done only inside action function
// configure({enforceActions:"always"})
 
const person = observable({
    name: 'John',
    age: 20
})

const p = {
    name: 'John2',
    age: 20
};

console.log("P", p);
console.log("Person", person)

console.log('person name', person.name);
 

// observer
autorun(function () {
    // called only once, no subscription, not called there after
    console.log('autorun function 1 called');
})

// autorun function returns a destroy function 
// calling destroy function, will stop the subscription

function susbcribe() {
    // called first time, susbcribe for name change
    // called every time when name changed, not for age change
    console.log('autorun function 2, name is ' + person.name);
}
const destroy = autorun(susbcribe)
 
// action, changing the state
action(function() {
    person.name = 'Krish';
    person.name = 'Nila';
})

destroy(); // terminate the autorun function
action(function(){
    person.name = 'Venkat'; // shall not execute autorun
    person.age = 10;
})

// const destroy2 = autorun(susbcribe)
