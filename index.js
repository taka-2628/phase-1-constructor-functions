// STEP 0: PLAIN OLD JAVASCRIPT OBJECTS
const bobby = {
    name: "bobby",
    age: 20,
    hometown: "Philadelphia",
};
  
const susan = {
    name: "susan",
    age: 28,
    hometown: "Boston",
};

console.log(typeof susan) // => object
console.log(susan.constructor) // => [Function: Object]


// STEP 1: FACTORY FUNCTION
function factoryUser(name, age, hometown){
    return {
        name: name,
        age: age,
        hometown: hometown
    }
}

const Rae = factoryUser("Rae", 22, "New York")

console.log(Rae) // => { name: 'Rae', age: 22, hometown: 'New York' }
console.log(typeof Rae) // => object
console.log(Rae.constructor) // => [Function: Object]


// STEP 2: CONSTRUCTOR FUNCTION
function User(name, age, hometown){
    this.name = name;
    this.age = age;
    this.hometown = hometown;
}

const lauren = new User("Lauren", 24, "Chicago")

console.log(lauren) // => User { name: 'Lauren', age: 24, hometown: 'Chicago' }
console.log(typeof lauren) // => object
console.log(lauren.constructor) // => [Function: User]
