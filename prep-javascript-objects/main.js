var person = {
  firstName: 'Josh',
  lastName: 'Tenny',
  hobby: 'Jujitsu'

};

console.log(person);

var fullName = ' My full name is ' + person.firstName + person.lastName;
console.log(fullName);

person.job = ' Web Developer';

console.log('Current job: ' + person.job);

person.previousjob = ' Delivery Driver ';
console.log('Old job: ' + person.previousjob);
