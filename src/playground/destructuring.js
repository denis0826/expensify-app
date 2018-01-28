// OBJECT

const person = {
  name: 'Dennis',
  age:27,
  location: {
    city: 'Philippines',
    temp: 92
  }
}

const { name : firstName = 'eeeww', age, test= 'Test' } = person;

console.log(`${firstName} is ${age} ${test}`)

const { temp : temperature, city } = person.location;

console.log(`It's ${temperature} in ${city}`)


// ARRAY
const address = ['1299 S Juniper Street', 'Philippines', 'Negros Occidental', '19417'];

// const [street, city2, state, zip] = address;

const [ , city2, state] = address;

console.log(`You are in ${city2} ${state}.`); // wow