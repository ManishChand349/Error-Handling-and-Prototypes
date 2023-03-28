function getPerson(person) {
  try {
    if (!person || typeof person !== 'object' || !('name' in person) || !('age' in person)) {
      throw new Error('Invalid parameter type');
    }
    return `Name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return error.message;
  }
}
const person1 = { name: 'Manish', age: 21 };
console.log(getPerson(person1)); 

const person2 = { name: 'sahil' };
console.log(getPerson(person2)); 

const person3 = null;
console.log(getPerson(person3)); 

