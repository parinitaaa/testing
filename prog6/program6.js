
// 1. Object Literal
const student = {
    name: "Pari",
    age: 21,
    course: "ISE"
};

// 2. Using new Object()
const employee = new Object();
employee.id = 101;
employee.name = "Rahul";
employee.department = "IT";

// 3. Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
const car1 = new Car("Toyota", "Camry");

// 4. Using Object.create()
const personProto = {
    greet: function () {
        return "Hello!";
    }
};

const person = Object.create(personProto);
person.name = "Priya";
person.city = "Bangalore";

// =======================================
// Display Objects
// =======================================
console.log("1. Object Literal:", student);
console.log("2. new Object():", employee);
console.log("3. Constructor Function:", car1);
console.log("4. Object.create():", person);

// =======================================
// Functions in 4 Different Ways
// =======================================

// 1. Named Function
function add(a, b) {
    return a + b;
}

// 2. Arrow Function
const multiply = (a, b) => a * b;

// 3. Anonymous Function
const subtract = function (a, b) {
    return a - b;
};

// 4. Expression Function
const divide = function divideFunc(a, b) {
    return a / b;
};

// =======================================
// Display Function Outputs
// =======================================
console.log("Named Function (Add):", add(10, 5));
console.log("Arrow Function (Multiply):", multiply(10, 5));
console.log("Anonymous Function (Subtract):", subtract(10, 5));
console.log("Expression Function (Divide):", divide(10, 5));

// =======================================
// Iterate Operation on Object Literal
// =======================================
console.log("Iterating student object:");

for (let key in student) {
    console.log(key + " : " + student[key]);
}