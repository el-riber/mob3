"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyTestClass_1 = __importDefault(require("./MyTestClass"));
// Create an instance of MyTestClass
const instance = new MyTestClass_1.default('test', 42);
// Call methods to test the LogMethod decorator
console.log('Calling method1:');
instance.method1(); // This should log the method call and its arguments
console.log('Calling method2:');
instance.method2(); // This should log the method call and its arguments
// Access the read-only property to test the MyReadOnly decorator
console.log('Accessing prop3:');
console.log(instance.prop3); // This should return 'default'
// Try to modify the read-only property and catch the error
console.log('Trying to modify prop3:');
try {
    instance.prop3 = 'new value'; // This should throw an error
}
catch (e) {
    if (e instanceof Error) {
        console.error('Error:', e.message); // This should log the error message
    }
    else {
        console.error('An unknown error occurred');
    }
}
// Create another instance to verify that the SimpleLogger decorator logs instantiation
console.log('Creating a new instance of MyTestClass:');
const anotherInstance = new MyTestClass_1.default('anotherTest', 99);
// Call methods on the new instance
console.log('Calling method1 on anotherInstance:');
anotherInstance.method1(); // This should log the method call and its arguments
console.log('Calling method2 on anotherInstance:');
anotherInstance.method2(); // This should log the method call and its arguments
// Access the read-only property on the new instance
console.log('Accessing prop3 on anotherInstance:');
console.log(anotherInstance.prop3); // This should return 'default'
